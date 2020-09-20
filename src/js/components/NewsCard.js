export class NewsCard {
    constructor(link, image, published, title, subtitle, origin) {

        this.template = document.querySelector("#news-card").content;
        this.link = link;
        this.image = image;
        this.published = published;
        this.title = title;
        this.subtitle = subtitle;
        this.origin = origin;

    }

    create() {
        this.card = this.template.cloneNode(true);
        this.card.querySelector(".result__link").href = this.link;
        this.card.querySelector(".result__image").src = this.image;
        this.card.querySelector(".result__date").textContent = this.published;
        this.card.querySelector(".result__title").textContent = this.title;
        this.card.querySelector(".result__subtitle").textContent = this.subtitle;
        this.card.querySelector(".result__origin").textContent = this.origin;
        return this.card

        
    }
}