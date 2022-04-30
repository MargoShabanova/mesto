const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const profileEditCloseButton = document.querySelector('.popup__close-profile');

function popupProfileOpenToggle() {
    popupProfile.classList.toggle('popup_opened');
    if (popupProfile.classList.contains('popup_opened')) {
        nameInput.value = userName.textContent;
        jobInput.value = userMetier.textContent;
    }
}

//function popupOvarlayClickHandler(evt) {
//    if (evt.target === evt.currentTarget) {
//        popupOpenToggle();
//    }
//}

profileEditButton.addEventListener('click', popupProfileOpenToggle);

profileEditCloseButton.addEventListener('click', popupProfileOpenToggle);

//popup.addEventListener('click', popupOvarlayClickHandler);

//submit.addEventListener('click', popupOpenToggle);


const userName = document.querySelector('.profile__name');
const userMetier =document.querySelector('.profile__metier');

const formElement = document.querySelector('.form');

const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_metier');

function formSubmitHandler (evt) {
   evt.preventDefault();

    userName.textContent = nameInput.value;
    userMetier.textContent = jobInput.value;

    popupProfileOpenToggle();  
};

formElement.addEventListener('submit', formSubmitHandler);

const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add');
const popupAddCloseButton = document.querySelector('.popup__close-cards');

const placeName = document.querySelector('.element__name');
const placeImage = document.querySelector('.element__photo');

const formPlaceName =document.querySelector('.form__item_place-name');
const formPictureLink = document.querySelector('.form__item_picture-link');

function popupAddOpenToggle() {
    popupAddCard.classList.toggle('popup_opened');
}

profileAddButton.addEventListener('click', popupAddOpenToggle);
popupAddCloseButton.addEventListener('click', popupAddOpenToggle);

function formCreateHandler (evt) {
    evt.preventDefault();
 
    formPlaceName.textContent = placeName.value;
    formPictureLink.textContent = placeImage.value;
 
     popupAddOpenToggle();
 };