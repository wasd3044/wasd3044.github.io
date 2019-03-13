define(function () {
    'use strict';
    blogApp.registerController('roadCtrl', function ($$http, $sce) {
        var vm = this;
        vm.allListen=[];
        $$http.get('road').then(function (value) {
            vm.songs = value.songs;
            vm.allListen.push(vm.songs.listen)
        });
    });
});