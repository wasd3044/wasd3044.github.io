define(function () {
    'use strict';
    blogApp.registerController('noteCtrl', function ($scope, $stateParams, $state, $$http) {
        var vm = this;
        $$http.get('note').then(function (value) {
            vm.notes = init(value.note);
        });
        function init(notes) {
            angular.forEach(notes,function (obj) {
                var line = 0
                angular.forEach(obj.function, function (item) {
                    var lines = item.match(/[\n\r]/gi) || [];
                    if(line < lines.length) {
                        line = lines.length;
                    }
                });
                obj.style = {
                    'height': ((line * 22) + 90) + 'px',
                };
            });
            return notes;
        }
        vm.search = function () {
            vm.notes = vm.notes.filter(function (item) {
                return item.lable.indexOf(vm.searchValue) > -1
            })
        }
    });
});