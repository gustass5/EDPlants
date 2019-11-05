import { FunctionalComponent, h } from "@stencil/core";

export const GalleryItem: FunctionalComponent<{
  title: string;
  story: string;
  places: string;
}> = ({ title, story, places }) => {
  return (
    <div class="px-1 w-screen h-screen bg-transparent">
      <div class="border-b my-2 text-center text-2xl">{title}</div>
      <img class="border w-64 mx-auto mb-4" src="../../assets/flower.jpg" />
      <div>
        <div class="border-b mb-2 text-2xl text-center">Details</div>
        <div class="mb-6 text-center">{story}</div>
        <div class="border-b text-2xl mb-2 text-center">
          Places it can be found
        </div>
        <ul class="text-center">
          <li>{places}</li>
        </ul>
      </div>
    </div>
  );
};
