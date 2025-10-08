import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B4-zlkzF.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B9O94zB9.js","_app/immutable/chunks/Q87_UqZt.js","_app/immutable/chunks/lq-r_5va.js","_app/immutable/chunks/DpxGfzv3.js"];
export const stylesheets = ["_app/immutable/assets/0.B3SsguHx.css"];
export const fonts = [];
