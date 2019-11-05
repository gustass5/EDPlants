import { h } from './core-38ed856a.js';

class Gallery {
    render() {
        return h("div", { class: "absolute h-screen bg-green-500" }, "GALERRY");
    }
    static get is() { return "app-gallery"; }
}

export { Gallery as G };
