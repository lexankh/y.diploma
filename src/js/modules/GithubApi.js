export default class GithubApi {
    constructor(options) {
        this.url = options.url;
        
        this.getCommits();
    }

    getCommits() {
        return fetch(`${this.url}`, {
                method: "GET",
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
    }
}