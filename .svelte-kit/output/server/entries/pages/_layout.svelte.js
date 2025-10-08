import { y as head, z as attr } from "../../chunks/index.js";
const favicon = "/_app/immutable/assets/favicon.EASpBkTs.ico";
const logo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20none;%20stroke:%20%23000;%20stroke-width:%2085px;%20}%20.cls-2%20{%20fill-rule:%20evenodd;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-1'%20cx='512'%20cy='512'%20r='450'/%3e%3cpath%20id='Rounded_Rectangle_1'%20data-name='Rounded%20Rectangle%201'%20class='cls-2'%20d='M512.354,452.249L770.448,194.156a42.5,42.5,0,0,1,60.1,60.1L572.458,512.354A42.5,42.5,0,1,1,512.354,452.249Z'/%3e%3c/svg%3e";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const homeHref = "/";
    let { children } = $$props;
    head($$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/>`);
    });
    $$renderer2.push(`<header class="fixed top-0 right-0 left-0 z-50 bg-none from-slate-50 to-slate-100 p-6 pb-6 backdrop-blur-sm dark:from-slate-900 dark:to-slate-800"><nav class="flex items-center space-x-2"><a${attr("href", homeHref)} class="flex items-center gap-2 no-underline"><img${attr("src", logo)} alt="Logo" class="h-5 w-5 text-slate-700 dark:text-slate-300"/> <h1 class="text-lg font-bold text-slate-800 dark:text-slate-200">Cham Manganti</h1></a></nav></header> <div class="h-16 shrink-0"></div> <main class="bg-gradient-to-br from-slate-50 to-slate-100 h-screen pb-6 dark:from-slate-900 dark:to-slate-800"><div class="mx-auto px-6 pt-24">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div></main>`);
  });
}
export {
  _layout as default
};
