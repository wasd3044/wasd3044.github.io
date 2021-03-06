blogApp.config(['$stateProvider', '$couchPotatoProvider', '$controllerProvider', '$compileProvider', '$urlRouterProvider', '$provide', function ($stateProvider, $couchPotatoProvider, $controllerProvider, $compileProvider, $urlRouterProvider, $provide) {
  blogApp.registerController = $controllerProvider.register;
  blogApp.registerDirective = $compileProvider.directive;
  // blogApp.registerFilter = $filterProvider.register;
  blogApp.registerFactory = $provide.factory;
  blogApp.registerService = $provide.service;
  $urlRouterProvider.otherwise("/main/road");
  $stateProvider.state("myapp", {
    url: '/myapp',
    resolve: {
      'dummy': $couchPotatoProvider.resolveDependencies(['./component/myapp/myappCtrl'])
    },
    views: {
      'mainView': {
        templateUrl: './component/myapp/myapp.html',
        controller: 'myappCtrl',
        controllerAs: 'vm'
      }
    }
  })
    .state("main", {
      url: '/main',
      resolve: {
        'dummy': $couchPotatoProvider.resolveDependencies(['./component/dashboard/bodyCtrl', './directives/playAudio'])
      },
      views: {
        'mainView': {
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
        'dummy': $couchPotatoProvider.resolveDependencies(['./component/life/road/roadCtrl', './directives/calendar'])
      },
      views: {
        'lifeView': {
          templateUrl: './component/life/road/index.html',
          css: './component/life/road/road.css',
          controller: 'roadCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state("main.message", {
      url: '/message',
      views: {
        'lifeView': {
          templateUrl: './component/life/message/message.html',
          css: './component/life/message/message.css',
        }
      }
    })
    .state("main.city", {
      url: '/city',
      resolve: {
        'dummy': $couchPotatoProvider.resolveDependencies(['./component/dashboard/bodyCtrl'])
      },
      views: {
        'mainView@': {
          templateUrl: './component/life/city/city.html',
          css: './component/dashboard/body.css',
          controller: 'bodyCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state("main.love", {
      url: '/love?zjz',
      resolve: {
        'dummy': $couchPotatoProvider.resolveDependencies(['./component/life/love/loveCtrl'])
      },
      views: {
        'mainView@': {
          templateUrl: './component/life/love/love.html',
          controller: 'loveCtrl',
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
        'mainView@': {
          templateUrl: './component/life/life/life.html',
          css: './component/dashboard/body.css',
          controller: 'bodyCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state("work", {
      url: '/work',
      resolve: {
        'dummy': $couchPotatoProvider.resolveDependencies(['./component/work/bodyCtrl'])
      },
      views: {
        'mainView@': {
          templateUrl: './component/dashboard/body.html',
          css: './component/dashboard/body.css',
          controller: 'workBodyCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state("work.note", {
      url: '/note',
      resolve: {
        'dummy': $couchPotatoProvider.resolveDependencies(['./component/work/note/noteCtrl'])
      },
      views: {
        'mainView@': {
          templateUrl: './component/work/note/note.html',
          css: './component/work/note/note.css',
          controller: 'noteCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state("work.code", {
      url: '/code',
      params: {author: ''},
      resolve: {
        'dummy': $couchPotatoProvider.resolveDependencies(['./component/dashboard/bodyCtrl'])
      },
      views: {
        'mainView@': {
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
        'dummy': $couchPotatoProvider.resolveDependencies(['./component/work/design/designCtrl'])
      },
      views: {
        'mainView@': {
          templateUrl: './component/work/design/design.html',
          css: './component/work/design/design.css',
          controller: 'designCtrl',
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
        'mainView@': {
          templateUrl: './component/dashboard/body.html',
          css: './component/dashboard/body.css',
          controller: 'bodyCtrl',
          controllerAs: 'vm'
        }
      }
    })
}]);
