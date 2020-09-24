import { ERRORS } from "../constants/const";

export class SearchInput {
  constructor(page, form, newsCardListCallback, container) {
    this.page = page;
    this.form = form;
    this.container = container;
    this._input = this.form.querySelector(".search__bar");
    this._error = document.querySelector(".search__error");
    this._btn = this.form.querySelector(".search__btn");
    this.alreadyCards = this.container.children;
    this.newsCardListCallback = newsCardListCallback;
    this.form.addEventListener("submit", this.searchNewsBySubmit);
    this.form.addEventListener("input", this._handlerInputForm, true);
    this.page.querySelector('.result__more-btn').addEventListener('click', this.showMore);
  }

  searchNewsBySubmit = (e) => {
    e.preventDefault();
    this._btn.disabled = true;
    this.page.querySelector(".result").style.display = "none";
    this.page.querySelector(".not-found").style.display = "none";
    this.page.querySelector(".preloader").style.display = "flex";
    localStorage.removeItem("query");
    this.container.innerHTML = "";
    this.newsCardListCallback.render();
    localStorage.setItem("query", this._input.value);
  };
  _isValidate = (input) => {
    this._input.setCustomValidity("");

    if (this._input.validity.valueMissing) {
      this._input.setCustomValidity(ERRORS.empty);
      return false;
    }

    if (this._input.validity.tooShort || input.validity.tooLong) {
      this._input.setCustomValidity(ERRORS.length);
      return false;
    }

    return this._input.checkValidity();
  };

  _checkInputValidity() {
    const valid = this._isValidate(this._input);
    this._error.textContent = this._input.validationMessage;

    return valid;
  }

  _setSubmitButtonState(button, state) {
    if (state) {
      button.removeAttribute("disabled", "true");
    } else {
      button.setAttribute("disabled", "true");
    }
  }

  _handlerInputForm = () => {
    this._isValidate(this._input);

    if (this._checkInputValidity(this._input)) {
      this._setSubmitButtonState(this._btn, true);
    } else {
      this._setSubmitButtonState(this._btn, false);
    }
  }

  showMore = () => {
    
    this.page.querySelector('.preloader').style.display = "flex";
    this.newsCardListCallback.loadFromLocalStorage();
    this.page.querySelector('.result__more-btn').scrollIntoView(false);
    this.page.querySelector('.preloader').style.display = "none";
  }
}
