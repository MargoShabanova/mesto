//ДОМ элементы
const popup = document.querySelectorAll('.popup');
//Попап редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const profileEditCloseButton = document.querySelector('.popup__close-profile');

const userName = document.querySelector('.profile__name');
const userMetier =document.querySelector('.profile__metier');

const formProfile = document.querySelector('.form_profile');

const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_metier');

//Попап добавления карточек
const cardContainer = document.querySelector('.elements__list');

const formAddCard = document.querySelector('.form_add-card');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add');
const popupAddCloseButton = document.querySelector('.popup__close-cards');

const inputPlaceName = document.querySelector('.form__item_place-name');
const inputPicture = document.querySelector('.form__item_picture-link');

//Попап просмотра картинки
const popupPlace = document.querySelector('.popup_open-card');
const popupPlaceCloseButton = document.querySelector('.popup__close_image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');

const placeName = document.querySelector('.element__name');
const placeImage = document.querySelector('.element__photo');


//Функции:

//Открытие/закрытие попапов
function openPopup (popup) {
    popup.classList.add('popup_opened');
};

function closePopup (popup) {
    popup.classList.remove('popup_opened');
};

//Редактирование профиля
function openPropfilePopup () {

    nameInput.value = userName.textContent;
    jobInput.value = userMetier.textContent;

    openPopup(popupProfile);
};

//Добавление карточек

profileAddButton.addEventListener('click', () => openPopup(popupAddCard));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAddCard));

//Открыть фото

popupPlaceCloseButton.addEventListener('click', () => closePopup(popupPlace));


//Шаблоны

const cardTemplate = document.querySelector('#initial-template').content.querySelector('.element_checked');


//Обработчики событий:

//Редактирование профиля
function handleFormSubmit (evt) {
    evt.preventDefault();
 
    userName.textContent = nameInput.value;
    userMetier.textContent = jobInput.value;
 
 
    closePopup(popupProfile);
};
 
formProfile.addEventListener('submit', handleFormSubmit);

profileEditButton.addEventListener('click', () => openPopup(popupProfile));
profileEditCloseButton.addEventListener('click', () => closePopup(popupProfile));

//Добавление карточек
const handleFormCreate = (evt) => {
  evt.preventDefault();

  renderCard({ link: inputPicture.value, name: inputPlaceName.value });

  inputPicture.value = '';
  inputPlaceName.value = '';

  closePopup(popupAddCard);
};

//Удаление карточек
const handleDeleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

formAddCard.addEventListener('submit', handleFormCreate);

//Генерация карточки

const generateCard = (cardItem) => {
  const newCard = cardTemplate.cloneNode(true);

  const nameCard = newCard.querySelector('.element__name');
  const imageCard = newCard.querySelector('.element__photo');

  nameCard.textContent = cardItem.name;
  imageCard.src = cardItem.link;
  imageCard.alt = cardItem.name;

  const deleteButton = newCard.querySelector('.element__delete');
  deleteButton.addEventListener('click', handleDeleteCard);

  newCard.querySelector('.element__button').addEventListener('click', function(evt){
    evt.target.classList.toggle('element__button_active');
  });

  imageCard.addEventListener('click', () => {

    popupImage.src = cardItem.link;
    popupImage.alt = cardItem.name;
    popupImageTitle.textContent = cardItem.name;

    openPopup(popupPlace);
  });

  return newCard;
};

function popupOvarlayClickHandler(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
};

popup.addEventListener('click', popupOvarlayClickHandler);

//Рендер карточки

const renderCard = (cardItem) => {
  cardContainer.prepend(generateCard(cardItem));
};

initialCards.forEach((cardItem) => {
    renderCard(cardItem);
});

