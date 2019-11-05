import { r as registerInstance, h } from './core-e86e2c51.js';

const Find = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "overflow-y-auto absolute h-screen w-full bg-transparent text-gray-200 text-xl animate" }, h("div", { class: "m-4" }, h("input", { class: "w-full", type: "text", placeholder: "Search..." })), h("div", { class: "border-b" }, "Results"), h("div", { class: "flex m-2 flex-wrap" }, h("div", { class: "w-1/2 animateLong" }, h("div", { class: "bg-green-400 shadow m-1" }, h("div", { class: " text-2xl text-center py-2" }, "Roses"), h("img", { class: "mx-auto pb-4 w-24", src: "../../assets/flower.svg" }))), h("div", { class: "w-1/2 animateLong" }, h("div", { class: "bg-green-400 shadow m-1" }, h("div", { class: " text-2xl text-center py-2" }, "Violets"), h("img", { class: "mx-auto pb-4 w-24", src: "../../assets/flower.svg" }))), h("div", { class: "w-1/2 animateLong" }, h("div", { class: "bg-green-400 shadow m-1" }, h("div", { class: " text-2xl text-center py-2" }, "Beets"), h("img", { class: "mx-auto pb-4 w-24", src: "../../assets/flower.svg" }))), h("div", { class: "w-1/2 animateLong" }, h("div", { class: "bg-green-400 shadow m-1" }, h("div", { class: " text-2xl text-center py-2" }, "Roses"), h("img", { class: "mx-auto pb-4 w-24", src: "../../assets/flower.svg" }))))));
    }
};

export { Find as app_find };
