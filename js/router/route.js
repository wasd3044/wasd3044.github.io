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
        .state('jsNote1', {
            url: '/jsNote1',
            templateUrl: 'views/main.html',
            controller:'jsNoteCtrl',
            controllerAs:'vm'
        })
        .state('article1', {
            url: '/article1',
            templateUrl: 'views/main.html',
            controller:'articleCtrl',
            controllerAs:'vm'
        })
}])