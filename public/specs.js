webpackJsonp([1],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load all specs so webpack can find them. Think of this as an automatic
// manifest for bundling specs.

var req = __webpack_require__(25);
req.keys().forEach(req);

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./example.spec.js": 26
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 25;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var example = __webpack_require__(27);

describe('Example', function () {
  it('is true', function () {
    expect(example).toBe(true);
  });
});

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ })

},[24]);