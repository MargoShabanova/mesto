export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._placeImage = this._element.querySelector('.element__photo');
    this._placeName = this._element.querySelector('.element__name');
    this._like = this._element.querySelector('.element__button');
    this._delete = this._element.querySelector('.element__delete');
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _setLikes() {
    const likeCount = this._element.querySelector('.element__like-count');
    likeCount.textContent = this._likes.lenght;
  }

  generateCard() {
    this._placeImage.src = this._link;
    this._placeImage.alt = this._name;
    this._placeName.textContent = this._name;

    this._setLikes();

    this._setEventListeners();

    return this._element;
  }

  _handleDeleteCard() {
    this._element.remove(); 
    this._element = null;
  }

  _handleLikeCard() {
    this._like.classList.toggle('element__button_active');
  }

  _setEventListeners() {
    this._placeImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._delete.addEventListener('click', () => this._handleDeleteCard()); 

    this._like.addEventListener('click', () => this._handleLikeCard());
  }
}