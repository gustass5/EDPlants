import { Component, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "app-footer"
})
export class Footer {
  @Event() changeDisplayIndex: EventEmitter;

  render() {
    return (
      <div class="absolute flex bottom-0 w-full h-14 bg-green-600 shadow-xl">
        <div onClick={() => this.changeDisplayIndex.emit(0)} class="p-4 w-1/5">
          <img src="../../assets/gallery.svg" />
        </div>
        <div onClick={() => this.changeDisplayIndex.emit(1)} class="p-4 w-1/5">
          <img src="../../assets/glass.svg" />
        </div>
        <div class="p-4 w-1/5">
          <img src="../../assets/camera.svg" />
        </div>
        <div class="p-4 w-1/5">
          <img src="../../assets/menu.svg" />
        </div>
        <div class="p-4 w-1/5">
          <img src="../../assets/user.svg" />
        </div>
      </div>
    );
  }
}
