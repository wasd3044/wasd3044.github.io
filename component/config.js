blogApp.config(['$stateProvider', '$couchPotatoProvider', '$controllerProvider', '$compileProvider', '$urlRouterProvider','$provide', function ($stateProvider, $couchPotatoProvider, $controllerProvider, $compileProvider, $urlRouterProvider,$provide) {
    blogApp.registerController = $controllerProvider.register;
    blogApp.registerDirective = $compileProvider.directive;
    // blogApp.registerFilter = $filterProvider.register;
    blogApp.registerFactory = $provide.factory;
    blogApp.registerService = $provide.service;
    $urlRouterProvider.otherwise("/main");
    $stateProvider.state("main", {
        url: '/main',
        resolve: {
            'dummy': $couchPotatoProvider.resolveDependencies(['./component/dashboard/bodyCtrl'])
        },
        views: {
            '': {
                templateUrl: './component/dashboard/body.html',
                css: './component/dashboard/body.css',
                controller: 'bodyCtrl',
                controllerAs: 'vm'
            }
        }
    })
}]);