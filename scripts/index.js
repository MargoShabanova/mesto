//попап редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const profileEditCloseButton = document.querySelector('.popup__close-profile');

function popupProfileOpenToggle() {
    popupProfile.classList.toggle('popup_opened');
    if (popupProfile.classList.contains('popup_opened')) {
        nameInput.value = userName.textContent;
        jobInput.value = userMetier.textContent;
    }
};

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

const formProfile = document.querySelector('.form_profile');

const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_metier');

function formSubmitHandler (evt) {
   evt.preventDefault();

    userName.textContent = nameInput.value;
    userMetier.textContent = jobInput.value;

    popupProfileOpenToggle();  
};

formProfile.addEventListener('submit', formSubmitHandler);