window.blogApp = angular.module('blogApp', [
    'ui.router',
    'scs.couch-potato'
]);
blogApp.controller('mainCtrl', mainCtrl);
mainCtrl.$inject = ['$scope','$$http'];

function mainCtrl($scope,$$http) {
    var vm = this;
    $$http.get('data/navData.json').then(function (value) {
        vm.mainRouter=value.myLife.mainRouter
        vm.routers=value.myLife.routers
    });
    $scope.$on('changeAll', function (event,data) {
        vm.mainRouter = data.mainRouter;
        vm.routers = data.routers
    })
}