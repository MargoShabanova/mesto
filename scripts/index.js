import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import  Section  from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

// Данные исходных карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active'
};

// ДОМ элементы

// Попап редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');

const formProfile = document.querySelector('.form_profile');

const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_metier');

// Попап добавления карточек

const formAddCard = document.querySelector('.form_add-card');
const profileAddButton = document.querySelector('.profile__add-button');


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