import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

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

const popups = document.querySelectorAll('.popup');

// Попап редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');

const userName = document.querySelector('.profile__name');
const userMetier =document.querySelector('.profile__metier');

const formProfile = document.querySelector('.form_profile');

const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_metier');

// Попап добавления карточек
const cardContainer = document.querySelector('.elements__list');

const formAddCard = document.querySelector('.form_add-card');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add');

const inputPlaceName = document.querySelector('.form__item_place-name');
const inputPicture = document.querySelector('.form__item_picture-link');

// Попап просмотра картинки
const popupPlace = document.querySelector('.popup_open-card');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');

// Валидация
const validateEditProfile = new FormValidator(validationConfig, formProfile);
const validateAddCard = new FormValidator(validationConfig, formAddCard);


//Функции:

// Открытие/закрытие попапов
function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handlePressEscape);
};

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handlePressEscape);
};

// Установка фото и названия в попап с картинкой
function handleCardClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageTitle.textContent = name;

  openPopup(popupPlace);
};

popups.forEach ((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')){
      closePopup(popup);
    };
  });
});

//Закрытие попапа по ESC
const handlePressEscape = (evt) => {
  if(evt.key === "Escape") {
    const popupCurrent = document.querySelector('.popup_opened');
    closePopup(popupCurrent);
  };
};

// Редактирование профиля
function openPropfilePopup () {

  nameInput.value = userName.textContent;
  jobInput.value = userMetier.textContent;

  openPopup(popupProfile);
};

// Новая карточка
function generateCard(data) {
  const card = new Card(data, '#initial-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

// Рендер карточек
initialCards.forEach((item) => {
  const card = generateCard(item);
  cardContainer.prepend(card);
});

// Валидация
validateEditProfile.enableValidation();
validateAddCard.enableValidation();


// Шаблоны

const cardTemplate = document.querySelector('#initial-template').content.querySelector('.element_checked');


// Обработчики событий:

// Редактирование профиля
function handleProfileFormSubmit (evt) {
    evt.preventDefault();
 
    userName.textContent = nameInput.value;
    userMetier.textContent = jobInput.value;
 
 
    closePopup(popupProfile);
};
 
formProfile.addEventListener('submit', handleProfileFormSubmit);

profileEditButton.addEventListener('click', () => openPropfilePopup());


// Добавление карточек
profileAddButton.addEventListener('click', () => openPopup(popupAddCard));


const handleFormCreate = (evt) => {

  const card = generateCard({
    name: inputPlaceName.value,
    link: inputPicture.value
  });

  
  cardContainer.prepend(card);

  evt.target.reset();

  //evt.submitter.disabled = true;
  
  closePopup(popupAddCard);
};

formAddCard.addEventListener('submit', handleFormCreate);

// Сброс валидации при открытии попапа
profileAddButton.addEventListener('click', () => {
  validateAddCard.resetValidation();
  openPopup(popupAddCard);
});