blogApp.service('$$http',function ($http, $q) {
    var deferred = $q.defer();
    var get=function(url){
        $http.get(url).then(function (value) {
            deferred.resolve(value.data);
        });
        return deferred.promise
    };
    return {
        get:get
    }
});