import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DtihWptS.mjs';
import { manifest } from './manifest_ccJ4qP5s.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/photo.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.12_rollup@4.24.0_sass@1.79.4_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/photo.astro", _page1],
    ["src/pages/index.astro", _page2]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a6d346db-77ce-447b-8f88-0c9f4b236e8d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
