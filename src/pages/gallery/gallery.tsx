import { Component, h } from "@stencil/core";
import { GalleryItem } from "./widgets/GalleryItem";

@Component({
  tag: "app-gallery"
})
export class Gallery {
  render() {
    return (
      <div class="overflow-y-auto absolute h-screen bg-transparent text-gray-200 text-xl animate">
        <GalleryItem
          title="Rose"
          story="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          places="The Netherlands"
        />
        <GalleryItem
          title="Violet"
          story="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          places="The Netherlands"
        />
        <GalleryItem
          title="Beet"
          story="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          places="The Netherlands"
        />
      </div>
    );
  }
}
