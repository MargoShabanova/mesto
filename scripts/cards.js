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

//дом элементы

const cardContainer = document.querySelector('.elements__list');
const formAddCard = document.querySelector('.form_add-card');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add');
const popupAddCloseButton = document.querySelector('.popup__close-cards');

const placeName = document.querySelector('.element__name');
const placeImage = document.querySelector('.element__photo');

const inputPlaceName = document.querySelector('.form__item_place-name');
const inputPicture = document.querySelector('.form__item_picture-link');

//Рендер карточки

const renderCard = (cardItem) => {
  cardContainer.insertAdjacentHTML(
    "afterbegin",
    `
    <li class="element element_checked">
      <img class="element__photo" src="${cardItem.link}" alt="">
      <button class="element__delete" type="button"></button>
      <div class="element__name-container">
        <h2 class="element__name">${cardItem.name}</h2>
        <button class="element__button" type="button"></button>
      </div>
    </li>
    `
  );
}

initialCards.forEach((cardItem) => {
    renderCard(cardItem);
});

function popupAddOpenToggle() {
    popupAddCard.classList.toggle('popup_opened');
}

profileAddButton.addEventListener('click', popupAddOpenToggle);
popupAddCloseButton.addEventListener('click', popupAddOpenToggle);

//обработчики событий

function formCreateHandler (evt) {
    evt.preventDefault();

    renderCard({ link: inputPicture.value, name: inputPlaceName.value });
    inputPicture.value = '';
    inputPlaceName.value = '';
 
    popupAddOpenToggle();
};

formAddCard.addEventListener('submit', formCreateHandler);
 