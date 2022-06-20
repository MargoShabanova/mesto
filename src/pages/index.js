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
  userInfo.setUserInfo(name,description);

  popupProfile.close();
};

// Сабмит добавления карточек

const handleFormCreate = (data) => {

  const card = generateCard({
    name: data['place-name'],
    link: data.link
  });
  
  section.addItem(card);
  popupAddCard.close();
};

// Клик на кнопку редактирования профиля
profileEditButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;

  popupProfile.open();
});

profileAddButton.addEventListener('click', () => popupAddCard.open());

// Валидация
const validateEditProfile = new FormValidator(validationConfig, formProfile);
const validateAddCard = new FormValidator(validationConfig, formAddCard);
validateEditProfile.enableValidation();
validateAddCard.enableValidation();

// Сброс валидации при открытии попапа
profileAddButton.addEventListener('click', () => {
  validateAddCard.resetValidation();
  popupAddCard.open();
});

// Новая карточка
function generateCard(data) {
  const card = new Card(data, '#initial-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = generateCard(item);
    section.addItem(cardElement);
  },
},
'.elements__list'
);

section.renderItems();

const imagePopup = new PopupWithImage('.popup_open-card');
imagePopup.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_add', handleFormCreate);
popupAddCard.setEventListeners();


const popupProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit);
popupProfile.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__metier' });