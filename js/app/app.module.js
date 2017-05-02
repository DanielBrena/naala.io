(function () {
  'use strict'
  angular.module('app', [
    /*Modulos compartidos*/
    'app.core',

    /*Modulos */
    'app.user',
  ]).run(function ($rootScope, $state, $window) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
     
    });
   
  });

})();
