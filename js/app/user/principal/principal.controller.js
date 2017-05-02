(function(){
      'use strict';
      angular.module('app.user')
      .controller('MainController',MainController);

      MainController.$inject = ['$scope','$state'];
      function MainController($scope,$state){
            var vm = this;


             $(document).ready(function(){
                  $('.parallax').parallax();
            });
      }
})();