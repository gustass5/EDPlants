import { r as registerInstance, c as getElement } from './core-e86e2c51.js';
import { A as ActiveRouter } from './active-router-e2174b2d.js';

const RouteTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titleSuffix = '';
        this.pageTitle = '';
    }
    updateDocumentTitle() {
        const el = this.el;
        if (el.ownerDocument) {
            el.ownerDocument.title = `${this.pageTitle}${this.titleSuffix || ''}`;
        }
    }
    componentWillLoad() {
        this.updateDocumentTitle();
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "pageTitle": ["updateDocumentTitle"]
    }; }
};
ActiveRouter.injectProps(RouteTitle, [
    'titleSuffix',
]);

export { RouteTitle as stencil_route_title };
