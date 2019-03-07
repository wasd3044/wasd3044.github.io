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
                    var state, param;
                    if (index > 0) {
                        state = scope.ngState.slice(0, index);
                        param = scope.ngState.slice(index+1, scope.ngState.length);
                    } else {
                        state = scope.ngState;
                    }
                    ele.bind('click', function () {
                        $state.go(state, param)
                    })
                }
            })
        }
    }
});