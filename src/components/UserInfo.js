export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }, handleAvatarClick) {
        this._nameElement = document.querySelector(profileNameSelector);
        this._jobElement = document.querySelector(profileJobSelector);
        this._avatarElement = document.querySelector(profileAvatarSelector);
        this._handleAvatarClick = handleAvatarClick;
    }

    getUserInfo() {
        return{
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        }

    }

    setUserInfo( title, about, avatar ) {
        this._nameElement.textContent = title;
        this._jobElement.textContent = about;
        this._setEventListeners();
        if(avatar) this._avatarElement.src = avatar;
    }

    setUserAvatar(newAvatar) {
        this._avatarElement.src = newAvatar;
    }

    _setEventListeners() {
        this._avatarElement.addEventListener('click', this._handleAvatarClick);
    }
}

