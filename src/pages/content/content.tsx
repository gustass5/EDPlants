import { Component, h, State, Listen } from "@stencil/core";

@Component({
  tag: "app-content"
})
export class Content {
  @State() _displayIndex = 0;

  @Listen("changeDisplayIndex")
  changeDisplayIndex(event) {
    this._displayIndex = event.detail;
  }
  render() {
    return (
      <div class="relative h-screen bg-green-500 text-green-200 animate">
        {this._displayIndex === 0 ? <app-gallery /> : <app-find />}
        <app-footer />
      </div>
    );
  }
}
