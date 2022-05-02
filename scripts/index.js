<<<<<<< HEAD
const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
//const submit = document.querySelector('.form__submit');

function popupOpenToggle() {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')) {
=======
//попап редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const profileEditCloseButton = document.querySelector('.popup__close-profile');

function popupProfileOpenToggle() {
    popupProfile.classList.toggle('popup_opened');
    if (popupProfile.classList.contains('popup_opened')) {
>>>>>>> Develop
        nameInput.value = userName.textContent;
        jobInput.value = userMetier.textContent;
    }
};

//function popupOvarlayClickHandler(evt) {
//    if (evt.target === evt.currentTarget) {
//        popupOpenToggle();
//    }
//}
<<<<<<< HEAD

popupOpenButton.addEventListener('click', popupOpenToggle);
=======
>>>>>>> Develop

profileEditButton.addEventListener('click', popupProfileOpenToggle);

<<<<<<< HEAD
//popup.addEventListener('click', popupOvarlayClickHandler);

//submit.addEventListener('click', popupOpenToggle);
=======
profileEditCloseButton.addEventListener('click', popupProfileOpenToggle);

//popup.addEventListener('click', popupOvarlayClickHandler);
>>>>>>> Develop

//submit.addEventListener('click', popupOpenToggle);

<<<<<<< HEAD
const userName = document.querySelector('.profile__name');
const userMetier =document.querySelector('.profile__metier');

const formElement = document.querySelector('.form');

=======

const userName = document.querySelector('.profile__name');
const userMetier =document.querySelector('.profile__metier');

const formProfile = document.querySelector('.form_profile');

>>>>>>> Develop
const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_metier');

function formSubmitHandler (evt) {
   evt.preventDefault();

    userName.textContent = nameInput.value;
    userMetier.textContent = jobInput.value;

<<<<<<< HEAD
    popupOpenToggle();      
};

formElement.addEventListener('submit', formSubmitHandler);
=======
    popupProfileOpenToggle();  
};

formProfile.addEventListener('submit', formSubmitHandler);
>>>>>>> Develop
