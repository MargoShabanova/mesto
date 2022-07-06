// Данные исходных карточек
export const initialCards = [
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

// Попап редактирования профиля
export const profileEditButton = document.querySelector('.profile__edit-button');

export const formProfile = document.querySelector('.form_type_profile-edit');

export const nameInput = document.querySelector('.form__item_type_name');
export const jobInput = document.querySelector('.form__item_type_metier');

// Попап добавления карточек

export const formAddCard = document.querySelector('.form_type_add-card');
export const profileAddButton = document.querySelector('.profile__add-button');

// Попап смены аватара

export const userAvatar = document.querySelector('.profile__avatar');
export const formUserAvatar = document.querySelector('.form_type_avatar-edit');