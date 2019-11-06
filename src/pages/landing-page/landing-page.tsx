import { Component, h } from "@stencil/core";

@Component({
  tag: "app-landing-page"
})
export class LandingPage {
  render() {
    return (
      <div class="max-w-sm mx-auto flex flex-col items-center justify-center h-screen bg-green-500 text-green-200 text-5xl animate">
        <img
          class="w-48 h-48 mb-10 p-3 border-4 border-green-200 rounded-full"
          src="../../assets/leaf-solid.svg"
        />
        <div class="mb-6">Plant Identity</div>
        <stencil-route-link url="/content">
          <div class="px-2 py-1 text-4xl border-green-200 border-4 rounded shadow cursor-pointer">
            Explore
          </div>
        </stencil-route-link>
      </div>
    );
  }
}
