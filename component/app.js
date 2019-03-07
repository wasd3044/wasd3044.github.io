window.blogApp = angular.module('blogApp', [
    'ui.router',
    'scs.couch-potato'
]);
blogApp.controller('mainCtrl', mainCtrl);
mainCtrl.$inject = ['$scope', '$$http', '$state'];

function mainCtrl($scope, $$http, $state) {
    var vm = this;
    var index = 0;
    var changetype = function (value) {
        vm.type = value[index].name;
        vm.mainRouter = value[index].mainRouter;
        vm.routers = value[index].routers
    }
    $$http.get('data/navData.json').then(function (value) {
        vm.allData = value;
        changetype(vm.allData)
    });
    vm.changeType = function () {
        index = (index + 1) % vm.allData.length;
        $state.go(vm.allData[index].mainRouter.state, {author: 'sen'});
        changetype(vm.allData)
    }
}