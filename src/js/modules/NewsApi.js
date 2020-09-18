export class NewsApi {
  constructor(options) {
    this.url = options.url;
    this.apiKey = options.apiKey;
    this.searchField = options.searchField;
    this.request = null;
    this.headers = options.headers;
    
  }

  getNews() {
    this.request = this.searchField.textContent;
    console.log(this.request);
    return fetch(
      `${this.url}?q=${this.request}&apiKey=${
        this.apiKey
      }&from=${this._fromDate()}&to=${this._nowDate()}&language=ru&pageSize=100`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
          if (res.ok) {
              return res.json();
          } else {
              return Promise.reject(`Ошибка: ${res.status}`);
          }
      })
    
}

_fromDate() {
    const curDate = new Date();
    const fromDate = `${curDate.getFullYear()}-${curDate.getMonth()+1}-${curDate.getDate()-7}`;
    return fromDate

}

_nowDate() {
    const date = new Date();
    const nowDate = `${curDate.getFullYear()}-${curDate.getMonth()+1}-${curDate.getDate()}`;
    return nowDate

}

}
