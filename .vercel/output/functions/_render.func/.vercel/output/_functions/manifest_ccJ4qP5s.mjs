import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CZ5mQ88Z.mjs';
import 'es-module-lexer';
import { e as decodeKey } from './chunks/astro/server_-L6Lq4Ib.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.15.12_rollup@4.24.0_sass@1.79.4_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.24_78bKD.js"}],"styles":[{"type":"external","src":"/_astro/index.ClJbMCgW.css"},{"type":"inline","content":"main[data-astro-cid-r7dbfkg3]{width:800px;margin:0 auto;padding-top:100px;text-align:center;padding-bottom:100px}img[data-astro-cid-r7dbfkg3]{max-width:100%;height:auto;border-radius:12px;transition:opacity .3s ease}\n"}],"routeData":{"route":"/photo","isIndex":false,"type":"page","pattern":"^\\/photo\\/?$","segments":[[{"content":"photo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/photo.astro","pathname":"/photo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C_hcwXnw.js"}],"styles":[{"type":"external","src":"/_astro/index.ClJbMCgW.css"},{"type":"inline","content":".letter[data-astro-cid-7imohapo]{display:inline-block;opacity:0;animation:fadeIn 1s forwards}.letter-0[data-astro-cid-7imohapo]{animation-delay:0s}.letter-1[data-astro-cid-7imohapo]{animation-delay:.1s}.letter-2[data-astro-cid-7imohapo]{animation-delay:.2s}.letter-3[data-astro-cid-7imohapo]{animation-delay:.3s}.letter-4[data-astro-cid-7imohapo]{animation-delay:.4s}.letter-5[data-astro-cid-7imohapo]{animation-delay:.5s}.letter-6[data-astro-cid-7imohapo]{animation-delay:.6s}.letter-7[data-astro-cid-7imohapo]{animation-delay:.7s}.letter-8[data-astro-cid-7imohapo]{animation-delay:.8s}.letter-9[data-astro-cid-7imohapo]{animation-delay:.9s}.letter-10[data-astro-cid-7imohapo]{animation-delay:1s}.letter-11[data-astro-cid-7imohapo]{animation-delay:1.1s}.letter-12[data-astro-cid-7imohapo]{animation-delay:1.2s}.letter-13[data-astro-cid-7imohapo]{animation-delay:1.3s}.letter-14[data-astro-cid-7imohapo]{animation-delay:1.4s}.letter-15[data-astro-cid-7imohapo]{animation-delay:1.5s}.letter[data-astro-cid-2s7uuyrl]{display:inline-block;opacity:0;animation:fadeIn 1s forwards}@keyframes fadeIn{0%{opacity:0;color:#000}to{opacity:1;color:#fff}}.letter-0[data-astro-cid-2s7uuyrl]{animation-delay:0s}.letter-1[data-astro-cid-2s7uuyrl]{animation-delay:.1s}.letter-2[data-astro-cid-2s7uuyrl]{animation-delay:.2s}.letter-3[data-astro-cid-2s7uuyrl]{animation-delay:.3s}.letter-4[data-astro-cid-2s7uuyrl]{animation-delay:.4s}.letter-5[data-astro-cid-2s7uuyrl]{animation-delay:.5s}.letter-6[data-astro-cid-2s7uuyrl]{animation-delay:.6s}.letter-7[data-astro-cid-2s7uuyrl]{animation-delay:.7s}.letter-8[data-astro-cid-2s7uuyrl]{animation-delay:.8s}.letter-9[data-astro-cid-2s7uuyrl]{animation-delay:.9s}.letter-10[data-astro-cid-2s7uuyrl]{animation-delay:1s}.letter-11[data-astro-cid-2s7uuyrl]{animation-delay:1.1s}.letter-12[data-astro-cid-2s7uuyrl]{animation-delay:1.2s}.letter-13[data-astro-cid-2s7uuyrl]{animation-delay:1.3s}.letter-14[data-astro-cid-2s7uuyrl]{animation-delay:1.4s}.letter-15[data-astro-cid-2s7uuyrl]{animation-delay:1.5s}html,body{background-image:url(/_astro/fons-halloween-mobil.CWxBvcZo.avif);background-size:cover;background-position:center;height:100vh;margin:0;font-family:Courier New,Courier,monospace}@media (min-width: 768px){html,body{background-image:url(/_astro/fons-halloween-tablet.B5picR5x.avif)}}@media (min-width: 1024px){html,body{background-image:url(/_astro/fons-halloween-desktop.D-ebkqVu.avif)}}main[data-astro-cid-j7pv25f6]{width:800px;margin:0 auto;padding-top:100px;text-align:center}h2[data-astro-cid-j7pv25f6]{margin-bottom:32px}ul[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:1fr 1fr;gap:4px;list-style:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/src/pages/photo.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.15.12_rollup@4.24.0_sass@1.79.4_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/photo@_@astro":"pages/photo.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/projectes/hackaton-claudinary-sense-tocar/cloudinary-hackathon-astro-example-main/node_modules/.pnpm/astro@4.15.12_rollup@4.24.0_sass@1.79.4_typescript@5.6.2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:\\projectes\\hackaton-claudinary-sense-tocar\\cloudinary-hackathon-astro-example-main\\.astro\\assets.mjs":"chunks/assets_BwNa1IAe.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_C6Ac3QXf.mjs","\u0000@astrojs-manifest":"manifest_ccJ4qP5s.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.24_78bKD.js","/astro/hoisted.js?q=1":"_astro/hoisted.C_hcwXnw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/fons-halloween-mobil.CWxBvcZo.avif","/_astro/fons-halloween-tablet.B5picR5x.avif","/_astro/fons-halloween-desktop.D-ebkqVu.avif","/_astro/index.ClJbMCgW.css","/favicon.svg","/fons-halloween-desktop.avif","/fons-halloween-mobil.avif","/fons-halloween-tablet.avif","/_astro/hoisted.24_78bKD.js","/_astro/hoisted.C_hcwXnw.js","/_astro/index.CkX9XPK2.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"ktF1/A29LH9XFYUP9lfuKfNSO17b1gsgmEMCQJ7u05A=","experimentalEnvGetSecretEnabled":false});

export { manifest };
