define(function(angular,main) {
    'use strict';
    blogApp.registerController('workBodyCtrl',function($scope,$stateParams,$state){
        $state.go('work.note');
    });
});