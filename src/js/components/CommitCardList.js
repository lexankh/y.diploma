export default class CommitCardList {
  constructor(container, commitCardCallback, githubApi, swiperInit) {
    this.container = container;
    this.commitCardCallback = commitCardCallback;
    this.githubApi = githubApi;
    this.swiperInit = swiperInit;
    this.render();
  }

  addCommitCard = (link, name, email, date, message) => {
    this.container.append(
      this.commitCardCallback(link, name, email, date, message).create()
    );
  };

  render = () => {
    this.githubApi.getCommits().then((res) => {
      res
       
        .forEach((item) =>
          this.addCommitCard(
            item.html_url,
            item.commit.author.name,
            item.commit.author.email,
            item.commit.author.date,
            item.commit.message
          )
          

        );
        this.swiperInit();
    })
    .catch((err) => {
        console.log(err);
    });
  };


}
