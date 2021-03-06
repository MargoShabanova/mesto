import './index.css';
import {
  initialCards,
  profileEditButton,
  formProfile,
  nameInput,
  jobInput,
  formAddCard,
  profileAddButton,
  userAvatar,
  formUserAvatar
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import  Section  from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/ PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api';

let userId;
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;

    userInfo.setUserInfo(
      userData.name,
      userData.about,
      userData.avatar
    );
    cards.reverse();
    section.renderItems(cards);
  })
  .catch((err) => 
  console.log(`Ошибка: ${err}`))


const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active'
};

// Открывает попап с картинкой
function handleCardClick(name, link) {
  imagePopup.open(name, link);
};


// Обработчики событий:

// Клик на аватар
userAvatar.addEventListener('click', () => {
  popupAvatar.open();
  validateUserAvatar.resetValidation();
});

// Клик на кнопку редактирования профиля
profileEditButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;

  popupProfile.open();
  validateEditProfile.resetValidation();
});

// Клик на кнопку добавления карточки
profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  validateAddCard.resetValidation();
});

// Сабмит формы профиля
const handleProfileFormSubmit = (data) => {
  const { name, description } = data;
  popupProfile.renderLoading(true);

  api.editProfile(name, description)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
      popupProfile.close();
    })
    .catch((err) => 
      console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupProfile.renderLoading(false)
    })

};

// Сабмит формы изменения аватара
const handleAvatarFormSubmit = (values) => {
  popupAvatar.renderLoading(true);

    api.editAvatar(values['avatar-url'])
      .then(res => {
        userInfo.setUserAvatar(res.avatar);
        popupAvatar.close();
      })
      .catch((err) => 
        console.log(`Ошибка: ${err}`))
      .finally(() => {
        popupAvatar.renderLoading(false);
      })
}

// Сабмит добавления карточек
const handleFormCreate = (data) => {
  popupAddCard.renderLoading(true);

  api.addCard(data.name, data.link)
    .then(res => {
      const card = generateCard(res)
      section.addItem(card);
      popupAddCard.close();
    })
    .catch((err) => 
      console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupAddCard.renderLoading(false)
    })
};


// Генерация новой карточки
const generateCard = (data) => {
  const card = new Card({userId: userId},
    data,
    '#initial-template',
    handleCardClick,
    (id) => {
      confirmPopup.open();
      confirmPopup.changeSubmitHandler(() => {
        api.deleteCard(id)
        .then(res => {
          card.deleteCard()
          confirmPopup.close()
        })
        .catch((err) => 
          console.log(`Ошибка: ${err}`))
      })
    },
    (id) => {
      if(card.isLiked()) {
        api.deleteLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
        .catch((err) => 
          console.log(`Ошибка: ${err}`))
      }else{
        api.addLike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
        .catch((err) => 
          console.log(`Ошибка: ${err}`))
      }
    }
  );
    
  return card.generateCard();
};

const section = new Section({
  renderer: (item) => {
    const cardElement = generateCard(item);
    section.addItem(cardElement);
  },
},
'.elements__list'
);


// Экземпляры классов
const imagePopup = new PopupWithImage('.popup_type_open-card');
imagePopup.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_type_add-card', handleFormCreate);
popupAddCard.setEventListeners();


const popupProfile = new PopupWithForm('.popup_type_profile-edit', handleProfileFormSubmit);
popupProfile.setEventListeners();

const confirmPopup = new PopupWithConfirmation('.popup_type_delete-confirm');
confirmPopup.setEventListeners();

const popupAvatar = new PopupWithForm('.popup_type_avatar-edit', handleAvatarFormSubmit);
popupAvatar.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__metier', profileAvatarSelector: '.profile__avatar' });

// Валидация
const validateEditProfile = new FormValidator(validationConfig, formProfile);
const validateAddCard = new FormValidator(validationConfig, formAddCard);
const validateUserAvatar = new FormValidator(validationConfig, formUserAvatar);
validateEditProfile.enableValidation();
validateAddCard.enableValidation();
validateUserAvatar.enableValidation();