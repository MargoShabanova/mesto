import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);

    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".form");
    this._inputs = this._form.querySelectorAll(".form__item");
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((item) => {
      values[item.getAttribute("name")] = item.value;
    });

    return values;
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmit = newSubmitHandler;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
