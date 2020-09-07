define(function (angular, main) {
    'use strict';
    blogApp.registerController('noteCtrl', function ($scope, $stateParams, $state, $$http) {
        var vm = this;
        $$http.get('note').then(function (value) {
            vm.notes = value.note;
        });
        vm.search = function () {
            vm.notes = vm.notes.filter(function (item) {
                return item.lable.indexOf(vm.searchValue) > -1
            })
        }
    });
});