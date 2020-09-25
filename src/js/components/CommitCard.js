export default class CommitCard {
    constructor(link, name, email, date, message) {
        this.template = document.querySelector('#commit-card').content;
        this.name = name;
        this.link = link;
        this.email = email;
        this.date = date;
        this.message = message;
        
    }

    create() {
        this.commitCard = this.template.cloneNode(true);
        this.commitCard.querySelector('.commit__card').href = this.link;
        this.commitCard.querySelector('.commit__nameof').textContent = this.name;
        this.commitCard.querySelector('.commit__mail').textContent = this.email;
        this.commitCard.querySelector('.commit__date').textContent = this.date;
        this.commitCard.querySelector('.commit__text').textContent = this.message;
        return this.commitCard;


    }
}