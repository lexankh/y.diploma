import { ERRORS } from "../constants/const";

export class SearchInput {
    constructor (form, request) {
      
        this.form = form;
        this._request = request;
        this._input = this.form.querySelector('.search__bar');
        this._error = document.querySelector('.search__error');
        this._btn = this.form.querySelector('.search__btn');
        // this.form.addEventListener('submit',)
         
      
        
    }

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
        
          return  this._input.checkValidity();


    };

    _checkInputValidity() {

        
  
        const valid = this._isValidate(this._input);
        this._error.textContent = this._input.validationMessage;
      
        if (this.form.checkValidity()) {
          this._setSubmitButtonState(this._btn, true);
        }
        else {
          this._setSubmitButtonState(this._btn, false);
        }
        
      
        return valid;
        
  
    };
  
   
  
    
  
  
    _setSubmitButtonState(button, state) {
        if (state) {
            
            this._btn.removeAttribute('disabled', 'true');
      
        } else {
            
            this._btn.setAttribute('disabled', 'true');
      
        }
      };
  

    _handlerInputForm = () => {
        this._isValidate(this._input);
    
        if (this._checkInputValidity(this._input)) {
          this._setSubmitButtonState(true);
        } else {
          this._setSubmitButtonState(false);
        }
      };

    setEventListener = () => {
        this.form.addEventListener("submit", this._searchRequest);
        this.form.addEventListener("input", () => {
          this._checkInputValidity(this._input);
        });
        this.form.addEventListener("input", this._handlerInputForm, true);
      };
    
  
   
  }
