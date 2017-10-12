import template from './form.html';

const Vue = require('vue');
console.log(Vue);

const VComponent = Vue.component('hello-component', {
    props: {
        start: String
    },
    computed: {
        value: function() {
            return this.start;
        }
    },
    methods: {
        bang: function() {
            console.log("Vue's been clicked");
        },
        updateValue: function(value) {
            console.log(value);
            if (value.length > 3) {
                console.log("SENDING event");
                const args = {
                    detail: {
                        hello: value
                    }
                };
                window.dispatchEvent(new CustomEvent('valid', args));
            }
        }
    },
    template
});
console.log("Vutastic in effect!");

const helloCtrl = function($window, $scope) {
    'ngInject';
    this.hello = "FRED";
    $window.addEventListener('valid', e => {
        console.log("Got a valid event ");
        console.log(e);
        if (e.detail.hello.length > 5) {
            $scope.$apply(() => $scope.$ctrl.hello = e.detail.hello);
        } else {
            console.log("But its less than 6");
        }
        console.log($scope);
    });
};
helloCtrl.$inject = ['$window', '$scope'];

// your library here
(function(root, factory) {
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
}(this, function(angular) {
    'use strict';
    // create your angular module and do stuff
    var moduleName = 'vuetastic';
    var mod = angular.module(moduleName, ['ngVue']);
    mod.value('HelloComponent', VComponent);
    mod.controller('helloCtrl', helloCtrl);
    return moduleName; // the name of your module
}));
