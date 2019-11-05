import { Component, h } from "@stencil/core";

@Component({
  tag: "app-find"
})
export class Find {
  render() {
    return (
      <div class="overflow-y-auto absolute h-screen w-full bg-transparent text-gray-200 text-xl animate">
        <div class="m-4">
          <input class="w-full" type="text" placeholder="Search..." />
        </div>
        <div class="border-b">Results</div>
        <div class="flex m-2 flex-wrap">
          <div class="w-1/2 animateLong">
            <div class="bg-green-400 shadow m-1">
              <div class=" text-2xl text-center py-2">Roses</div>
              <img class="mx-auto pb-4 w-24" src="../../assets/flower.svg" />
            </div>
          </div>

          <div class="w-1/2 animateLong">
            <div class="bg-green-400 shadow m-1">
              <div class=" text-2xl text-center py-2">Violets</div>
              <img class="mx-auto pb-4 w-24" src="../../assets/flower.svg" />
            </div>
          </div>

          <div class="w-1/2 animateLong">
            <div class="bg-green-400 shadow m-1">
              <div class=" text-2xl text-center py-2">Beets</div>
              <img class="mx-auto pb-4 w-24" src="../../assets/flower.svg" />
            </div>
          </div>

          <div class="w-1/2 animateLong">
            <div class="bg-green-400 shadow m-1">
              <div class=" text-2xl text-center py-2">Roses</div>
              <img class="mx-auto pb-4 w-24" src="../../assets/flower.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
