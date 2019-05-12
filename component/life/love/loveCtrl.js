define(function () {
    'use strict';
    blogApp.registerController('loveCtrl', function ($$http, $scope) {
        var vm = this;
        $$http.get('love').then(function (value) {
            vm.buys = value.buys;
        })
        vm.stateTo =function (buy) {
            window.open(buy.links,'_blank')
        }
    });
});