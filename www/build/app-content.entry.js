import { r as registerInstance, h } from './core-e86e2c51.js';

const Content = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._displayIndex = 0;
    }
    changeDisplayIndex(event) {
        this._displayIndex = event.detail;
    }
    render() {
        return (h("div", { class: "max-w-sm mx-auto relative h-screen bg-green-500 text-green-200 animate" }, this._displayIndex === 0 ? h("app-gallery", null) : h("app-find", null), h("app-footer", null)));
    }
};

export { Content as app_content };
