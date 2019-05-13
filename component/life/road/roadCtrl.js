define(function () {
    'use strict';
    blogApp.registerController('roadCtrl', function ($$http, $scope) {
        var vm = this;
        var allListen = [];
        var songs =[];
        $$http.get('road').then(function (value) {
            vm.songs = value.songs;
            angular.forEach(value.songs, function (item) {
                allListen.push(item.listen[0]);
                songs.push(item.name)
            });
            return allListen
        }).then(function (value) {
            vm.allListen = value
        });
        $scope.$on('playIndex', function (event, data) {
            $scope.playIndex = "当前播放:"+songs[data];
            $scope.$apply()
        })
        vm.jumpto= function (index) {
            $scope.$broadcast('lisindex',index)
        }
    });
});