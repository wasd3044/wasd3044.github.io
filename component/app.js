window.blogApp = angular.module('blogApp', [
    'ui.router',
    'scs.couch-potato'
]);
blogApp.controller('mainCtrl', mainCtrl);
mainCtrl.$inject = ['$scope', '$$http', '$state','$stateParams'];

function mainCtrl($scope, $$http, $state,$stateParams) {
    var vm = this;
    var index = "main";
    var type=["main","work"];
    var changetype = function () {
        vm.type = vm.allData[index].name;
        vm.mainRouter = vm.allData[index].mainRouter;
        vm.routers = vm.allData[index].routers
    };
    $$http.get('main').then(function (value) {
        vm.allData = value;
        changetype()
    });
    vm.changeType = function () {
        index = type[(type.indexOf(index)+1)%type.length];
        $state.go(vm.allData[index].mainRouter.state, {author: 'sen'});
        changetype()
    };
    vm.changeSystem = function () {
      // history.replaceState("", "", window.location.origin+window.location.pathname+'/blog');
      window.location.href = window.location.origin+window.location.pathname;
    };
    // vm.changeSystem();
    vm.isShowTitle = true;
    $scope.changeShowTitle = function (bol) {
        vm.isShowTitle = bol;
    }
}
