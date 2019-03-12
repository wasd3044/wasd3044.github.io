blogApp.service('$$http', function ($http) {
    var url={
        main:'data/navData.json',
        road:'data/life/road.json'
    }
    var get = function (type) {
        return $http.get(url[type]).then(function(value){
            return value.data
        })
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
blogApp.directive("playAudio",function(){
    return {
        restrict: "E",
        scope:{
            ngSrc:"="
        },
        link: function(scope, element, attrs){

            var stopWatch = scope.$watch("ngSrc",function(newData,oldData){
                if(newData != undefined){
                    var audio = angular.element("<audio controls>");
                    audio.attr({
                        "src": scope.ngSrc,
                        "class": $(element).attr('class')
                    });
                    $(element).replaceWith(audio);

                    stopWatch();
                }
            })
        }
    }
})