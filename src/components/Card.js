export class Card {
  constructor({userId}, data, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._userId = userId;
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._id = data.id;
    this._ownerId = data.ownerId;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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

  generateCard() {
    this._placeImage.src = this._link;
    this._placeImage.alt = this._name;
    this._placeName.textContent = this._name;

    this.setLikes(this._likes);

    if(this._ownerId !== this._userId) {
      this._delete.style.display = 'none'
    }

    

    this._setEventListeners();

    return this._element;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCount = this._element.querySelector('.element__like-count');
    likeCount.textContent = this._likes.length;

    if(this.isLiked()) {
      this._fillLike()
    }else{
      this._removeLike()
    }
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId);

    return userHasLikedCard;
  }

  deleteCard() {
    this._element.remove(); 
    this._element = null;
  }

  _fillLike() {
    this._like.classList.add('element__button_active');
  }

  _removeLike() {
    this._like.classList.remove('element__button_active');
  }

  _setEventListeners() {
    this._placeImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._delete.addEventListener('click', () => this._handleDeleteClick(this._id)); 

    this._like.addEventListener('click', () => this._handleLikeClick(this._id));
  }
}