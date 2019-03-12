define(function () {
    'use strict';
    blogApp.registerController('roadCtrl', function ($$http, $sce) {
        var vm = this;
        $$http.get('road').then(function (value) {
            vm.songs = value.songs;
        });
        angular.forEach(vm.songs, function (item) {
            item.listen = $sce.trustAsResourceUrl(item.listen);
        })
    });
});