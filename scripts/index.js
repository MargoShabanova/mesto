const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
//const submit = document.querySelector('.form__submit');

function popupOpenToggle() {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')) {
        nameInput.value = userName.textContent;
        jobInput.value = userMetier.textContent;
    }
}

//function popupOvarlayClickHandler(evt) {
//    if (evt.target === evt.currentTarget) {
//        popupOpenToggle();
//    }
//}

popupOpenButton.addEventListener('click', popupOpenToggle);

popupCloseButton.addEventListener('click', popupOpenToggle);

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

    popupOpenToggle();      
};

formElement.addEventListener('submit', formSubmitHandler);