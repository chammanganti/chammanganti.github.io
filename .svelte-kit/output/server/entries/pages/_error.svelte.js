import { y as head, z as attr } from "../../chunks/index.js";
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const homeHref = "/";
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>404 Not Found</title>`);
      });
    });
    $$renderer2.push(`<section class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center"><h1 class="mb-3 text-5xl font-bold text-slate-800 dark:text-slate-200">404</h1> <p class="mb-6 text-lg text-slate-600 dark:text-slate-400">This page drifted from the desired state. Maybe it skipped the deploy.</p> <a${attr("href", homeHref)} class="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800/40"><span>Go back home</span></a></section>`);
  });
}
export {
  _error as default
};
