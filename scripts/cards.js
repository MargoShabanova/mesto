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
const popupAddOpenButton = document.querySelector('.profile__add-button');
const cardContainer = document.querySelector('.elements__list')
//Рендер карточки

function renderCard(cardItem) {
  cardContainer.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="element element_checked">
      <img class="element__photo" src="${cardItem.link}" alt="">
      <div class="element__name-container">
        <h2 class="element__name">${cardItem.name}</h2>
        <button class="element__button" type="button"></button>
      </div>
    </div>
    `
  );
}

  initialCards.forEach((cardItem) => {
      renderCard(cardItem);
  });