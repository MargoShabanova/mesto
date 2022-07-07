import Popup from "./Popup.js";

export default class  PopupWithConfirmation extends Popup{
    constructor(popupSelector) {
        super(popupSelector);

        this._submitButton = this._popup.querySelector(".form__submit");
    }

    changeSubmitHandler(newSubmit) {
        this._handleSubmit = newSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this);
        })
    }

    close() {
        super.close();
    }
}
