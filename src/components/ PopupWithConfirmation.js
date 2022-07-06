import Popup from "./Popup.js";

export default class  PopupWithConfirmation extends Popup{
    constructor(popupSelector, handleConfirm) {
        super(popupSelector);

        this._handleConfirm = handleConfirm.bind(this);
    }

    setEventListeners() {
        super.setEventListeners();

    }

}