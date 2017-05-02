
(function(){
  'use strict'
  angular.module('app.user.routes',['app.core'])
  .run(appRun);

  function appRun(routerHelper){
    routerHelper.configureStates(getStates(),'/');
  }

  function getStates() {
    return [
        {
            state:'user',
            config:{
                url:'/',
                templateUrl:'js/app/user/principal/principal.html',
                controller:'MainController',
                controllerAs:'vm',
            }
        },
        
         

    ];
}

})();