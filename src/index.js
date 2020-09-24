import { SearchInput } from "./js/components/SearchInput";
import { NewsApi } from "./js/modules/NewsApi";
import "./pages/index.css";
import { OPTIONS } from "./js/constants/const";
import { NewsCardList } from "./js/components/NewsCardList";
import { NewsCard } from "./js/components/NewsCard";
const page = document.querySelector('.page');
const form = page.querySelector('.search__field');
const moreBtn = page.querySelector('.result__more-btn');
const searchFieldInput = form.querySelector('.search__bar');
const container = page.querySelector('.result__container');


const newsApi = new NewsApi({
    url : OPTIONS.url,
    apiKey : OPTIONS.apiKey

}, searchFieldInput);

const newsCard = (...arg) => new NewsCard(...arg);
const newsCardList = new NewsCardList(page, container, newsCard, newsApi, moreBtn);
newsCardList.loadFromLocalStorage();
const searchInput = new SearchInput(page, form, newsCardList, container);

