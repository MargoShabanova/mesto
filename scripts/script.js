const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const submit = document.querySelector('.form__submit');

function popupOpenToggle() {
    popup.classList.toggle('popup_opened');
}

function popupOvarlayClickHandler(evt) {
    if (evt.target === evt.currentTarget) {
        popupOpenToggle();
    }
}

popupOpenButton.addEventListener('click', popupOpenToggle);

popupCloseButton.addEventListener('click', popupOpenToggle);

popup.addEventListener('click', popupOvarlayClickHandler);

submit.addEventListener('click', popupOpenToggle);


let userName = document.querySelector('.profile__name');
let userMetier =document.querySelector('.profile__metier');

let formElement = document.querySelector('.form');

let nameInput = document.querySelector('.form__item_name');
let jobInput = document.querySelector('.form__item_metier');

nameInput.setAttribute('value', 'Жак-Ив Кусто');
jobInput.setAttribute('value', 'Исследователь океана');

function formSubmitHandler (evt) {
   evt.preventDefault(); 

    userName.textContent = nameInput.value;
    userMetier.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
