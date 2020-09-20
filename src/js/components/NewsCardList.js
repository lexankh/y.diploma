export class NewsCardList {
  constructor(page, container, cardCallback, newsApi, moreBtn) {
    this.page = page;
    this.container = container;
    this.cardCallback = cardCallback;
    this.newsApi = newsApi;
    this.moreBtn = moreBtn;
    this.alreadyCards = this.container.children;
  }

  addCard = (link, image, published, title, subtitle, origin) => {
    this.container.append(
      this.cardCallback(
        link,
        image,
        published,
        title,
        subtitle,
        origin
      ).create()
    );
  };

  render = () => {
    this.newsApi.getNews().then((res) => {
      res.articles
        .slice(this.alreadyCards.length, 3 + this.alreadyCards.length)
        .forEach((news) =>
          this.addCard(
            news.url,
            news.urlToImage,
            this.dates(news.publishedAt),
            news.title,
            news.description,
            news.source.name
          )
        );

      localStorage.setItem("data", JSON.stringify(res.articles));
      localStorage.setItem("totalResults", JSON.stringify(res.totalResults));
      this.parse = JSON.parse(localStorage.getItem("data"));
      this.checkMore();
      this.page.querySelector(".preloader").style.display = "none";
      if (this.alreadyCards.length === 0) {
        this.page.querySelector(".result").style.display = "none";
        this.page.querySelector(".not-found").style.display = "flex";
      } else {
        this.page.querySelector(".not-found").style.display = "none";
        this.page.querySelector(".result").style.display = "block";
      }
    });
  };

  loadFromLocalStorage = () => {
    this.page.querySelector(".result").style.display = "none";
    this.parse = JSON.parse(localStorage.getItem("data"));

    if (localStorage.getItem("data") !== null) {
      this.parse
        .slice(this.alreadyCards.length, 3 + this.alreadyCards.length)
        .forEach((news) =>
          this.addCard(
            news.url,
            news.urlToImage,
            this.dates(news.publishedAt),
            news.title,
            news.description,
            news.source.name
          )
        );
      this.page.querySelector(".result").style.display = "block";
    }
    this.checkMore();
  };

  dates = (response) => {
    const date = new Date(response);
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    this.newsDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
    return this.newsDate;
  };

  checkMore = () => {
    if (localStorage.getItem("data") !== null) {
      if (this.parse.length == this.alreadyCards.length) {
        this.moreBtn.style.display = "none";
      } else {
        this.moreBtn.style.display = "block";
      }
    }
  };
}
