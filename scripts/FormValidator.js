export class FormValidator {
  constructor() {
    
  }
  
}

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, object) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(object.inputErrorClass);
    
    errorElement.textContent = errorMessage;
    errorElement.classList.add(object.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, object) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(object.inputErrorClass);
    
    errorElement.classList.remove(object.errorClass);
    errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, object) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, object);
  } else {
    hideInputError(formElement, inputElement, object);
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, object) => {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(object.inactiveButtonClass);
      buttonElement.disabled = true;
  } else {
      buttonElement.classList.remove(object.inactiveButtonClass);
      buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, submitButton, object) => {

  const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));

  toggleButtonState(inputList, submitButton, object);

  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      
      isValid(formElement, inputElement, object);

      toggleButtonState (inputList, submitButton, object);
    });
  });
}; 

const enableValidation = (object) => {
    const formList = Array.from(document.querySelectorAll(object.formSelector));

    formList.forEach((formElement) => {

      const submitButton = formElement.querySelector(object.submitButtonSelector);

        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
    });


    setEventListeners(formElement, submitButton, object);
    });
};

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form__item-error_active'
  });