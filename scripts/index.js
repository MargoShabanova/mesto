import { Card } from './Card.js';
import { validationConfig, FormValidator } from './FormValidator.js';

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
    if(evt.target.classList.contains('popup_opened')){
      closePopup(popup);
    };
    if(evt.target.classList.contains('popup__close')){
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
  return card;
};

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

// Рендер карточек
initialCards.forEach((data) => {
  const card = generateCard(data);
  cardContainer.prepend(card.generateCard());
});

// Добавление карточек
profileAddButton.addEventListener('click', () => openPopup(popupAddCard));

const handleFormCreate = (evt) => {
  evt.preventDefault();

  const card = generateCard({
    name: inputPlaceName.value,
    link: inputPicture.value
  });

  cardContainer.prepend(card.generateCard());

  evt.target.reset();

  evt.submitter.classList.add('form__submit_inactive');
  evt.submitter.disabled = true;

  closePopup(popupAddCard);
};

formAddCard.addEventListener('submit', handleFormCreate);

//Удаление карточек
//const handleDeleteCard = (evt) => {
//  evt.target.closest('.element').remove();
//};


//Генерация карточки

//const generateCard = (cardItem) => {
//  const newCard = cardTemplate.cloneNode(true);

//  const nameCard = newCard.querySelector('.element__name');
//  const imageCard = newCard.querySelector('.element__photo');

//  nameCard.textContent = cardItem.name;
//  imageCard.src = cardItem.link;
//  imageCard.alt = cardItem.name;

//  const deleteButton = newCard.querySelector('.element__delete');
//  deleteButton.addEventListener('click', handleDeleteCard);

//  newCard.querySelector('.element__button').addEventListener('click', function(evt){
//    evt.target.classList.toggle('element__button_active');
//  });

//  imageCard.addEventListener('click', () => {

//    popupImage.src = cardItem.link;
//    popupImage.alt = cardItem.name;
//    popupImageTitle.textContent = cardItem.name;

//    openPopup(popupPlace);
//  });

//  return newCard;
//};

//Рендер карточки

//const renderCard = (cardItem) => {
//  cardContainer.prepend(generateCard(cardItem));
//};

//initialCards.forEach(renderCard);

