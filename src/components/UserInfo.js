export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
        this._nameElement = document.querySelector(profileNameSelector);
        this._jobElement = document.querySelector(profileJobSelector);
        this._avatarElement = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
        return{
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        }

    }

    setUserInfo( title, job, avatar ) {
        this._nameElement.textContent = title;
        this._jobElement.textContent = job;
        this._avatarElement.src = avatar;
    }

    setUserAvatar(newAvatar) {
        this._avatarElement.src = newAvatar;
    }
}

