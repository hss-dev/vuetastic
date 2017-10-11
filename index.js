const Vue = require('vue');
console.log(Vue);

const VComponent = Vue.component('hello-component', {
    data: () => {
        return {
            hello: "Dan"
        };
    },
    methods: {
        bang: function() {
            if (this.hello === 'Dan') {
                this.hello = "ROB";
            } else {
                this.hello = "Dan";
            }
        }
    },
    template: '<div v-on:click="bang()"> VUE {{hello}} </div>'
});

console.log("about to start the app....");

// your library here
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular'], factory);
  } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    // CommonJS support (for us webpack/browserify/ComponentJS folks)
    module.exports = factory(require('angular'));
  } else {
    // in the case of no module loading system
    // then don't worry about creating a global
    // variable like you would in normal UMD.
    // It's not really helpful... Just call your factory
    return factory(root.angular);
  }
}(this, function (angular) {
  'use strict';
  // create your angular module and do stuff
  var moduleName = 'vuetastic';
  var mod = angular.module(moduleName, ['ngVue']);
  mod.value('HelloComponent', VComponent);
  return moduleName; // the name of your module
}));
