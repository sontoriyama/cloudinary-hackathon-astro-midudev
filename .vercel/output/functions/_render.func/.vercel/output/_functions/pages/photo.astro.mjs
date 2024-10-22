/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_-L6Lq4Ib.mjs';
import 'kleur/colors';
import { a as astroPkg, $ as $$Heading, b as $$Button, c as $$Layout } from '../chunks/Layout_WZl1vs41.mjs';
import { constructCloudinaryUrl } from '@cloudinary-util/url-loader';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

// src/constants/analytics.ts

// package.json
var package_default = {
  name: "astro-cloudinary",
  version: "1.1.0",
  type: "module",
  license: "MIT",
  module: "./index.ts",
  keywords: [
    "cloudinary",
    "astro",
    "astro-loader"
  ],
  exports: {
    ".": {
      import: "./index.ts"
    },
    "./helpers": {
      types: "./dist/helpers/index.d.ts",
      import: "./dist/helpers/index.js"
    },
    "./loaders": {
      types: "./dist/loaders/index.d.ts",
      import: "./dist/loaders/index.js"
    },
    "./package.json": "./package.json"
  },
  files: [
    "dist",
    "helpers",
    "loaders",
    "src",
    "index.ts"
  ],
  scripts: {
    dev: "tsup --watch",
    build: "tsup",
    prepublishOnly: "cp ../README.md . && cp ../LICENSE . && pnpm build",
    postpublish: "rm ./README.md && rm ./LICENSE"
  },
  dependencies: {
    "@cloudinary-util/types": "1.5.7",
    "@cloudinary-util/url-loader": "5.10.2",
    "@cloudinary-util/util": "^3.3.2",
    "@cloudinary/url-gen": "^1.20.0",
    "@unpic/astro": "^0.0.46",
    "@unpic/core": "^0.0.49",
    tsup: "^8.2.4",
    unpic: "^3.18.0"
  },
  peerDependencies: {
    astro: "^3.2.0 || ^4.0.0"
  },
  devDependencies: {
    astro: "^4.15.6"
  }
};

// src/constants/analytics.ts
var ASTRO_CLOUDINARY_ANALYTICS_PRODUCT_ID = "B";
var ASTRO_CLOUDINARY_ANALYTICS_ID = "G";
var ASTRO_VERSION = normalizeVersion(astroPkg.version);
var ASTRO_CLOUDINARY_VERSION = normalizeVersion(package_default.version);
function normalizeVersion(version) {
  let normalized = version;
  if (normalized.includes("-")) {
    normalized = normalized.split("-")[0];
  }
  return normalized;
}

function getCloudinaryConfig(config) {
  const cloudName = "songokucoder";
  const apiKey = "889348413961467";
  const secureDistribution = undefined                                                     ;
  const privateCdn = undefined                                             ;
  return Object.assign({
    cloud: {
      ...config?.cloud,
      apiKey,
      cloudName
    },
    url: {
      ...config?.url,
      secureDistribution,
      privateCdn
    }
  }, config);
}
function getCloudinaryAnalytics(analytics) {
  return Object.assign({
    product: ASTRO_CLOUDINARY_ANALYTICS_PRODUCT_ID,
    sdkCode: ASTRO_CLOUDINARY_ANALYTICS_ID,
    sdkSemver: ASTRO_CLOUDINARY_VERSION,
    techVersion: ASTRO_VERSION,
    feature: ""
  }, analytics);
}
function getCldImageUrl(options, config, analytics) {
  return constructCloudinaryUrl({
    options,
    config: getCloudinaryConfig(config),
    analytics: getCloudinaryAnalytics(analytics)
  });
}

const $$Astro = createAstro();
const $$Photo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Photo;
  const { searchParams } = Astro2.url;
  const id = searchParams.get("id");
  if (id == null) return Astro2.redirect("/");
  const url = getCldImageUrl({ src: id });
  console.log({ id, url });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cloudinary Photo", "data-astro-cid-r7dbfkg3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main${addAttribute(id, "data-id")} data-astro-cid-r7dbfkg3> <header data-astro-cid-r7dbfkg3> ${renderComponent($$result2, "Heading", $$Heading, { "color": "brand", "contrast": false, "data-astro-cid-r7dbfkg3": true }, { "default": ($$result3) => renderTemplate` Que es lo que te da más miedo??? ` })} ${renderComponent($$result2, "Button", $$Button, { "class": "add", "data-topic": "ghost", "icon": "ghost", "as": "button", "color": "brand", "data-astro-cid-r7dbfkg3": true }, { "default": ($$result3) => renderTemplate`
Fantasmas no!
` })} ${renderComponent($$result2, "Button", $$Button, { "class": "add", "data-topic": "zombies", "icon": "grave-2", "as": "button", "color": "brand", "data-astro-cid-r7dbfkg3": true }, { "default": ($$result3) => renderTemplate`
Que me persigan Zombies
` })} ${renderComponent($$result2, "Button", $$Button, { "class": "add", "data-topic": "devil", "icon": "pentagram", "as": "button", "color": "brand", "data-astro-cid-r7dbfkg3": true }, { "default": ($$result3) => renderTemplate`
¡El diablo!
` })} </header> ${renderComponent($$result2, "two-up", "two-up", { "data-astro-cid-r7dbfkg3": true }, { "default": () => renderTemplate` <img id="original"${addAttribute(url, "src")} data-astro-cid-r7dbfkg3> <img id="preview"${addAttribute(url, "src")} data-astro-cid-r7dbfkg3> ` })} <small data-astro-cid-r7dbfkg3>${url}</small> <div data-astro-cid-r7dbfkg3> ${renderComponent($$result2, "Button", $$Button, { "class": "download", "icon": "download", "as": "button", "color": "brand", "data-astro-cid-r7dbfkg3": true }, { "default": ($$result3) => renderTemplate`
Descargar en Avif
` })} </div> </main> ` })}  `;
}, "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/src/pages/photo.astro", void 0);

const $$file = "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/src/pages/photo.astro";
const $$url = "/photo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Photo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
