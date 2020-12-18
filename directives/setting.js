blogApp.service('$$http', function ($http, $q) {
    var url = {
        main: 'data/navData.json',
        road: 'data/life/road.json',
        love: 'data/life/love.json',
        note: 'data/work/note.json'
    };
    var get = function (type) {
        return $http.get(url[type]).then(function (value) {
            return value.data
        })
    };
    var jsonp = function (url) {
      var defer = $q.defer();
      var promise = defer.promise;
      var name = Math.random().toString(32).replace(/\d\./gi,'').slice(-8);
      $('body').append('<script src="'+url+'&cb=angular.'+name+'"></script>')
      angular[name] = function (data) {
          console.log(data)
        promise.resolve(data)
      }
      return promise
    };
    return {
        get: get,
      jsonp: jsonp
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


