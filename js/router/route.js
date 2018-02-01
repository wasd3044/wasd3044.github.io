/**
 * Created by sen on 2018/1/29.
 */
app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider
        .when('', '/');
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'views/main.html',
            controller:'mainCtrl',
            controllerAs:'vm'
        })
        .state('jsNote', {
            url: '/jsNote/:id',
            templateUrl: 'views/view.html',
            controller:'jsNoteCtrl',
            controllerAs:'vm'
        })
        .state('article', {
            url: '/article/:id',
            templateUrl: 'views/view.html',
            controller:'articleCtrl',
            controllerAs:'vm'
        })
}])