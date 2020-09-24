import { parse } from "path";
import "../pages/analytics.css";
import { Statistics } from '../js/components/Statistics';


const date = new Date();
const page = document.querySelector('.page');
const textRequest = (document.querySelector(
  ".analytics-data__query-span"
).textContent = localStorage.getItem("query"));
const totalResult = (document.querySelector(
  ".analytics-data__weekly"
).textContent = localStorage.getItem("totalResults"));
const parseForTitles = JSON.parse(localStorage.getItem("data"));
let sumTitles = 0; //упоминания в заголовках в шапке
for (let i = 0; i < parseForTitles.length; i++) {
  if (
    parseForTitles[i].title.toLowerCase().includes(textRequest.toLowerCase())
  ) {
    sumTitles++;
  }
}
document.querySelector(".analytics-data__titles").textContent = sumTitles; //упоминания в заголовках

const currentMonth = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

document.querySelector('#month').textContent = currentMonth[date.getMonth()]; //установим месяц в диаграмме

const statistics = new Statistics(page, parseForTitles);

