import { r as registerInstance, d as createEvent, h } from './core-e86e2c51.js';

const Footer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.changeDisplayIndex = createEvent(this, "changeDisplayIndex", 7);
    }
    render() {
        return (h("div", { class: "absolute flex bottom-0 w-full h-14 bg-green-600 shadow-xl" }, h("div", { onClick: () => this.changeDisplayIndex.emit(0), class: "p-4 w-1/5" }, h("img", { src: "../../assets/gallery.svg" })), h("div", { onClick: () => this.changeDisplayIndex.emit(1), class: "p-4 w-1/5" }, h("img", { src: "../../assets/glass.svg" })), h("div", { class: "p-4 w-1/5" }, h("img", { src: "../../assets/camera.svg" })), h("div", { class: "p-4 w-1/5" }, h("img", { src: "../../assets/menu.svg" })), h("div", { class: "p-4 w-1/5" }, h("img", { src: "../../assets/user.svg" }))));
    }
};

export { Footer as app_footer };
