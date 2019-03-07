blogApp.service('$$http', function ($http, $q) {
    var deferred = $q.defer();
    var get = function (url) {
        $http.get(url).then(function (value) {
            deferred.resolve(value.data);
        });
        return deferred.promise
    };
    return {
        get: get
    }
});
blogApp.directive('ngState', function ($state) {
    return {
        restrict: 'A',
        scope: {
            ngState: '='
        },
        link: function (scope, ele) {
            scope.$watch('ngState', function (newVal) {
                if (newVal) {
                    var index = scope.ngState.indexOf(":");
                    var state, param = {};
                    if (index > 0) {
                        state = scope.ngState.slice(0, index);
                        param = JSON.parse(scope.ngState.slice(index + 1, scope.ngState.length));
                    } else {
                        state = scope.ngState;
                    }
                    param.author = "sen";
                    ele.bind('click', function () {
                        $state.go(state, param)
                    })
                }
            })
        }
    }
});
blogApp.run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (!toParams.author ) {
            if(toState.name.indexOf('.') !== -1){
                event.preventDefault();
                $state.go(fromState.name || 'main', fromParams)
            }
        }
    })
}]);