export class NewsApi {
  constructor(options, searchInput) {
    this.url = options.url;
    this.apiKey = options.apiKey;
    this.searchInput = searchInput;
    this.request = null;
    
  }

  getNews() {
    this.request = this.searchInput.value;
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
    const nowDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return nowDate

}

}
