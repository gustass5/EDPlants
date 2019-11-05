import { h, r as registerInstance } from './core-e86e2c51.js';

const GalleryItem = ({ title, story, places }) => {
    return (h("div", { class: "px-1 w-screen h-screen bg-transparent" },
        h("div", { class: "border-b my-2 text-center text-2xl" }, title),
        h("img", { class: "border w-64 mx-auto mb-4", src: "../../assets/flower.jpg" }),
        h("div", null,
            h("div", { class: "border-b mb-2 text-2xl text-center" }, "Details"),
            h("div", { class: "mb-6 text-center" }, story),
            h("div", { class: "border-b text-2xl mb-2 text-center" }, "Places it can be found"),
            h("ul", { class: "text-center" },
                h("li", null, places)))));
};

const Gallery = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "overflow-y-auto absolute h-screen bg-transparent text-gray-200 text-xl animate" }, h(GalleryItem, { title: "Rose", story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", places: "The Netherlands" }), h(GalleryItem, { title: "Violet", story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", places: "The Netherlands" }), h(GalleryItem, { title: "Beet", story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", places: "The Netherlands" })));
    }
};

export { Gallery as app_gallery };
