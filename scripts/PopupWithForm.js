import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);

        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.form');
    }

    _getInputValues() {
        const inputs = [...this._form.querySelectorAll('.form__item')];
        const values = {};
        inputs.forEach((item) => {
            values[item.name] = item.value
        });

        return values;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', () => {
            this._handleSubmit(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}