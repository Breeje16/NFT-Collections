"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/[tokenId]";
exports.ids = ["pages/api/[tokenId]"];
exports.modules = {

/***/ "(api)/./pages/api/[tokenId].js":
/*!********************************!*\
  !*** ./pages/api/[tokenId].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    // get the tokenId from the query params\n    const tokenId = req.query.tokenId;\n    // As all the images are uploaded on github, we can extract the images from github directly.\n    const image_url = \"https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/\";\n    // The api is sending back metadata for a Crypto Dev\n    // To make our collection compatible with Opensea, we need to follow some Metadata standards\n    // when sending back the response from the api\n    // More info can be found here: https://docs.opensea.io/docs/metadata-standards\n    res.status(200).json({\n        name: \"Sportz Fans #\" + tokenId,\n        description: \"Sportz Fans is a collection of Sports NFTs in crypto\",\n        image: image_url + tokenId + \".svg\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvW3Rva2VuSWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLHdDQUF3QztJQUN4QyxNQUFNQyxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxPQUFPO0lBQ2pDLDRGQUE0RjtJQUM1RixNQUFNRSxTQUFTLEdBQ2IsOEZBQThGO0lBQ2hHLG9EQUFvRDtJQUNwRCw0RkFBNEY7SUFDNUYsOENBQThDO0lBQzlDLCtFQUErRTtJQUMvRUgsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUNuQkMsSUFBSSxFQUFFLGVBQWUsR0FBR0wsT0FBTztRQUMvQk0sV0FBVyxFQUFFLHNEQUFzRDtRQUNuRUMsS0FBSyxFQUFFTCxTQUFTLEdBQUdGLE9BQU8sR0FBRyxNQUFNO0tBQ3BDLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hcGkvW3Rva2VuSWRdLmpzPzhjODUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgLy8gZ2V0IHRoZSB0b2tlbklkIGZyb20gdGhlIHF1ZXJ5IHBhcmFtc1xyXG4gICAgY29uc3QgdG9rZW5JZCA9IHJlcS5xdWVyeS50b2tlbklkO1xyXG4gICAgLy8gQXMgYWxsIHRoZSBpbWFnZXMgYXJlIHVwbG9hZGVkIG9uIGdpdGh1Yiwgd2UgY2FuIGV4dHJhY3QgdGhlIGltYWdlcyBmcm9tIGdpdGh1YiBkaXJlY3RseS5cclxuICAgIGNvbnN0IGltYWdlX3VybCA9XHJcbiAgICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0xlYXJuV2ViM0RBTy9ORlQtQ29sbGVjdGlvbi9tYWluL215LWFwcC9wdWJsaWMvY3J5cHRvZGV2cy9cIjtcclxuICAgIC8vIFRoZSBhcGkgaXMgc2VuZGluZyBiYWNrIG1ldGFkYXRhIGZvciBhIENyeXB0byBEZXZcclxuICAgIC8vIFRvIG1ha2Ugb3VyIGNvbGxlY3Rpb24gY29tcGF0aWJsZSB3aXRoIE9wZW5zZWEsIHdlIG5lZWQgdG8gZm9sbG93IHNvbWUgTWV0YWRhdGEgc3RhbmRhcmRzXHJcbiAgICAvLyB3aGVuIHNlbmRpbmcgYmFjayB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXHJcbiAgICAvLyBNb3JlIGluZm8gY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vZG9jcy5vcGVuc2VhLmlvL2RvY3MvbWV0YWRhdGEtc3RhbmRhcmRzXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIG5hbWU6IFwiU3BvcnR6IEZhbnMgI1wiICsgdG9rZW5JZCxcclxuICAgICAgZGVzY3JpcHRpb246IFwiU3BvcnR6IEZhbnMgaXMgYSBjb2xsZWN0aW9uIG9mIFNwb3J0cyBORlRzIGluIGNyeXB0b1wiLFxyXG4gICAgICBpbWFnZTogaW1hZ2VfdXJsICsgdG9rZW5JZCArIFwiLnN2Z1wiLFxyXG4gICAgfSk7XHJcbiAgfSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW5JZCIsInF1ZXJ5IiwiaW1hZ2VfdXJsIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/[tokenId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[tokenId].js"));
module.exports = __webpack_exports__;

})();