export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._placeImage = this._element.querySelector('.element__photo');
    this._placeName = this._element.querySelector('.element__name');
    this._like = this._element.querySelector('.element__button');
    this._delete = this._element.querySelector('.element__delete');
  }

  _getTemplate() {
    const element = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return element;
  }

  generateCard() {
    this._placeImage.src = this._link;
    this._placeImage.alt = this._name;
    this._placeName.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  //_handleClosePicture() {
  //  closePopup (popupPlace);
  //}

  //_handleDeleteCard(evt) {
  //  evt.target.closest('.element').remove();
  //}

  //_handleLikeCard(evt) {
  //  evt.target.classList.toggle('element__button_active');
  //}

  _setEventListeners() {
    this._placeImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._delete.addEventListener('click', () => {
      this._element.remove();
    });

    this._like.addEventListener('click', () => {
      this._like.classList.toggle('element__button_active');
    });
  }
}
