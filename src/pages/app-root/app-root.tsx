import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrls: ["../../../main.css", "./transition.css"]
})
export class AppRoot {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-landing-page" exact={true} />
          <stencil-route url="/content" component="app-content" exact={true} />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
