import { r as registerInstance, h } from './core-e86e2c51.js';

const LandingPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "max-w-sm mx-auto flex flex-col items-center justify-center h-screen bg-green-500 text-green-200 text-5xl animate" }, h("img", { class: "w-48 h-48 mb-10 p-3 border-4 border-green-200 rounded-full", src: "../../assets/leaf-solid.svg" }), h("div", { class: "mb-6" }, "Plant Identity"), h("stencil-route-link", { url: "/content" }, h("div", { class: "px-2 py-1 text-4xl border-green-200 border-4 rounded shadow cursor-pointer" }, "Explore"))));
    }
};

export { LandingPage as app_landing_page };
