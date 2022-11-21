import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Blog");
    }

    async getHtml() {
        return `
            <h1>Blog</h1>
            <p>Coming soon...</p>
        `;
    }
}