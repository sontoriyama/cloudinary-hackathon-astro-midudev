/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as createAstro, a as renderComponent, d as addAttribute, f as renderSlot, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, u as unescapeHTML } from '../chunks/astro/server_-L6Lq4Ib.mjs';
import 'kleur/colors';
import { a as astroPkg, $ as $$Heading, b as $$Button, c as $$Layout } from '../chunks/Layout_WZl1vs41.mjs';
import { inferImageDimensions, transformProps, transformSourceProps } from '@unpic/core';
import { getCanonicalCdnForUrl, transformUrl } from 'unpic';
import { getPixels } from '@unpic/pixels';
import { i as imageConfig } from '../chunks/_astro_assets_YBW_K9Nj.mjs';
import { env } from 'node:process';
import 'clsx';
import { constructCloudinaryUrl, transformationPlugins, getVideoPlayerOptions, getUploadWidgetOptions } from '@cloudinary-util/url-loader';
import { createHash } from 'node:crypto';
/* empty css                                 */
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from '../chunks/astro/assets-service_Ctm8IuxM.mjs';
import * as devalue from 'devalue';
export { renderers } from '../renderers.mjs';

const specialBackgrounds = ["blurhash", "dominantColor", "lqip"];
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
async function getBackground(props) {
  if (props.background === "none") {
    return;
  }
  if (!specialBackgrounds.includes(props.background ?? "")) {
    return props.background;
  }
  let aspectRatio = props.aspectRatio;
  if (!aspectRatio) {
    if (props.width && props.height) {
      aspectRatio = props.height / props.width;
    } else {
      aspectRatio = 1;
    }
  }
  const cdn = getCanonicalCdnForUrl(props.src, props.cdn);
  if (!cdn) {
    return;
  }
  const bgImgProps = {
    ...props,
    url: props.src,
    width: 12,
    height: 12 * aspectRatio,
    cdn: cdn.cdn
  };
  if (!cdn) {
    return;
  }
  if (props.background === "lqip") {
    const lowUrl2 = transformUrl(bgImgProps)?.toString();
    if (!lowUrl2) {
      return;
    }
    if (!isValidUrl(lowUrl2)) {
      return;
    }
    const response = await fetch(lowUrl2, {
      headers: {
        Accept: "image/webp,*/*"
      }
    });
    const contentType = response.headers.get("Content-Type");
    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    return "data:" + contentType + ";base64," + buffer.toString("base64");
  }
  const lowUrl = transformUrl({
    ...bgImgProps,
    width: 100,
    height: 100 * aspectRatio
  })?.toString();
  if (!lowUrl) {
    return;
  }
  if (!isValidUrl(lowUrl)) {
    return;
  }
  const pixels = await getPixels(lowUrl);
  if (!pixels) {
    return;
  }
  const data = Uint8ClampedArray.from(pixels.data);
  const { blurhashToDataUri, rgbColorToCssString, getDominantColor } = await import('@unpic/placeholder');
  if (props.background === "blurhash") {
    const { encode } = await import('blurhash');
    const blurhash = encode(data, pixels.width, pixels.height, 4, 3);
    return blurhashToDataUri(blurhash);
  }
  if (props.background === "dominantColor") {
    return rgbColorToCssString(getDominantColor(data));
  }
}

function getDefaultService() {
  if (env.NETLIFY || env.NETLIFY_LOCAL) {
    return "netlify";
  }
  if (env.VERCEL || env.NOW_BUILDER) {
    return "vercel";
  }
  return "astro";
}

function getDefaultImageCdn(config) {
  if (config?.fallbackService === "squoosh" || config?.fallbackService === "sharp") {
    return "astro";
  }
  return config.fallbackService ?? getDefaultService();
}

const $$Astro$4 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Image;
  const { placeholder, ...props } = Astro2.props;
  let imgProps;
  if (typeof props.src === "object") {
    imgProps = {
      ...props,
      src: props.src.src,
      ...inferImageDimensions(props, props.src)
    };
  } else {
    imgProps = {
      ...props
    };
  }
  const config = imageConfig.service?.config;
  imgProps.layout ||= config?.layout;
  imgProps.background ||= placeholder ?? config?.placeholder;
  if (!imgProps.cdn) {
    imgProps.cdn = getDefaultImageCdn(config);
  }
  imgProps.background = await getBackground(imgProps);
  return renderTemplate`${maybeRenderHead()}<img${spreadAttributes(transformProps(imgProps))}>`;
}, "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/node_modules/.pnpm/@unpic+astro@0.0.46_astro@4.15.12_rollup@4.24.0_sass@1.79.4_typescript@5.6.2_/node_modules/@unpic/astro/src/Image.astro", void 0);

const $$Astro$3 = createAstro();
const $$Source = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Source;
  const props = Astro2.props;
  let sourceProps;
  if (typeof props.src === "object") {
    sourceProps = {
      ...props,
      src: props.src.src,
      ...inferImageDimensions(props, props.src)
    };
  } else {
    sourceProps = props;
  }
  const config = imageConfig.service?.config;
  sourceProps.layout ||= config?.layout;
  if (!sourceProps.cdn) {
    sourceProps.cdn = getDefaultImageCdn(config);
  }
  return renderTemplate`${maybeRenderHead()}<source${spreadAttributes(transformSourceProps(sourceProps))}>`;
}, "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/node_modules/.pnpm/@unpic+astro@0.0.46_astro@4.15.12_rollup@4.24.0_sass@1.79.4_typescript@5.6.2_/node_modules/@unpic/astro/src/Source.astro", void 0);

const name = "astro-cloudinary";
const version = "1.1.0";
const type = "module";
const license = "MIT";
const module = "./index.ts";
const keywords = [
	"cloudinary",
	"astro",
	"astro-loader"
];
const exports = {
	".": {
		"import": "./index.ts"
	},
	"./helpers": {
		types: "./dist/helpers/index.d.ts",
		"import": "./dist/helpers/index.js"
	},
	"./loaders": {
		types: "./dist/loaders/index.d.ts",
		"import": "./dist/loaders/index.js"
	},
	"./package.json": "./package.json"
};
const files = [
	"dist",
	"helpers",
	"loaders",
	"src",
	"index.ts"
];
const dependencies = {
	"@cloudinary-util/types": "1.5.7",
	"@cloudinary-util/url-loader": "5.10.2",
	"@cloudinary-util/util": "^3.3.2",
	"@cloudinary/url-gen": "^1.20.0",
	"@unpic/astro": "^0.0.46",
	"@unpic/core": "^0.0.49",
	tsup: "^8.2.4",
	unpic: "^3.18.0"
};
const peerDependencies = {
	astro: "^3.2.0 || ^4.0.0"
};
const devDependencies = {
	astro: "^4.15.6"
};
const scripts = {
	dev: "tsup --watch",
	build: "tsup"
};
const pkg = {
	name: name,
	version: version,
	type: type,
	license: license,
	module: module,
	keywords: keywords,
	exports: exports,
	files: files,
	dependencies: dependencies,
	peerDependencies: peerDependencies,
	devDependencies: devDependencies,
	scripts: scripts
};

const ASTRO_CLOUDINARY_ANALYTICS_PRODUCT_ID = "B";
const ASTRO_CLOUDINARY_ANALYTICS_ID = "G";
const ASTRO_VERSION = normalizeVersion(astroPkg.version);
const ASTRO_CLOUDINARY_VERSION = normalizeVersion(pkg.version);
function normalizeVersion(version) {
  let normalized = version;
  if (normalized.includes("-")) {
    normalized = normalized.split("-")[0];
  }
  return normalized;
}

function getCloudinaryConfig(config) {
  const cloudName = config?.cloud?.cloudName ?? "songokucoder";
  if (!cloudName) {
    throw new Error("A Cloudinary Cloud name is required, please make sure PUBLIC_CLOUDINARY_CLOUD_NAME is set and configured in your environment.");
  }
  const apiKey = config?.cloud?.apiKey ?? "889348413961467";
  const secureDistribution = config?.url?.secureDistribution ?? undefined                                                     ;
  const privateCdn = config?.url?.privateCdn ?? undefined                                             ;
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

function generateImageLoader(props, config) {
  const imageProps = { ...props };
  imageProps.width = typeof imageProps.width === "string" ? Number.parseInt(imageProps.width) : imageProps.width;
  imageProps.height = typeof imageProps.height === "string" ? Number.parseInt(imageProps.height) : imageProps.height;
  return function loader(loaderOptions) {
    const options = {
      ...imageProps,
      src: loaderOptions.url,
      width: loaderOptions.width,
      height: loaderOptions.height
    };
    if (typeof loaderOptions?.width === "number" && typeof options.width === "number" && loaderOptions.width !== options.width) {
      const multiplier = loaderOptions.width / options.width;
      options.width = loaderOptions.width;
      if (typeof options.height === "number") {
        options.height = Math.floor(options.height * multiplier);
      }
    } else if (typeof loaderOptions?.width === "number" && typeof options?.width !== "number") {
      options.width = loaderOptions?.width;
    }
    return getCldImageUrl(options, config);
  };
}

const $$Astro$2 = createAstro();
const $$CldImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CldImage;
  const { config, class: className, ...props } = Astro2.props;
  const CLOUDINARY_PROPS = [
    "assetType",
    "deliveryType",
    "dpr",
    "format",
    "quality",
    "strictTransformations"
    // Excluded props that are managed by the component
    // 'height',
    // 'src',
    // 'width'
  ];
  transformationPlugins.forEach(({ props: props2 }) => {
    Object.keys(props2).forEach((prop) => {
      if (CLOUDINARY_PROPS.includes(prop)) {
        throw new Error(`Option ${prop} already exists!`);
      }
      CLOUDINARY_PROPS.push(prop);
    });
  });
  const cldOptions = {
    height: props.height,
    src: props.src,
    width: props.width
  };
  CLOUDINARY_PROPS.forEach((key) => {
    const prop = props[key];
    if (prop) {
      cldOptions[key] = prop;
    }
  });
  const transformer = generateImageLoader(cldOptions, config);
  const src = transformer({
    url: props.src,
    width: props.width,
    height: props.height
  });
  const imageProps = {
    cdn: "cloudinary",
    height: props.height,
    src,
    width: props.width,
    transformer
  };
  Object.entries(props).filter(([key]) => typeof key === "string" && !CLOUDINARY_PROPS.includes(key)).forEach(([key, value]) => imageProps[key] = value);
  let imageClassName = "astro-cloudinary-cldimage";
  if (className) {
    imageClassName = `${imageClassName} ${className}`;
  }
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": imageClassName, ...imageProps })} `;
}, "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/node_modules/.pnpm/astro-cloudinary@1.1.0_astro@4.15.12_rollup@4.24.0_sass@1.79.4_typescript@5.6.2__jiti@1.21.6__l7435k3vt6s4u2gsaeea5xkafi/node_modules/astro-cloudinary/src/components/CldImage.astro", void 0);

const $$Astro$1 = createAstro();
const $$CldVideoPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CldVideoPlayer;
  const PLAYER_VERSION = "2.1.0";
  const props = Astro2.props;
  const { class: className, config, height, id, width } = props;
  const cloudinaryConfig = getCloudinaryConfig(config);
  const playerOptions = getVideoPlayerOptions(props, cloudinaryConfig);
  const { publicId } = playerOptions;
  if (typeof publicId === "undefined") {
    throw new Error("[CldVideoPlayer] Public ID or Cloudinary URL required - please specify a src prop.");
  }
  let playerId = id || `player-${publicId.replace("/", "-")}`;
  const playerHash = createHash("shake256", { outputLength: 4 }).update(JSON.stringify(playerOptions)).digest("hex");
  let playerClassName = "astro-cloudinary-cldvideoplayer cld-video-player cld-fluid";
  if (className) {
    playerClassName = `${playerClassName} ${className}`;
  }
  return renderTemplate`<link${addAttribute(`https://unpkg.com/cloudinary-video-player@${PLAYER_VERSION}/dist/cld-video-player.min.css`, "href")} rel="stylesheet">${maybeRenderHead()}<div${addAttribute(playerId, "id")}${addAttribute({ width: "100%", aspectRatio: `${width} / ${height}` }, "style")}> <video${addAttribute(`${playerId}-${playerHash}`, "id")}${addAttribute(playerClassName, "class")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(JSON.stringify(playerOptions), "data-cldvideoplayer-options")}${addAttribute(playerId, "data-cldvideoplayer-id")}></video> </div> `;
}, "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/node_modules/.pnpm/astro-cloudinary@1.1.0_astro@4.15.12_rollup@4.24.0_sass@1.79.4_typescript@5.6.2__jiti@1.21.6__l7435k3vt6s4u2gsaeea5xkafi/node_modules/astro-cloudinary/src/components/CldVideoPlayer.astro", void 0);

const $$Astro = createAstro();
const $$CldUploadWidget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CldUploadWidget;
  const { class: className, config, id, options, signatureEndpoint, uploadPreset } = Astro2.props;
  const cloudinaryConfig = getCloudinaryConfig(config);
  const uploadOptions = getUploadWidgetOptions({
    uploadPreset: uploadPreset || undefined                                               ,
    ...options
  }, cloudinaryConfig);
  let playerClassName = "astro-cloudinary-clduploadwidget";
  if (typeof className === "string") {
    playerClassName = `${playerClassName} ${className}`;
  }
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "id")}${addAttribute(playerClassName, "class")}${addAttribute(JSON.stringify(uploadOptions), "data-clduploadwidgetupload-options")}${addAttribute(signatureEndpoint, "data-clduploadwidgetupload-signatureendpoint")}> ${renderSlot($$result, $$slots["default"])} </span> `;
}, "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/node_modules/.pnpm/astro-cloudinary@1.1.0_astro@4.15.12_rollup@4.24.0_sass@1.79.4_typescript@5.6.2__jiti@1.21.6__l7435k3vt6s4u2gsaeea5xkafi/node_modules/astro-cloudinary/src/components/CldUploadWidget.astro", void 0);

const $$Halloween = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-7imohapo> <span class="letter letter-0" data-astro-cid-7imohapo>H</span> <span class="letter letter-1" data-astro-cid-7imohapo>A</span> <span class="letter letter-2" data-astro-cid-7imohapo>L</span> <span class="letter letter-3" data-astro-cid-7imohapo>L</span> <span class="letter letter-4" data-astro-cid-7imohapo>O</span> <span class="letter letter-5" data-astro-cid-7imohapo>W</span> <span class="letter letter-6" data-astro-cid-7imohapo>E</span> <span class="letter letter-7" data-astro-cid-7imohapo>E</span> <span class="letter letter-8" data-astro-cid-7imohapo>N</span> <span class="letter" data-astro-cid-7imohapo></span> <span class="letter letter-9" data-astro-cid-7imohapo>G</span> <span class="letter letter-10" data-astro-cid-7imohapo>O</span> <span class="letter letter-11" data-astro-cid-7imohapo>K</span> <span class="letter letter-12" data-astro-cid-7imohapo>U</span> <span class="letter letter-13" data-astro-cid-7imohapo>D</span> <span class="letter letter-14" data-astro-cid-7imohapo>E</span> <span class="letter letter-15" data-astro-cid-7imohapo>V</span> </h1> `;
}, "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/src/components/Halloween.astro", void 0);

const $$Halloween2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 data-astro-cid-2s7uuyrl> <span class="letter letter-0" data-astro-cid-2s7uuyrl>M</span> <span class="letter letter-1" data-astro-cid-2s7uuyrl>I</span> <span class="letter letter-2" data-astro-cid-2s7uuyrl>E</span> <span class="letter letter-3" data-astro-cid-2s7uuyrl>D</span> <span class="letter letter-4" data-astro-cid-2s7uuyrl>O</span> <span class="letter letter-5" data-astro-cid-2s7uuyrl></span> <span class="letter letter-6" data-astro-cid-2s7uuyrl>A</span> <span class="letter letter-7" data-astro-cid-2s7uuyrl>L</span> <span class="letter letter-8" data-astro-cid-2s7uuyrl></span> <span class="letter letter-9" data-astro-cid-2s7uuyrl>S</span> <span class="letter letter-10" data-astro-cid-2s7uuyrl>U</span> <span class="letter letter-11" data-astro-cid-2s7uuyrl>B</span> <span class="letter letter-12" data-astro-cid-2s7uuyrl>I</span> <span class="letter letter-13" data-astro-cid-2s7uuyrl>R</span> <span class="letter letter-14" data-astro-cid-2s7uuyrl>!</span> <span class="letter letter-15" data-astro-cid-2s7uuyrl>!</span> </h2> `;
}, "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/src/components/Halloween2.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_C6Ac3QXf.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLOUDINARY_API_KEY": "889348413961467", "PUBLIC_CLOUDINARY_CLOUD_NAME": "songokucoder", "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/assets_BwNa1IAe.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const images = await getCollection("images");
  return renderTemplate(_a || (_a = __template(["", " <script defer>\n  document.addEventListener('DOMContentLoaded', () => {\n    setTimeout(() => {\n      const letters = document.querySelectorAll('.letters');\n      letters.forEach(letter => {\n        letter.style.color = '#FFFF00'; // Cambia el color a amarillo\n      });\n    }, 3000); // 3000 ms = 3 segundos\n  });\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": "Cloudinary Hackathon - Crea fondos de pantalla con tus fotos modificadas con estilos Halloween gracias a Cloudinary y midudev. Retoques SonGokuCoder con falta de tiempo jeje", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Heading", $$Heading, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Halloween", $$Halloween, { "data-astro-cid-j7pv25f6": true })}<br data-astro-cid-j7pv25f6>${renderComponent($$result3, "Halloween2", $$Halloween2, { "data-astro-cid-j7pv25f6": true })}` })} ${renderComponent($$result2, "CldUploadWidget", $$CldUploadWidget, { "id": "upload-widget", "uploadPreset": "pol-images", "options": {
    sources: ["local"],
    multiple: false,
    maxFiles: 1,
    language: "es",
    text: {
      es: {
        or: "O",
        menu: {
          files: "Subir desde tu dispositivo"
        },
        local: {
          browse: "Seleccionar",
          dd_title_single: "Arrastra tu imagen aqu\xED"
        }
      }
    }
  }, "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Button", $$Button, { "color": "brand", "as": "button", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`Subir Imagen` })} ` })} <ul data-astro-cid-j7pv25f6> ${images.map((image) => {
    return renderTemplate`<li data-astro-cid-j7pv25f6> <a${addAttribute(`/photo?id=${image.data.public_id}`, "href")} data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CldImage", $$CldImage, { "src": image.data.public_id, "width": 250, "height": 250, "crop": {
      type: "fill",
      source: true
    }, "data-astro-cid-j7pv25f6": true })} </a> </li>`;
  })} </ul> </main>   ` }));
}, "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/src/pages/index.astro", void 0);

const $$file = "C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
