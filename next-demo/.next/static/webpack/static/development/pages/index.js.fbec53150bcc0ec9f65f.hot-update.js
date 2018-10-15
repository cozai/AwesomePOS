webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import React from 'react';
// export default class Index extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return (<div>
//          <p>Index Page!</p>
//         </div>)
//     }
// }
//或者
// const Index = ()=>(<div>
//          <p>Index Page!</p>
//         </div>)
// export default Index
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  

/***/ }),

/***/ "dll-reference dll_5d62d38be3592dca3a42":
false

})
//# sourceMappingURL=index.js.fbec53150bcc0ec9f65f.hot-update.js.map