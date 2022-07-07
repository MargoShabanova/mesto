import Popup from "./Popup.js";

export default class  PopupWithConfirmation extends Popup{
    constructor(popupSelector) {
        super(popupSelector);

        this._form = this._popup.querySelector(".form");
    }

    changeSubmitHandler(newSubmit) {
        this._handleSubmit = newSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this);
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}
