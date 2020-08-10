// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// import * as PIXI from "pixi.js";
// import { Application } from 'pixi.js'

// //Create a Pixi Application
// let app = new Application({
//   width: 512,
//   height: 550,
//   antialias: true,
//   transparent: false,
//   resolution: 1,
//   backgroundColor: 0x00CC99,
//   view: document.querySelector('#scene')
// }
// );

// //將Pixi自動為您創建的畫布添加到HTML文檔中
// document.body.appendChild(app.view);