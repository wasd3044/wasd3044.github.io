define(function () {
    'use strict';
    blogApp.registerController('loveCtrl', function ($$http, $stateParams) {
        var vm = this;
        if($stateParams.zjz){
            $$http.get('love').then(function (value) {
                vm.buys = value.buys;
            });
            vm.stateTo =function (buy) {
                window.open(buy.links,'_blank')
            }
        }

    });
});