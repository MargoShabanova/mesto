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
<<<<<<< HEAD
  ];
=======
  ];

//Шаблоны

const cardTemplate = document.querySelector('#initial-template').content.querySelector('.element_checked');

//Дом элементы

const cardContainer = document.querySelector('.elements__list');

const formAddCard = document.querySelector('.form_add-card');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add');
const popupAddCloseButton = document.querySelector('.popup__close-cards');

const popupPlace = document.querySelector('.popup__open-card');
const popupPlaceCloseButton = document.querySelector('.popup__close_image');
const popupImage = document.querySelector('.popup__image');

const placeName = document.querySelector('.element__name');
const placeImage = document.querySelector('.element__photo');

const inputPlaceName = document.querySelector('.form__item_place-name');
const inputPicture = document.querySelector('.form__item_picture-link');

//Обработчики событий

const formCreateHandler = (evt) => {
  evt.preventDefault();

  renderCard({ link: inputPicture.value, name: inputPlaceName.value });
  inputPicture.value = '';
  inputPlaceName.value = '';

  popupAddOpenToggle();
};

const handleDeleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

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

  imageCard.addEventListener('click', (evt) => {
    popupPictureOpenToggle(popupPlace);
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;

    const popupImageTitle = document.querySelector('.popup__image-title');
    popupImageTitle.textContent = evt.target.alt;
  });

  return newCard;
};

//Рендер карточки

const renderCard = (cardItem) => {
  cardContainer.prepend(generateCard(cardItem));
};

initialCards.forEach((cardItem) => {
    renderCard(cardItem);
});

//Открытие и закрытие попапа добавления места

function popupAddOpenToggle() {
    popupAddCard.classList.toggle('popup_opened');
};

profileAddButton.addEventListener('click', popupAddOpenToggle);
popupAddCloseButton.addEventListener('click', popupAddOpenToggle);

//Открытие и закрытие попапа с картинкой

function popupPictureOpenToggle() {
  popupPlace.classList.toggle('popup_opened');
};

popupPlaceCloseButton.addEventListener('click', popupPictureOpenToggle);


formAddCard.addEventListener('submit', formCreateHandler);
>>>>>>> Develop
