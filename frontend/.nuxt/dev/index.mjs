import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, getResponseStatus, setHeaders, sendRedirect, proxyRequest, createError, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, readBody, getQuery as getQuery$1, getResponseStatusText } from 'file://F:/github/vue/content-hub/frontend/node_modules/h3/dist/index.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://F:/github/vue/content-hub/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr from 'file://F:/github/vue/content-hub/frontend/node_modules/destr/dist/index.mjs';
import { withQuery, joinURL, withTrailingSlash, parseURL, withoutBase, getQuery, joinRelativeURL } from 'file://F:/github/vue/content-hub/frontend/node_modules/ufo/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://F:/github/vue/content-hub/frontend/node_modules/unhead/dist/server.mjs';
import { isVNode, toValue, isRef } from 'file://F:/github/vue/content-hub/frontend/node_modules/vue/index.mjs';
import { walkResolver } from 'file://F:/github/vue/content-hub/frontend/node_modules/unhead/dist/utils.mjs';
import { renderToString } from 'file://F:/github/vue/content-hub/frontend/node_modules/vue/server-renderer/index.mjs';
import { klona } from 'file://F:/github/vue/content-hub/frontend/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://F:/github/vue/content-hub/frontend/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://F:/github/vue/content-hub/frontend/node_modules/scule/dist/index.mjs';
import { stringify, uneval } from 'file://F:/github/vue/content-hub/frontend/node_modules/devalue/index.js';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file://F:/github/vue/content-hub/frontend/node_modules/unhead/dist/plugins.mjs';
import { createHooks } from 'file://F:/github/vue/content-hub/frontend/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://F:/github/vue/content-hub/frontend/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://F:/github/vue/content-hub/frontend/node_modules/node-mock-http/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://F:/github/vue/content-hub/frontend/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://F:/github/vue/content-hub/frontend/node_modules/youch-core/build/index.js';
import { Youch } from 'file://F:/github/vue/content-hub/frontend/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://F:/github/vue/content-hub/frontend/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://F:/github/vue/content-hub/frontend/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://F:/github/vue/content-hub/frontend/node_modules/errx/dist/index.js';
import BaseStyle from 'file://F:/github/vue/content-hub/frontend/node_modules/@primevue/core/base/style/index.mjs';
import BaseComponentStyle from 'file://F:/github/vue/content-hub/frontend/node_modules/@primevue/core/basecomponent/style/index.mjs';
import { style } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/autocomplete/index.mjs';
import { isNotEmpty, isEmpty } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/utils/object/index.mjs';
import { style as style$1 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/cascadeselect/index.mjs';
import { style as style$2 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/checkbox/index.mjs';
import { style as style$3 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/checkboxgroup/index.mjs';
import { style as style$4 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/colorpicker/index.mjs';
import { style as style$5 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/datepicker/index.mjs';
import { style as style$6 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/floatlabel/index.mjs';
import { style as style$7 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/iconfield/index.mjs';
import { style as style$8 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/iftalabel/index.mjs';
import { style as style$9 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/inputchips/index.mjs';
import { style as style$a } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/inputgroup/index.mjs';
import { style as style$b } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/inputnumber/index.mjs';
import { style as style$c } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/inputotp/index.mjs';
import { style as style$d } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/inputtext/index.mjs';
import { style as style$e } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/knob/index.mjs';
import { style as style$f } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/listbox/index.mjs';
import { style as style$g } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/multiselect/index.mjs';
import { style as style$h } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/password/index.mjs';
import { style as style$i } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/radiobutton/index.mjs';
import { style as style$j } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/radiobuttongroup/index.mjs';
import { style as style$k } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/rating/index.mjs';
import { style as style$l } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/select/index.mjs';
import { style as style$m } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/selectbutton/index.mjs';
import { style as style$n } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/slider/index.mjs';
import { style as style$o } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/textarea/index.mjs';
import { style as style$p } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/togglebutton/index.mjs';
import { style as style$q } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/toggleswitch/index.mjs';
import { style as style$r } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/treeselect/index.mjs';
import { style as style$s } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/button/index.mjs';
import { style as style$t } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/buttongroup/index.mjs';
import { style as style$u } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/speeddial/index.mjs';
import { style as style$v } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/splitbutton/index.mjs';
import { style as style$w } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/datatable/index.mjs';
import { style as style$x } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/dataview/index.mjs';
import { style as style$y } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/orderlist/index.mjs';
import { style as style$z } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/organizationchart/index.mjs';
import { style as style$A } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/paginator/index.mjs';
import { style as style$B } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/picklist/index.mjs';
import { style as style$C } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/tree/index.mjs';
import { style as style$D } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/treetable/index.mjs';
import { style as style$E } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/timeline/index.mjs';
import { style as style$F } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/virtualscroller/index.mjs';
import { style as style$G } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/accordion/index.mjs';
import { style as style$H } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/card/index.mjs';
import { style as style$I } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/divider/index.mjs';
import { style as style$J } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/fieldset/index.mjs';
import { style as style$K } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/panel/index.mjs';
import { style as style$L } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/scrollpanel/index.mjs';
import { style as style$M } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/splitter/index.mjs';
import { style as style$N } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/stepper/index.mjs';
import { style as style$O } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/tabview/index.mjs';
import { style as style$P } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/tabs/index.mjs';
import { style as style$Q } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/toolbar/index.mjs';
import { style as style$R } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/confirmdialog/index.mjs';
import { style as style$S } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/confirmpopup/index.mjs';
import { style as style$T } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/dialog/index.mjs';
import { style as style$U } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/drawer/index.mjs';
import { style as style$V } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/popover/index.mjs';
import { style as style$W } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/fileupload/index.mjs';
import { style as style$X } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/breadcrumb/index.mjs';
import { style as style$Y } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/contextmenu/index.mjs';
import { style as style$Z } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/dock/index.mjs';
import { style as style$_ } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/menu/index.mjs';
import { style as style$$ } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/menubar/index.mjs';
import { style as style$10 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/megamenu/index.mjs';
import { style as style$11 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/panelmenu/index.mjs';
import { style as style$12 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/steps/index.mjs';
import { style as style$13 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/tabmenu/index.mjs';
import { style as style$14 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/tieredmenu/index.mjs';
import { style as style$15 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/message/index.mjs';
import { style as style$16 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/inlinemessage/index.mjs';
import { style as style$17 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/toast/index.mjs';
import { style as style$18 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/carousel/index.mjs';
import { style as style$19 } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/galleria/index.mjs';
import { style as style$1a } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/image/index.mjs';
import { style as style$1b } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/imagecompare/index.mjs';
import { style as style$1c } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/avatar/index.mjs';
import { style as style$1d } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/badge/index.mjs';
import { style as style$1e } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/blockui/index.mjs';
import { style as style$1f } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/chip/index.mjs';
import { style as style$1g } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/inplace/index.mjs';
import { style as style$1h } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/metergroup/index.mjs';
import { style as style$1i } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/overlaybadge/index.mjs';
import { style as style$1j } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/scrolltop/index.mjs';
import { style as style$1k } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/skeleton/index.mjs';
import { style as style$1l } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/progressbar/index.mjs';
import { style as style$1m } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/progressspinner/index.mjs';
import { style as style$1n } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/tag/index.mjs';
import { style as style$1o } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/terminal/index.mjs';
import { style as style$1p } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/tooltip/index.mjs';
import { style as style$1q } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styles/ripple/index.mjs';
import { Theme } from 'file://F:/github/vue/content-hub/frontend/node_modules/@primeuix/styled/index.mjs';
import { createStorage, prefixStorage } from 'file://F:/github/vue/content-hub/frontend/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://F:/github/vue/content-hub/frontend/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file://F:/github/vue/content-hub/frontend/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://F:/github/vue/content-hub/frontend/node_modules/radix3/dist/index.mjs';

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = url.pathname + url.search + url.hash;
  errorObject.message ||= "Server Error";
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _NKhXQtqFaIpNruWlRjoNhSVln0DTU3iJJsO7FJh4o8 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "F:/github/vue/content-hub/frontend";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[{"key":"gf-prefetch","rel":"dns-prefetch","href":"https://fonts.gstatic.com/"},{"key":"gf-preconnect","rel":"preconnect","href":"https://fonts.gstatic.com/","crossorigin":"anonymous"},{"key":"gf-origin-preconnect","rel":"preconnect","href":"https://fonts.googleapis.com/"}],"style":[],"script":[{"key":"gf-script","children":"(function(){\n        var h=document.querySelector(\"head\");\n        var m=h.querySelector('meta[name=\"head:count\"]');\n        if(m){m.setAttribute('content',Number(m.getAttribute('content'))+1);}\n        else{m=document.createElement('meta');m.setAttribute('name','head:count');m.setAttribute('content','1');h.append(m);}\n        var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Roboto+Mono:display,wght@block,400..900&display=swap';h.appendChild(l);\n      })();"}],"noscript":[{"children":"<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Roboto+Mono:display,wght@block,400..900&display=swap\">","tagPosition":"bodyOpen"}]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _7Lphu9Fh7F3XH5gX2o0Cdw6xMqAHim7NotG0Oij5aXs = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "primevue": {
      "usePrimeVue": false,
      "autoImport": false,
      "resolvePath": "",
      "importPT": "",
      "importTheme": "",
      "loadStyles": true,
      "options": {
        "ripple": true,
        "inputVariant": "filled",
        "theme": {
          "preset": {
            "primitive": {
              "borderRadius": {
                "none": "0",
                "xs": "2px",
                "sm": "4px",
                "md": "6px",
                "lg": "8px",
                "xl": "12px"
              },
              "emerald": {
                "50": "#E8F6F1",
                "100": "#C5EBE1",
                "200": "#9EDFCF",
                "300": "#76D3BD",
                "400": "#58C9AF",
                "500": "#3BBFA1",
                "600": "#35AF94",
                "700": "#2D9B83",
                "800": "#268873",
                "900": "#1A6657",
                "950": "#0d3329"
              },
              "green": {
                "50": "#E8F5E9",
                "100": "#C8E6C9",
                "200": "#A5D6A7",
                "300": "#81C784",
                "400": "#66BB6A",
                "500": "#4CAF50",
                "600": "#43A047",
                "700": "#388E3C",
                "800": "#2E7D32",
                "900": "#1B5E20",
                "950": "#0e2f10"
              },
              "lime": {
                "50": "#F9FBE7",
                "100": "#F0F4C3",
                "200": "#E6EE9C",
                "300": "#DCE775",
                "400": "#D4E157",
                "500": "#CDDC39",
                "600": "#C0CA33",
                "700": "#AFB42B",
                "800": "#9E9D24",
                "900": "#827717",
                "950": "#413c0c"
              },
              "red": {
                "50": "#FFEBEE",
                "100": "#FFCDD2",
                "200": "#EF9A9A",
                "300": "#E57373",
                "400": "#EF5350",
                "500": "#F44336",
                "600": "#E53935",
                "700": "#D32F2F",
                "800": "#C62828",
                "900": "#B71C1C",
                "950": "#5c0e0e"
              },
              "orange": {
                "50": "#FFF3E0",
                "100": "#FFE0B2",
                "200": "#FFCC80",
                "300": "#FFB74D",
                "400": "#FFA726",
                "500": "#FF9800",
                "600": "#FB8C00",
                "700": "#F57C00",
                "800": "#EF6C00",
                "900": "#E65100",
                "950": "#732900"
              },
              "amber": {
                "50": "#FFF8E1",
                "100": "#FFECB3",
                "200": "#FFE082",
                "300": "#FFD54F",
                "400": "#FFCA28",
                "500": "#FFC107",
                "600": "#FFB300",
                "700": "#FFA000",
                "800": "#FF8F00",
                "900": "#FF6F00",
                "950": "#803800"
              },
              "yellow": {
                "50": "#FFFDE7",
                "100": "#FFF9C4",
                "200": "#FFF59D",
                "300": "#FFF176",
                "400": "#FFEE58",
                "500": "#FFEB3B",
                "600": "#FDD835",
                "700": "#FBC02D",
                "800": "#F9A825",
                "900": "#F57F17",
                "950": "#7b400c"
              },
              "teal": {
                "50": "#E0F2F1",
                "100": "#B2DFDB",
                "200": "#80CBC4",
                "300": "#4DB6AC",
                "400": "#26A69A",
                "500": "#009688",
                "600": "#00897B",
                "700": "#00796B",
                "800": "#00695C",
                "900": "#004D40",
                "950": "#002720"
              },
              "cyan": {
                "50": "#E0F7FA",
                "100": "#B2EBF2",
                "200": "#80DEEA",
                "300": "#4DD0E1",
                "400": "#26C6DA",
                "500": "#00BCD4",
                "600": "#00ACC1",
                "700": "#0097A7",
                "800": "#00838F",
                "900": "#006064",
                "950": "#003032"
              },
              "sky": {
                "50": "#E1F5FE",
                "100": "#B3E5FC",
                "200": "#81D4FA",
                "300": "#4FC3F7",
                "400": "#29B6F6",
                "500": "#03A9F4",
                "600": "#039BE5",
                "700": "#0288D1",
                "800": "#0277BD",
                "900": "#01579B",
                "950": "#012c4e"
              },
              "blue": {
                "50": "#E3F2FD",
                "100": "#BBDEFB",
                "200": "#90CAF9",
                "300": "#64B5F6",
                "400": "#42A5F5",
                "500": "#2196F3",
                "600": "#1E88E5",
                "700": "#1976D2",
                "800": "#1565C0",
                "900": "#0D47A1",
                "950": "#072451"
              },
              "indigo": {
                "50": "#E8EAF6",
                "100": "#C5CAE9",
                "200": "#9FA8DA",
                "300": "#7986CB",
                "400": "#5C6BC0",
                "500": "#3F51B5",
                "600": "#3949AB",
                "700": "#303F9F",
                "800": "#283593",
                "900": "#1A237E",
                "950": "#0d123f"
              },
              "violet": {
                "50": "#EDE7F6",
                "100": "#D1C4E9",
                "200": "#B39DDB",
                "300": "#9575CD",
                "400": "#7E57C2",
                "500": "#673AB7",
                "600": "#5E35B1",
                "700": "#512DA8",
                "800": "#4527A0",
                "900": "#311B92",
                "950": "#190e49"
              },
              "purple": {
                "50": "#F3E5F5",
                "100": "#E1BEE7",
                "200": "#CE93D8",
                "300": "#BA68C8",
                "400": "#AB47BC",
                "500": "#9C27B0",
                "600": "#8E24AA",
                "700": "#7B1FA2",
                "800": "#6A1B9A",
                "900": "#4A148C",
                "950": "#250a46"
              },
              "fuchsia": {
                "50": "#FDE6F3",
                "100": "#FBC1E3",
                "200": "#F897D1",
                "300": "#F56DBF",
                "400": "#F34DB2",
                "500": "#F12DA5",
                "600": "#E0289D",
                "700": "#CC2392",
                "800": "#B81E88",
                "900": "#951777",
                "950": "#4b0c3c"
              },
              "pink": {
                "50": "#FCE4EC",
                "100": "#F8BBD0",
                "200": "#F48FB1",
                "300": "#F06292",
                "400": "#EC407A",
                "500": "#E91E63",
                "600": "#D81B60",
                "700": "#C2185B",
                "800": "#AD1457",
                "900": "#880E4F",
                "950": "#440728"
              },
              "rose": {
                "50": "#FFF0F0",
                "100": "#FFD9D9",
                "200": "#FFC0C0",
                "300": "#FFA7A7",
                "400": "#FF8E8E",
                "500": "#FF7575",
                "600": "#FF5252",
                "700": "#FF3838",
                "800": "#F71C1C",
                "900": "#D50000",
                "950": "#3E0000"
              },
              "slate": {
                "50": "#f8fafc",
                "100": "#f1f5f9",
                "200": "#e2e8f0",
                "300": "#cbd5e1",
                "400": "#94a3b8",
                "500": "#64748b",
                "600": "#475569",
                "700": "#334155",
                "800": "#1e293b",
                "900": "#0f172a",
                "950": "#020617"
              },
              "gray": {
                "50": "#f9fafb",
                "100": "#f3f4f6",
                "200": "#e5e7eb",
                "300": "#d1d5db",
                "400": "#9ca3af",
                "500": "#6b7280",
                "600": "#4b5563",
                "700": "#374151",
                "800": "#1f2937",
                "900": "#111827",
                "950": "#030712"
              },
              "zinc": {
                "50": "#fafafa",
                "100": "#f4f4f5",
                "200": "#e4e4e7",
                "300": "#d4d4d8",
                "400": "#a1a1aa",
                "500": "#71717a",
                "600": "#52525b",
                "700": "#3f3f46",
                "800": "#27272a",
                "900": "#18181b",
                "950": "#09090b"
              },
              "neutral": {
                "50": "#fafafa",
                "100": "#f5f5f5",
                "200": "#e5e5e5",
                "300": "#d4d4d4",
                "400": "#a3a3a3",
                "500": "#737373",
                "600": "#525252",
                "700": "#404040",
                "800": "#262626",
                "900": "#171717",
                "950": "#0a0a0a"
              },
              "stone": {
                "50": "#fafaf9",
                "100": "#f5f5f4",
                "200": "#e7e5e4",
                "300": "#d6d3d1",
                "400": "#a8a29e",
                "500": "#78716c",
                "600": "#57534e",
                "700": "#44403c",
                "800": "#292524",
                "900": "#1c1917",
                "950": "#0c0a09"
              }
            },
            "semantic": {
              "transitionDuration": "0.2s",
              "focusRing": {
                "width": "0",
                "style": "none",
                "color": "unset",
                "offset": "0"
              },
              "disabledOpacity": "0.38",
              "iconSize": "1rem",
              "anchorGutter": "0",
              "primary": {
                "50": "{emerald.50}",
                "100": "{emerald.100}",
                "200": "{emerald.200}",
                "300": "{emerald.300}",
                "400": "{emerald.400}",
                "500": "{emerald.500}",
                "600": "{emerald.600}",
                "700": "{emerald.700}",
                "800": "{emerald.800}",
                "900": "{emerald.900}",
                "950": "{emerald.950}"
              },
              "formField": {
                "paddingX": "0.75rem",
                "paddingY": "0.75rem",
                "sm": {
                  "fontSize": "0.875rem",
                  "paddingX": "0.625rem",
                  "paddingY": "0.625rem"
                },
                "lg": {
                  "fontSize": "1.125rem",
                  "paddingX": "0.825rem",
                  "paddingY": "0.825rem"
                },
                "borderRadius": "{border.radius.sm}",
                "focusRing": {
                  "width": "2px",
                  "style": "solid",
                  "color": "{primary.color}",
                  "offset": "-2px",
                  "shadow": "none"
                },
                "transitionDuration": "{transition.duration}"
              },
              "list": {
                "padding": "0.5rem 0",
                "gap": "0",
                "header": {
                  "padding": "0.75rem 1rem"
                },
                "option": {
                  "padding": "0.75rem 1rem",
                  "borderRadius": "{border.radius.none}"
                },
                "optionGroup": {
                  "padding": "0.75rem 1rem",
                  "fontWeight": "700"
                }
              },
              "content": {
                "borderRadius": "{border.radius.sm}"
              },
              "mask": {
                "transitionDuration": "0.15s"
              },
              "navigation": {
                "list": {
                  "padding": "0.5rem 0",
                  "gap": "0"
                },
                "item": {
                  "padding": "0.75rem 1rem",
                  "borderRadius": "{border.radius.none}",
                  "gap": "0.5rem"
                },
                "submenuLabel": {
                  "padding": "0.75rem 1rem",
                  "fontWeight": "700"
                },
                "submenuIcon": {
                  "size": "0.875rem"
                }
              },
              "overlay": {
                "select": {
                  "borderRadius": "{border.radius.sm}",
                  "shadow": "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"
                },
                "popover": {
                  "borderRadius": "{border.radius.sm}",
                  "padding": "1rem",
                  "shadow": "0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"
                },
                "modal": {
                  "borderRadius": "{border.radius.sm}",
                  "padding": "1.5rem",
                  "shadow": "0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"
                },
                "navigation": {
                  "shadow": "0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"
                }
              },
              "colorScheme": {
                "light": {
                  "focusRing": {
                    "shadow": "0 0 1px 4px {surface.200}"
                  },
                  "surface": {
                    "0": "#ffffff",
                    "50": "{slate.50}",
                    "100": "{slate.100}",
                    "200": "{slate.200}",
                    "300": "{slate.300}",
                    "400": "{slate.400}",
                    "500": "{slate.500}",
                    "600": "{slate.600}",
                    "700": "{slate.700}",
                    "800": "{slate.800}",
                    "900": "{slate.900}",
                    "950": "{slate.950}"
                  },
                  "primary": {
                    "color": "{primary.500}",
                    "contrastColor": "#ffffff",
                    "hoverColor": "{primary.400}",
                    "activeColor": "{primary.300}"
                  },
                  "highlight": {
                    "background": "color-mix(in srgb, {primary.color}, transparent 88%)",
                    "focusBackground": "color-mix(in srgb, {primary.color}, transparent 76%)",
                    "color": "{primary.700}",
                    "focusColor": "{primary.800}"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.32)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.0}",
                    "disabledBackground": "{surface.300}",
                    "filledBackground": "{surface.100}",
                    "filledHoverBackground": "{surface.200}",
                    "filledFocusBackground": "{surface.100}",
                    "borderColor": "{surface.400}",
                    "hoverBorderColor": "{surface.900}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.800}",
                    "color": "{surface.900}",
                    "disabledColor": "{surface.600}",
                    "placeholderColor": "{surface.600}",
                    "invalidPlaceholderColor": "{red.800}",
                    "floatLabelColor": "{surface.600}",
                    "floatLabelFocusColor": "{primary.600}",
                    "floatLabelActiveColor": "{surface.600}",
                    "floatLabelInvalidColor": "{form.field.invalid.placeholder.color}",
                    "iconColor": "{surface.600}",
                    "shadow": "none"
                  },
                  "text": {
                    "color": "{surface.900}",
                    "hoverColor": "{surface.900}",
                    "mutedColor": "{surface.600}",
                    "hoverMutedColor": "{surface.600}"
                  },
                  "content": {
                    "background": "{surface.0}",
                    "hoverBackground": "{surface.100}",
                    "borderColor": "{surface.300}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.0}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.0}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.0}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.100}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.600}",
                        "focusColor": "{surface.600}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.100}",
                      "activeBackground": "{surface.200}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.600}",
                        "focusColor": "{surface.600}",
                        "activeColor": "{surface.600}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.600}",
                      "focusColor": "{surface.600}",
                      "activeColor": "{surface.600}"
                    }
                  }
                },
                "dark": {
                  "focusRing": {
                    "shadow": "0 0 1px 4px {surface.700}"
                  },
                  "surface": {
                    "0": "#ffffff",
                    "50": "{zinc.50}",
                    "100": "{zinc.100}",
                    "200": "{zinc.200}",
                    "300": "{zinc.300}",
                    "400": "{zinc.400}",
                    "500": "{zinc.500}",
                    "600": "{zinc.600}",
                    "700": "{zinc.700}",
                    "800": "{zinc.800}",
                    "900": "{zinc.900}",
                    "950": "{zinc.950}"
                  },
                  "primary": {
                    "color": "{primary.400}",
                    "contrastColor": "{surface.900}",
                    "hoverColor": "{primary.300}",
                    "activeColor": "{primary.200}"
                  },
                  "highlight": {
                    "background": "color-mix(in srgb, {primary.400}, transparent 84%)",
                    "focusBackground": "color-mix(in srgb, {primary.400}, transparent 76%)",
                    "color": "rgba(255,255,255,.87)",
                    "focusColor": "rgba(255,255,255,.87)"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.6)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.950}",
                    "disabledBackground": "{surface.700}",
                    "filledBackground": "{surface.800}",
                    "filledHoverBackground": "{surface.700}",
                    "filledFocusBackground": "{surface.800}",
                    "borderColor": "{surface.600}",
                    "hoverBorderColor": "{surface.400}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.300}",
                    "color": "{surface.0}",
                    "disabledColor": "{surface.400}",
                    "placeholderColor": "{surface.400}",
                    "invalidPlaceholderColor": "{red.300}",
                    "floatLabelColor": "{surface.400}",
                    "floatLabelFocusColor": "{primary.color}",
                    "floatLabelActiveColor": "{surface.400}",
                    "floatLabelInvalidColor": "{form.field.invalid.placeholder.color}",
                    "iconColor": "{surface.400}",
                    "shadow": "none"
                  },
                  "text": {
                    "color": "{surface.0}",
                    "hoverColor": "{surface.0}",
                    "mutedColor": "{surface.400}",
                    "hoverMutedColor": "{surface.400}"
                  },
                  "content": {
                    "background": "{surface.900}",
                    "hoverBackground": "{surface.800}",
                    "borderColor": "{surface.700}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.900}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.900}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.900}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.800}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.400}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.800}",
                      "activeBackground": "{surface.700}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.400}",
                        "activeColor": "{surface.400}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.400}",
                      "focusColor": "{surface.400}",
                      "activeColor": "{surface.400}"
                    }
                  }
                }
              }
            },
            "components": {
              "accordion": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}"
                },
                "header": {
                  "color": "{text.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{text.color}",
                  "padding": "1.25rem",
                  "fontWeight": "600",
                  "borderRadius": "0",
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "activeBackground": "{content.background}",
                  "activeHoverBackground": "{content.background}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  },
                  "toggleIcon": {
                    "color": "{text.muted.color}",
                    "hoverColor": "{text.muted.color}",
                    "activeColor": "{text.muted.color}",
                    "activeHoverColor": "{text.muted.color}"
                  },
                  "first": {
                    "topBorderRadius": "{content.border.radius}",
                    "borderWidth": "0"
                  },
                  "last": {
                    "bottomBorderRadius": "{content.border.radius}",
                    "activeBottomBorderRadius": "0"
                  }
                },
                "content": {
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "color": "{text.color}",
                  "padding": "0 1.25rem 1.25rem 1.25rem"
                }
              },
              "autocomplete": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "dropdown": {
                  "width": "3rem",
                  "sm": {
                    "width": "2.5rem"
                  },
                  "lg": {
                    "width": "3.5rem"
                  },
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "chip": {
                      "focusBackground": "{surface.300}",
                      "focusColor": "{surface.950}"
                    },
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    }
                  },
                  "dark": {
                    "chip": {
                      "focusBackground": "{surface.600}",
                      "focusColor": "{surface.0}"
                    },
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    }
                  }
                }
              },
              "avatar": {
                "root": {
                  "width": "2rem",
                  "height": "2rem",
                  "fontSize": "1rem",
                  "background": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "icon": {
                  "size": "1rem"
                },
                "group": {
                  "borderColor": "{content.background}",
                  "offset": "-0.75rem"
                },
                "lg": {
                  "width": "3rem",
                  "height": "3rem",
                  "fontSize": "1.5rem",
                  "icon": {
                    "size": "1.5rem"
                  },
                  "group": {
                    "offset": "-1rem"
                  }
                },
                "xl": {
                  "width": "4rem",
                  "height": "4rem",
                  "fontSize": "2rem",
                  "icon": {
                    "size": "2rem"
                  },
                  "group": {
                    "offset": "-1.5rem"
                  }
                },
                "css": ""
              },
              "badge": {
                "root": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0 0.5rem",
                  "fontSize": "0.75rem",
                  "fontWeight": "700",
                  "minWidth": "1.5rem",
                  "height": "1.5rem"
                },
                "dot": {
                  "size": "0.5rem"
                },
                "sm": {
                  "fontSize": "0.625rem",
                  "minWidth": "1.25rem",
                  "height": "1.25rem"
                },
                "lg": {
                  "fontSize": "0.875rem",
                  "minWidth": "1.75rem",
                  "height": "1.75rem"
                },
                "xl": {
                  "fontSize": "1rem",
                  "minWidth": "2rem",
                  "height": "2rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.500}",
                      "color": "{surface.0}"
                    },
                    "info": {
                      "background": "{sky.500}",
                      "color": "{surface.0}"
                    },
                    "warn": {
                      "background": "{orange.500}",
                      "color": "{surface.0}"
                    },
                    "danger": {
                      "background": "{red.500}",
                      "color": "{surface.0}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "{green.400}",
                      "color": "{green.950}"
                    },
                    "info": {
                      "background": "{sky.400}",
                      "color": "{sky.950}"
                    },
                    "warn": {
                      "background": "{orange.400}",
                      "color": "{orange.950}"
                    },
                    "danger": {
                      "background": "{red.400}",
                      "color": "{red.950}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                },
                "css": ""
              },
              "blockui": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                },
                "css": ""
              },
              "breadcrumb": {
                "root": {
                  "padding": "1rem",
                  "background": "{content.background}",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "item": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "hoverColor": "{navigation.item.icon.focus.color}"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "separator": {
                  "color": "{navigation.item.icon.color}"
                },
                "css": ""
              },
              "button": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "gap": "0.5rem",
                  "paddingX": "1rem",
                  "paddingY": "0.625rem",
                  "iconOnlyWidth": "3rem",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}",
                    "iconOnlyWidth": "2.5rem"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}",
                    "iconOnlyWidth": "3.5rem"
                  },
                  "label": {
                    "fontWeight": "500"
                  },
                  "raisedShadow": "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  },
                  "badgeSize": "1rem",
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.100}",
                        "hoverBackground": "{surface.200}",
                        "activeBackground": "{surface.300}",
                        "borderColor": "{surface.100}",
                        "hoverBorderColor": "{surface.200}",
                        "activeBorderColor": "{surface.300}",
                        "color": "{surface.600}",
                        "hoverColor": "{surface.700}",
                        "activeColor": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.500}",
                        "hoverBackground": "{sky.400}",
                        "activeBackground": "{sky.300}",
                        "borderColor": "{sky.500}",
                        "hoverBorderColor": "{sky.400}",
                        "activeBorderColor": "{sky.300}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{sky.500}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.500}",
                        "hoverBackground": "{green.400}",
                        "activeBackground": "{green.300}",
                        "borderColor": "{green.500}",
                        "hoverBorderColor": "{green.400}",
                        "activeBorderColor": "{green.300}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.500}",
                        "hoverBackground": "{orange.400}",
                        "activeBackground": "{orange.300}",
                        "borderColor": "{orange.500}",
                        "hoverBorderColor": "{orange.400}",
                        "activeBorderColor": "{orange.300}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{orange.500}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.500}",
                        "hoverBackground": "{purple.400}",
                        "activeBackground": "{purple.300}",
                        "borderColor": "{purple.500}",
                        "hoverBorderColor": "{purple.400}",
                        "activeBorderColor": "{purple.300}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{purple.500}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.500}",
                        "hoverBackground": "{red.400}",
                        "activeBackground": "{red.300}",
                        "borderColor": "{red.500}",
                        "hoverBorderColor": "{red.400}",
                        "activeBorderColor": "{red.300}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.950}",
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.950}",
                        "hoverBorderColor": "{surface.800}",
                        "activeBorderColor": "{surface.700}",
                        "color": "{surface.0}",
                        "hoverColor": "{surface.0}",
                        "activeColor": "{surface.0}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "borderColor": "{primary.color}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.600}",
                        "color": "{surface.600}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "borderColor": "{green.500}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "borderColor": "{sky.500}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "borderColor": "{orange.500}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "borderColor": "{purple.500}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "borderColor": "{red.500}",
                        "color": "{red.500}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.950}",
                        "color": "{surface.950}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.900}",
                        "color": "{surface.900}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.600}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "color": "{red.500}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.950}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.900}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.800}",
                        "hoverBackground": "{surface.700}",
                        "activeBackground": "{surface.600}",
                        "borderColor": "{surface.800}",
                        "hoverBorderColor": "{surface.700}",
                        "activeBorderColor": "{surface.600}",
                        "color": "{surface.300}",
                        "hoverColor": "{surface.200}",
                        "activeColor": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.400}",
                        "hoverBackground": "{sky.300}",
                        "activeBackground": "{sky.200}",
                        "borderColor": "{sky.400}",
                        "hoverBorderColor": "{sky.300}",
                        "activeBorderColor": "{sky.200}",
                        "color": "{sky.950}",
                        "hoverColor": "{sky.950}",
                        "activeColor": "{sky.950}",
                        "focusRing": {
                          "color": "{sky.400}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.400}",
                        "hoverBackground": "{green.300}",
                        "activeBackground": "{green.200}",
                        "borderColor": "{green.400}",
                        "hoverBorderColor": "{green.300}",
                        "activeBorderColor": "{green.200}",
                        "color": "{green.950}",
                        "hoverColor": "{green.950}",
                        "activeColor": "{green.950}",
                        "focusRing": {
                          "color": "{green.400}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.400}",
                        "hoverBackground": "{orange.300}",
                        "activeBackground": "{orange.200}",
                        "borderColor": "{orange.400}",
                        "hoverBorderColor": "{orange.300}",
                        "activeBorderColor": "{orange.200}",
                        "color": "{orange.950}",
                        "hoverColor": "{orange.950}",
                        "activeColor": "{orange.950}",
                        "focusRing": {
                          "color": "{orange.400}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.400}",
                        "hoverBackground": "{purple.300}",
                        "activeBackground": "{purple.200}",
                        "borderColor": "{purple.400}",
                        "hoverBorderColor": "{purple.300}",
                        "activeBorderColor": "{purple.200}",
                        "color": "{purple.950}",
                        "hoverColor": "{purple.950}",
                        "activeColor": "{purple.950}",
                        "focusRing": {
                          "color": "{purple.400}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.400}",
                        "hoverBackground": "{red.300}",
                        "activeBackground": "{red.200}",
                        "borderColor": "{red.400}",
                        "hoverBorderColor": "{red.300}",
                        "activeBorderColor": "{red.200}",
                        "color": "{red.950}",
                        "hoverColor": "{red.950}",
                        "activeColor": "{red.950}",
                        "focusRing": {
                          "color": "{red.400}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.0}",
                        "hoverBackground": "{surface.100}",
                        "activeBackground": "{surface.200}",
                        "borderColor": "{surface.0}",
                        "hoverBorderColor": "{surface.100}",
                        "activeBorderColor": "{surface.200}",
                        "color": "{surface.950}",
                        "hoverColor": "{surface.950}",
                        "activeColor": "{surface.950}",
                        "focusRing": {
                          "color": "{surface.0}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "borderColor": "{primary.700}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "rgba(255,255,255,0.04)",
                        "activeBackground": "rgba(255,255,255,0.16)",
                        "borderColor": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "borderColor": "{green.700}",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "borderColor": "{sky.700}",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "borderColor": "{orange.700}",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {purple.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {purple.400}, transparent 84%)",
                        "borderColor": "{purple.700}",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {red.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {red.400}, transparent 84%)",
                        "borderColor": "{red.700}",
                        "color": "{red.400}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.500}",
                        "color": "{surface.0}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.600}",
                        "color": "{surface.0}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {purple.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {purple.400}, transparent 84%)",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {red.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {red.400}, transparent 84%)",
                        "color": "{red.400}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.0}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.0}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  }
                }
              },
              "datepicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "0.5rem"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "padding": "0 0 0.5rem 0"
                },
                "title": {
                  "gap": "0.5rem",
                  "fontWeight": "700"
                },
                "dropdown": {
                  "width": "3rem",
                  "sm": {
                    "width": "2.5rem"
                  },
                  "lg": {
                    "width": "3.5rem"
                  },
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                },
                "inputIcon": {
                  "color": "{form.field.icon.color}"
                },
                "selectMonth": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{content.border.radius}"
                },
                "selectYear": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{content.border.radius}"
                },
                "group": {
                  "borderColor": "{content.border.color}",
                  "gap": "{overlay.popover.padding}"
                },
                "dayView": {
                  "margin": "0.5rem 0 0 0"
                },
                "weekDay": {
                  "padding": "0.5rem",
                  "fontWeight": "700",
                  "color": "{content.color}"
                },
                "date": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{primary.color}",
                  "rangeSelectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{primary.contrast.color}",
                  "rangeSelectedColor": "{highlight.color}",
                  "width": "2.5rem",
                  "height": "2.5rem",
                  "borderRadius": "50%",
                  "padding": "0.125rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "monthView": {
                  "margin": "0.5rem 0 0 0"
                },
                "month": {
                  "padding": "0.625rem",
                  "borderRadius": "{content.border.radius}"
                },
                "yearView": {
                  "margin": "0.5rem 0 0 0"
                },
                "year": {
                  "padding": "0.625rem",
                  "borderRadius": "{content.border.radius}"
                },
                "buttonbar": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}"
                },
                "timePicker": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}",
                  "gap": "0.5rem",
                  "buttonGap": "0.25rem"
                },
                "colorScheme": {
                  "light": {
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    },
                    "today": {
                      "background": "{surface.200}",
                      "color": "{surface.900}"
                    }
                  },
                  "dark": {
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    },
                    "today": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "card": {
                "root": {
                  "background": "{content.background}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "shadow": "0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"
                },
                "body": {
                  "padding": "1.5rem",
                  "gap": "0.75rem"
                },
                "caption": {
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "500"
                },
                "subtitle": {
                  "color": "{text.muted.color}"
                },
                "css": ""
              },
              "carousel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "gap": "0.25rem"
                },
                "indicatorList": {
                  "padding": "1rem",
                  "gap": "1rem"
                },
                "indicator": {
                  "width": "1.25rem",
                  "height": "1.25rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                },
                "colorScheme": {
                  "light": {
                    "indicator": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}",
                      "activeBackground": "{primary.color}"
                    }
                  },
                  "dark": {
                    "indicator": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}",
                      "activeBackground": "{primary.color}"
                    }
                  }
                }
              },
              "cascadeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "mobileIndent": "1rem"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "icon": {
                    "color": "{list.option.icon.color}",
                    "focusColor": "{list.option.icon.focus.color}",
                    "size": "0.875rem"
                  }
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "checkbox": {
                "root": {
                  "borderRadius": "{border.radius.xs}",
                  "width": "18px",
                  "height": "18px",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "width": "14px",
                    "height": "14px"
                  },
                  "lg": {
                    "width": "22px",
                    "height": "22px"
                  }
                },
                "icon": {
                  "size": "0.875rem",
                  "color": "{form.field.color}",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "sm": {
                    "size": "0.75rem"
                  },
                  "lg": {
                    "size": "1rem"
                  }
                }
              },
              "chip": {
                "root": {
                  "borderRadius": "2rem",
                  "paddingX": "0.75rem",
                  "paddingY": "0.75rem",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "image": {
                  "width": "2.25rem",
                  "height": "2.25rem"
                },
                "icon": {
                  "size": "1rem"
                },
                "removeIcon": {
                  "size": "1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.200}",
                      "color": "{surface.900}"
                    },
                    "icon": {
                      "color": "{surface.600}"
                    },
                    "removeIcon": {
                      "color": "{surface.600}",
                      "focusRing": {
                        "shadow": "0 0 1px 4px {surface.300}"
                      }
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    },
                    "icon": {
                      "color": "{surface.0}"
                    },
                    "removeIcon": {
                      "color": "{surface.0}",
                      "focusRing": {
                        "shadow": "0 0 1px 4px {surface.600}"
                      }
                    }
                  }
                },
                "css": ""
              },
              "colorpicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "width": "2rem",
                  "height": "2rem",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "panel": {
                  "shadow": "{overlay.popover.shadow}",
                  "borderRadius": "{overlay.popover.borderRadius}"
                },
                "colorScheme": {
                  "light": {
                    "panel": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.900}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "panel": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  }
                },
                "css": ""
              },
              "confirmdialog": {
                "icon": {
                  "size": "2rem",
                  "color": "{overlay.modal.color}"
                },
                "content": {
                  "gap": "1rem"
                },
                "css": ""
              },
              "confirmpopup": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "1rem"
                },
                "icon": {
                  "size": "1.5rem",
                  "color": "{overlay.popover.color}"
                },
                "footer": {
                  "gap": "0.5rem",
                  "padding": "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
                },
                "css": ""
              },
              "contextmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "transparent",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "mobileIndent": "1rem"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "css": ""
              },
              "dataview": {
                "root": {
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "padding": "0"
                },
                "header": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "padding": "0",
                  "borderRadius": "0"
                },
                "footer": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0"
                },
                "css": ""
              },
              "datatable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{datatable.border.color}",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "dropPoint": {
                  "color": "{primary.color}"
                },
                "columnResizer": {
                  "width": "0.5rem"
                },
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "size": "0.875rem"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "rowToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "filter": {
                  "inlineGap": "0.5rem",
                  "overlaySelect": {
                    "background": "{overlay.select.background}",
                    "borderColor": "{overlay.select.border.color}",
                    "borderRadius": "{overlay.select.border.radius}",
                    "color": "{overlay.select.color}",
                    "shadow": "{overlay.select.shadow}"
                  },
                  "overlayPopover": {
                    "background": "{overlay.popover.background}",
                    "borderColor": "{overlay.popover.border.color}",
                    "borderRadius": "{overlay.popover.border.radius}",
                    "color": "{overlay.popover.color}",
                    "shadow": "{overlay.popover.shadow}",
                    "padding": "{overlay.popover.padding}",
                    "gap": "0.5rem"
                  },
                  "rule": {
                    "borderColor": "{content.border.color}"
                  },
                  "constraintList": {
                    "padding": "{list.padding}",
                    "gap": "{list.gap}"
                  },
                  "constraint": {
                    "focusBackground": "{list.option.focus.background}",
                    "selectedBackground": "{list.option.selected.background}",
                    "selectedFocusBackground": "{list.option.selected.focus.background}",
                    "color": "{list.option.color}",
                    "focusColor": "{list.option.focus.color}",
                    "selectedColor": "{list.option.selected.color}",
                    "selectedFocusColor": "{list.option.selected.focus.color}",
                    "separator": {
                      "borderColor": "{content.border.color}"
                    },
                    "padding": "{list.option.padding}",
                    "borderRadius": "{list.option.border.radius}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "row": {
                      "stripedBackground": "{surface.50}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "row": {
                      "stripedBackground": "{surface.950}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                },
                "css": "\n.p-datatable-header-cell,\n.p-datatable-tbody > tr {\n    transition: none;\n}\n"
              },
              "dialog": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "borderRadius": "{overlay.modal.border.radius}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}",
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
                  "gap": "0.5rem"
                },
                "css": ""
              },
              "divider": {
                "root": {
                  "borderColor": "{content.border.color}"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{text.color}"
                },
                "horizontal": {
                  "margin": "1rem 0",
                  "padding": "0 1rem",
                  "content": {
                    "padding": "0 0.5rem"
                  }
                },
                "vertical": {
                  "margin": "0 1rem",
                  "padding": "0.5rem 0",
                  "content": {
                    "padding": "0.5rem 0"
                  }
                },
                "css": ""
              },
              "dock": {
                "root": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "borderColor": "rgba(255, 255, 255, 0.2)",
                  "padding": "0.5rem",
                  "borderRadius": "{border.radius.xl}"
                },
                "item": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "0.5rem",
                  "size": "3rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "css": ""
              },
              "drawer": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}"
                },
                "title": {
                  "fontSize": "1.5rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "{overlay.modal.padding}"
                },
                "css": ""
              },
              "editor": {
                "toolbar": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "toolbarItem": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}",
                  "padding": "{list.padding}"
                },
                "overlayOption": {
                  "focusBackground": "{list.option.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "content": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "css": "\n.p-editor .p-editor-toolbar {\n    padding: 0.75rem\n}\n"
              },
              "fieldset": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "padding": "0 1.25rem 1.25rem 1.25rem",
                  "transitionDuration": "{transition.duration}"
                },
                "legend": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "padding": "0.75rem 1rem",
                  "gap": "0.5rem",
                  "fontWeight": "600",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                },
                "toggleIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "content": {
                  "padding": "0"
                }
              },
              "fileupload": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.25rem",
                  "borderColor": "unset",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "gap": "0.5rem"
                },
                "content": {
                  "highlightBorderColor": "{primary.color}",
                  "padding": "0 1.25rem 1.25rem 1.25rem",
                  "gap": "1rem"
                },
                "file": {
                  "padding": "1rem",
                  "gap": "1rem",
                  "borderColor": "{content.border.color}",
                  "info": {
                    "gap": "0.5rem"
                  }
                },
                "fileList": {
                  "gap": "0.5rem"
                },
                "progressbar": {
                  "height": "0.25rem"
                },
                "basic": {
                  "gap": "0.5rem"
                },
                "css": ""
              },
              "iftalabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s",
                  "positionX": "{form.field.padding.x}",
                  "top": "0.5rem",
                  "fontSize": "0.75rem",
                  "fontWeight": "400"
                },
                "input": {
                  "paddingTop": "1.5rem",
                  "paddingBottom": "0.5rem"
                },
                "css": ""
              },
              "floatlabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "activeColor": "{form.field.float.label.active.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s",
                  "positionX": "{form.field.padding.x}",
                  "positionY": "{form.field.padding.y}",
                  "fontWeight": "500",
                  "active": {
                    "fontSize": "0.75rem",
                    "fontWeight": "400"
                  }
                },
                "over": {
                  "active": {
                    "top": "-1.25rem"
                  }
                },
                "in": {
                  "input": {
                    "paddingTop": "1.5rem",
                    "paddingBottom": "0.5rem"
                  },
                  "active": {
                    "top": "0.5rem"
                  }
                },
                "on": {
                  "borderRadius": "{border.radius.xs}",
                  "active": {
                    "background": "{form.field.background}",
                    "padding": "0 0.125rem"
                  }
                },
                "css": ""
              },
              "galleria": {
                "root": {
                  "borderWidth": "1px",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.100}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "prev": {
                    "borderRadius": "50%"
                  },
                  "next": {
                    "borderRadius": "50%"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "navIcon": {
                  "size": "1.5rem"
                },
                "thumbnailsContent": {
                  "background": "{content.background}",
                  "padding": "1rem 0.25rem"
                },
                "thumbnailNavButton": {
                  "size": "2rem",
                  "borderRadius": "50%",
                  "gutter": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "thumbnailNavButtonIcon": {
                  "size": "1rem"
                },
                "caption": {
                  "background": "rgba(0, 0, 0, 0.5)",
                  "color": "{surface.100}",
                  "padding": "1rem"
                },
                "indicatorList": {
                  "gap": "0.5rem",
                  "padding": "1rem"
                },
                "indicatorButton": {
                  "width": "1rem",
                  "height": "1rem",
                  "activeBackground": "{primary.color}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "insetIndicatorList": {
                  "background": "rgba(0, 0, 0, 0.5)"
                },
                "insetIndicatorButton": {
                  "background": "rgba(255, 255, 255, 0.4)",
                  "hoverBackground": "rgba(255, 255, 255, 0.6)",
                  "activeBackground": "rgba(255, 255, 255, 0.9)"
                },
                "closeButton": {
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "closeButtonIcon": {
                  "size": "1.5rem"
                },
                "colorScheme": {
                  "light": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.100}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}"
                    },
                    "indicatorButton": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}"
                    }
                  },
                  "dark": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.700}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.0}"
                    },
                    "indicatorButton": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}"
                    }
                  }
                },
                "css": ""
              },
              "iconfield": {
                "icon": {
                  "color": "{form.field.icon.color}"
                },
                "css": ""
              },
              "image": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "icon": {
                    "size": "1.5rem"
                  },
                  "mask": {
                    "background": "{mask.background}",
                    "color": "{mask.color}"
                  }
                },
                "toolbar": {
                  "position": {
                    "left": "auto",
                    "right": "1rem",
                    "top": "1rem",
                    "bottom": "auto"
                  },
                  "blur": "8px",
                  "background": "rgba(255,255,255,0.1)",
                  "borderColor": "rgba(255,255,255,0.2)",
                  "borderWidth": "1px",
                  "borderRadius": "30px",
                  "padding": ".5rem",
                  "gap": "0.5rem"
                },
                "action": {
                  "hoverBackground": "rgba(255,255,255,0.1)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "iconSize": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "css": ""
              },
              "imagecompare": {
                "handle": {
                  "size": "20px",
                  "hoverSize": "40px",
                  "background": "rgba(255,255,255,0.4)",
                  "hoverBackground": "rgba(255,255,255,0.6)",
                  "borderColor": "unset",
                  "hoverBorderColor": "unset",
                  "borderWidth": "0",
                  "borderRadius": "50%",
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "rgba(255,255,255,0.3)",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "css": ""
              },
              "inlinemessage": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem"
                },
                "text": {
                  "fontWeight": "500"
                },
                "icon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  }
                },
                "css": ""
              },
              "inplace": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "display": {
                  "hoverBackground": "{content.hover.background}",
                  "hoverColor": "{content.hover.color}"
                },
                "css": ""
              },
              "inputchips": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "colorScheme": {
                  "light": {
                    "chip": {
                      "focusBackground": "{surface.200}",
                      "color": "{surface.800}"
                    }
                  },
                  "dark": {
                    "chip": {
                      "focusBackground": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                },
                "css": ""
              },
              "inputgroup": {
                "addon": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.icon.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "padding": "0.75rem",
                  "minWidth": "3rem"
                }
              },
              "inputnumber": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "button": {
                  "width": "3rem",
                  "borderRadius": "{form.field.border.radius}",
                  "verticalPadding": "{form.field.padding.y}"
                },
                "colorScheme": {
                  "light": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.100}",
                      "activeBackground": "{surface.200}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.500}",
                      "activeColor": "{surface.600}"
                    }
                  },
                  "dark": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.800}",
                      "activeBackground": "{surface.700}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "activeColor": "{surface.200}"
                    }
                  }
                }
              },
              "inputotp": {
                "root": {
                  "gap": "0.5rem"
                },
                "input": {
                  "width": "3rem",
                  "sm": {
                    "width": "2.5rem"
                  },
                  "lg": {
                    "width": "3.5rem"
                  }
                },
                "css": ""
              },
              "inputtext": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                }
              },
              "knob": {
                "root": {
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "value": {
                  "background": "{primary.color}"
                },
                "range": {
                  "background": "{content.border.color}"
                },
                "text": {
                  "color": "{text.muted.color}"
                },
                "css": ""
              },
              "listbox": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "borderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "shadow": "{form.field.shadow}",
                  "borderRadius": "{form.field.border.radius}",
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "option": {
                      "stripedBackground": "{surface.50}"
                    }
                  },
                  "dark": {
                    "option": {
                      "stripedBackground": "{surface.900}"
                    }
                  }
                },
                "css": "\n.p-listbox-option {\n    transition: none;\n}\n"
              },
              "megamenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "verticalOrientation": {
                    "padding": "{navigation.list.padding}",
                    "gap": "{navigation.list.gap}"
                  },
                  "horizontalOrientation": {
                    "padding": "0.5rem 0.75rem",
                    "gap": "0.5rem"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "overlay": {
                  "padding": "0",
                  "background": "{content.background}",
                  "borderColor": "transparent",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "shadow": "{overlay.navigation.shadow}",
                  "gap": "0.5rem"
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background.}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "2.5rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                }
              },
              "menu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background}",
                  "color": "{navigation.submenu.label.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "css": "\n.p-menu-overlay {\n    border-color: transparent;\n}\n"
              },
              "menubar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.5rem 0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}",
                  "background": "{content.background}",
                  "borderColor": "transparent",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "mobileIndent": "1rem",
                  "icon": {
                    "size": "{navigation.submenu.icon.size}",
                    "color": "{navigation.submenu.icon.color}",
                    "focusColor": "{navigation.submenu.icon.focus.color}",
                    "activeColor": "{navigation.submenu.icon.active.color}"
                  }
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "2.5rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                }
              },
              "message": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "0",
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "padding": "1rem 1.25rem",
                  "gap": "0.5rem",
                  "sm": {
                    "padding": "0.625rem 0.625rem"
                  },
                  "lg": {
                    "padding": "0.825rem 0.825rem"
                  }
                },
                "text": {
                  "fontSize": "1rem",
                  "fontWeight": "500",
                  "sm": {
                    "fontSize": "0.875rem"
                  },
                  "lg": {
                    "fontSize": "1.125rem"
                  }
                },
                "icon": {
                  "size": "1.25rem",
                  "sm": {
                    "size": "1rem"
                  },
                  "lg": {
                    "size": "1.5rem"
                  }
                },
                "closeButton": {
                  "width": "2rem",
                  "height": "2rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem",
                  "sm": {
                    "size": "0.875rem"
                  },
                  "lg": {
                    "size": "1.125rem"
                  }
                },
                "outlined": {
                  "root": {
                    "borderWidth": "1px"
                  }
                },
                "simple": {
                  "content": {
                    "padding": "0"
                  }
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{blue.600}",
                        "borderColor": "{blue.600}"
                      },
                      "simple": {
                        "color": "{blue.600}"
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{green.600}",
                        "borderColor": "{green.600}"
                      },
                      "simple": {
                        "color": "{green.600}"
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.900}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{yellow.900}",
                        "borderColor": "{yellow.900}"
                      },
                      "simple": {
                        "color": "{yellow.900}"
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{red.600}",
                        "borderColor": "{red.600}"
                      },
                      "simple": {
                        "color": "{red.600}"
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.600}",
                        "borderColor": "{surface.600}"
                      },
                      "simple": {
                        "color": "{surface.600}"
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.950}",
                        "borderColor": "{surface.950}"
                      },
                      "simple": {
                        "color": "{surface.950}"
                      }
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{blue.500}",
                        "borderColor": "{blue.500}"
                      },
                      "simple": {
                        "color": "{blue.500}"
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{green.500}",
                        "borderColor": "{green.500}"
                      },
                      "simple": {
                        "color": "{green.500}"
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{yellow.500}",
                        "borderColor": "{yellow.500}"
                      },
                      "simple": {
                        "color": "{yellow.500}"
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{red.500}",
                        "borderColor": "{red.500}"
                      },
                      "simple": {
                        "color": "{red.500}"
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.400}",
                        "borderColor": "{surface.400}"
                      },
                      "simple": {
                        "color": "{surface.400}"
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "none",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.0}",
                        "borderColor": "{surface.0}"
                      },
                      "simple": {
                        "color": "{surface.0}"
                      }
                    }
                  }
                },
                "css": ""
              },
              "metergroup": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "gap": "1rem"
                },
                "meters": {
                  "background": "{content.border.color}",
                  "size": "0.5rem"
                },
                "label": {
                  "gap": "0.5rem"
                },
                "labelMarker": {
                  "size": "0.5rem"
                },
                "labelIcon": {
                  "size": "1rem"
                },
                "labelList": {
                  "verticalGap": "0.5rem",
                  "horizontalGap": "1rem"
                },
                "css": ""
              },
              "multiselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "gap": "0.75rem"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "orderlist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                },
                "css": ""
              },
              "organizationchart": {
                "root": {
                  "gutter": "0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "selectedColor": "{highlight.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "1rem 1.25rem",
                  "toggleablePadding": "1rem 1.25rem 1.5rem 1.25rem",
                  "borderRadius": "{content.border.radius}"
                },
                "nodeToggleButton": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "connector": {
                  "color": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "24px"
                },
                "css": ""
              },
              "overlaybadge": {
                "root": {
                  "outline": {
                    "width": "2px",
                    "color": "{content.background}"
                  }
                },
                "css": ""
              },
              "popover": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}"
                },
                "css": ""
              },
              "paginator": {
                "root": {
                  "padding": "0.5rem 1rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "transparent",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}",
                  "width": "2.5rem",
                  "height": "2.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "currentPageReport": {
                  "color": "{text.muted.color}"
                },
                "jumpToPageInput": {
                  "maxWidth": "2.5rem"
                },
                "css": ""
              },
              "password": {
                "meter": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": ".75rem"
                },
                "icon": {
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "color": "{overlay.popover.color}",
                  "padding": "{overlay.popover.padding}",
                  "shadow": "{overlay.popover.shadow}"
                },
                "content": {
                  "gap": "0.5rem"
                },
                "colorScheme": {
                  "light": {
                    "strength": {
                      "weakBackground": "{red.500}",
                      "mediumBackground": "{amber.500}",
                      "strongBackground": "{green.500}"
                    }
                  },
                  "dark": {
                    "strength": {
                      "weakBackground": "{red.400}",
                      "mediumBackground": "{amber.400}",
                      "strongBackground": "{green.400}"
                    }
                  }
                },
                "css": ""
              },
              "panel": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.25rem",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0",
                  "borderRadius": "0"
                },
                "toggleableHeader": {
                  "padding": "0.5rem 1.25rem"
                },
                "title": {
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 1.25rem 1.25rem 1.25rem"
                },
                "footer": {
                  "padding": "0 1.25rem 1.25rem 1.25rem"
                },
                "css": ""
              },
              "panelmenu": {
                "root": {
                  "gap": "0",
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0",
                  "color": "{content.color}",
                  "padding": "0",
                  "borderRadius": "0",
                  "first": {
                    "borderWidth": "0",
                    "topBorderRadius": "{content.border.radius}"
                  },
                  "last": {
                    "borderWidth": "0",
                    "bottomBorderRadius": "{content.border.radius}"
                  }
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "gap": "0.5rem",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{content.border.radius}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenu": {
                  "indent": "1rem"
                },
                "submenuIcon": {
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}"
                }
              },
              "picklist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                },
                "css": ""
              },
              "progressbar": {
                "root": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "1rem"
                },
                "value": {
                  "background": "{primary.color}"
                },
                "label": {
                  "color": "{primary.contrast.color}",
                  "fontSize": "0.75rem",
                  "fontWeight": "600"
                },
                "css": ""
              },
              "progressspinner": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "colorOne": "{red.500}",
                      "colorTwo": "{blue.500}",
                      "colorThree": "{green.500}",
                      "colorFour": "{yellow.500}"
                    }
                  },
                  "dark": {
                    "root": {
                      "colorOne": "{red.400}",
                      "colorTwo": "{blue.400}",
                      "colorThree": "{green.400}",
                      "colorFour": "{yellow.400}"
                    }
                  }
                },
                "css": ""
              },
              "radiobutton": {
                "root": {
                  "width": "20px",
                  "height": "20px",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.contrast.color}",
                  "checkedHoverBackground": "{primary.contrast.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "width": "16px",
                    "height": "16px"
                  },
                  "lg": {
                    "width": "24px",
                    "height": "24px"
                  }
                },
                "icon": {
                  "size": "10px",
                  "checkedColor": "{primary.color}",
                  "checkedHoverColor": "{primary.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "sm": {
                    "size": "8px"
                  },
                  "lg": {
                    "size": "12px"
                  }
                }
              },
              "rating": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                },
                "icon": {
                  "size": "1.125rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{primary.color}",
                  "activeColor": "{primary.color}"
                }
              },
              "ripple": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "rgba(0,0,0,0.1)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255,255,255,0.3)"
                    }
                  }
                },
                "css": ""
              },
              "scrollpanel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "bar": {
                  "size": "9px",
                  "borderRadius": "{border.radius.sm}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "bar": {
                      "background": "{surface.200}"
                    }
                  },
                  "dark": {
                    "bar": {
                      "background": "{surface.700}"
                    }
                  }
                },
                "css": ""
              },
              "select": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "selectbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  }
                },
                "css": ""
              },
              "skeleton": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.200}",
                      "animationBackground": "rgba(255,255,255,0.4)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255, 255, 255, 0.06)",
                      "animationBackground": "rgba(255, 255, 255, 0.04)"
                    }
                  }
                },
                "css": ""
              },
              "slider": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "track": {
                  "background": "{content.border.color}",
                  "borderRadius": "{border.radius.xs}",
                  "size": "2px"
                },
                "range": {
                  "background": "{primary.color}"
                },
                "handle": {
                  "width": "18px",
                  "height": "18px",
                  "borderRadius": "50%",
                  "background": "{primary.color}",
                  "hoverBackground": "{primary.color}",
                  "content": {
                    "borderRadius": "50%",
                    "background": "{primary.color}",
                    "hoverBackground": "{primary.color}",
                    "width": "18px",
                    "height": "18px",
                    "shadow": "0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"
                  },
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                }
              },
              "speeddial": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "css": ""
              },
              "splitter": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "gutter": {
                  "background": "{content.border.color}"
                },
                "handle": {
                  "size": "24px",
                  "background": "transparent",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "css": ""
              },
              "splitbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                },
                "css": ""
              },
              "stepper": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}",
                  "activeBackground": "{primary.color}",
                  "margin": "0 0 0 1.625rem",
                  "size": "2px"
                },
                "step": {
                  "padding": "0.5rem",
                  "gap": "1rem"
                },
                "stepHeader": {
                  "padding": "0.75rem 1rem",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  },
                  "gap": "0.5rem"
                },
                "stepTitle": {
                  "color": "{text.muted.color}",
                  "activeColor": "{text.color}",
                  "fontWeight": "500"
                },
                "stepNumber": {
                  "activeBackground": "{primary.color}",
                  "activeBorderColor": "{primary.color}",
                  "activeColor": "{primary.contrast.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "none"
                },
                "steppanels": {
                  "padding": "0.875rem 0.5rem 1.125rem 0.5rem"
                },
                "steppanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0",
                  "indent": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "stepNumber": {
                      "background": "{surface.400}",
                      "borderColor": "{surface.400}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "stepNumber": {
                      "background": "{surface.200}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.900}"
                    }
                  }
                }
              },
              "steps": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}"
                },
                "itemLink": {
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "itemLabel": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "itemNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                },
                "css": ""
              },
              "tabmenu": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "item": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "itemIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                },
                "css": ""
              },
              "tabs": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "background": "transparent",
                  "hoverBackground": "{content.hover.background}",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.25rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                },
                "tabpanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "1.25rem 1.25rem 1.25rem 1.25rem",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "width": "3rem",
                  "shadow": "none",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  }
                },
                "activeBar": {
                  "height": "2px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                }
              },
              "tabview": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tabList": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "tabPanel": {
                  "background": "{content.background}",
                  "color": "{content.color}"
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}"
                },
                "colorScheme": {
                  "light": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                  },
                  "dark": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                  }
                },
                "css": ""
              },
              "textarea": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                }
              },
              "tieredmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "mobileIndent": "1rem"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "css": "\n.p-tieredmenu-overlay {\n    border-color: transparent;\n}\n"
              },
              "tag": {
                "root": {
                  "fontSize": "0.875rem",
                  "fontWeight": "700",
                  "padding": "0.25rem 0.5rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "roundedBorderRadius": "{border.radius.xl}"
                },
                "icon": {
                  "size": "0.75rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.500}",
                      "color": "{surface.0}"
                    },
                    "info": {
                      "background": "{sky.500}",
                      "color": "{surface.0}"
                    },
                    "warn": {
                      "background": "{orange.500}",
                      "color": "{surface.0}"
                    },
                    "danger": {
                      "background": "{red.500}",
                      "color": "{surface.0}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "{green.400}",
                      "color": "{green.950}"
                    },
                    "info": {
                      "background": "{sky.400}",
                      "color": "{sky.950}"
                    },
                    "warn": {
                      "background": "{orange.400}",
                      "color": "{orange.950}"
                    },
                    "danger": {
                      "background": "{red.400}",
                      "color": "{red.950}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                },
                "css": ""
              },
              "terminal": {
                "root": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.color}",
                  "height": "18rem",
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{form.field.border.radius}"
                },
                "prompt": {
                  "gap": "0.25rem"
                },
                "commandResponse": {
                  "margin": "2px 0"
                },
                "css": ""
              },
              "timeline": {
                "event": {
                  "minHeight": "5rem"
                },
                "horizontal": {
                  "eventContent": {
                    "padding": "1rem 0"
                  }
                },
                "vertical": {
                  "eventContent": {
                    "padding": "0 1rem"
                  }
                },
                "eventMarker": {
                  "size": "1.5rem",
                  "borderRadius": "50%",
                  "borderWidth": "2px",
                  "background": "{primary.color}",
                  "content": {
                    "borderRadius": "50%",
                    "size": "0",
                    "background": "{primary.color}",
                    "insetShadow": "none"
                  }
                },
                "eventConnector": {
                  "color": "{content.border.color}",
                  "size": "2px"
                },
                "colorScheme": {
                  "light": {
                    "eventMarker": {
                      "borderColor": "{surface.0}"
                    }
                  },
                  "dark": {
                    "eventMarker": {
                      "borderColor": "{surface.900}"
                    }
                  }
                },
                "css": ""
              },
              "togglebutton": {
                "root": {
                  "padding": "0.75rem 1rem",
                  "borderRadius": "{form.field.border.radius}",
                  "gap": "0.5rem",
                  "fontWeight": "500",
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.color}",
                  "hoverColor": "{form.field.color}",
                  "checkedColor": "{form.field.color}",
                  "checkedBorderColor": "{form.field.border.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "disabledBorderColor": "{form.field.disabled.background}",
                  "disabledColor": "{form.field.disabled.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "offset": "0",
                    "color": "unset",
                    "shadow": "none"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "padding": "0.625rem 0.75rem"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "padding": "0.875rem 1.25rem"
                  }
                },
                "icon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.muted.color}",
                  "checkedColor": "{text.muted.color}",
                  "disabledColor": "{form.field.disabled.color}"
                },
                "content": {
                  "checkedBackground": "transparent",
                  "checkedShadow": "none",
                  "padding": "0",
                  "borderRadius": "0",
                  "sm": {
                    "padding": "0"
                  },
                  "lg": {
                    "padding": "0"
                  }
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "hoverBackground": "{surface.100}",
                      "checkedBackground": "{surface.200}"
                    }
                  },
                  "dark": {
                    "root": {
                      "hoverBackground": "{surface.800}",
                      "checkedBackground": "{surface.700}"
                    }
                  }
                }
              },
              "toggleswitch": {
                "root": {
                  "width": "2.75rem",
                  "height": "1rem",
                  "borderRadius": "30px",
                  "gap": "0px",
                  "shadow": "none",
                  "focusRing": {
                    "width": "0",
                    "style": "none",
                    "color": "unset",
                    "offset": "0",
                    "shadow": "none"
                  },
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "hoverBorderColor": "transparent",
                  "checkedBorderColor": "transparent",
                  "checkedHoverBorderColor": "transparent",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "transitionDuration": "{form.field.transition.duration}",
                  "slideDuration": "0.2s"
                },
                "handle": {
                  "borderRadius": "50%",
                  "size": "1.5rem"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.300}",
                      "disabledBackground": "{surface.400}",
                      "hoverBackground": "{surface.300}",
                      "checkedBackground": "{primary.200}",
                      "checkedHoverBackground": "{primary.200}"
                    },
                    "handle": {
                      "background": "{surface.0}",
                      "disabledBackground": "{surface.200}",
                      "hoverBackground": "{surface.0}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.color}",
                      "color": "{text.muted.color}",
                      "hoverColor": "{text.color}",
                      "checkedColor": "{primary.contrast.color}",
                      "checkedHoverColor": "{primary.contrast.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "disabledBackground": "{surface.600}",
                      "hoverBackground": "{surface.700}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.color}"
                    },
                    "handle": {
                      "background": "{surface.400}",
                      "disabledBackground": "{surface.500}",
                      "hoverBackground": "{surface.300}",
                      "checkedBackground": "{primary.200}",
                      "checkedHoverBackground": "{primary.200}",
                      "color": "{surface.800}",
                      "hoverColor": "{surface.900}",
                      "checkedColor": "{primary.contrast.color}",
                      "checkedHoverColor": "{primary.contrast.color}"
                    }
                  }
                }
              },
              "tree": {
                "root": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "1rem",
                  "gap": "2px",
                  "indent": "2rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{border.radius.xs}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.color}",
                  "hoverColor": "{text.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "nodeIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}"
                },
                "nodeToggleButton": {
                  "borderRadius": "50%",
                  "size": "2rem",
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedHoverColor": "{primary.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "filter": {
                  "margin": "0 0 0.75rem 0"
                },
                "css": "\n.p-tree-node-content {\n    transition: none;\n}\n"
              },
              "treeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "tree": {
                  "padding": "{list.padding}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "treetable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{treetable.border.color}",
                  "padding": "0.75rem 1rem",
                  "gap": "0.5rem"
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem"
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "columnResizer": {
                  "width": "0.5rem"
                },
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "size": "0.875rem"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "nodeToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                }
              },
              "toast": {
                "root": {
                  "width": "25rem",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "0",
                  "transitionDuration": "{transition.duration}"
                },
                "icon": {
                  "size": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "0.5rem"
                },
                "text": {
                  "gap": "0.5rem"
                },
                "summary": {
                  "fontWeight": "500",
                  "fontSize": "1rem"
                },
                "detail": {
                  "fontWeight": "500",
                  "fontSize": "0.875rem"
                },
                "closeButton": {
                  "width": "2rem",
                  "height": "2rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "blur": "0",
                    "info": {
                      "background": "{blue.50}",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "{green.50}",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "{yellow.50}",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.900}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "{red.50}",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      }
                    }
                  },
                  "dark": {
                    "blur": "10px",
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 36%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{surface.0}",
                      "detailColor": "{blue.100}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 36%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{surface.0}",
                      "detailColor": "{green.100}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 36%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{surface.0}",
                      "detailColor": "{yellow.50}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 36%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{surface.0}",
                      "detailColor": "{red.100}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "detailColor": "{surface.950}",
                      "shadow": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    }
                  }
                },
                "css": ""
              },
              "toolbar": {
                "root": {
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem",
                  "padding": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.800}"
                    }
                  }
                },
                "css": ""
              },
              "tooltip": {
                "root": {
                  "background": "{surface.600}",
                  "color": "{surface.0}",
                  "maxWidth": "12.5rem",
                  "gutter": "0.25rem",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{overlay.popover.border.radius}"
                },
                "css": ""
              },
              "virtualscroller": {
                "loader": {
                  "mask": {
                    "background": "{content.background}",
                    "color": "{text.muted.color}"
                  },
                  "icon": {
                    "size": "2rem"
                  }
                },
                "css": ""
              }
            }
          }
        }
      },
      "components": [
        {
          "name": "PrimeAutoComplete",
          "as": "AutoComplete",
          "from": "primevue/autocomplete",
          "export": "default",
          "filePath": "primevue/autocomplete",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCalendar",
          "as": "Calendar",
          "from": "primevue/calendar",
          "export": "default",
          "filePath": "primevue/calendar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCascadeSelect",
          "as": "CascadeSelect",
          "from": "primevue/cascadeselect",
          "export": "default",
          "filePath": "primevue/cascadeselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCheckbox",
          "as": "Checkbox",
          "from": "primevue/checkbox",
          "export": "default",
          "filePath": "primevue/checkbox",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCheckboxGroup",
          "as": "CheckboxGroup",
          "from": "primevue/checkboxgroup",
          "export": "default",
          "filePath": "primevue/checkboxgroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeChips",
          "as": "Chips",
          "from": "primevue/chips",
          "export": "default",
          "filePath": "primevue/chips",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeColorPicker",
          "as": "ColorPicker",
          "from": "primevue/colorpicker",
          "export": "default",
          "filePath": "primevue/colorpicker",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDatePicker",
          "as": "DatePicker",
          "from": "primevue/datepicker",
          "export": "default",
          "filePath": "primevue/datepicker",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDropdown",
          "as": "Dropdown",
          "from": "primevue/dropdown",
          "export": "default",
          "filePath": "primevue/dropdown",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeFloatLabel",
          "as": "FloatLabel",
          "from": "primevue/floatlabel",
          "export": "default",
          "filePath": "primevue/floatlabel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeFluid",
          "as": "Fluid",
          "from": "primevue/fluid",
          "export": "default",
          "filePath": "primevue/fluid",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeIconField",
          "as": "IconField",
          "from": "primevue/iconfield",
          "export": "default",
          "filePath": "primevue/iconfield",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeIftaLabel",
          "as": "IftaLabel",
          "from": "primevue/iftalabel",
          "export": "default",
          "filePath": "primevue/iftalabel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputChips",
          "as": "InputChips",
          "from": "primevue/inputchips",
          "export": "default",
          "filePath": "primevue/inputchips",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputGroup",
          "as": "InputGroup",
          "from": "primevue/inputgroup",
          "export": "default",
          "filePath": "primevue/inputgroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputGroupAddon",
          "as": "InputGroupAddon",
          "from": "primevue/inputgroupaddon",
          "export": "default",
          "filePath": "primevue/inputgroupaddon",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputIcon",
          "as": "InputIcon",
          "from": "primevue/inputicon",
          "export": "default",
          "filePath": "primevue/inputicon",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputMask",
          "as": "InputMask",
          "from": "primevue/inputmask",
          "export": "default",
          "filePath": "primevue/inputmask",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputNumber",
          "as": "InputNumber",
          "from": "primevue/inputnumber",
          "export": "default",
          "filePath": "primevue/inputnumber",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputOtp",
          "as": "InputOtp",
          "from": "primevue/inputotp",
          "export": "default",
          "filePath": "primevue/inputotp",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputSwitch",
          "as": "InputSwitch",
          "from": "primevue/inputswitch",
          "export": "default",
          "filePath": "primevue/inputswitch",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputText",
          "as": "InputText",
          "from": "primevue/inputtext",
          "export": "default",
          "filePath": "primevue/inputtext",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeKnob",
          "as": "Knob",
          "from": "primevue/knob",
          "export": "default",
          "filePath": "primevue/knob",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeListbox",
          "as": "Listbox",
          "from": "primevue/listbox",
          "export": "default",
          "filePath": "primevue/listbox",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMultiSelect",
          "as": "MultiSelect",
          "from": "primevue/multiselect",
          "export": "default",
          "filePath": "primevue/multiselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePassword",
          "as": "Password",
          "from": "primevue/password",
          "export": "default",
          "filePath": "primevue/password",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeRadioButton",
          "as": "RadioButton",
          "from": "primevue/radiobutton",
          "export": "default",
          "filePath": "primevue/radiobutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeRadioButtonGroup",
          "as": "RadioButtonGroup",
          "from": "primevue/radiobuttongroup",
          "export": "default",
          "filePath": "primevue/radiobuttongroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeRating",
          "as": "Rating",
          "from": "primevue/rating",
          "export": "default",
          "filePath": "primevue/rating",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSelect",
          "as": "Select",
          "from": "primevue/select",
          "export": "default",
          "filePath": "primevue/select",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSelectButton",
          "as": "SelectButton",
          "from": "primevue/selectbutton",
          "export": "default",
          "filePath": "primevue/selectbutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSlider",
          "as": "Slider",
          "from": "primevue/slider",
          "export": "default",
          "filePath": "primevue/slider",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTextarea",
          "as": "Textarea",
          "from": "primevue/textarea",
          "export": "default",
          "filePath": "primevue/textarea",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeToggleButton",
          "as": "ToggleButton",
          "from": "primevue/togglebutton",
          "export": "default",
          "filePath": "primevue/togglebutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeToggleSwitch",
          "as": "ToggleSwitch",
          "from": "primevue/toggleswitch",
          "export": "default",
          "filePath": "primevue/toggleswitch",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTreeSelect",
          "as": "TreeSelect",
          "from": "primevue/treeselect",
          "export": "default",
          "filePath": "primevue/treeselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeButton",
          "as": "Button",
          "from": "primevue/button",
          "export": "default",
          "filePath": "primevue/button",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeButtonGroup",
          "as": "ButtonGroup",
          "from": "primevue/buttongroup",
          "export": "default",
          "filePath": "primevue/buttongroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSpeedDial",
          "as": "SpeedDial",
          "from": "primevue/speeddial",
          "export": "default",
          "filePath": "primevue/speeddial",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSplitButton",
          "as": "SplitButton",
          "from": "primevue/splitbutton",
          "export": "default",
          "filePath": "primevue/splitbutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeColumn",
          "as": "Column",
          "from": "primevue/column",
          "export": "default",
          "filePath": "primevue/column",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeRow",
          "as": "Row",
          "from": "primevue/row",
          "export": "default",
          "filePath": "primevue/row",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeColumnGroup",
          "as": "ColumnGroup",
          "from": "primevue/columngroup",
          "export": "default",
          "filePath": "primevue/columngroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDataTable",
          "as": "DataTable",
          "from": "primevue/datatable",
          "export": "default",
          "filePath": "primevue/datatable",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDataView",
          "as": "DataView",
          "from": "primevue/dataview",
          "export": "default",
          "filePath": "primevue/dataview",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeOrderList",
          "as": "OrderList",
          "from": "primevue/orderlist",
          "export": "default",
          "filePath": "primevue/orderlist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeOrganizationChart",
          "as": "OrganizationChart",
          "from": "primevue/organizationchart",
          "export": "default",
          "filePath": "primevue/organizationchart",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePaginator",
          "as": "Paginator",
          "from": "primevue/paginator",
          "export": "default",
          "filePath": "primevue/paginator",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePickList",
          "as": "PickList",
          "from": "primevue/picklist",
          "export": "default",
          "filePath": "primevue/picklist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTree",
          "as": "Tree",
          "from": "primevue/tree",
          "export": "default",
          "filePath": "primevue/tree",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTreeTable",
          "as": "TreeTable",
          "from": "primevue/treetable",
          "export": "default",
          "filePath": "primevue/treetable",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTimeline",
          "as": "Timeline",
          "from": "primevue/timeline",
          "export": "default",
          "filePath": "primevue/timeline",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeVirtualScroller",
          "as": "VirtualScroller",
          "from": "primevue/virtualscroller",
          "export": "default",
          "filePath": "primevue/virtualscroller",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordion",
          "as": "Accordion",
          "from": "primevue/accordion",
          "export": "default",
          "filePath": "primevue/accordion",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordionPanel",
          "as": "AccordionPanel",
          "from": "primevue/accordionpanel",
          "export": "default",
          "filePath": "primevue/accordionpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordionHeader",
          "as": "AccordionHeader",
          "from": "primevue/accordionheader",
          "export": "default",
          "filePath": "primevue/accordionheader",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordionContent",
          "as": "AccordionContent",
          "from": "primevue/accordioncontent",
          "export": "default",
          "filePath": "primevue/accordioncontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordionTab",
          "as": "AccordionTab",
          "from": "primevue/accordiontab",
          "export": "default",
          "filePath": "primevue/accordiontab",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCard",
          "as": "Card",
          "from": "primevue/card",
          "export": "default",
          "filePath": "primevue/card",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDeferredContent",
          "as": "DeferredContent",
          "from": "primevue/deferredcontent",
          "export": "default",
          "filePath": "primevue/deferredcontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDivider",
          "as": "Divider",
          "from": "primevue/divider",
          "export": "default",
          "filePath": "primevue/divider",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeFieldset",
          "as": "Fieldset",
          "from": "primevue/fieldset",
          "export": "default",
          "filePath": "primevue/fieldset",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePanel",
          "as": "Panel",
          "from": "primevue/panel",
          "export": "default",
          "filePath": "primevue/panel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeScrollPanel",
          "as": "ScrollPanel",
          "from": "primevue/scrollpanel",
          "export": "default",
          "filePath": "primevue/scrollpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSplitter",
          "as": "Splitter",
          "from": "primevue/splitter",
          "export": "default",
          "filePath": "primevue/splitter",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSplitterPanel",
          "as": "SplitterPanel",
          "from": "primevue/splitterpanel",
          "export": "default",
          "filePath": "primevue/splitterpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepper",
          "as": "Stepper",
          "from": "primevue/stepper",
          "export": "default",
          "filePath": "primevue/stepper",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepList",
          "as": "StepList",
          "from": "primevue/steplist",
          "export": "default",
          "filePath": "primevue/steplist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStep",
          "as": "Step",
          "from": "primevue/step",
          "export": "default",
          "filePath": "primevue/step",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepItem",
          "as": "StepItem",
          "from": "primevue/stepitem",
          "export": "default",
          "filePath": "primevue/stepitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepPanels",
          "as": "StepPanels",
          "from": "primevue/steppanels",
          "export": "default",
          "filePath": "primevue/steppanels",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepPanel",
          "as": "StepPanel",
          "from": "primevue/steppanel",
          "export": "default",
          "filePath": "primevue/steppanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabView",
          "as": "TabView",
          "from": "primevue/tabview",
          "export": "default",
          "filePath": "primevue/tabview",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabs",
          "as": "Tabs",
          "from": "primevue/tabs",
          "export": "default",
          "filePath": "primevue/tabs",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabList",
          "as": "TabList",
          "from": "primevue/tablist",
          "export": "default",
          "filePath": "primevue/tablist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTab",
          "as": "Tab",
          "from": "primevue/tab",
          "export": "default",
          "filePath": "primevue/tab",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabPanels",
          "as": "TabPanels",
          "from": "primevue/tabpanels",
          "export": "default",
          "filePath": "primevue/tabpanels",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabPanel",
          "as": "TabPanel",
          "from": "primevue/tabpanel",
          "export": "default",
          "filePath": "primevue/tabpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeToolbar",
          "as": "Toolbar",
          "from": "primevue/toolbar",
          "export": "default",
          "filePath": "primevue/toolbar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeConfirmDialog",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmDialog",
          "from": "primevue/confirmdialog",
          "export": "default",
          "filePath": "primevue/confirmdialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeConfirmPopup",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmPopup",
          "from": "primevue/confirmpopup",
          "export": "default",
          "filePath": "primevue/confirmpopup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDialog",
          "as": "Dialog",
          "from": "primevue/dialog",
          "export": "default",
          "filePath": "primevue/dialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDrawer",
          "as": "Drawer",
          "from": "primevue/drawer",
          "export": "default",
          "filePath": "primevue/drawer",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDynamicDialog",
          "use": {
            "as": "DialogService"
          },
          "as": "DynamicDialog",
          "from": "primevue/dynamicdialog",
          "export": "default",
          "filePath": "primevue/dynamicdialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeOverlayPanel",
          "as": "OverlayPanel",
          "from": "primevue/overlaypanel",
          "export": "default",
          "filePath": "primevue/overlaypanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePopover",
          "as": "Popover",
          "from": "primevue/popover",
          "export": "default",
          "filePath": "primevue/popover",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSidebar",
          "as": "Sidebar",
          "from": "primevue/sidebar",
          "export": "default",
          "filePath": "primevue/sidebar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeFileUpload",
          "as": "FileUpload",
          "from": "primevue/fileupload",
          "export": "default",
          "filePath": "primevue/fileupload",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeBreadcrumb",
          "as": "Breadcrumb",
          "from": "primevue/breadcrumb",
          "export": "default",
          "filePath": "primevue/breadcrumb",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeContextMenu",
          "as": "ContextMenu",
          "from": "primevue/contextmenu",
          "export": "default",
          "filePath": "primevue/contextmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDock",
          "as": "Dock",
          "from": "primevue/dock",
          "export": "default",
          "filePath": "primevue/dock",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMenu",
          "as": "Menu",
          "from": "primevue/menu",
          "export": "default",
          "filePath": "primevue/menu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMenubar",
          "as": "Menubar",
          "from": "primevue/menubar",
          "export": "default",
          "filePath": "primevue/menubar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMegaMenu",
          "as": "MegaMenu",
          "from": "primevue/megamenu",
          "export": "default",
          "filePath": "primevue/megamenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePanelMenu",
          "as": "PanelMenu",
          "from": "primevue/panelmenu",
          "export": "default",
          "filePath": "primevue/panelmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSteps",
          "as": "Steps",
          "from": "primevue/steps",
          "export": "default",
          "filePath": "primevue/steps",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabMenu",
          "as": "TabMenu",
          "from": "primevue/tabmenu",
          "export": "default",
          "filePath": "primevue/tabmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTieredMenu",
          "as": "TieredMenu",
          "from": "primevue/tieredmenu",
          "export": "default",
          "filePath": "primevue/tieredmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMessage",
          "as": "Message",
          "from": "primevue/message",
          "export": "default",
          "filePath": "primevue/message",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInlineMessage",
          "as": "InlineMessage",
          "from": "primevue/inlinemessage",
          "export": "default",
          "filePath": "primevue/inlinemessage",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeToast",
          "use": {
            "as": "ToastService"
          },
          "as": "Toast",
          "from": "primevue/toast",
          "export": "default",
          "filePath": "primevue/toast",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCarousel",
          "as": "Carousel",
          "from": "primevue/carousel",
          "export": "default",
          "filePath": "primevue/carousel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeGalleria",
          "as": "Galleria",
          "from": "primevue/galleria",
          "export": "default",
          "filePath": "primevue/galleria",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeImage",
          "as": "Image",
          "from": "primevue/image",
          "export": "default",
          "filePath": "primevue/image",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeImageCompare",
          "as": "ImageCompare",
          "from": "primevue/imagecompare",
          "export": "default",
          "filePath": "primevue/imagecompare",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAvatar",
          "as": "Avatar",
          "from": "primevue/avatar",
          "export": "default",
          "filePath": "primevue/avatar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAvatarGroup",
          "as": "AvatarGroup",
          "from": "primevue/avatargroup",
          "export": "default",
          "filePath": "primevue/avatargroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeBadge",
          "as": "Badge",
          "from": "primevue/badge",
          "export": "default",
          "filePath": "primevue/badge",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeBlockUI",
          "as": "BlockUI",
          "from": "primevue/blockui",
          "export": "default",
          "filePath": "primevue/blockui",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeChip",
          "as": "Chip",
          "from": "primevue/chip",
          "export": "default",
          "filePath": "primevue/chip",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInplace",
          "as": "Inplace",
          "from": "primevue/inplace",
          "export": "default",
          "filePath": "primevue/inplace",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMeterGroup",
          "as": "MeterGroup",
          "from": "primevue/metergroup",
          "export": "default",
          "filePath": "primevue/metergroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeOverlayBadge",
          "as": "OverlayBadge",
          "from": "primevue/overlaybadge",
          "export": "default",
          "filePath": "primevue/overlaybadge",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeScrollTop",
          "as": "ScrollTop",
          "from": "primevue/scrolltop",
          "export": "default",
          "filePath": "primevue/scrolltop",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSkeleton",
          "as": "Skeleton",
          "from": "primevue/skeleton",
          "export": "default",
          "filePath": "primevue/skeleton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeProgressBar",
          "as": "ProgressBar",
          "from": "primevue/progressbar",
          "export": "default",
          "filePath": "primevue/progressbar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeProgressSpinner",
          "as": "ProgressSpinner",
          "from": "primevue/progressspinner",
          "export": "default",
          "filePath": "primevue/progressspinner",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTag",
          "as": "Tag",
          "from": "primevue/tag",
          "export": "default",
          "filePath": "primevue/tag",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTerminal",
          "as": "Terminal",
          "from": "primevue/terminal",
          "export": "default",
          "filePath": "primevue/terminal",
          "global": true,
          "mode": "all"
        }
      ],
      "directives": [
        {
          "name": "badge",
          "as": "BadgeDirective",
          "from": "primevue/badgedirective"
        },
        {
          "name": "tooltip",
          "as": "Tooltip",
          "from": "primevue/tooltip"
        },
        {
          "name": "ripple",
          "as": "Ripple",
          "from": "primevue/ripple"
        },
        {
          "name": "styleclass",
          "as": "StyleClass",
          "from": "primevue/styleclass"
        },
        {
          "name": "focustrap",
          "as": "FocusTrap",
          "from": "primevue/focustrap"
        },
        {
          "name": "animateonscroll",
          "as": "AnimateOnScroll",
          "from": "primevue/animateonscroll"
        },
        {
          "name": "keyfilter",
          "as": "KeyFilter",
          "from": "primevue/keyfilter"
        }
      ],
      "composables": [
        {
          "name": "usePrimeVue",
          "as": "usePrimeVue",
          "from": "primevue/config"
        },
        {
          "name": "useStyle",
          "as": "useStyle",
          "from": "primevue/usestyle"
        },
        {
          "name": "useConfirm",
          "as": "useConfirm",
          "from": "primevue/useconfirm"
        },
        {
          "name": "useToast",
          "as": "useToast",
          "from": "primevue/usetoast"
        },
        {
          "name": "useDialog",
          "as": "useDialog",
          "from": "primevue/usedialog"
        }
      ],
      "config": [
        {
          "name": "PrimeVue",
          "as": "PrimeVue",
          "from": "primevue/config"
        }
      ],
      "services": [
        {
          "name": "ConfirmationService",
          "as": "ConfirmationService",
          "from": "primevue/confirmationservice"
        },
        {
          "name": "DialogService",
          "as": "DialogService",
          "from": "primevue/dialogservice"
        },
        {
          "name": "ToastService",
          "as": "ToastService",
          "from": "primevue/toastservice"
        }
      ],
      "styles": [
        {
          "name": "BaseStyle",
          "as": "BaseStyle",
          "from": "@primevue/core/base/style"
        },
        {
          "name": "BaseComponentStyle",
          "as": "BaseComponentStyle",
          "from": "@primevue/core/basecomponent/style"
        },
        {
          "name": "AutoCompleteStyle",
          "as": "AutoCompleteStyle",
          "from": "primevue/autocomplete/style"
        },
        {
          "name": "CalendarStyle",
          "as": "CalendarStyle",
          "from": "primevue/calendar/style"
        },
        {
          "name": "CascadeSelectStyle",
          "as": "CascadeSelectStyle",
          "from": "primevue/cascadeselect/style"
        },
        {
          "name": "CheckboxStyle",
          "as": "CheckboxStyle",
          "from": "primevue/checkbox/style"
        },
        {
          "name": "CheckboxGroupStyle",
          "as": "CheckboxGroupStyle",
          "from": "primevue/checkboxgroup/style"
        },
        {
          "name": "ChipsStyle",
          "as": "ChipsStyle",
          "from": "primevue/chips/style"
        },
        {
          "name": "ColorPickerStyle",
          "as": "ColorPickerStyle",
          "from": "primevue/colorpicker/style"
        },
        {
          "name": "DatePickerStyle",
          "as": "DatePickerStyle",
          "from": "primevue/datepicker/style"
        },
        {
          "name": "DropdownStyle",
          "as": "DropdownStyle",
          "from": "primevue/dropdown/style"
        },
        {
          "name": "FloatLabelStyle",
          "as": "FloatLabelStyle",
          "from": "primevue/floatlabel/style"
        },
        {
          "name": "FluidStyle",
          "as": "FluidStyle",
          "from": "primevue/fluid/style"
        },
        {
          "name": "IconFieldStyle",
          "as": "IconFieldStyle",
          "from": "primevue/iconfield/style"
        },
        {
          "name": "IftaLabelStyle",
          "as": "IftaLabelStyle",
          "from": "primevue/iftalabel/style"
        },
        {
          "name": "InputChipsStyle",
          "as": "InputChipsStyle",
          "from": "primevue/inputchips/style"
        },
        {
          "name": "InputGroupStyle",
          "as": "InputGroupStyle",
          "from": "primevue/inputgroup/style"
        },
        {
          "name": "InputGroupAddonStyle",
          "as": "InputGroupAddonStyle",
          "from": "primevue/inputgroupaddon/style"
        },
        {
          "name": "InputIconStyle",
          "as": "InputIconStyle",
          "from": "primevue/inputicon/style"
        },
        {
          "name": "InputMaskStyle",
          "as": "InputMaskStyle",
          "from": "primevue/inputmask/style"
        },
        {
          "name": "InputNumberStyle",
          "as": "InputNumberStyle",
          "from": "primevue/inputnumber/style"
        },
        {
          "name": "InputOtpStyle",
          "as": "InputOtpStyle",
          "from": "primevue/inputotp/style"
        },
        {
          "name": "InputSwitchStyle",
          "as": "InputSwitchStyle",
          "from": "primevue/inputswitch/style"
        },
        {
          "name": "InputTextStyle",
          "as": "InputTextStyle",
          "from": "primevue/inputtext/style"
        },
        {
          "name": "KnobStyle",
          "as": "KnobStyle",
          "from": "primevue/knob/style"
        },
        {
          "name": "ListboxStyle",
          "as": "ListboxStyle",
          "from": "primevue/listbox/style"
        },
        {
          "name": "MultiSelectStyle",
          "as": "MultiSelectStyle",
          "from": "primevue/multiselect/style"
        },
        {
          "name": "PasswordStyle",
          "as": "PasswordStyle",
          "from": "primevue/password/style"
        },
        {
          "name": "RadioButtonStyle",
          "as": "RadioButtonStyle",
          "from": "primevue/radiobutton/style"
        },
        {
          "name": "RadioButtonGroupStyle",
          "as": "RadioButtonGroupStyle",
          "from": "primevue/radiobuttongroup/style"
        },
        {
          "name": "RatingStyle",
          "as": "RatingStyle",
          "from": "primevue/rating/style"
        },
        {
          "name": "SelectStyle",
          "as": "SelectStyle",
          "from": "primevue/select/style"
        },
        {
          "name": "SelectButtonStyle",
          "as": "SelectButtonStyle",
          "from": "primevue/selectbutton/style"
        },
        {
          "name": "SliderStyle",
          "as": "SliderStyle",
          "from": "primevue/slider/style"
        },
        {
          "name": "TextareaStyle",
          "as": "TextareaStyle",
          "from": "primevue/textarea/style"
        },
        {
          "name": "ToggleButtonStyle",
          "as": "ToggleButtonStyle",
          "from": "primevue/togglebutton/style"
        },
        {
          "name": "ToggleSwitchStyle",
          "as": "ToggleSwitchStyle",
          "from": "primevue/toggleswitch/style"
        },
        {
          "name": "TreeSelectStyle",
          "as": "TreeSelectStyle",
          "from": "primevue/treeselect/style"
        },
        {
          "name": "ButtonStyle",
          "as": "ButtonStyle",
          "from": "primevue/button/style"
        },
        {
          "name": "ButtonGroupStyle",
          "as": "ButtonGroupStyle",
          "from": "primevue/buttongroup/style"
        },
        {
          "name": "SpeedDialStyle",
          "as": "SpeedDialStyle",
          "from": "primevue/speeddial/style"
        },
        {
          "name": "SplitButtonStyle",
          "as": "SplitButtonStyle",
          "from": "primevue/splitbutton/style"
        },
        {
          "name": "ColumnStyle",
          "as": "ColumnStyle",
          "from": "primevue/column/style"
        },
        {
          "name": "RowStyle",
          "as": "RowStyle",
          "from": "primevue/row/style"
        },
        {
          "name": "ColumnGroupStyle",
          "as": "ColumnGroupStyle",
          "from": "primevue/columngroup/style"
        },
        {
          "name": "DataTableStyle",
          "as": "DataTableStyle",
          "from": "primevue/datatable/style"
        },
        {
          "name": "DataViewStyle",
          "as": "DataViewStyle",
          "from": "primevue/dataview/style"
        },
        {
          "name": "OrderListStyle",
          "as": "OrderListStyle",
          "from": "primevue/orderlist/style"
        },
        {
          "name": "OrganizationChartStyle",
          "as": "OrganizationChartStyle",
          "from": "primevue/organizationchart/style"
        },
        {
          "name": "PaginatorStyle",
          "as": "PaginatorStyle",
          "from": "primevue/paginator/style"
        },
        {
          "name": "PickListStyle",
          "as": "PickListStyle",
          "from": "primevue/picklist/style"
        },
        {
          "name": "TreeStyle",
          "as": "TreeStyle",
          "from": "primevue/tree/style"
        },
        {
          "name": "TreeTableStyle",
          "as": "TreeTableStyle",
          "from": "primevue/treetable/style"
        },
        {
          "name": "TimelineStyle",
          "as": "TimelineStyle",
          "from": "primevue/timeline/style"
        },
        {
          "name": "VirtualScrollerStyle",
          "as": "VirtualScrollerStyle",
          "from": "primevue/virtualscroller/style"
        },
        {
          "name": "AccordionStyle",
          "as": "AccordionStyle",
          "from": "primevue/accordion/style"
        },
        {
          "name": "AccordionPanelStyle",
          "as": "AccordionPanelStyle",
          "from": "primevue/accordionpanel/style"
        },
        {
          "name": "AccordionHeaderStyle",
          "as": "AccordionHeaderStyle",
          "from": "primevue/accordionheader/style"
        },
        {
          "name": "AccordionContentStyle",
          "as": "AccordionContentStyle",
          "from": "primevue/accordioncontent/style"
        },
        {
          "name": "AccordionTabStyle",
          "as": "AccordionTabStyle",
          "from": "primevue/accordiontab/style"
        },
        {
          "name": "CardStyle",
          "as": "CardStyle",
          "from": "primevue/card/style"
        },
        {
          "name": "DeferredContentStyle",
          "as": "DeferredContentStyle",
          "from": "primevue/deferredcontent/style"
        },
        {
          "name": "DividerStyle",
          "as": "DividerStyle",
          "from": "primevue/divider/style"
        },
        {
          "name": "FieldsetStyle",
          "as": "FieldsetStyle",
          "from": "primevue/fieldset/style"
        },
        {
          "name": "PanelStyle",
          "as": "PanelStyle",
          "from": "primevue/panel/style"
        },
        {
          "name": "ScrollPanelStyle",
          "as": "ScrollPanelStyle",
          "from": "primevue/scrollpanel/style"
        },
        {
          "name": "SplitterStyle",
          "as": "SplitterStyle",
          "from": "primevue/splitter/style"
        },
        {
          "name": "SplitterPanelStyle",
          "as": "SplitterPanelStyle",
          "from": "primevue/splitterpanel/style"
        },
        {
          "name": "StepperStyle",
          "as": "StepperStyle",
          "from": "primevue/stepper/style"
        },
        {
          "name": "StepListStyle",
          "as": "StepListStyle",
          "from": "primevue/steplist/style"
        },
        {
          "name": "StepStyle",
          "as": "StepStyle",
          "from": "primevue/step/style"
        },
        {
          "name": "StepItemStyle",
          "as": "StepItemStyle",
          "from": "primevue/stepitem/style"
        },
        {
          "name": "StepPanelsStyle",
          "as": "StepPanelsStyle",
          "from": "primevue/steppanels/style"
        },
        {
          "name": "StepPanelStyle",
          "as": "StepPanelStyle",
          "from": "primevue/steppanel/style"
        },
        {
          "name": "TabViewStyle",
          "as": "TabViewStyle",
          "from": "primevue/tabview/style"
        },
        {
          "name": "TabsStyle",
          "as": "TabsStyle",
          "from": "primevue/tabs/style"
        },
        {
          "name": "TabListStyle",
          "as": "TabListStyle",
          "from": "primevue/tablist/style"
        },
        {
          "name": "TabStyle",
          "as": "TabStyle",
          "from": "primevue/tab/style"
        },
        {
          "name": "TabPanelsStyle",
          "as": "TabPanelsStyle",
          "from": "primevue/tabpanels/style"
        },
        {
          "name": "TabPanelStyle",
          "as": "TabPanelStyle",
          "from": "primevue/tabpanel/style"
        },
        {
          "name": "ToolbarStyle",
          "as": "ToolbarStyle",
          "from": "primevue/toolbar/style"
        },
        {
          "name": "ConfirmDialogStyle",
          "as": "ConfirmDialogStyle",
          "from": "primevue/confirmdialog/style"
        },
        {
          "name": "ConfirmPopupStyle",
          "as": "ConfirmPopupStyle",
          "from": "primevue/confirmpopup/style"
        },
        {
          "name": "DialogStyle",
          "as": "DialogStyle",
          "from": "primevue/dialog/style"
        },
        {
          "name": "DrawerStyle",
          "as": "DrawerStyle",
          "from": "primevue/drawer/style"
        },
        {
          "name": "DynamicDialogStyle",
          "as": "DynamicDialogStyle",
          "from": "primevue/dynamicdialog/style"
        },
        {
          "name": "OverlayPanelStyle",
          "as": "OverlayPanelStyle",
          "from": "primevue/overlaypanel/style"
        },
        {
          "name": "PopoverStyle",
          "as": "PopoverStyle",
          "from": "primevue/popover/style"
        },
        {
          "name": "SidebarStyle",
          "as": "SidebarStyle",
          "from": "primevue/sidebar/style"
        },
        {
          "name": "FileUploadStyle",
          "as": "FileUploadStyle",
          "from": "primevue/fileupload/style"
        },
        {
          "name": "BreadcrumbStyle",
          "as": "BreadcrumbStyle",
          "from": "primevue/breadcrumb/style"
        },
        {
          "name": "ContextMenuStyle",
          "as": "ContextMenuStyle",
          "from": "primevue/contextmenu/style"
        },
        {
          "name": "DockStyle",
          "as": "DockStyle",
          "from": "primevue/dock/style"
        },
        {
          "name": "MenuStyle",
          "as": "MenuStyle",
          "from": "primevue/menu/style"
        },
        {
          "name": "MenubarStyle",
          "as": "MenubarStyle",
          "from": "primevue/menubar/style"
        },
        {
          "name": "MegaMenuStyle",
          "as": "MegaMenuStyle",
          "from": "primevue/megamenu/style"
        },
        {
          "name": "PanelMenuStyle",
          "as": "PanelMenuStyle",
          "from": "primevue/panelmenu/style"
        },
        {
          "name": "StepsStyle",
          "as": "StepsStyle",
          "from": "primevue/steps/style"
        },
        {
          "name": "TabMenuStyle",
          "as": "TabMenuStyle",
          "from": "primevue/tabmenu/style"
        },
        {
          "name": "TieredMenuStyle",
          "as": "TieredMenuStyle",
          "from": "primevue/tieredmenu/style"
        },
        {
          "name": "MessageStyle",
          "as": "MessageStyle",
          "from": "primevue/message/style"
        },
        {
          "name": "InlineMessageStyle",
          "as": "InlineMessageStyle",
          "from": "primevue/inlinemessage/style"
        },
        {
          "name": "ToastStyle",
          "as": "ToastStyle",
          "from": "primevue/toast/style"
        },
        {
          "name": "CarouselStyle",
          "as": "CarouselStyle",
          "from": "primevue/carousel/style"
        },
        {
          "name": "GalleriaStyle",
          "as": "GalleriaStyle",
          "from": "primevue/galleria/style"
        },
        {
          "name": "ImageStyle",
          "as": "ImageStyle",
          "from": "primevue/image/style"
        },
        {
          "name": "ImageCompareStyle",
          "as": "ImageCompareStyle",
          "from": "primevue/imagecompare/style"
        },
        {
          "name": "AvatarStyle",
          "as": "AvatarStyle",
          "from": "primevue/avatar/style"
        },
        {
          "name": "AvatarGroupStyle",
          "as": "AvatarGroupStyle",
          "from": "primevue/avatargroup/style"
        },
        {
          "name": "BadgeStyle",
          "as": "BadgeStyle",
          "from": "primevue/badge/style"
        },
        {
          "name": "BlockUIStyle",
          "as": "BlockUIStyle",
          "from": "primevue/blockui/style"
        },
        {
          "name": "ChipStyle",
          "as": "ChipStyle",
          "from": "primevue/chip/style"
        },
        {
          "name": "InplaceStyle",
          "as": "InplaceStyle",
          "from": "primevue/inplace/style"
        },
        {
          "name": "MeterGroupStyle",
          "as": "MeterGroupStyle",
          "from": "primevue/metergroup/style"
        },
        {
          "name": "OverlayBadgeStyle",
          "as": "OverlayBadgeStyle",
          "from": "primevue/overlaybadge/style"
        },
        {
          "name": "ScrollTopStyle",
          "as": "ScrollTopStyle",
          "from": "primevue/scrolltop/style"
        },
        {
          "name": "SkeletonStyle",
          "as": "SkeletonStyle",
          "from": "primevue/skeleton/style"
        },
        {
          "name": "ProgressBarStyle",
          "as": "ProgressBarStyle",
          "from": "primevue/progressbar/style"
        },
        {
          "name": "ProgressSpinnerStyle",
          "as": "ProgressSpinnerStyle",
          "from": "primevue/progressspinner/style"
        },
        {
          "name": "TagStyle",
          "as": "TagStyle",
          "from": "primevue/tag/style"
        },
        {
          "name": "TerminalStyle",
          "as": "TerminalStyle",
          "from": "primevue/terminal/style"
        },
        {
          "name": "BadgeDirectiveStyle",
          "as": "BadgeDirectiveStyle",
          "from": "primevue/badgedirective/style"
        },
        {
          "name": "TooltipStyle",
          "as": "TooltipStyle",
          "from": "primevue/tooltip/style"
        },
        {
          "name": "RippleStyle",
          "as": "RippleStyle",
          "from": "primevue/ripple/style"
        },
        {
          "name": "StyleClassStyle",
          "as": "StyleClassStyle",
          "from": "primevue/styleclass/style"
        },
        {
          "name": "FocusTrapStyle",
          "as": "FocusTrapStyle",
          "from": "primevue/focustrap/style"
        },
        {
          "name": "AnimateOnScrollStyle",
          "as": "AnimateOnScrollStyle",
          "from": "primevue/animateonscroll/style"
        },
        {
          "name": "KeyFilterStyle",
          "as": "KeyFilterStyle",
          "from": "primevue/keyfilter/style"
        }
      ],
      "injectStylesAsString": [],
      "injectStylesAsStringToTop": [
        ""
      ]
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"F:/github/vue/content-hub/frontend/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"F:/github/vue/content-hub/frontend","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"F:/github/vue/content-hub/frontend/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"F:/github/vue/content-hub/frontend/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"F:/github/vue/content-hub/frontend/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"F:/github/vue/content-hub/frontend/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
class Hasher {
  buff = "";
  #context = /* @__PURE__ */ new Map();
  write(str) {
    this.buff += str;
  }
  dispatch(value) {
    const type = value === null ? "null" : typeof value;
    return this[type](value);
  }
  object(object) {
    if (object && typeof object.toJSON === "function") {
      return this.object(object.toJSON());
    }
    const objString = Object.prototype.toString.call(object);
    let objType = "";
    const objectLength = objString.length;
    objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
    objType = objType.toLowerCase();
    let objectNumber = null;
    if ((objectNumber = this.#context.get(object)) === void 0) {
      this.#context.set(object, this.#context.size);
    } else {
      return this.dispatch("[CIRCULAR:" + objectNumber + "]");
    }
    if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
      this.write("buffer:");
      return this.write(object.toString("utf8"));
    }
    if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
      if (this[objType]) {
        this[objType](object);
      } else {
        this.unknown(object, objType);
      }
    } else {
      const keys = Object.keys(object).sort();
      const extraKeys = [];
      this.write("object:" + (keys.length + extraKeys.length) + ":");
      const dispatchForKey = (key) => {
        this.dispatch(key);
        this.write(":");
        this.dispatch(object[key]);
        this.write(",");
      };
      for (const key of keys) {
        dispatchForKey(key);
      }
      for (const key of extraKeys) {
        dispatchForKey(key);
      }
    }
  }
  array(arr, unordered) {
    unordered = unordered === void 0 ? false : unordered;
    this.write("array:" + arr.length + ":");
    if (!unordered || arr.length <= 1) {
      for (const entry of arr) {
        this.dispatch(entry);
      }
      return;
    }
    const contextAdditions = /* @__PURE__ */ new Map();
    const entries = arr.map((entry) => {
      const hasher = new Hasher();
      hasher.dispatch(entry);
      for (const [key, value] of hasher.#context) {
        contextAdditions.set(key, value);
      }
      return hasher.toString();
    });
    this.#context = contextAdditions;
    entries.sort();
    return this.array(entries, false);
  }
  date(date) {
    return this.write("date:" + date.toJSON());
  }
  symbol(sym) {
    return this.write("symbol:" + sym.toString());
  }
  unknown(value, type) {
    this.write(type);
    if (!value) {
      return;
    }
    this.write(":");
    if (value && typeof value.entries === "function") {
      return this.array(
        [...value.entries()],
        true
        /* ordered */
      );
    }
  }
  error(err) {
    return this.write("error:" + err.toString());
  }
  boolean(bool) {
    return this.write("bool:" + bool);
  }
  string(string) {
    this.write("string:" + string.length + ":");
    this.write(string);
  }
  function(fn) {
    this.write("fn:");
    if (isNativeFunction(fn)) {
      this.dispatch("[native]");
    } else {
      this.dispatch(fn.toString());
    }
  }
  number(number) {
    return this.write("number:" + number);
  }
  null() {
    return this.write("Null");
  }
  undefined() {
    return this.write("Undefined");
  }
  regexp(regex) {
    return this.write("regex:" + regex.toString());
  }
  arraybuffer(arr) {
    this.write("arraybuffer:");
    return this.dispatch(new Uint8Array(arr));
  }
  url(url) {
    return this.write("url:" + url.toString());
  }
  map(map) {
    this.write("map:");
    const arr = [...map];
    return this.array(arr, false);
  }
  set(set) {
    this.write("set:");
    const arr = [...set];
    return this.array(arr, false);
  }
  bigint(number) {
    return this.write("bigint:" + number.toString());
  }
}
for (const type of [
  "uint8array",
  "uint8clampedarray",
  "unt8array",
  "uint16array",
  "unt16array",
  "uint32array",
  "unt32array",
  "float32array",
  "float64array"
]) {
  Hasher.prototype[type] = function(arr) {
    this.write(type + ":");
    return this.array([...arr], false);
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

var inlineStyles$j = {
  root: {
    position: 'relative'
  }
};
var classes$1I = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-autocomplete p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled || isNotEmpty(instance.inputValue),
      'p-inputwrapper-focus': instance.focused,
      'p-autocomplete-open': instance.overlayVisible,
      'p-autocomplete-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-autocomplete-input',
  inputMultiple: function inputMultiple(_ref2) {
    var instance = _ref2.instance;
    return ['p-autocomplete-input-multiple', {
      'p-variant-filled': instance.$variant === 'filled'
    }];
  },
  chipItem: function chipItem(_ref3) {
    var instance = _ref3.instance,
      i = _ref3.i;
    return ['p-autocomplete-chip-item', {
      'p-focus': instance.focusedMultipleOptionIndex === i
    }];
  },
  pcChip: 'p-autocomplete-chip',
  chipIcon: 'p-autocomplete-chip-icon',
  inputChip: 'p-autocomplete-input-chip',
  loader: 'p-autocomplete-loader',
  dropdown: 'p-autocomplete-dropdown',
  overlay: 'p-autocomplete-overlay p-component',
  listContainer: 'p-autocomplete-list-container',
  list: 'p-autocomplete-list',
  optionGroup: 'p-autocomplete-option-group',
  option: function option(_ref4) {
    var instance = _ref4.instance,
      _option = _ref4.option,
      i = _ref4.i,
      getItemOptions = _ref4.getItemOptions;
    return ['p-autocomplete-option', {
      'p-autocomplete-option-selected': instance.isSelected(_option),
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-autocomplete-empty-message'
};
var AutoCompleteStyle = BaseStyle.extend({
  name: 'autocomplete',
  style: style,
  classes: classes$1I,
  inlineStyles: inlineStyles$j
});

var CalendarStyle = BaseStyle.extend({
  name: 'calendar'
});

var inlineStyles$i = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1H = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-cascadeselect p-component p-inputwrapper', {
      'p-cascadeselect-mobile': instance.queryMatches,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-cascadeselect-open': instance.overlayVisible,
      'p-cascadeselect-fluid': instance.$fluid,
      'p-cascadeselect-sm p-inputfield-sm': props.size === 'small',
      'p-cascadeselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  label: function label(_ref3) {
    var _instance$label;
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-cascadeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
    }];
  },
  clearIcon: 'p-cascadeselect-clear-icon',
  dropdown: 'p-cascadeselect-dropdown',
  loadingIcon: 'p-cascadeselect-loading-icon',
  dropdownIcon: 'p-cascadeselect-dropdown-icon',
  overlay: function overlay(_ref4) {
    var instance = _ref4.instance;
    return ['p-cascadeselect-overlay p-component', {
      'p-cascadeselect-mobile-active': instance.queryMatches
    }];
  },
  listContainer: 'p-cascadeselect-list-container',
  list: 'p-cascadeselect-list',
  option: function option(_ref5) {
    var instance = _ref5.instance,
      processedOption = _ref5.processedOption;
    return ['p-cascadeselect-option', {
      'p-cascadeselect-option-active': instance.isOptionActive(processedOption),
      'p-cascadeselect-option-selected': instance.isOptionSelected(processedOption),
      'p-focus': instance.isOptionFocused(processedOption),
      'p-disabled': instance.isOptionDisabled(processedOption)
    }];
  },
  optionContent: 'p-cascadeselect-option-content',
  optionText: 'p-cascadeselect-option-text',
  groupIconContainer: 'p-cascadeselect-group-icon-container',
  groupIcon: 'p-cascadeselect-group-icon',
  optionList: 'p-cascadeselect-overlay p-cascadeselect-option-list'
};
var CascadeSelectStyle = BaseStyle.extend({
  name: 'cascadeselect',
  style: style$1,
  classes: classes$1H,
  inlineStyles: inlineStyles$i
});

var classes$1G = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-checkbox p-component', {
      'p-checkbox-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$pcCheckboxGroup ? instance.$pcCheckboxGroup.$invalid : instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-checkbox-sm p-inputfield-sm': props.size === 'small',
      'p-checkbox-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  box: 'p-checkbox-box',
  input: 'p-checkbox-input',
  icon: 'p-checkbox-icon'
};
var CheckboxStyle = BaseStyle.extend({
  name: 'checkbox',
  style: style$2,
  classes: classes$1G
});

var classes$1F = {
  root: 'p-checkbox-group p-component'
};
var CheckboxGroupStyle = BaseStyle.extend({
  name: 'checkboxgroup',
  style: style$3,
  classes: classes$1F
});

var ChipsStyle = BaseStyle.extend({
  name: 'chips'
});

var classes$1E = {
  root: 'p-colorpicker p-component',
  preview: function preview(_ref) {
    var props = _ref.props;
    return ['p-colorpicker-preview', {
      'p-disabled': props.disabled
    }];
  },
  panel: function panel(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-colorpicker-panel', {
      'p-colorpicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  colorSelector: 'p-colorpicker-color-selector',
  colorBackground: 'p-colorpicker-color-background',
  colorHandle: 'p-colorpicker-color-handle',
  hue: 'p-colorpicker-hue',
  hueHandle: 'p-colorpicker-hue-handle'
};
var ColorPickerStyle = BaseStyle.extend({
  name: 'colorpicker',
  style: style$4,
  classes: classes$1E
});

var inlineStyles$h = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1D = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      state = _ref2.state;
    return ['p-datepicker p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-focus': state.focused || state.overlayVisible,
      'p-datepicker-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-datepicker-input',
  dropdown: 'p-datepicker-dropdown',
  inputIconContainer: 'p-datepicker-input-icon-container',
  inputIcon: 'p-datepicker-input-icon',
  panel: function panel(_ref3) {
    var props = _ref3.props;
    return ['p-datepicker-panel p-component', {
      'p-datepicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-datepicker-timeonly': props.timeOnly
    }];
  },
  calendarContainer: 'p-datepicker-calendar-container',
  calendar: 'p-datepicker-calendar',
  header: 'p-datepicker-header',
  pcPrevButton: 'p-datepicker-prev-button',
  title: 'p-datepicker-title',
  selectMonth: 'p-datepicker-select-month',
  selectYear: 'p-datepicker-select-year',
  decade: 'p-datepicker-decade',
  pcNextButton: 'p-datepicker-next-button',
  dayView: 'p-datepicker-day-view',
  weekHeader: 'p-datepicker-weekheader p-disabled',
  weekNumber: 'p-datepicker-weeknumber',
  weekLabelContainer: 'p-datepicker-weeklabel-container p-disabled',
  weekDayCell: 'p-datepicker-weekday-cell',
  weekDay: 'p-datepicker-weekday',
  dayCell: function dayCell(_ref4) {
    var date = _ref4.date;
    return ['p-datepicker-day-cell', {
      'p-datepicker-other-month': date.otherMonth,
      'p-datepicker-today': date.today
    }];
  },
  day: function day(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      state = _ref5.state,
      date = _ref5.date;
    var selectedDayClass = '';
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      selectedDayClass = instance.isDateEquals(state.d_value[0], date) || instance.isDateEquals(state.d_value[1], date) ? 'p-datepicker-day-selected' : 'p-datepicker-day-selected-range';
    }
    return ['p-datepicker-day', {
      'p-datepicker-day-selected': !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      'p-disabled': props.disabled || !date.selectable
    }, selectedDayClass];
  },
  monthView: 'p-datepicker-month-view',
  month: function month(_ref6) {
    var instance = _ref6.instance,
      props = _ref6.props,
      _month = _ref6.month,
      index = _ref6.index;
    return ['p-datepicker-month', {
      'p-datepicker-month-selected': instance.isMonthSelected(index),
      'p-disabled': props.disabled || !_month.selectable
    }];
  },
  yearView: 'p-datepicker-year-view',
  year: function year(_ref7) {
    var instance = _ref7.instance,
      props = _ref7.props,
      _year = _ref7.year;
    return ['p-datepicker-year', {
      'p-datepicker-year-selected': instance.isYearSelected(_year.value),
      'p-disabled': props.disabled || !_year.selectable
    }];
  },
  timePicker: 'p-datepicker-time-picker',
  hourPicker: 'p-datepicker-hour-picker',
  pcIncrementButton: 'p-datepicker-increment-button',
  pcDecrementButton: 'p-datepicker-decrement-button',
  separator: 'p-datepicker-separator',
  minutePicker: 'p-datepicker-minute-picker',
  secondPicker: 'p-datepicker-second-picker',
  ampmPicker: 'p-datepicker-ampm-picker',
  buttonbar: 'p-datepicker-buttonbar',
  pcTodayButton: 'p-datepicker-today-button',
  pcClearButton: 'p-datepicker-clear-button'
};
var DatePickerStyle = BaseStyle.extend({
  name: 'datepicker',
  style: style$5,
  classes: classes$1D,
  inlineStyles: inlineStyles$h
});

var DropdownStyle = BaseStyle.extend({
  name: 'dropdown'
});

var classes$1C = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-floatlabel', {
      'p-floatlabel-over': props.variant === 'over',
      'p-floatlabel-on': props.variant === 'on',
      'p-floatlabel-in': props.variant === 'in'
    }];
  }
};
var FloatLabelStyle = BaseStyle.extend({
  name: 'floatlabel',
  style: style$6,
  classes: classes$1C
});

var classes$1B = {
  root: 'p-fluid'
};
var FluidStyle = BaseStyle.extend({
  name: 'fluid',
  classes: classes$1B
});

var classes$1A = {
  root: 'p-iconfield'
};
var IconFieldStyle = BaseStyle.extend({
  name: 'iconfield',
  style: style$7,
  classes: classes$1A
});

var classes$1z = {
  root: 'p-iftalabel'
};
var IftaLabelStyle = BaseStyle.extend({
  name: 'iftalabel',
  style: style$8,
  classes: classes$1z
});

var classes$1y = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputchips p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': props.modelValue && props.modelValue.length || instance.inputValue && instance.inputValue.length,
      'p-inputwrapper-focus': instance.focused
    }];
  },
  input: function input(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-inputchips-input', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled'
    }];
  },
  chipItem: function chipItem(_ref3) {
    var state = _ref3.state,
      index = _ref3.index;
    return ['p-inputchips-chip-item', {
      'p-focus': state.focusedIndex === index
    }];
  },
  pcChip: 'p-inputchips-chip',
  chipIcon: 'p-inputchips-chip-icon',
  inputItem: 'p-inputchips-input-item'
};
var InputChipsStyle = BaseStyle.extend({
  name: 'inputchips',
  style: style$9,
  classes: classes$1y
});

var classes$1x = {
  root: 'p-inputgroup'
};
var InputGroupStyle = BaseStyle.extend({
  name: 'inputgroup',
  style: style$a,
  classes: classes$1x
});

var classes$1w = {
  root: 'p-inputgroupaddon'
};
var InputGroupAddonStyle = BaseStyle.extend({
  name: 'inputgroupaddon',
  classes: classes$1w
});

var classes$1v = {
  root: 'p-inputicon'
};
var InputIconStyle = BaseStyle.extend({
  name: 'inputicon',
  classes: classes$1v
});

var classes$1u = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-inputmask', {
      'p-filled': instance.$filled
    }];
  }
};
var InputMaskStyle = BaseStyle.extend({
  name: 'inputmask',
  classes: classes$1u
});

var classes$1t = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputnumber p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-inputwrapper-filled': instance.$filled || props.allowEmpty === false,
      'p-inputwrapper-focus': instance.focused,
      'p-inputnumber-stacked': props.showButtons && props.buttonLayout === 'stacked',
      'p-inputnumber-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
      'p-inputnumber-vertical': props.showButtons && props.buttonLayout === 'vertical',
      'p-inputnumber-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-inputnumber-input',
  buttonGroup: 'p-inputnumber-button-group',
  incrementButton: function incrementButton(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-inputnumber-button p-inputnumber-increment-button', {
      'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
    }];
  },
  decrementButton: function decrementButton(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-inputnumber-button p-inputnumber-decrement-button', {
      'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
    }];
  }
};
var InputNumberStyle = BaseStyle.extend({
  name: 'inputnumber',
  style: style$b,
  classes: classes$1t
});

var classes$1s = {
  root: 'p-inputotp p-component',
  pcInputText: 'p-inputotp-input'
};
var InputOtpStyle = BaseStyle.extend({
  name: 'inputotp',
  style: style$c,
  classes: classes$1s
});

var InputSwitchStyle = BaseStyle.extend({
  name: 'inputswitch'
});

var classes$1r = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputtext p-component', {
      'p-filled': instance.$filled,
      'p-inputtext-sm p-inputfield-sm': props.size === 'small',
      'p-inputtext-lg p-inputfield-lg': props.size === 'large',
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputtext-fluid': instance.$fluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: 'inputtext',
  style: style$d,
  classes: classes$1r
});

var classes$1q = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-knob p-component', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  range: 'p-knob-range',
  value: 'p-knob-value',
  text: 'p-knob-text'
};
var KnobStyle = BaseStyle.extend({
  name: 'knob',
  style: style$e,
  classes: classes$1q
});

var classes$1p = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-listbox p-component', {
      'p-listbox-striped': props.striped,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  header: 'p-listbox-header',
  pcFilter: 'p-listbox-filter',
  listContainer: 'p-listbox-list-container',
  list: 'p-listbox-list',
  optionGroup: 'p-listbox-option-group',
  option: function option(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props,
      _option = _ref2.option,
      index = _ref2.index,
      getItemOptions = _ref2.getItemOptions;
    return ['p-listbox-option', {
      'p-listbox-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  optionCheckIcon: 'p-listbox-option-check-icon',
  optionBlankIcon: 'p-listbox-option-blank-icon',
  emptyMessage: 'p-listbox-empty-message'
};
var ListboxStyle = BaseStyle.extend({
  name: 'listbox',
  style: style$f,
  classes: classes$1p
});

var inlineStyles$g = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1o = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-multiselect p-component p-inputwrapper', {
      'p-multiselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-multiselect-open': instance.overlayVisible,
      'p-multiselect-fluid': instance.$fluid,
      'p-multiselect-sm p-inputfield-sm': props.size === 'small',
      'p-multiselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-multiselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-multiselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-multiselect-label-empty': !props.placeholder && !instance.$filled
    }];
  },
  clearIcon: 'p-multiselect-clear-icon',
  chipItem: 'p-multiselect-chip-item',
  pcChip: 'p-multiselect-chip',
  chipIcon: 'p-multiselect-chip-icon',
  dropdown: 'p-multiselect-dropdown',
  loadingIcon: 'p-multiselect-loading-icon',
  dropdownIcon: 'p-multiselect-dropdown-icon',
  overlay: 'p-multiselect-overlay p-component',
  header: 'p-multiselect-header',
  pcFilterContainer: 'p-multiselect-filter-container',
  pcFilter: 'p-multiselect-filter',
  listContainer: 'p-multiselect-list-container',
  list: 'p-multiselect-list',
  optionGroup: 'p-multiselect-option-group',
  option: function option(_ref4) {
    var instance = _ref4.instance,
      _option = _ref4.option,
      index = _ref4.index,
      getItemOptions = _ref4.getItemOptions,
      props = _ref4.props;
    return ['p-multiselect-option', {
      'p-multiselect-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-multiselect-empty-message'
};
var MultiSelectStyle = BaseStyle.extend({
  name: 'multiselect',
  style: style$g,
  classes: classes$1o,
  inlineStyles: inlineStyles$g
});

var inlineStyles$f = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1n = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-password p-component p-inputwrapper', {
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused,
      'p-password-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-password-input',
  maskIcon: 'p-password-toggle-mask-icon p-password-mask-icon',
  unmaskIcon: 'p-password-toggle-mask-icon p-password-unmask-icon',
  overlay: 'p-password-overlay p-component',
  content: 'p-password-content',
  meter: 'p-password-meter',
  meterLabel: function meterLabel(_ref3) {
    var instance = _ref3.instance;
    return "p-password-meter-label ".concat(instance.meter ? 'p-password-meter-' + instance.meter.strength : '');
  },
  meterText: 'p-password-meter-text'
};
var PasswordStyle = BaseStyle.extend({
  name: 'password',
  style: style$h,
  classes: classes$1n,
  inlineStyles: inlineStyles$f
});

var classes$1m = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-radiobutton p-component', {
      'p-radiobutton-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$pcRadioButtonGroup ? instance.$pcRadioButtonGroup.$invalid : instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-radiobutton-sm p-inputfield-sm': props.size === 'small',
      'p-radiobutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  box: 'p-radiobutton-box',
  input: 'p-radiobutton-input',
  icon: 'p-radiobutton-icon'
};
var RadioButtonStyle = BaseStyle.extend({
  name: 'radiobutton',
  style: style$i,
  classes: classes$1m
});

var classes$1l = {
  root: 'p-radiobutton-group p-component'
};
var RadioButtonGroupStyle = BaseStyle.extend({
  name: 'radiobuttongroup',
  style: style$j,
  classes: classes$1l
});

var classes$1k = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-rating', {
      'p-readonly': props.readonly,
      'p-disabled': props.disabled
    }];
  },
  option: function option(_ref2) {
    var instance = _ref2.instance,
      value = _ref2.value;
    return ['p-rating-option', {
      'p-rating-option-active': value <= instance.d_value,
      'p-focus-visible': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
    }];
  },
  onIcon: function onIcon(_ref3) {
    var instance = _ref3.instance;
    return ['p-rating-icon p-rating-on-icon', {
      'p-invalid': instance.$invalid
    }];
  },
  offIcon: function offIcon(_ref4) {
    var instance = _ref4.instance;
    return ['p-rating-icon p-rating-off-icon', {
      'p-invalid': instance.$invalid
    }];
  }
};
var RatingStyle = BaseStyle.extend({
  name: 'rating',
  style: style$k,
  classes: classes$1k
});

var classes$1j = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props,
      state = _ref.state;
    return ['p-select p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': state.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-select-open': state.overlayVisible,
      'p-select-fluid': instance.$fluid,
      'p-select-sm p-inputfield-sm': props.size === 'small',
      'p-select-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  label: function label(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-select-label', {
      'p-placeholder': !props.editable && instance.label === props.placeholder,
      'p-select-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
    }];
  },
  clearIcon: 'p-select-clear-icon',
  dropdown: 'p-select-dropdown',
  loadingicon: 'p-select-loading-icon',
  dropdownIcon: 'p-select-dropdown-icon',
  overlay: 'p-select-overlay p-component',
  header: 'p-select-header',
  pcFilter: 'p-select-filter',
  listContainer: 'p-select-list-container',
  list: 'p-select-list',
  optionGroup: 'p-select-option-group',
  optionGroupLabel: 'p-select-option-group-label',
  option: function option(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props,
      state = _ref3.state,
      _option = _ref3.option,
      focusedOption = _ref3.focusedOption;
    return ['p-select-option', {
      'p-select-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': state.focusedOptionIndex === focusedOption,
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  optionLabel: 'p-select-option-label',
  optionCheckIcon: 'p-select-option-check-icon',
  optionBlankIcon: 'p-select-option-blank-icon',
  emptyMessage: 'p-select-empty-message'
};
var SelectStyle = BaseStyle.extend({
  name: 'select',
  style: style$l,
  classes: classes$1j
});

var classes$1i = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-selectbutton p-component', {
      'p-invalid': instance.$invalid // @todo: check
    }];
  }
};
var SelectButtonStyle = BaseStyle.extend({
  name: 'selectbutton',
  style: style$m,
  classes: classes$1i
});

var inlineStyles$e = {
  handle: {
    position: 'absolute'
  },
  range: {
    position: 'absolute'
  }
};
var classes$1h = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-slider p-component', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-slider-horizontal': props.orientation === 'horizontal',
      'p-slider-vertical': props.orientation === 'vertical'
    }];
  },
  range: 'p-slider-range',
  handle: 'p-slider-handle'
};
var SliderStyle = BaseStyle.extend({
  name: 'slider',
  style: style$n,
  classes: classes$1h,
  inlineStyles: inlineStyles$e
});

var classes$1g = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-textarea p-component', {
      'p-filled': instance.$filled,
      'p-textarea-resizable ': props.autoResize,
      'p-textarea-sm p-inputfield-sm': props.size === 'small',
      'p-textarea-lg p-inputfield-lg': props.size === 'large',
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-textarea-fluid': instance.$fluid
    }];
  }
};
var TextareaStyle = BaseStyle.extend({
  name: 'textarea',
  style: style$o,
  classes: classes$1g
});

var classes$1f = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-togglebutton p-component', {
      'p-togglebutton-checked': instance.active,
      'p-invalid': instance.$invalid,
      'p-togglebutton-sm p-inputfield-sm': props.size === 'small',
      'p-togglebutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  content: 'p-togglebutton-content',
  icon: 'p-togglebutton-icon',
  label: 'p-togglebutton-label'
};
var ToggleButtonStyle = BaseStyle.extend({
  name: 'togglebutton',
  style: style$p,
  classes: classes$1f
});

var inlineStyles$d = {
  root: {
    position: 'relative'
  }
};
var classes$1e = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-toggleswitch p-component', {
      'p-toggleswitch-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  input: 'p-toggleswitch-input',
  slider: 'p-toggleswitch-slider',
  handle: 'p-toggleswitch-handle'
};
var ToggleSwitchStyle = BaseStyle.extend({
  name: 'toggleswitch',
  style: style$q,
  classes: classes$1e,
  inlineStyles: inlineStyles$d
});

var inlineStyles$c = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1d = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-treeselect p-component p-inputwrapper', {
      'p-treeselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-treeselect-open': instance.overlayVisible,
      'p-treeselect-fluid': instance.$fluid,
      'p-treeselect-sm p-inputfield-sm': props.size === 'small',
      'p-treeselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-treeselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-treeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
    }];
  },
  clearIcon: 'p-treeselect-clear-icon',
  chip: 'p-treeselect-chip-item',
  pcChip: 'p-treeselect-chip',
  dropdown: 'p-treeselect-dropdown',
  dropdownIcon: 'p-treeselect-dropdown-icon',
  panel: 'p-treeselect-overlay p-component',
  treeContainer: 'p-treeselect-tree-container',
  emptyMessage: 'p-treeselect-empty-message'
};
var TreeSelectStyle = BaseStyle.extend({
  name: 'treeselect',
  style: style$r,
  classes: classes$1d,
  inlineStyles: inlineStyles$c
});

function _typeof$3(o) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3(o); }
function _defineProperty$3(e, r, t) { return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$3(t) { var i = _toPrimitive$3(t, "string"); return "symbol" == _typeof$3(i) ? i : i + ""; }
function _toPrimitive$3(t, r) { if ("object" != _typeof$3(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$3(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$1c = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-button p-component', _defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3({
      'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
      'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
      'p-button-loading': props.loading,
      'p-button-link': props.link || props.variant === 'link'
    }, "p-button-".concat(props.severity), props.severity), 'p-button-raised', props.raised), 'p-button-rounded', props.rounded), 'p-button-text', props.text || props.variant === 'text'), 'p-button-outlined', props.outlined || props.variant === 'outlined'), 'p-button-sm', props.size === 'small'), 'p-button-lg', props.size === 'large'), 'p-button-plain', props.plain), 'p-button-fluid', instance.hasFluid)];
  },
  loadingIcon: 'p-button-loading-icon',
  icon: function icon(_ref3) {
    var props = _ref3.props;
    return ['p-button-icon', _defineProperty$3({}, "p-button-icon-".concat(props.iconPos), props.label)];
  },
  label: 'p-button-label'
};
var ButtonStyle = BaseStyle.extend({
  name: 'button',
  style: style$s,
  classes: classes$1c
});

var classes$1b = {
  root: 'p-buttongroup p-component'
};
var ButtonGroupStyle = BaseStyle.extend({
  name: 'buttongroup',
  style: style$t,
  classes: classes$1b
});

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _defineProperty$2(e, r, t) { return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == _typeof$2(i) ? i : i + ""; }
function _toPrimitive$2(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* Direction */
var inlineStyles$b = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      alignItems: (props.direction === 'up' || props.direction === 'down') && 'center',
      justifyContent: (props.direction === 'left' || props.direction === 'right') && 'center',
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  },
  list: function list(_ref2) {
    var props = _ref2.props;
    return {
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  }
};
var classes$1a = {
  root: function root(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ["p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty$2(_defineProperty$2(_defineProperty$2({}, "p-speeddial-direction-".concat(props.direction), props.type !== 'circle'), 'p-speeddial-open', instance.d_visible), 'p-disabled', props.disabled)];
  },
  pcButton: function pcButton(_ref5) {
    var props = _ref5.props;
    return ['p-speeddial-button', {
      'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
    }];
  },
  list: 'p-speeddial-list',
  item: 'p-speeddial-item',
  action: 'p-speeddial-action',
  actionIcon: 'p-speeddial-action-icon',
  mask: function mask(_ref6) {
    var instance = _ref6.instance;
    return ['p-speeddial-mask', {
      'p-speeddial-mask-visible': instance.d_visible
    }];
  }
};
var SpeedDialStyle = BaseStyle.extend({
  name: 'speeddial',
  style: style$u,
  classes: classes$1a,
  inlineStyles: inlineStyles$b
});

var classes$19 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-splitbutton p-component', {
      'p-splitbutton-raised': props.raised,
      'p-splitbutton-rounded': props.rounded,
      'p-splitbutton-fluid': instance.hasFluid
    }];
  },
  pcButton: 'p-splitbutton-button',
  pcDropdown: 'p-splitbutton-dropdown'
};
var SplitButtonStyle = BaseStyle.extend({
  name: 'splitbutton',
  style: style$v,
  classes: classes$19
});

var ColumnStyle = BaseStyle.extend({
  name: 'column'
});

var RowStyle = BaseStyle.extend({
  name: 'row'
});

var ColumnGroupStyle = BaseStyle.extend({
  name: 'columngroup'
});

var classes$18 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-datatable p-component', {
      'p-datatable-hoverable': props.rowHover || props.selectionMode,
      'p-datatable-resizable': props.resizableColumns,
      'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-datatable-scrollable': props.scrollable,
      'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-datatable-striped': props.stripedRows,
      'p-datatable-gridlines': props.showGridlines,
      'p-datatable-sm': props.size === 'small',
      'p-datatable-lg': props.size === 'large'
    }];
  },
  mask: 'p-datatable-mask p-overlay-mask',
  loadingIcon: 'p-datatable-loading-icon',
  header: 'p-datatable-header',
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return 'p-datatable-paginator-' + position;
  },
  tableContainer: 'p-datatable-table-container',
  table: function table(_ref3) {
    var props = _ref3.props;
    return ['p-datatable-table', {
      'p-datatable-scrollable-table': props.scrollable,
      'p-datatable-resizable-table': props.resizableColumns,
      'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-datatable-thead',
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props,
      column = _ref4.column;
    return column && !instance.columnProp('hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field')) ? ['p-datatable-header-cell', {
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }] : ['p-datatable-header-cell', {
      'p-datatable-sortable-column': instance.columnProp('sortable'),
      'p-datatable-resizable-column': instance.resizableColumns,
      'p-datatable-column-sorted': instance.isColumnSorted(),
      'p-datatable-frozen-column': instance.columnProp('frozen'),
      'p-datatable-reorderable-column': props.reorderableColumns
    }];
  },
  columnResizer: 'p-datatable-column-resizer',
  columnHeaderContent: 'p-datatable-column-header-content',
  columnTitle: 'p-datatable-column-title',
  columnFooter: 'p-datatable-column-footer',
  sortIcon: 'p-datatable-sort-icon',
  pcSortBadge: 'p-datatable-sort-badge',
  filter: function filter(_ref5) {
    var props = _ref5.props;
    return ['p-datatable-filter', {
      'p-datatable-inline-filter': props.display === 'row',
      'p-datatable-popover-filter': props.display === 'menu'
    }];
  },
  filterElementContainer: 'p-datatable-filter-element-container',
  pcColumnFilterButton: 'p-datatable-column-filter-button',
  pcColumnFilterClearButton: 'p-datatable-column-filter-clear-button',
  filterOverlay: function filterOverlay(_ref6) {
    var props = _ref6.props;
    return ['p-datatable-filter-overlay p-component', {
      'p-datatable-filter-overlay-popover': props.display === 'menu'
    }];
  },
  filterConstraintList: 'p-datatable-filter-constraint-list',
  filterConstraint: function filterConstraint(_ref7) {
    var instance = _ref7.instance,
      matchMode = _ref7.matchMode;
    return ['p-datatable-filter-constraint', {
      'p-datatable-filter-constraint-selected': matchMode && instance.isRowMatchModeSelected(matchMode.value)
    }];
  },
  filterConstraintSeparator: 'p-datatable-filter-constraint-separator',
  filterOperator: 'p-datatable-filter-operator',
  pcFilterOperatorDropdown: 'p-datatable-filter-operator-dropdown',
  filterRuleList: 'p-datatable-filter-rule-list',
  filterRule: 'p-datatable-filter-rule',
  pcFilterConstraintDropdown: 'p-datatable-filter-constraint-dropdown',
  pcFilterRemoveRuleButton: 'p-datatable-filter-remove-rule-button',
  pcFilterAddRuleButton: 'p-datatable-filter-add-rule-button',
  filterButtonbar: 'p-datatable-filter-buttonbar',
  pcFilterClearButton: 'p-datatable-filter-clear-button',
  pcFilterApplyButton: 'p-datatable-filter-apply-button',
  tbody: function tbody(_ref8) {
    var props = _ref8.props;
    return props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody';
  },
  rowGroupHeader: 'p-datatable-row-group-header',
  rowToggleButton: 'p-datatable-row-toggle-button',
  rowToggleIcon: 'p-datatable-row-toggle-icon',
  row: function row(_ref9) {
    var instance = _ref9.instance,
      props = _ref9.props,
      index = _ref9.index,
      columnSelectionMode = _ref9.columnSelectionMode;
    var rowStyleClass = [];
    if (props.selectionMode) {
      rowStyleClass.push('p-datatable-selectable-row');
    }
    if (props.selection) {
      rowStyleClass.push({
        'p-datatable-row-selected': columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
      });
    }
    if (props.contextMenuSelection) {
      rowStyleClass.push({
        'p-datatable-contextmenu-row-selected': instance.isSelectedWithContextMenu
      });
    }
    rowStyleClass.push(index % 2 === 0 ? 'p-row-even' : 'p-row-odd');
    return rowStyleClass;
  },
  rowExpansion: 'p-datatable-row-expansion',
  rowGroupFooter: 'p-datatable-row-group-footer',
  emptyMessage: 'p-datatable-empty-message',
  bodyCell: function bodyCell(_ref10) {
    var instance = _ref10.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  reorderableRowHandle: 'p-datatable-reorderable-row-handle',
  pcRowEditorInit: 'p-datatable-row-editor-init',
  pcRowEditorSave: 'p-datatable-row-editor-save',
  pcRowEditorCancel: 'p-datatable-row-editor-cancel',
  tfoot: 'p-datatable-tfoot',
  footerCell: function footerCell(_ref11) {
    var instance = _ref11.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
  footer: 'p-datatable-footer',
  columnResizeIndicator: 'p-datatable-column-resize-indicator',
  rowReorderIndicatorUp: 'p-datatable-row-reorder-indicator-up',
  rowReorderIndicatorDown: 'p-datatable-row-reorder-indicator-down'
};
var inlineStyles$a = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var DataTableStyle = BaseStyle.extend({
  name: 'datatable',
  style: style$w,
  classes: classes$18,
  inlineStyles: inlineStyles$a
});

var classes$17 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-dataview p-component', {
      'p-dataview-list': props.layout === 'list',
      'p-dataview-grid': props.layout === 'grid'
    }];
  },
  header: 'p-dataview-header',
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return 'p-dataview-paginator-' + position;
  },
  content: 'p-dataview-content',
  emptyMessage: 'p-dataview-empty-message',
  // TODO: remove?
  footer: 'p-dataview-footer'
};
var DataViewStyle = BaseStyle.extend({
  name: 'dataview',
  style: style$x,
  classes: classes$17
});

var classes$16 = {
  root: 'p-orderlist p-component',
  controls: 'p-orderlist-controls'
};
var OrderListStyle = BaseStyle.extend({
  name: 'orderlist',
  style: style$y,
  classes: classes$16
});

var classes$15 = {
  root: 'p-organizationchart p-component',
  table: 'p-organizationchart-table',
  node: function node(_ref) {
    var instance = _ref.instance;
    return ['p-organizationchart-node', {
      'p-organizationchart-node-selectable': instance.selectable,
      'p-organizationchart-node-selected': instance.selected
    }];
  },
  nodeToggleButton: 'p-organizationchart-node-toggle-button',
  nodeToggleButtonIcon: 'p-organizationchart-node-toggle-button-icon',
  connectors: 'p-organizationchart-connectors',
  connectorDown: 'p-organizationchart-connector-down',
  connectorLeft: function connectorLeft(_ref2) {
    var index = _ref2.index;
    return ['p-organizationchart-connector-left', {
      'p-organizationchart-connector-top': !(index === 0)
    }];
  },
  connectorRight: function connectorRight(_ref3) {
    var props = _ref3.props,
      index = _ref3.index;
    return ['p-organizationchart-connector-right', {
      'p-organizationchart-connector-top': !(index === props.node.children.length - 1)
    }];
  },
  nodeChildren: 'p-organizationchart-node-children'
};
var OrganizationChartStyle = BaseStyle.extend({
  name: 'organizationchart',
  style: style$z,
  classes: classes$15
});

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function _defineProperty$1(e, r, t) { return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$14 = {
  paginator: function paginator(_ref) {
    var instance = _ref.instance,
      key = _ref.key;
    return ['p-paginator p-component', _defineProperty$1({
      'p-paginator-default': !instance.hasBreakpoints()
    }, "p-paginator-".concat(key), instance.hasBreakpoints())];
  },
  content: 'p-paginator-content',
  contentStart: 'p-paginator-content-start',
  contentEnd: 'p-paginator-content-end',
  first: function first(_ref3) {
    var instance = _ref3.instance;
    return ['p-paginator-first', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  firstIcon: 'p-paginator-first-icon',
  prev: function prev(_ref4) {
    var instance = _ref4.instance;
    return ['p-paginator-prev', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  prevIcon: 'p-paginator-prev-icon',
  next: function next(_ref5) {
    var instance = _ref5.instance;
    return ['p-paginator-next', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  nextIcon: 'p-paginator-next-icon',
  last: function last(_ref6) {
    var instance = _ref6.instance;
    return ['p-paginator-last', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  lastIcon: 'p-paginator-last-icon',
  pages: 'p-paginator-pages',
  page: function page(_ref7) {
    var props = _ref7.props,
      pageLink = _ref7.pageLink;
    return ['p-paginator-page', {
      'p-paginator-page-selected': pageLink - 1 === props.page
    }];
  },
  current: 'p-paginator-current',
  pcRowPerPageDropdown: 'p-paginator-rpp-dropdown',
  pcJumpToPageDropdown: 'p-paginator-jtp-dropdown',
  pcJumpToPageInputText: 'p-paginator-jtp-input'
};
var PaginatorStyle = BaseStyle.extend({
  name: 'paginator',
  style: style$A,
  classes: classes$14
});

var classes$13 = {
  root: 'p-picklist p-component',
  sourceControls: 'p-picklist-controls p-picklist-source-controls',
  sourceListContainer: 'p-picklist-list-container p-picklist-source-list-container',
  transferControls: 'p-picklist-controls p-picklist-transfer-controls',
  targetListContainer: 'p-picklist-list-container p-picklist-target-list-container',
  targetControls: 'p-picklist-controls p-picklist-target-controls'
};
var PickListStyle = BaseStyle.extend({
  name: 'picklist',
  style: style$B,
  classes: classes$13
});

var classes$12 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tree p-component', {
      'p-tree-selectable': props.selectionMode != null,
      'p-tree-loading': props.loading,
      'p-tree-flex-scrollable': props.scrollHeight === 'flex'
    }];
  },
  mask: 'p-tree-mask p-overlay-mask',
  loadingIcon: 'p-tree-loading-icon',
  pcFilterContainer: 'p-tree-filter',
  pcFilterInput: 'p-tree-filter-input',
  wrapper: 'p-tree-root',
  //TODO: discuss
  rootChildren: 'p-tree-root-children',
  node: function node(_ref2) {
    var instance = _ref2.instance;
    return ['p-tree-node', {
      'p-tree-node-leaf': instance.leaf
    }];
  },
  nodeContent: function nodeContent(_ref3) {
    var instance = _ref3.instance;
    return ['p-tree-node-content', instance.node.styleClass, {
      'p-tree-node-selectable': instance.selectable,
      'p-tree-node-selected': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected
    }];
  },
  nodeToggleButton: 'p-tree-node-toggle-button',
  nodeToggleIcon: 'p-tree-node-toggle-icon',
  nodeCheckbox: 'p-tree-node-checkbox',
  nodeIcon: 'p-tree-node-icon',
  nodeLabel: 'p-tree-node-label',
  nodeChildren: 'p-tree-node-children'
};
var TreeStyle = BaseStyle.extend({
  name: 'tree',
  style: style$C,
  classes: classes$12
});

var classes$11 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-treetable p-component', {
      'p-treetable-hoverable': props.rowHover || instance.rowSelectionMode,
      'p-treetable-resizable': props.resizableColumns,
      'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-treetable-scrollable': props.scrollable,
      'p-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-treetable-gridlines': props.showGridlines,
      'p-treetable-sm': props.size === 'small',
      'p-treetable-lg': props.size === 'large'
    }];
  },
  loading: 'p-treetable-loading',
  //TODO: required?
  mask: 'p-treetable-mask p-overlay-mask',
  loadingIcon: 'p-treetable-loading-icon',
  header: 'p-treetable-header',
  paginator: function paginator(_ref2) {
    var position = _ref2.position;
    return 'p-treetable-paginator-' + position;
  },
  tableContainer: 'p-treetable-table-container',
  table: function table(_ref3) {
    var props = _ref3.props;
    return ['p-treetable-table', {
      'p-treetable-scrollable-table': props.scrollable,
      'p-treetable-resizable-table': props.resizableColumns,
      'p-treetable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-treetable-thead',
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props,
      context = _ref4.context;
    return ['p-treetable-header-cell', {
      'p-treetable-sortable-column': instance.columnProp('sortable'),
      'p-treetable-resizable-column': props.resizableColumns,
      'p-treetable-column-sorted': context === null || context === void 0 ? void 0 : context.sorted,
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  columnResizer: 'p-treetable-column-resizer',
  columnHeaderContent: 'p-treetable-column-header-content',
  columnTitle: 'p-treetable-column-title',
  sortIcon: 'p-treetable-sort-icon',
  pcSortBadge: 'p-treetable-sort-badge',
  tbody: 'p-treetable-tbody',
  row: function row(_ref5) {
    var props = _ref5.props,
      instance = _ref5.instance;
    return [{
      'p-treetable-row-selected': instance.selected,
      'p-treetable-contextmenu-row-selected': props.contextMenuSelection && instance.isSelectedWithContextMenu
    }];
  },
  bodyCell: function bodyCell(_ref6) {
    var instance = _ref6.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  bodyCellContent: function bodyCellContent(_ref7) {
    var instance = _ref7.instance;
    return ['p-treetable-body-cell-content', {
      'p-treetable-body-cell-content-expander': instance.columnProp('expander')
    }];
  },
  nodeToggleButton: 'p-treetable-node-toggle-button',
  nodeToggleIcon: 'p-treetable-node-toggle-icon',
  pcNodeCheckbox: 'p-treetable-node-checkbox',
  emptyMessage: 'p-treetable-empty-message',
  tfoot: 'p-treetable-tfoot',
  footerCell: function footerCell(_ref8) {
    var instance = _ref8.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  footer: 'p-treetable-footer',
  columnResizeIndicator: 'p-treetable-column-resize-indicator'
};
var inlineStyles$9 = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var TreeTableStyle = BaseStyle.extend({
  name: 'treetable',
  style: style$D,
  classes: classes$11,
  inlineStyles: inlineStyles$9
});

var classes$10 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-timeline p-component', 'p-timeline-' + props.align, 'p-timeline-' + props.layout];
  },
  event: 'p-timeline-event',
  eventOpposite: 'p-timeline-event-opposite',
  eventSeparator: 'p-timeline-event-separator',
  eventMarker: 'p-timeline-event-marker',
  eventConnector: 'p-timeline-event-connector',
  eventContent: 'p-timeline-event-content'
};
var TimelineStyle = BaseStyle.extend({
  name: 'timeline',
  style: style$E,
  classes: classes$10
});

var css = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
var VirtualScrollerStyle = BaseStyle.extend({
  name: 'virtualscroller',
  css: css,
  style: style$F
});

var classes$$ = {
  root: 'p-accordion p-component'
};
var AccordionStyle = BaseStyle.extend({
  name: 'accordion',
  style: style$G,
  classes: classes$$
});

var classes$_ = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-accordionpanel', {
      'p-accordionpanel-active': instance.active,
      'p-disabled': props.disabled
    }];
  }
};
var AccordionPanelStyle = BaseStyle.extend({
  name: 'accordionpanel',
  classes: classes$_
});

var classes$Z = {
  root: 'p-accordionheader',
  toggleicon: 'p-accordionheader-toggle-icon'
};
var AccordionHeaderStyle = BaseStyle.extend({
  name: 'accordionheader',
  classes: classes$Z
});

var classes$Y = {
  root: 'p-accordioncontent',
  content: 'p-accordioncontent-content'
};
var AccordionContentStyle = BaseStyle.extend({
  name: 'accordioncontent',
  classes: classes$Y
});

var AccordionTabStyle = BaseStyle.extend({
  name: 'accordiontab'
});

var classes$X = {
  root: 'p-card p-component',
  header: 'p-card-header',
  body: 'p-card-body',
  caption: 'p-card-caption',
  title: 'p-card-title',
  subtitle: 'p-card-subtitle',
  content: 'p-card-content',
  footer: 'p-card-footer'
};
var CardStyle = BaseStyle.extend({
  name: 'card',
  style: style$H,
  classes: classes$X
});

var DeferredContentStyle = BaseStyle.extend({
  name: 'deferredcontent'
});

/* Position */
var inlineStyles$8 = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      justifyContent: props.layout === 'horizontal' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : null : null,
      alignItems: props.layout === 'vertical' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : null : null
    };
  }
};
var classes$W = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-divider p-component', 'p-divider-' + props.layout, 'p-divider-' + props.type, {
      'p-divider-left': props.layout === 'horizontal' && (!props.align || props.align === 'left')
    }, {
      'p-divider-center': props.layout === 'horizontal' && props.align === 'center'
    }, {
      'p-divider-right': props.layout === 'horizontal' && props.align === 'right'
    }, {
      'p-divider-top': props.layout === 'vertical' && props.align === 'top'
    }, {
      'p-divider-center': props.layout === 'vertical' && (!props.align || props.align === 'center')
    }, {
      'p-divider-bottom': props.layout === 'vertical' && props.align === 'bottom'
    }];
  },
  content: 'p-divider-content'
};
var DividerStyle = BaseStyle.extend({
  name: 'divider',
  style: style$I,
  classes: classes$W,
  inlineStyles: inlineStyles$8
});

var classes$V = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-fieldset p-component', {
      'p-fieldset-toggleable': props.toggleable
    }];
  },
  legend: 'p-fieldset-legend',
  legendLabel: 'p-fieldset-legend-label',
  toggleButton: 'p-fieldset-toggle-button',
  toggleIcon: 'p-fieldset-toggle-icon',
  contentContainer: 'p-fieldset-content-container',
  content: 'p-fieldset-content'
};
var FieldsetStyle = BaseStyle.extend({
  name: 'fieldset',
  style: style$J,
  classes: classes$V
});

var classes$U = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-panel p-component', {
      'p-panel-toggleable': props.toggleable
    }];
  },
  header: 'p-panel-header',
  title: 'p-panel-title',
  headerActions: 'p-panel-header-actions',
  pcToggleButton: 'p-panel-toggle-button',
  contentContainer: 'p-panel-content-container',
  content: 'p-panel-content',
  footer: 'p-panel-footer'
};
var PanelStyle = BaseStyle.extend({
  name: 'panel',
  style: style$K,
  classes: classes$U
});

var classes$T = {
  root: 'p-scrollpanel p-component',
  contentContainer: 'p-scrollpanel-content-container',
  content: 'p-scrollpanel-content',
  barX: 'p-scrollpanel-bar p-scrollpanel-bar-x',
  barY: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};
var ScrollPanelStyle = BaseStyle.extend({
  name: 'scrollpanel',
  style: style$L,
  classes: classes$T
});

var classes$S = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-splitter p-component', 'p-splitter-' + props.layout];
  },
  gutter: 'p-splitter-gutter',
  gutterHandle: 'p-splitter-gutter-handle'
};
var inlineStyles$7 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return [{
      display: 'flex',
      'flex-wrap': 'nowrap'
    }, props.layout === 'vertical' ? {
      'flex-direction': 'column'
    } : ''];
  }
};
var SplitterStyle = BaseStyle.extend({
  name: 'splitter',
  style: style$M,
  classes: classes$S,
  inlineStyles: inlineStyles$7
});

var classes$R = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-splitterpanel', {
      'p-splitterpanel-nested': instance.isNested
    }];
  }
};
var SplitterPanelStyle = BaseStyle.extend({
  name: 'splitterpanel',
  classes: classes$R
});

var classes$Q = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-stepper p-component', {
      'p-readonly': props.linear
    }];
  },
  separator: 'p-stepper-separator'
};
var StepperStyle = BaseStyle.extend({
  name: 'stepper',
  style: style$N,
  classes: classes$Q
});

var classes$P = {
  root: 'p-steplist'
};
var StepListStyle = BaseStyle.extend({
  name: 'steplist',
  classes: classes$P
});

var classes$O = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-step', {
      'p-step-active': instance.active,
      'p-disabled': instance.isStepDisabled
    }];
  },
  header: 'p-step-header',
  number: 'p-step-number',
  title: 'p-step-title'
};
var StepStyle = BaseStyle.extend({
  name: 'step',
  classes: classes$O
});

var classes$N = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-stepitem', {
      'p-stepitem-active': instance.isActive
    }];
  }
};
var StepItemStyle = BaseStyle.extend({
  name: 'stepitem',
  classes: classes$N
});

var classes$M = {
  root: 'p-steppanels'
};
var StepPanelsStyle = BaseStyle.extend({
  name: 'steppanels',
  classes: classes$M
});

var classes$L = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-steppanel', {
      'p-steppanel-active': instance.isVertical && instance.active
    }];
  },
  content: 'p-steppanel-content'
};
var StepPanelStyle = BaseStyle.extend({
  name: 'steppanel',
  classes: classes$L
});

var classes$K = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tabview p-component', {
      'p-tabview-scrollable': props.scrollable
    }];
  },
  navContainer: 'p-tabview-tablist-container',
  prevButton: 'p-tabview-prev-button',
  navContent: 'p-tabview-tablist-scroll-container',
  nav: 'p-tabview-tablist',
  tab: {
    header: function header(_ref2) {
      var instance = _ref2.instance,
        tab = _ref2.tab,
        index = _ref2.index;
      return ['p-tabview-tablist-item', instance.getTabProp(tab, 'headerClass'), {
        'p-tabview-tablist-item-active': instance.d_activeIndex === index,
        'p-disabled': instance.getTabProp(tab, 'disabled')
      }];
    },
    headerAction: 'p-tabview-tab-header',
    headerTitle: 'p-tabview-tab-title',
    content: function content(_ref3) {
      var instance = _ref3.instance,
        tab = _ref3.tab;
      return ['p-tabview-panel', instance.getTabProp(tab, 'contentClass')];
    }
  },
  inkbar: 'p-tabview-ink-bar',
  nextButton: 'p-tabview-next-button',
  panelContainer: 'p-tabview-panels'
};
var TabViewStyle = BaseStyle.extend({
  name: 'tabview',
  style: style$O,
  classes: classes$K
});

var classes$J = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tabs p-component', {
      'p-tabs-scrollable': props.scrollable
    }];
  }
};
var TabsStyle = BaseStyle.extend({
  name: 'tabs',
  style: style$P,
  classes: classes$J
});

var classes$I = {
  root: 'p-tablist',
  content: function content(_ref) {
    var instance = _ref.instance;
    return ['p-tablist-content', {
      'p-tablist-viewport': instance.$pcTabs.scrollable
    }];
  },
  tabList: 'p-tablist-tab-list',
  activeBar: 'p-tablist-active-bar',
  prevButton: 'p-tablist-prev-button p-tablist-nav-button',
  nextButton: 'p-tablist-next-button p-tablist-nav-button'
};
var TabListStyle = BaseStyle.extend({
  name: 'tablist',
  classes: classes$I
});

var classes$H = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-tab', {
      'p-tab-active': instance.active,
      'p-disabled': props.disabled
    }];
  }
};
var TabStyle = BaseStyle.extend({
  name: 'tab',
  classes: classes$H
});

var classes$G = {
  root: 'p-tabpanels'
};
var TabPanelsStyle = BaseStyle.extend({
  name: 'tabpanels',
  classes: classes$G
});

var classes$F = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-tabpanel', {
      'p-tabpanel-active': instance.active
    }];
  }
};
var TabPanelStyle = BaseStyle.extend({
  name: 'tabpanel',
  classes: classes$F
});

var classes$E = {
  root: 'p-toolbar p-component',
  start: 'p-toolbar-start',
  center: 'p-toolbar-center',
  end: 'p-toolbar-end'
};
var ToolbarStyle = BaseStyle.extend({
  name: 'toolbar',
  style: style$Q,
  classes: classes$E
});

var classes$D = {
  root: 'p-confirmdialog',
  icon: 'p-confirmdialog-icon',
  message: 'p-confirmdialog-message',
  pcRejectButton: 'p-confirmdialog-reject-button',
  pcAcceptButton: 'p-confirmdialog-accept-button'
};
var ConfirmDialogStyle = BaseStyle.extend({
  name: 'confirmdialog',
  style: style$R,
  classes: classes$D
});

var classes$C = {
  root: 'p-confirmpopup p-component',
  content: 'p-confirmpopup-content',
  icon: 'p-confirmpopup-icon',
  message: 'p-confirmpopup-message',
  footer: 'p-confirmpopup-footer',
  pcRejectButton: 'p-confirmpopup-reject-button',
  pcAcceptButton: 'p-confirmpopup-accept-button'
};
var ConfirmPopupStyle = BaseStyle.extend({
  name: 'confirmpopup',
  style: style$S,
  classes: classes$C
});

/* Position */
var inlineStyles$6 = {
  mask: function mask(_ref) {
    var position = _ref.position,
      modal = _ref.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
      alignItems: position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'auto'
  }
};
var classes$B = {
  mask: function mask(_ref2) {
    var props = _ref2.props;
    var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-dialog-mask', {
      'p-overlay-mask p-overlay-mask-enter': props.modal
    }, pos ? "p-dialog-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var props = _ref3.props,
      instance = _ref3.instance;
    return ['p-dialog p-component', {
      'p-dialog-maximized': props.maximizable && instance.maximized
    }];
  },
  header: 'p-dialog-header',
  title: 'p-dialog-title',
  headerActions: 'p-dialog-header-actions',
  pcMaximizeButton: 'p-dialog-maximize-button',
  pcCloseButton: 'p-dialog-close-button',
  content: 'p-dialog-content',
  footer: 'p-dialog-footer'
};
var DialogStyle = BaseStyle.extend({
  name: 'dialog',
  style: style$T,
  classes: classes$B,
  inlineStyles: inlineStyles$6
});

var inlineStyles$5 = {
  mask: function mask(_ref) {
    var position = _ref.position,
      modal = _ref.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
      alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    pointerEvents: 'auto'
  }
};
var classes$A = {
  mask: function mask(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    var positions = ['left', 'right', 'top', 'bottom'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-drawer-mask', {
      'p-overlay-mask p-overlay-mask-enter': props.modal,
      'p-drawer-open': instance.containerVisible,
      'p-drawer-full': instance.fullScreen
    }, pos ? "p-drawer-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var instance = _ref3.instance;
    return ['p-drawer p-component', {
      'p-drawer-full': instance.fullScreen
    }];
  },
  header: 'p-drawer-header',
  title: 'p-drawer-title',
  pcCloseButton: 'p-drawer-close-button',
  content: 'p-drawer-content',
  footer: 'p-drawer-footer'
};
var DrawerStyle = BaseStyle.extend({
  name: 'drawer',
  style: style$U,
  classes: classes$A,
  inlineStyles: inlineStyles$5
});

var DynamicDialogStyle = BaseStyle.extend({
  name: 'dynamicdialog'
});

var OverlayPanelStyle = BaseStyle.extend({
  name: 'overlaypanel'
});

var classes$z = {
  root: 'p-popover p-component',
  content: 'p-popover-content'
};
var PopoverStyle = BaseStyle.extend({
  name: 'popover',
  style: style$V,
  classes: classes$z
});

var SidebarStyle = BaseStyle.extend({
  name: 'sidebar'
});

var classes$y = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  header: 'p-fileupload-header',
  pcChooseButton: 'p-fileupload-choose-button',
  pcUploadButton: 'p-fileupload-upload-button',
  pcCancelButton: 'p-fileupload-cancel-button',
  content: 'p-fileupload-content',
  fileList: 'p-fileupload-file-list',
  file: 'p-fileupload-file',
  fileThumbnail: 'p-fileupload-file-thumbnail',
  fileInfo: 'p-fileupload-file-info',
  fileName: 'p-fileupload-file-name',
  fileSize: 'p-fileupload-file-size',
  pcFileBadge: 'p-fileupload-file-badge',
  fileActions: 'p-fileupload-file-actions',
  pcFileRemoveButton: 'p-fileupload-file-remove-button'
};
var FileUploadStyle = BaseStyle.extend({
  name: 'fileupload',
  style: style$W,
  classes: classes$y
});

var classes$x = {
  root: 'p-breadcrumb p-component',
  list: 'p-breadcrumb-list',
  homeItem: 'p-breadcrumb-home-item',
  separator: 'p-breadcrumb-separator',
  separatorIcon: 'p-breadcrumb-separator-icon',
  item: function item(_ref) {
    var instance = _ref.instance;
    return ['p-breadcrumb-item', {
      'p-disabled': instance.disabled()
    }];
  },
  itemLink: 'p-breadcrumb-item-link',
  itemIcon: 'p-breadcrumb-item-icon',
  itemLabel: 'p-breadcrumb-item-label'
};
var BreadcrumbStyle = BaseStyle.extend({
  name: 'breadcrumb',
  style: style$X,
  classes: classes$x
});

var classes$w = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-contextmenu p-component', {
      'p-contextmenu-mobile': instance.queryMatches
    }];
  },
  rootList: 'p-contextmenu-root-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-contextmenu-item', {
      'p-contextmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-contextmenu-item-content',
  itemLink: 'p-contextmenu-item-link',
  itemIcon: 'p-contextmenu-item-icon',
  itemLabel: 'p-contextmenu-item-label',
  submenuIcon: 'p-contextmenu-submenu-icon',
  submenu: 'p-contextmenu-submenu',
  separator: 'p-contextmenu-separator'
};
var ContextMenuStyle = BaseStyle.extend({
  name: 'contextmenu',
  style: style$Y,
  classes: classes$w
});

var classes$v = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-dock p-component', "p-dock-".concat(props.position), {
      'p-dock-mobile': instance.queryMatches
    }];
  },
  listContainer: 'p-dock-list-container',
  list: 'p-dock-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem,
      id = _ref2.id;
    return ['p-dock-item', {
      'p-focus': instance.isItemActive(id),
      'p-disabled': instance.disabled(processedItem)
    }];
  },
  itemContent: 'p-dock-item-content',
  itemLink: 'p-dock-item-link',
  itemIcon: 'p-dock-item-icon'
};
var DockStyle = BaseStyle.extend({
  name: 'dock',
  style: style$Z,
  classes: classes$v
});

var classes$u = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-menu p-component', {
      'p-menu-overlay': props.popup
    }];
  },
  start: 'p-menu-start',
  list: 'p-menu-list',
  submenuLabel: 'p-menu-submenu-label',
  separator: 'p-menu-separator',
  end: 'p-menu-end',
  item: function item(_ref2) {
    var instance = _ref2.instance;
    return ['p-menu-item', {
      'p-focus': instance.id === instance.focusedOptionId,
      'p-disabled': instance.disabled()
    }];
  },
  itemContent: 'p-menu-item-content',
  itemLink: 'p-menu-item-link',
  itemIcon: 'p-menu-item-icon',
  itemLabel: 'p-menu-item-label'
};
var MenuStyle = BaseStyle.extend({
  name: 'menu',
  style: style$_,
  classes: classes$u
});

var inlineStyles$4 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes$t = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-menubar p-component', {
      'p-menubar-mobile': instance.queryMatches,
      'p-menubar-mobile-active': instance.mobileActive
    }];
  },
  start: 'p-menubar-start',
  button: 'p-menubar-button',
  rootList: 'p-menubar-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-menubar-item', {
      'p-menubar-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-menubar-item-content',
  itemLink: 'p-menubar-item-link',
  itemIcon: 'p-menubar-item-icon',
  itemLabel: 'p-menubar-item-label',
  submenuIcon: 'p-menubar-submenu-icon',
  submenu: 'p-menubar-submenu',
  separator: 'p-menubar-separator',
  end: 'p-menubar-end'
};
var MenubarStyle = BaseStyle.extend({
  name: 'menubar',
  style: style$$,
  classes: classes$t,
  inlineStyles: inlineStyles$4
});

var inlineStyles$3 = {
  rootList: function rootList(_ref) {
    var props = _ref.props;
    return {
      'max-height': props.scrollHeight,
      overflow: 'auto'
    };
  }
};
var classes$s = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-megamenu p-component', {
      'p-megamenu-mobile': instance.queryMatches,
      'p-megamenu-mobile-active': instance.mobileActive,
      'p-megamenu-horizontal': instance.horizontal,
      'p-megamenu-vertical': instance.vertical
    }];
  },
  start: 'p-megamenu-start',
  button: 'p-megamenu-button',
  rootList: 'p-megamenu-root-list',
  submenuLabel: function submenuLabel(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-megamenu-submenu-label', {
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-megamenu-item', {
      'p-megamenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-megamenu-item-content',
  itemLink: 'p-megamenu-item-link',
  itemIcon: 'p-megamenu-item-icon',
  itemLabel: 'p-megamenu-item-label',
  submenuIcon: 'p-megamenu-submenu-icon',
  overlay: 'p-megamenu-overlay',
  grid: 'p-megamenu-grid',
  column: function column(_ref5) {
    var instance = _ref5.instance,
      processedItem = _ref5.processedItem;
    var length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    var columnClass;
    if (instance.$parentInstance.queryMatches) columnClass = 'p-megamenu-col-12';else {
      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;
        case 3:
          columnClass = 'p-megamenu-col-4';
          break;
        case 4:
          columnClass = 'p-megamenu-col-3';
          break;
        case 6:
          columnClass = 'p-megamenu-col-2';
          break;
        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }
    }
    return columnClass;
  },
  submenu: 'p-megamenu-submenu',
  separator: 'p-megamenu-separator',
  end: 'p-megamenu-end'
};
var MegaMenuStyle = BaseStyle.extend({
  name: 'megamenu',
  style: style$10,
  classes: classes$s,
  inlineStyles: inlineStyles$3
});

var classes$r = {
  root: 'p-panelmenu p-component',
  panel: 'p-panelmenu-panel',
  header: function header(_ref) {
    var instance = _ref.instance,
      item = _ref.item;
    return ['p-panelmenu-header', {
      'p-panelmenu-header-active': instance.isItemActive(item) && !!item.items,
      'p-disabled': instance.isItemDisabled(item)
    }];
  },
  headerContent: 'p-panelmenu-header-content',
  headerLink: 'p-panelmenu-header-link',
  headerIcon: 'p-panelmenu-header-icon',
  headerLabel: 'p-panelmenu-header-label',
  contentContainer: 'p-panelmenu-content-container',
  content: 'p-panelmenu-content',
  rootList: 'p-panelmenu-root-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-panelmenu-item', {
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-panelmenu-item-content',
  itemLink: 'p-panelmenu-item-link',
  itemIcon: 'p-panelmenu-item-icon',
  itemLabel: 'p-panelmenu-item-label',
  submenuIcon: 'p-panelmenu-submenu-icon',
  submenu: 'p-panelmenu-submenu',
  separator: 'p-menuitem-separator'
};
var PanelMenuStyle = BaseStyle.extend({
  name: 'panelmenu',
  style: style$11,
  classes: classes$r
});

var classes$q = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-steps p-component', {
      'p-readonly': props.readonly
    }];
  },
  list: 'p-steps-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      _item = _ref2.item,
      index = _ref2.index;
    return ['p-steps-item', {
      'p-steps-item-active': instance.isActive(index),
      'p-disabled': instance.isItemDisabled(_item, index)
    }];
  },
  itemLink: 'p-steps-item-link',
  itemNumber: 'p-steps-item-number',
  itemLabel: 'p-steps-item-label'
};
var StepsStyle = BaseStyle.extend({
  name: 'steps',
  style: style$12,
  classes: classes$q
});

var classes$p = {
  root: 'p-tabmenu p-component',
  tablist: 'p-tabmenu-tablist',
  item: function item(_ref) {
    var instance = _ref.instance,
      index = _ref.index,
      _item = _ref.item;
    return ['p-tabmenu-item', {
      'p-tabmenu-item-active': instance.d_activeIndex === index,
      'p-disabled': instance.disabled(_item)
    }];
  },
  itemLink: 'p-tabmenu-item-link',
  itemIcon: 'p-tabmenu-item-icon',
  itemLabel: 'p-tabmenu-item-label',
  activeBar: 'p-tabmenu-active-bar'
};
var TabMenuStyle = BaseStyle.extend({
  name: 'tabmenu',
  style: style$13,
  classes: classes$p
});

var inlineStyles$2 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes$o = {
  root: function root(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-tieredmenu p-component', {
      'p-tieredmenu-overlay': props.popup,
      'p-tieredmenu-mobile': instance.queryMatches
    }];
  },
  start: 'p-tieredmenu-start',
  rootList: 'p-tieredmenu-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-tieredmenu-item', {
      'p-tieredmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-tieredmenu-item-content',
  itemLink: 'p-tieredmenu-item-link',
  itemIcon: 'p-tieredmenu-item-icon',
  itemLabel: 'p-tieredmenu-item-label',
  submenuIcon: 'p-tieredmenu-submenu-icon',
  submenu: 'p-tieredmenu-submenu',
  separator: 'p-tieredmenu-separator',
  end: 'p-tieredmenu-end'
};
var TieredMenuStyle = BaseStyle.extend({
  name: 'tieredmenu',
  style: style$14,
  classes: classes$o,
  inlineStyles: inlineStyles$2
});

var classes$n = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-message p-component p-message-' + props.severity, {
      'p-message-outlined': props.variant === 'outlined',
      'p-message-simple': props.variant === 'simple',
      'p-message-sm': props.size === 'small',
      'p-message-lg': props.size === 'large'
    }];
  },
  content: 'p-message-content',
  icon: 'p-message-icon',
  text: 'p-message-text',
  closeButton: 'p-message-close-button',
  closeIcon: 'p-message-close-icon'
};
var MessageStyle = BaseStyle.extend({
  name: 'message',
  style: style$15,
  classes: classes$n
});

var classes$m = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-inlinemessage p-component p-inlinemessage-' + props.severity, {
      'p-inlinemessage-icon-only': !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ['p-inlinemessage-icon', props.icon];
  },
  text: 'p-inlinemessage-text'
};
var InlineMessageStyle = BaseStyle.extend({
  name: 'inlinemessage',
  style: style$16,
  classes: classes$m
});

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// Position
var inlineStyles$1 = {
  root: function root(_ref) {
    var position = _ref.position;
    return {
      position: 'fixed',
      top: position === 'top-right' || position === 'top-left' || position === 'top-center' ? '20px' : position === 'center' ? '50%' : null,
      right: (position === 'top-right' || position === 'bottom-right') && '20px',
      bottom: (position === 'bottom-left' || position === 'bottom-right' || position === 'bottom-center') && '20px',
      left: position === 'top-left' || position === 'bottom-left' ? '20px' : position === 'center' || position === 'top-center' || position === 'bottom-center' ? '50%' : null
    };
  }
};
var classes$l = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-toast p-component p-toast-' + props.position];
  },
  message: function message(_ref3) {
    var props = _ref3.props;
    return ['p-toast-message', {
      'p-toast-message-info': props.message.severity === 'info' || props.message.severity === undefined,
      'p-toast-message-warn': props.message.severity === 'warn',
      'p-toast-message-error': props.message.severity === 'error',
      'p-toast-message-success': props.message.severity === 'success',
      'p-toast-message-secondary': props.message.severity === 'secondary',
      'p-toast-message-contrast': props.message.severity === 'contrast'
    }];
  },
  messageContent: 'p-toast-message-content',
  messageIcon: function messageIcon(_ref4) {
    var props = _ref4.props;
    return ['p-toast-message-icon', _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, props.infoIcon, props.message.severity === 'info'), props.warnIcon, props.message.severity === 'warn'), props.errorIcon, props.message.severity === 'error'), props.successIcon, props.message.severity === 'success')];
  },
  messageText: 'p-toast-message-text',
  summary: 'p-toast-summary',
  detail: 'p-toast-detail',
  closeButton: 'p-toast-close-button',
  closeIcon: 'p-toast-close-icon'
};
var ToastStyle = BaseStyle.extend({
  name: 'toast',
  style: style$17,
  classes: classes$l,
  inlineStyles: inlineStyles$1
});

var classes$k = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-carousel p-component', {
      'p-carousel-vertical': instance.isVertical(),
      'p-carousel-horizontal': !instance.isVertical()
    }];
  },
  header: 'p-carousel-header',
  contentContainer: 'p-carousel-content-container',
  content: 'p-carousel-content',
  pcPrevButton: function pcPrevButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-carousel-prev-button', {
      'p-disabled': instance.backwardIsDisabled
    }];
  },
  viewport: 'p-carousel-viewport',
  itemList: 'p-carousel-item-list',
  itemClone: function itemClone(_ref3) {
    var index = _ref3.index,
      value = _ref3.value,
      totalShiftedItems = _ref3.totalShiftedItems,
      d_numVisible = _ref3.d_numVisible;
    return ['p-carousel-item p-carousel-item-clone', {
      'p-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,
      'p-carousel-item-start': index === 0,
      'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance,
      index = _ref4.index;
    return ['p-carousel-item', {
      'p-carousel-item-active': instance.firstIndex() <= index && instance.lastIndex() >= index,
      'p-carousel-item-start': instance.firstIndex() === index,
      'p-carousel-item-end': instance.lastIndex() === index
    }];
  },
  pcNextButton: function pcNextButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-carousel-next-button', {
      'p-disabled': instance.forwardIsDisabled
    }];
  },
  indicatorList: 'p-carousel-indicator-list',
  indicator: function indicator(_ref6) {
    var instance = _ref6.instance,
      index = _ref6.index;
    return ['p-carousel-indicator', {
      'p-carousel-indicator-active': instance.d_page === index
    }];
  },
  indicatorButton: 'p-carousel-indicator-button',
  footer: 'p-carousel-footer'
};
var CarouselStyle = BaseStyle.extend({
  name: 'carousel',
  style: style$18,
  classes: classes$k
});

var classes$j = {
  mask: 'p-galleria-mask p-overlay-mask p-overlay-mask-enter',
  root: function root(_ref) {
    var instance = _ref.instance;
    var thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass('p-galleria-thumbnails', instance.$attrs.thumbnailsPosition);
    var indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass('p-galleria-indicators', instance.$attrs.indicatorsPosition);
    return ['p-galleria p-component', {
      'p-galleria-fullscreen': instance.$attrs.fullScreen,
      'p-galleria-inset-indicators': instance.$attrs.showIndicatorsOnItem,
      'p-galleria-hover-navigators': instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: 'p-galleria-close-button',
  closeIcon: 'p-galleria-close-icon',
  header: 'p-galleria-header',
  content: 'p-galleria-content',
  footer: 'p-galleria-footer',
  itemsContainer: 'p-galleria-items-container',
  items: 'p-galleria-items',
  prevButton: function prevButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-galleria-prev-button p-galleria-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled
    }];
  },
  prevIcon: 'p-galleria-prev-icon',
  item: 'p-galleria-item',
  nextButton: function nextButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-galleria-next-button p-galleria-nav-button', {
      'p-disabled': instance.isNavForwardDisabled
    }];
  },
  nextIcon: 'p-galleria-next-icon',
  caption: 'p-galleria-caption',
  indicatorList: 'p-galleria-indicator-list',
  indicator: function indicator(_ref4) {
    var instance = _ref4.instance,
      index = _ref4.index;
    return ['p-galleria-indicator', {
      'p-galleria-indicator-active': instance.isIndicatorItemActive(index)
    }];
  },
  indicatorButton: 'p-galleria-indicator-button',
  thumbnails: 'p-galleria-thumbnails',
  thumbnailContent: 'p-galleria-thumbnails-content',
  thumbnailPrevButton: function thumbnailPrevButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled
    }];
  },
  thumbnailPrevIcon: 'p-galleria-thumbnail-prev-icon',
  thumbnailsViewport: 'p-galleria-thumbnails-viewport',
  thumbnailItems: 'p-galleria-thumbnail-items',
  thumbnailItem: function thumbnailItem(_ref6) {
    var instance = _ref6.instance,
      index = _ref6.index,
      activeIndex = _ref6.activeIndex;
    return ['p-galleria-thumbnail-item', {
      'p-galleria-thumbnail-item-current': activeIndex === index,
      'p-galleria-thumbnail-item-active': instance.isItemActive(index),
      'p-galleria-thumbnail-item-start': instance.firstItemAciveIndex() === index,
      'p-galleria-thumbnail-item-end': instance.lastItemActiveIndex() === index
    }];
  },
  thumbnail: 'p-galleria-thumbnail',
  thumbnailNextButton: function thumbnailNextButton(_ref7) {
    var instance = _ref7.instance;
    return ['p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavForwardDisabled
    }];
  },
  thumbnailNextIcon: 'p-galleria-thumbnail-next-icon'
};
var GalleriaStyle = BaseStyle.extend({
  name: 'galleria',
  style: style$19,
  classes: classes$j
});

var classes$i = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-image p-component', {
      'p-image-preview': props.preview
    }];
  },
  previewMask: 'p-image-preview-mask',
  previewIcon: 'p-image-preview-icon',
  mask: 'p-image-mask p-overlay-mask p-overlay-mask-enter',
  toolbar: 'p-image-toolbar',
  rotateRightButton: 'p-image-action p-image-rotate-right-button',
  rotateLeftButton: 'p-image-action p-image-rotate-left-button',
  zoomOutButton: function zoomOutButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-image-action p-image-zoom-out-button', {
      'p-disabled': instance.isZoomOutDisabled
    }];
  },
  zoomInButton: function zoomInButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-image-action p-image-zoom-in-button', {
      'p-disabled': instance.isZoomInDisabled
    }];
  },
  closeButton: 'p-image-action p-image-close-button',
  original: 'p-image-original'
};
var ImageStyle = BaseStyle.extend({
  name: 'image',
  style: style$1a,
  classes: classes$i
});

var classes$h = {
  root: 'p-imagecompare',
  slider: 'p-imagecompare-slider'
};
var ImageCompareStyle = BaseStyle.extend({
  name: 'imagecompare',
  style: style$1b,
  classes: classes$h
});

var classes$g = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-avatar p-component', {
      'p-avatar-image': props.image != null,
      'p-avatar-circle': props.shape === 'circle',
      'p-avatar-lg': props.size === 'large',
      'p-avatar-xl': props.size === 'xlarge'
    }];
  },
  label: 'p-avatar-label',
  icon: 'p-avatar-icon'
};
var AvatarStyle = BaseStyle.extend({
  name: 'avatar',
  style: style$1c,
  classes: classes$g
});

var classes$f = {
  root: 'p-avatar-group p-component'
};
var AvatarGroupStyle = BaseStyle.extend({
  name: 'avatargroup',
  classes: classes$f
});

var classes$e = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-badge p-component', {
      'p-badge-circle': isNotEmpty(props.value) && String(props.value).length === 1,
      'p-badge-dot': isEmpty(props.value) && !instance.$slots["default"],
      'p-badge-sm': props.size === 'small',
      'p-badge-lg': props.size === 'large',
      'p-badge-xl': props.size === 'xlarge',
      'p-badge-info': props.severity === 'info',
      'p-badge-success': props.severity === 'success',
      'p-badge-warn': props.severity === 'warn',
      'p-badge-danger': props.severity === 'danger',
      'p-badge-secondary': props.severity === 'secondary',
      'p-badge-contrast': props.severity === 'contrast'
    }];
  }
};
var BadgeStyle = BaseStyle.extend({
  name: 'badge',
  style: style$1d,
  classes: classes$e
});

var classes$d = {
  root: 'p-blockui'
};
var BlockUIStyle = BaseStyle.extend({
  name: 'blockui',
  style: style$1e,
  classes: classes$d
});

var classes$c = {
  root: 'p-chip p-component',
  image: 'p-chip-image',
  icon: 'p-chip-icon',
  label: 'p-chip-label',
  removeIcon: 'p-chip-remove-icon'
};
var ChipStyle = BaseStyle.extend({
  name: 'chip',
  style: style$1f,
  classes: classes$c
});

var classes$b = {
  root: 'p-inplace p-component',
  display: function display(_ref) {
    var props = _ref.props;
    return ['p-inplace-display', {
      'p-disabled': props.disabled
    }];
  },
  content: 'p-inplace-content'
};
var InplaceStyle = BaseStyle.extend({
  name: 'inplace',
  style: style$1g,
  classes: classes$b
});

var classes$a = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-metergroup p-component', {
      'p-metergroup-horizontal': props.orientation === 'horizontal',
      'p-metergroup-vertical': props.orientation === 'vertical'
    }];
  },
  meters: 'p-metergroup-meters',
  meter: 'p-metergroup-meter',
  labelList: function labelList(_ref2) {
    var props = _ref2.props;
    return ['p-metergroup-label-list', {
      'p-metergroup-label-list-vertical': props.labelOrientation === 'vertical',
      'p-metergroup-label-list-horizontal': props.labelOrientation === 'horizontal'
    }];
  },
  label: 'p-metergroup-label',
  labelIcon: 'p-metergroup-label-icon',
  labelMarker: 'p-metergroup-label-marker',
  labelText: 'p-metergroup-label-text'
};
var MeterGroupStyle = BaseStyle.extend({
  name: 'metergroup',
  style: style$1h,
  classes: classes$a
});

var classes$9 = {
  root: 'p-overlaybadge'
};
var OverlayBadgeStyle = BaseStyle.extend({
  name: 'overlaybadge',
  style: style$1i,
  classes: classes$9
});

var classes$8 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-scrolltop', {
      'p-scrolltop-sticky': props.target !== 'window'
    }];
  },
  icon: 'p-scrolltop-icon'
};
var ScrollTopStyle = BaseStyle.extend({
  name: 'scrolltop',
  style: style$1j,
  classes: classes$8
});

var inlineStyles = {
  root: {
    position: 'relative'
  }
};
var classes$7 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-skeleton p-component', {
      'p-skeleton-circle': props.shape === 'circle',
      'p-skeleton-animation-none': props.animation === 'none'
    }];
  }
};
var SkeletonStyle = BaseStyle.extend({
  name: 'skeleton',
  style: style$1k,
  classes: classes$7,
  inlineStyles: inlineStyles
});

var classes$6 = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-progressbar p-component', {
      'p-progressbar-determinate': instance.determinate,
      'p-progressbar-indeterminate': instance.indeterminate
    }];
  },
  value: 'p-progressbar-value',
  label: 'p-progressbar-label'
};
var ProgressBarStyle = BaseStyle.extend({
  name: 'progressbar',
  style: style$1l,
  classes: classes$6
});

var classes$5 = {
  root: 'p-progressspinner',
  spin: 'p-progressspinner-spin',
  circle: 'p-progressspinner-circle'
};
var ProgressSpinnerStyle = BaseStyle.extend({
  name: 'progressspinner',
  style: style$1m,
  classes: classes$5
});

var classes$4 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tag p-component', {
      'p-tag-info': props.severity === 'info',
      'p-tag-success': props.severity === 'success',
      'p-tag-warn': props.severity === 'warn',
      'p-tag-danger': props.severity === 'danger',
      'p-tag-secondary': props.severity === 'secondary',
      'p-tag-contrast': props.severity === 'contrast',
      'p-tag-rounded': props.rounded
    }];
  },
  icon: 'p-tag-icon',
  label: 'p-tag-label'
};
var TagStyle = BaseStyle.extend({
  name: 'tag',
  style: style$1n,
  classes: classes$4
});

var classes$3 = {
  root: 'p-terminal p-component',
  welcomeMessage: 'p-terminal-welcome-message',
  commandList: 'p-terminal-command-list',
  command: 'p-terminal-command',
  commandValue: 'p-terminal-command-value',
  commandResponse: 'p-terminal-command-response',
  prompt: 'p-terminal-prompt',
  promptLabel: 'p-terminal-prompt-label',
  promptValue: 'p-terminal-prompt-value'
};
var TerminalStyle = BaseStyle.extend({
  name: 'terminal',
  style: style$1o,
  classes: classes$3
});

var classes$2 = {
  root: 'p-badge p-component'
};
var BadgeDirectiveStyle = BaseStyle.extend({
  name: 'badge-directive',
  classes: classes$2
});

var classes$1 = {
  root: 'p-tooltip p-component',
  arrow: 'p-tooltip-arrow',
  text: 'p-tooltip-text'
};
var TooltipStyle = BaseStyle.extend({
  name: 'tooltip-directive',
  style: style$1p,
  classes: classes$1
});

var classes = {
  root: 'p-ink'
};
var RippleStyle = BaseStyle.extend({
  name: 'ripple-directive',
  style: style$1q,
  classes: classes
});

var StyleClassStyle = BaseStyle.extend({
  name: 'styleclass-directive'
});

var FocusTrapStyle = BaseStyle.extend({
  name: 'focustrap-directive'
});

var AnimateOnScrollStyle = BaseStyle.extend({
  name: 'animateonscroll-directive'
});

var KeyFilterStyle = BaseStyle.extend({
  name: 'keyfilter-directive'
});

const runtimeConfig = useRuntimeConfig();
const config = runtimeConfig?.public?.primevue ?? {};
const { options = {} } = config;

const stylesToTop = [].join('');
const styleProps = {
    
};
const styles$2 = [
    ,
    BaseStyle && BaseStyle.getStyleSheet ? BaseStyle.getStyleSheet(undefined, styleProps) : '',BaseComponentStyle && BaseComponentStyle.getStyleSheet ? BaseComponentStyle.getStyleSheet(undefined, styleProps) : '',AutoCompleteStyle && AutoCompleteStyle.getStyleSheet ? AutoCompleteStyle.getStyleSheet(undefined, styleProps) : '',CalendarStyle && CalendarStyle.getStyleSheet ? CalendarStyle.getStyleSheet(undefined, styleProps) : '',CascadeSelectStyle && CascadeSelectStyle.getStyleSheet ? CascadeSelectStyle.getStyleSheet(undefined, styleProps) : '',CheckboxStyle && CheckboxStyle.getStyleSheet ? CheckboxStyle.getStyleSheet(undefined, styleProps) : '',CheckboxGroupStyle && CheckboxGroupStyle.getStyleSheet ? CheckboxGroupStyle.getStyleSheet(undefined, styleProps) : '',ChipsStyle && ChipsStyle.getStyleSheet ? ChipsStyle.getStyleSheet(undefined, styleProps) : '',ColorPickerStyle && ColorPickerStyle.getStyleSheet ? ColorPickerStyle.getStyleSheet(undefined, styleProps) : '',DatePickerStyle && DatePickerStyle.getStyleSheet ? DatePickerStyle.getStyleSheet(undefined, styleProps) : '',DropdownStyle && DropdownStyle.getStyleSheet ? DropdownStyle.getStyleSheet(undefined, styleProps) : '',FloatLabelStyle && FloatLabelStyle.getStyleSheet ? FloatLabelStyle.getStyleSheet(undefined, styleProps) : '',FluidStyle && FluidStyle.getStyleSheet ? FluidStyle.getStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getStyleSheet ? IconFieldStyle.getStyleSheet(undefined, styleProps) : '',IftaLabelStyle && IftaLabelStyle.getStyleSheet ? IftaLabelStyle.getStyleSheet(undefined, styleProps) : '',InputChipsStyle && InputChipsStyle.getStyleSheet ? InputChipsStyle.getStyleSheet(undefined, styleProps) : '',InputGroupStyle && InputGroupStyle.getStyleSheet ? InputGroupStyle.getStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle && InputGroupAddonStyle.getStyleSheet ? InputGroupAddonStyle.getStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getStyleSheet ? InputIconStyle.getStyleSheet(undefined, styleProps) : '',InputMaskStyle && InputMaskStyle.getStyleSheet ? InputMaskStyle.getStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getStyleSheet ? InputNumberStyle.getStyleSheet(undefined, styleProps) : '',InputOtpStyle && InputOtpStyle.getStyleSheet ? InputOtpStyle.getStyleSheet(undefined, styleProps) : '',InputSwitchStyle && InputSwitchStyle.getStyleSheet ? InputSwitchStyle.getStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getStyleSheet ? InputTextStyle.getStyleSheet(undefined, styleProps) : '',KnobStyle && KnobStyle.getStyleSheet ? KnobStyle.getStyleSheet(undefined, styleProps) : '',ListboxStyle && ListboxStyle.getStyleSheet ? ListboxStyle.getStyleSheet(undefined, styleProps) : '',MultiSelectStyle && MultiSelectStyle.getStyleSheet ? MultiSelectStyle.getStyleSheet(undefined, styleProps) : '',PasswordStyle && PasswordStyle.getStyleSheet ? PasswordStyle.getStyleSheet(undefined, styleProps) : '',RadioButtonStyle && RadioButtonStyle.getStyleSheet ? RadioButtonStyle.getStyleSheet(undefined, styleProps) : '',RadioButtonGroupStyle && RadioButtonGroupStyle.getStyleSheet ? RadioButtonGroupStyle.getStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getStyleSheet ? RatingStyle.getStyleSheet(undefined, styleProps) : '',SelectStyle && SelectStyle.getStyleSheet ? SelectStyle.getStyleSheet(undefined, styleProps) : '',SelectButtonStyle && SelectButtonStyle.getStyleSheet ? SelectButtonStyle.getStyleSheet(undefined, styleProps) : '',SliderStyle && SliderStyle.getStyleSheet ? SliderStyle.getStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getStyleSheet ? TextareaStyle.getStyleSheet(undefined, styleProps) : '',ToggleButtonStyle && ToggleButtonStyle.getStyleSheet ? ToggleButtonStyle.getStyleSheet(undefined, styleProps) : '',ToggleSwitchStyle && ToggleSwitchStyle.getStyleSheet ? ToggleSwitchStyle.getStyleSheet(undefined, styleProps) : '',TreeSelectStyle && TreeSelectStyle.getStyleSheet ? TreeSelectStyle.getStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getStyleSheet ? ButtonStyle.getStyleSheet(undefined, styleProps) : '',ButtonGroupStyle && ButtonGroupStyle.getStyleSheet ? ButtonGroupStyle.getStyleSheet(undefined, styleProps) : '',SpeedDialStyle && SpeedDialStyle.getStyleSheet ? SpeedDialStyle.getStyleSheet(undefined, styleProps) : '',SplitButtonStyle && SplitButtonStyle.getStyleSheet ? SplitButtonStyle.getStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getStyleSheet ? ColumnStyle.getStyleSheet(undefined, styleProps) : '',RowStyle && RowStyle.getStyleSheet ? RowStyle.getStyleSheet(undefined, styleProps) : '',ColumnGroupStyle && ColumnGroupStyle.getStyleSheet ? ColumnGroupStyle.getStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getStyleSheet ? DataTableStyle.getStyleSheet(undefined, styleProps) : '',DataViewStyle && DataViewStyle.getStyleSheet ? DataViewStyle.getStyleSheet(undefined, styleProps) : '',OrderListStyle && OrderListStyle.getStyleSheet ? OrderListStyle.getStyleSheet(undefined, styleProps) : '',OrganizationChartStyle && OrganizationChartStyle.getStyleSheet ? OrganizationChartStyle.getStyleSheet(undefined, styleProps) : '',PaginatorStyle && PaginatorStyle.getStyleSheet ? PaginatorStyle.getStyleSheet(undefined, styleProps) : '',PickListStyle && PickListStyle.getStyleSheet ? PickListStyle.getStyleSheet(undefined, styleProps) : '',TreeStyle && TreeStyle.getStyleSheet ? TreeStyle.getStyleSheet(undefined, styleProps) : '',TreeTableStyle && TreeTableStyle.getStyleSheet ? TreeTableStyle.getStyleSheet(undefined, styleProps) : '',TimelineStyle && TimelineStyle.getStyleSheet ? TimelineStyle.getStyleSheet(undefined, styleProps) : '',VirtualScrollerStyle && VirtualScrollerStyle.getStyleSheet ? VirtualScrollerStyle.getStyleSheet(undefined, styleProps) : '',AccordionStyle && AccordionStyle.getStyleSheet ? AccordionStyle.getStyleSheet(undefined, styleProps) : '',AccordionPanelStyle && AccordionPanelStyle.getStyleSheet ? AccordionPanelStyle.getStyleSheet(undefined, styleProps) : '',AccordionHeaderStyle && AccordionHeaderStyle.getStyleSheet ? AccordionHeaderStyle.getStyleSheet(undefined, styleProps) : '',AccordionContentStyle && AccordionContentStyle.getStyleSheet ? AccordionContentStyle.getStyleSheet(undefined, styleProps) : '',AccordionTabStyle && AccordionTabStyle.getStyleSheet ? AccordionTabStyle.getStyleSheet(undefined, styleProps) : '',CardStyle && CardStyle.getStyleSheet ? CardStyle.getStyleSheet(undefined, styleProps) : '',DeferredContentStyle && DeferredContentStyle.getStyleSheet ? DeferredContentStyle.getStyleSheet(undefined, styleProps) : '',DividerStyle && DividerStyle.getStyleSheet ? DividerStyle.getStyleSheet(undefined, styleProps) : '',FieldsetStyle && FieldsetStyle.getStyleSheet ? FieldsetStyle.getStyleSheet(undefined, styleProps) : '',PanelStyle && PanelStyle.getStyleSheet ? PanelStyle.getStyleSheet(undefined, styleProps) : '',ScrollPanelStyle && ScrollPanelStyle.getStyleSheet ? ScrollPanelStyle.getStyleSheet(undefined, styleProps) : '',SplitterStyle && SplitterStyle.getStyleSheet ? SplitterStyle.getStyleSheet(undefined, styleProps) : '',SplitterPanelStyle && SplitterPanelStyle.getStyleSheet ? SplitterPanelStyle.getStyleSheet(undefined, styleProps) : '',StepperStyle && StepperStyle.getStyleSheet ? StepperStyle.getStyleSheet(undefined, styleProps) : '',StepListStyle && StepListStyle.getStyleSheet ? StepListStyle.getStyleSheet(undefined, styleProps) : '',StepStyle && StepStyle.getStyleSheet ? StepStyle.getStyleSheet(undefined, styleProps) : '',StepItemStyle && StepItemStyle.getStyleSheet ? StepItemStyle.getStyleSheet(undefined, styleProps) : '',StepPanelsStyle && StepPanelsStyle.getStyleSheet ? StepPanelsStyle.getStyleSheet(undefined, styleProps) : '',StepPanelStyle && StepPanelStyle.getStyleSheet ? StepPanelStyle.getStyleSheet(undefined, styleProps) : '',TabViewStyle && TabViewStyle.getStyleSheet ? TabViewStyle.getStyleSheet(undefined, styleProps) : '',TabsStyle && TabsStyle.getStyleSheet ? TabsStyle.getStyleSheet(undefined, styleProps) : '',TabListStyle && TabListStyle.getStyleSheet ? TabListStyle.getStyleSheet(undefined, styleProps) : '',TabStyle && TabStyle.getStyleSheet ? TabStyle.getStyleSheet(undefined, styleProps) : '',TabPanelsStyle && TabPanelsStyle.getStyleSheet ? TabPanelsStyle.getStyleSheet(undefined, styleProps) : '',TabPanelStyle && TabPanelStyle.getStyleSheet ? TabPanelStyle.getStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getStyleSheet ? ToolbarStyle.getStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle && ConfirmDialogStyle.getStyleSheet ? ConfirmDialogStyle.getStyleSheet(undefined, styleProps) : '',ConfirmPopupStyle && ConfirmPopupStyle.getStyleSheet ? ConfirmPopupStyle.getStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getStyleSheet ? DialogStyle.getStyleSheet(undefined, styleProps) : '',DrawerStyle && DrawerStyle.getStyleSheet ? DrawerStyle.getStyleSheet(undefined, styleProps) : '',DynamicDialogStyle && DynamicDialogStyle.getStyleSheet ? DynamicDialogStyle.getStyleSheet(undefined, styleProps) : '',OverlayPanelStyle && OverlayPanelStyle.getStyleSheet ? OverlayPanelStyle.getStyleSheet(undefined, styleProps) : '',PopoverStyle && PopoverStyle.getStyleSheet ? PopoverStyle.getStyleSheet(undefined, styleProps) : '',SidebarStyle && SidebarStyle.getStyleSheet ? SidebarStyle.getStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getStyleSheet ? FileUploadStyle.getStyleSheet(undefined, styleProps) : '',BreadcrumbStyle && BreadcrumbStyle.getStyleSheet ? BreadcrumbStyle.getStyleSheet(undefined, styleProps) : '',ContextMenuStyle && ContextMenuStyle.getStyleSheet ? ContextMenuStyle.getStyleSheet(undefined, styleProps) : '',DockStyle && DockStyle.getStyleSheet ? DockStyle.getStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getStyleSheet ? MenuStyle.getStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getStyleSheet ? MenubarStyle.getStyleSheet(undefined, styleProps) : '',MegaMenuStyle && MegaMenuStyle.getStyleSheet ? MegaMenuStyle.getStyleSheet(undefined, styleProps) : '',PanelMenuStyle && PanelMenuStyle.getStyleSheet ? PanelMenuStyle.getStyleSheet(undefined, styleProps) : '',StepsStyle && StepsStyle.getStyleSheet ? StepsStyle.getStyleSheet(undefined, styleProps) : '',TabMenuStyle && TabMenuStyle.getStyleSheet ? TabMenuStyle.getStyleSheet(undefined, styleProps) : '',TieredMenuStyle && TieredMenuStyle.getStyleSheet ? TieredMenuStyle.getStyleSheet(undefined, styleProps) : '',MessageStyle && MessageStyle.getStyleSheet ? MessageStyle.getStyleSheet(undefined, styleProps) : '',InlineMessageStyle && InlineMessageStyle.getStyleSheet ? InlineMessageStyle.getStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getStyleSheet ? ToastStyle.getStyleSheet(undefined, styleProps) : '',CarouselStyle && CarouselStyle.getStyleSheet ? CarouselStyle.getStyleSheet(undefined, styleProps) : '',GalleriaStyle && GalleriaStyle.getStyleSheet ? GalleriaStyle.getStyleSheet(undefined, styleProps) : '',ImageStyle && ImageStyle.getStyleSheet ? ImageStyle.getStyleSheet(undefined, styleProps) : '',ImageCompareStyle && ImageCompareStyle.getStyleSheet ? ImageCompareStyle.getStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getStyleSheet ? AvatarStyle.getStyleSheet(undefined, styleProps) : '',AvatarGroupStyle && AvatarGroupStyle.getStyleSheet ? AvatarGroupStyle.getStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getStyleSheet ? BadgeStyle.getStyleSheet(undefined, styleProps) : '',BlockUIStyle && BlockUIStyle.getStyleSheet ? BlockUIStyle.getStyleSheet(undefined, styleProps) : '',ChipStyle && ChipStyle.getStyleSheet ? ChipStyle.getStyleSheet(undefined, styleProps) : '',InplaceStyle && InplaceStyle.getStyleSheet ? InplaceStyle.getStyleSheet(undefined, styleProps) : '',MeterGroupStyle && MeterGroupStyle.getStyleSheet ? MeterGroupStyle.getStyleSheet(undefined, styleProps) : '',OverlayBadgeStyle && OverlayBadgeStyle.getStyleSheet ? OverlayBadgeStyle.getStyleSheet(undefined, styleProps) : '',ScrollTopStyle && ScrollTopStyle.getStyleSheet ? ScrollTopStyle.getStyleSheet(undefined, styleProps) : '',SkeletonStyle && SkeletonStyle.getStyleSheet ? SkeletonStyle.getStyleSheet(undefined, styleProps) : '',ProgressBarStyle && ProgressBarStyle.getStyleSheet ? ProgressBarStyle.getStyleSheet(undefined, styleProps) : '',ProgressSpinnerStyle && ProgressSpinnerStyle.getStyleSheet ? ProgressSpinnerStyle.getStyleSheet(undefined, styleProps) : '',TagStyle && TagStyle.getStyleSheet ? TagStyle.getStyleSheet(undefined, styleProps) : '',TerminalStyle && TerminalStyle.getStyleSheet ? TerminalStyle.getStyleSheet(undefined, styleProps) : '',BadgeDirectiveStyle && BadgeDirectiveStyle.getStyleSheet ? BadgeDirectiveStyle.getStyleSheet(undefined, styleProps) : '',TooltipStyle && TooltipStyle.getStyleSheet ? TooltipStyle.getStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getStyleSheet ? RippleStyle.getStyleSheet(undefined, styleProps) : '',StyleClassStyle && StyleClassStyle.getStyleSheet ? StyleClassStyle.getStyleSheet(undefined, styleProps) : '',FocusTrapStyle && FocusTrapStyle.getStyleSheet ? FocusTrapStyle.getStyleSheet(undefined, styleProps) : '',AnimateOnScrollStyle && AnimateOnScrollStyle.getStyleSheet ? AnimateOnScrollStyle.getStyleSheet(undefined, styleProps) : '',KeyFilterStyle && KeyFilterStyle.getStyleSheet ? KeyFilterStyle.getStyleSheet(undefined, styleProps) : ''
].join('');

Theme.setTheme(options?.theme);

const themes = 
[
    BaseStyle && BaseStyle.getCommonThemeStyleSheet ? BaseStyle.getCommonThemeStyleSheet(undefined, styleProps) : '',
    BaseStyle && BaseStyle.getThemeStyleSheet ? BaseStyle.getThemeStyleSheet(undefined, styleProps) : '',BaseComponentStyle && BaseComponentStyle.getThemeStyleSheet ? BaseComponentStyle.getThemeStyleSheet(undefined, styleProps) : '',AutoCompleteStyle && AutoCompleteStyle.getThemeStyleSheet ? AutoCompleteStyle.getThemeStyleSheet(undefined, styleProps) : '',CalendarStyle && CalendarStyle.getThemeStyleSheet ? CalendarStyle.getThemeStyleSheet(undefined, styleProps) : '',CascadeSelectStyle && CascadeSelectStyle.getThemeStyleSheet ? CascadeSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',CheckboxStyle && CheckboxStyle.getThemeStyleSheet ? CheckboxStyle.getThemeStyleSheet(undefined, styleProps) : '',CheckboxGroupStyle && CheckboxGroupStyle.getThemeStyleSheet ? CheckboxGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',ChipsStyle && ChipsStyle.getThemeStyleSheet ? ChipsStyle.getThemeStyleSheet(undefined, styleProps) : '',ColorPickerStyle && ColorPickerStyle.getThemeStyleSheet ? ColorPickerStyle.getThemeStyleSheet(undefined, styleProps) : '',DatePickerStyle && DatePickerStyle.getThemeStyleSheet ? DatePickerStyle.getThemeStyleSheet(undefined, styleProps) : '',DropdownStyle && DropdownStyle.getThemeStyleSheet ? DropdownStyle.getThemeStyleSheet(undefined, styleProps) : '',FloatLabelStyle && FloatLabelStyle.getThemeStyleSheet ? FloatLabelStyle.getThemeStyleSheet(undefined, styleProps) : '',FluidStyle && FluidStyle.getThemeStyleSheet ? FluidStyle.getThemeStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getThemeStyleSheet ? IconFieldStyle.getThemeStyleSheet(undefined, styleProps) : '',IftaLabelStyle && IftaLabelStyle.getThemeStyleSheet ? IftaLabelStyle.getThemeStyleSheet(undefined, styleProps) : '',InputChipsStyle && InputChipsStyle.getThemeStyleSheet ? InputChipsStyle.getThemeStyleSheet(undefined, styleProps) : '',InputGroupStyle && InputGroupStyle.getThemeStyleSheet ? InputGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle && InputGroupAddonStyle.getThemeStyleSheet ? InputGroupAddonStyle.getThemeStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getThemeStyleSheet ? InputIconStyle.getThemeStyleSheet(undefined, styleProps) : '',InputMaskStyle && InputMaskStyle.getThemeStyleSheet ? InputMaskStyle.getThemeStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getThemeStyleSheet ? InputNumberStyle.getThemeStyleSheet(undefined, styleProps) : '',InputOtpStyle && InputOtpStyle.getThemeStyleSheet ? InputOtpStyle.getThemeStyleSheet(undefined, styleProps) : '',InputSwitchStyle && InputSwitchStyle.getThemeStyleSheet ? InputSwitchStyle.getThemeStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getThemeStyleSheet ? InputTextStyle.getThemeStyleSheet(undefined, styleProps) : '',KnobStyle && KnobStyle.getThemeStyleSheet ? KnobStyle.getThemeStyleSheet(undefined, styleProps) : '',ListboxStyle && ListboxStyle.getThemeStyleSheet ? ListboxStyle.getThemeStyleSheet(undefined, styleProps) : '',MultiSelectStyle && MultiSelectStyle.getThemeStyleSheet ? MultiSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',PasswordStyle && PasswordStyle.getThemeStyleSheet ? PasswordStyle.getThemeStyleSheet(undefined, styleProps) : '',RadioButtonStyle && RadioButtonStyle.getThemeStyleSheet ? RadioButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',RadioButtonGroupStyle && RadioButtonGroupStyle.getThemeStyleSheet ? RadioButtonGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getThemeStyleSheet ? RatingStyle.getThemeStyleSheet(undefined, styleProps) : '',SelectStyle && SelectStyle.getThemeStyleSheet ? SelectStyle.getThemeStyleSheet(undefined, styleProps) : '',SelectButtonStyle && SelectButtonStyle.getThemeStyleSheet ? SelectButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',SliderStyle && SliderStyle.getThemeStyleSheet ? SliderStyle.getThemeStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getThemeStyleSheet ? TextareaStyle.getThemeStyleSheet(undefined, styleProps) : '',ToggleButtonStyle && ToggleButtonStyle.getThemeStyleSheet ? ToggleButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ToggleSwitchStyle && ToggleSwitchStyle.getThemeStyleSheet ? ToggleSwitchStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeSelectStyle && TreeSelectStyle.getThemeStyleSheet ? TreeSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getThemeStyleSheet ? ButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ButtonGroupStyle && ButtonGroupStyle.getThemeStyleSheet ? ButtonGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',SpeedDialStyle && SpeedDialStyle.getThemeStyleSheet ? SpeedDialStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitButtonStyle && SplitButtonStyle.getThemeStyleSheet ? SplitButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getThemeStyleSheet ? ColumnStyle.getThemeStyleSheet(undefined, styleProps) : '',RowStyle && RowStyle.getThemeStyleSheet ? RowStyle.getThemeStyleSheet(undefined, styleProps) : '',ColumnGroupStyle && ColumnGroupStyle.getThemeStyleSheet ? ColumnGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getThemeStyleSheet ? DataTableStyle.getThemeStyleSheet(undefined, styleProps) : '',DataViewStyle && DataViewStyle.getThemeStyleSheet ? DataViewStyle.getThemeStyleSheet(undefined, styleProps) : '',OrderListStyle && OrderListStyle.getThemeStyleSheet ? OrderListStyle.getThemeStyleSheet(undefined, styleProps) : '',OrganizationChartStyle && OrganizationChartStyle.getThemeStyleSheet ? OrganizationChartStyle.getThemeStyleSheet(undefined, styleProps) : '',PaginatorStyle && PaginatorStyle.getThemeStyleSheet ? PaginatorStyle.getThemeStyleSheet(undefined, styleProps) : '',PickListStyle && PickListStyle.getThemeStyleSheet ? PickListStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeStyle && TreeStyle.getThemeStyleSheet ? TreeStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeTableStyle && TreeTableStyle.getThemeStyleSheet ? TreeTableStyle.getThemeStyleSheet(undefined, styleProps) : '',TimelineStyle && TimelineStyle.getThemeStyleSheet ? TimelineStyle.getThemeStyleSheet(undefined, styleProps) : '',VirtualScrollerStyle && VirtualScrollerStyle.getThemeStyleSheet ? VirtualScrollerStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionStyle && AccordionStyle.getThemeStyleSheet ? AccordionStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionPanelStyle && AccordionPanelStyle.getThemeStyleSheet ? AccordionPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionHeaderStyle && AccordionHeaderStyle.getThemeStyleSheet ? AccordionHeaderStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionContentStyle && AccordionContentStyle.getThemeStyleSheet ? AccordionContentStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionTabStyle && AccordionTabStyle.getThemeStyleSheet ? AccordionTabStyle.getThemeStyleSheet(undefined, styleProps) : '',CardStyle && CardStyle.getThemeStyleSheet ? CardStyle.getThemeStyleSheet(undefined, styleProps) : '',DeferredContentStyle && DeferredContentStyle.getThemeStyleSheet ? DeferredContentStyle.getThemeStyleSheet(undefined, styleProps) : '',DividerStyle && DividerStyle.getThemeStyleSheet ? DividerStyle.getThemeStyleSheet(undefined, styleProps) : '',FieldsetStyle && FieldsetStyle.getThemeStyleSheet ? FieldsetStyle.getThemeStyleSheet(undefined, styleProps) : '',PanelStyle && PanelStyle.getThemeStyleSheet ? PanelStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollPanelStyle && ScrollPanelStyle.getThemeStyleSheet ? ScrollPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitterStyle && SplitterStyle.getThemeStyleSheet ? SplitterStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitterPanelStyle && SplitterPanelStyle.getThemeStyleSheet ? SplitterPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',StepperStyle && StepperStyle.getThemeStyleSheet ? StepperStyle.getThemeStyleSheet(undefined, styleProps) : '',StepListStyle && StepListStyle.getThemeStyleSheet ? StepListStyle.getThemeStyleSheet(undefined, styleProps) : '',StepStyle && StepStyle.getThemeStyleSheet ? StepStyle.getThemeStyleSheet(undefined, styleProps) : '',StepItemStyle && StepItemStyle.getThemeStyleSheet ? StepItemStyle.getThemeStyleSheet(undefined, styleProps) : '',StepPanelsStyle && StepPanelsStyle.getThemeStyleSheet ? StepPanelsStyle.getThemeStyleSheet(undefined, styleProps) : '',StepPanelStyle && StepPanelStyle.getThemeStyleSheet ? StepPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',TabViewStyle && TabViewStyle.getThemeStyleSheet ? TabViewStyle.getThemeStyleSheet(undefined, styleProps) : '',TabsStyle && TabsStyle.getThemeStyleSheet ? TabsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabListStyle && TabListStyle.getThemeStyleSheet ? TabListStyle.getThemeStyleSheet(undefined, styleProps) : '',TabStyle && TabStyle.getThemeStyleSheet ? TabStyle.getThemeStyleSheet(undefined, styleProps) : '',TabPanelsStyle && TabPanelsStyle.getThemeStyleSheet ? TabPanelsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabPanelStyle && TabPanelStyle.getThemeStyleSheet ? TabPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getThemeStyleSheet ? ToolbarStyle.getThemeStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle && ConfirmDialogStyle.getThemeStyleSheet ? ConfirmDialogStyle.getThemeStyleSheet(undefined, styleProps) : '',ConfirmPopupStyle && ConfirmPopupStyle.getThemeStyleSheet ? ConfirmPopupStyle.getThemeStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getThemeStyleSheet ? DialogStyle.getThemeStyleSheet(undefined, styleProps) : '',DrawerStyle && DrawerStyle.getThemeStyleSheet ? DrawerStyle.getThemeStyleSheet(undefined, styleProps) : '',DynamicDialogStyle && DynamicDialogStyle.getThemeStyleSheet ? DynamicDialogStyle.getThemeStyleSheet(undefined, styleProps) : '',OverlayPanelStyle && OverlayPanelStyle.getThemeStyleSheet ? OverlayPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',PopoverStyle && PopoverStyle.getThemeStyleSheet ? PopoverStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarStyle && SidebarStyle.getThemeStyleSheet ? SidebarStyle.getThemeStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getThemeStyleSheet ? FileUploadStyle.getThemeStyleSheet(undefined, styleProps) : '',BreadcrumbStyle && BreadcrumbStyle.getThemeStyleSheet ? BreadcrumbStyle.getThemeStyleSheet(undefined, styleProps) : '',ContextMenuStyle && ContextMenuStyle.getThemeStyleSheet ? ContextMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',DockStyle && DockStyle.getThemeStyleSheet ? DockStyle.getThemeStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getThemeStyleSheet ? MenuStyle.getThemeStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getThemeStyleSheet ? MenubarStyle.getThemeStyleSheet(undefined, styleProps) : '',MegaMenuStyle && MegaMenuStyle.getThemeStyleSheet ? MegaMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',PanelMenuStyle && PanelMenuStyle.getThemeStyleSheet ? PanelMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',StepsStyle && StepsStyle.getThemeStyleSheet ? StepsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabMenuStyle && TabMenuStyle.getThemeStyleSheet ? TabMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',TieredMenuStyle && TieredMenuStyle.getThemeStyleSheet ? TieredMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',MessageStyle && MessageStyle.getThemeStyleSheet ? MessageStyle.getThemeStyleSheet(undefined, styleProps) : '',InlineMessageStyle && InlineMessageStyle.getThemeStyleSheet ? InlineMessageStyle.getThemeStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getThemeStyleSheet ? ToastStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselStyle && CarouselStyle.getThemeStyleSheet ? CarouselStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleriaStyle && GalleriaStyle.getThemeStyleSheet ? GalleriaStyle.getThemeStyleSheet(undefined, styleProps) : '',ImageStyle && ImageStyle.getThemeStyleSheet ? ImageStyle.getThemeStyleSheet(undefined, styleProps) : '',ImageCompareStyle && ImageCompareStyle.getThemeStyleSheet ? ImageCompareStyle.getThemeStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getThemeStyleSheet ? AvatarStyle.getThemeStyleSheet(undefined, styleProps) : '',AvatarGroupStyle && AvatarGroupStyle.getThemeStyleSheet ? AvatarGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getThemeStyleSheet ? BadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',BlockUIStyle && BlockUIStyle.getThemeStyleSheet ? BlockUIStyle.getThemeStyleSheet(undefined, styleProps) : '',ChipStyle && ChipStyle.getThemeStyleSheet ? ChipStyle.getThemeStyleSheet(undefined, styleProps) : '',InplaceStyle && InplaceStyle.getThemeStyleSheet ? InplaceStyle.getThemeStyleSheet(undefined, styleProps) : '',MeterGroupStyle && MeterGroupStyle.getThemeStyleSheet ? MeterGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',OverlayBadgeStyle && OverlayBadgeStyle.getThemeStyleSheet ? OverlayBadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollTopStyle && ScrollTopStyle.getThemeStyleSheet ? ScrollTopStyle.getThemeStyleSheet(undefined, styleProps) : '',SkeletonStyle && SkeletonStyle.getThemeStyleSheet ? SkeletonStyle.getThemeStyleSheet(undefined, styleProps) : '',ProgressBarStyle && ProgressBarStyle.getThemeStyleSheet ? ProgressBarStyle.getThemeStyleSheet(undefined, styleProps) : '',ProgressSpinnerStyle && ProgressSpinnerStyle.getThemeStyleSheet ? ProgressSpinnerStyle.getThemeStyleSheet(undefined, styleProps) : '',TagStyle && TagStyle.getThemeStyleSheet ? TagStyle.getThemeStyleSheet(undefined, styleProps) : '',TerminalStyle && TerminalStyle.getThemeStyleSheet ? TerminalStyle.getThemeStyleSheet(undefined, styleProps) : '',BadgeDirectiveStyle && BadgeDirectiveStyle.getThemeStyleSheet ? BadgeDirectiveStyle.getThemeStyleSheet(undefined, styleProps) : '',TooltipStyle && TooltipStyle.getThemeStyleSheet ? TooltipStyle.getThemeStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getThemeStyleSheet ? RippleStyle.getThemeStyleSheet(undefined, styleProps) : '',StyleClassStyle && StyleClassStyle.getThemeStyleSheet ? StyleClassStyle.getThemeStyleSheet(undefined, styleProps) : '',FocusTrapStyle && FocusTrapStyle.getThemeStyleSheet ? FocusTrapStyle.getThemeStyleSheet(undefined, styleProps) : '',AnimateOnScrollStyle && AnimateOnScrollStyle.getThemeStyleSheet ? AnimateOnScrollStyle.getThemeStyleSheet(undefined, styleProps) : '',KeyFilterStyle && KeyFilterStyle.getThemeStyleSheet ? KeyFilterStyle.getThemeStyleSheet(undefined, styleProps) : ''
].join('');

const defineNitroPlugin = (def) => def;
const _CJnqP2XqDgasLSy8N_OLBwcqLvxPQ4EAyLke3L7e4 = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.unshift(stylesToTop);
    html.head.push(styles$2);
    html.head.push(themes);
  });
});

const plugins = [
  _NKhXQtqFaIpNruWlRjoNhSVln0DTU3iJJsO7FJh4o8,
_7Lphu9Fh7F3XH5gX2o0Cdw6xMqAHim7NotG0Oij5aXs,
_CJnqP2XqDgasLSy8N_OLBwcqLvxPQ4EAyLke3L7e4
];

const _lazy_0RWyMz = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_0RWyMz, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_0RWyMz, lazy: true, middleware: false, method: undefined }
];

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + messages.statusCode + " - " + (messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + messages.statusCode + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + messages.description + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + messages.stack + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getClientManifest = () => import('file://F:/github/vue/content-hub/frontend/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://F:/github/vue/content-hub/frontend/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = event.path.startsWith("/__nuxt_island");
  const islandContext = isRenderingIsland ? await getIslandContext(event) : void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = !isRenderingIsland && PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createHead(unheadOptions);
  const headEntryOptions = { mode: "server" };
  if (!isRenderingIsland) {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = isRenderingIsland ? await renderInlineStyles(ssrContext.modules ?? []) : [];
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest) {
    head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  {
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (!isRenderingIsland || resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (isRenderingIsland && islandContext) {
    const islandHead = {};
    for (const entry of head.entries.values()) {
      for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
        const currentValue = islandHead[key];
        if (Array.isArray(currentValue)) {
          currentValue.push(...value);
        }
        islandHead[key] = value;
      }
    }
    islandHead.link ||= [];
    islandHead.style ||= [];
    const islandResponse = {
      id: islandContext.id,
      head: islandHead,
      html: getServerComponentHTML(_rendered.html),
      components: getClientIslandResponse(ssrContext),
      slots: getSlotIslandResponse(ssrContext)
    };
    await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
    const response2 = {
      body: JSON.stringify(islandResponse, null, 2),
      statusCode: getResponseStatus(event),
      statusMessage: getResponseStatusText(event),
      headers: {
        "content-type": "application/json;charset=utf-8",
        "x-powered-by": "Nuxt"
      }
    };
    return response2;
  }
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
