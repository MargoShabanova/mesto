import './index.css';
import {
  initialCards,
  profileEditButton,
  formProfile,
  nameInput,
  jobInput,
  formAddCard,
  profileAddButton
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import  Section  from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api';

api.getProfile()
  .then(res => {
    //console.log('ответ', res)
    userInfo.setUserInfo(res.name, res.about)
  })

api.getInitialCards()
  .then(cardList => {
    cardList.forEach(data => {
      //const card = generateCard(data);
      const card = generateCard({
        name: data.name,
        link: data.link,
        likes: data.likes
      });
      section.addItem(card)
    });
  })


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

// Сабмит формы профиля
const handleProfileFormSubmit = (data) => {
  const { name, description } = data;

  api.editProfile(name, description)
    .then(() => {
      userInfo.setUserInfo(name,description)
      popupProfile.close()
    })

};

// Сабмит добавления карточек

const handleFormCreate = (data) => {
  api.addCard(data.name, data.link)
    .then(res => {
      const card = generateCard({
        name: res.name,
        link: res.link,
        likes: res.likes
      })
      section.addItem(card);
      popupAddCard.close();
    })
};

// Клик на кнопку редактирования профиля
profileEditButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;

  popupProfile.open();
  validateEditProfile.resetValidation();
});

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  validateAddCard.resetValidation();
});

// Валидация
const validateEditProfile = new FormValidator(validationConfig, formProfile);
const validateAddCard = new FormValidator(validationConfig, formAddCard);
validateEditProfile.enableValidation();
validateAddCard.enableValidation();


// Новая карточка
function generateCard(data) {
  const card = new Card(data, '#initial-template', handleCardClick);
  return card.generateCard();
};

const section = new Section({
  items: [],
  renderer: (item) => {
    const cardElement = generateCard(item);
    section.addItem(cardElement);
  },
},
'.elements__list'
);

section.renderItems();

const imagePopup = new PopupWithImage('.popup_type_open-card');
imagePopup.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_type_add-card', handleFormCreate);
popupAddCard.setEventListeners();


const popupProfile = new PopupWithForm('.popup_type_profile-edit', handleProfileFormSubmit);
popupProfile.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__metier' });