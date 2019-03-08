blogApp.config(['$stateProvider', '$couchPotatoProvider', '$controllerProvider', '$compileProvider', '$urlRouterProvider', '$provide', function ($stateProvider, $couchPotatoProvider, $controllerProvider, $compileProvider, $urlRouterProvider, $provide) {
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
        .state("main.road", {
            url: '/road',
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
        .state("main.city", {
            url: '/city',
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
        .state("main.love", {
            url: '/love',
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
        .state("main.life", {
            url: '/life',
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
        .state("work", {
            url: '/work',
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
        .state("work.note", {
            url: '/note',
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
        .state("work.code", {
            url: '/code',
            params:{author:''},
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
        .state("work.design", {
            url: '/design',
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
        .state("work.article", {
            url: '/article',
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