export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active'
};

export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputList = Array.from(form.querySelectorAll(config.inputSelector));
    this._buttonElement = form.querySelector(config.submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  //добавляет класс с ошибкой
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  //удаляет класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  //проверяет валидность поля
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    };
  }

  _hasInvalidInput(inputList) {
    return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
  }

  //состояние кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {

    //const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
  
    //toggleButtonState(inputList, submitButton, object);
    
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        
        this._isValid(inputElement);
  
        this._toggleButtonState ();
      });
    });

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._toggleButtonState();
    this._setEventListeners();

    //const formList = Array.from(document.querySelectorAll(this._formSelector));

    //formList.forEach((formElement) => {

      //const submitButton = formElement.querySelector(object.submitButtonSelector);

        //formElement.addEventListener('submit', (evt) => {
        //    evt.preventDefault();
        //});

        //setEventListeners(formElement, submitButton, object);
    //});
  }
}
