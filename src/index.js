import { SearchInput } from "./js/components/SearchInput";
import { NewsApi } from "./js/modules/NewsApi";
import "./pages/index.css";

const form = document.querySelector('.search__field');

function ui() {
    console.log('this ok');
}

const formValidator = new SearchInput(form, ui);


formValidator.setEventListener();

