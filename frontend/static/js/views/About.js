import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <h1>I’m a full-time software engineer interested in coding. I develope websites</h1>
        `;
    }
}