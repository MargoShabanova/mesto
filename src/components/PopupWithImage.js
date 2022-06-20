import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    open(name, link) {
        const popupImage = this._popup.querySelector('.popup__image');
        const popupImageTitle = this._popup.querySelector('.popup__image-title');

        popupImage.src = link;
        popupImage.alt = name;
        popupImageTitle.textContent = name;

        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        
    }
}