import { r as registerInstance, h, H as Host } from './core-32cfcd8f.js';

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("app-landing-page", null)));
    }
};

export { AppHome as app_home };
