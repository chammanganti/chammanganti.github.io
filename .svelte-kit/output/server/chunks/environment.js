const DEV = false;
let base = "";
let assets = base;
const app_dir = "_app";
const relative = true;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var array_from = Array.from;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
const noop = () => {
};
function run(fn) {
  return fn();
}
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function deferred() {
  var resolve;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
export {
  DEV as D,
  assets as a,
  base as b,
  app_dir as c,
  reset as d,
  run_all as e,
  define_property as f,
  deferred as g,
  object_prototype as h,
  array_prototype as i,
  get_descriptor as j,
  get_prototype_of as k,
  is_array as l,
  is_extensible as m,
  noop as n,
  override as o,
  index_of as p,
  array_from as q,
  relative as r,
  set_assets as s,
  set_building as t,
  set_prerendering as u,
  run as v,
  prerendering as w
};
