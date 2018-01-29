/**
 * Created by sen on 2018/1/26.
 */
var app=angular.module('myApp',['ui.router'])
app.controller('header',['$scope',function($scope){
    $scope.navData=[
        {url:'/',name:'时光',tittle:'主页'},
        {url:'/note',name:'足迹',tittle:'笔记'}
    ]
}]);
app.controller('mainCtrl',['$scope','$http',function($scope,$http){
    $scope.mainData=[]
       angular.forEach(Adata,function(_data,_index){
            $scope[_index]=_data;
            if(_data[0]){
                $scope.mainData=$scope.mainData.concat(_data)
            }
        })

}])
app.controller('jsNoteCtrl',['$scope','$http',function($scope,$http){
       $scope.mainData=jsNoteData

}])
app.controller('articleCtrl',['$scope','$http',function($scope,$http){
        $scope.mainData=articleData
}])
//app.controller('header',['$scope',function($scope){
//    $scope.navData=[
//        {url:'/',name:'ʱ��',tittle:'��ҳ'},
//        {url:'/note',name:'�㼣',tittle:'�ʼ�'}
//    ]
//
//}])
//app.config(['$routeProvider', function($routeProvider){
//    $routeProvider
//        .when('/',{
//            templateUrl:'������ҳҳ��'
//        })
//        .when('/computers',{template:'���ǵ��Է���ҳ��'})
//        .when('/printers',{template:'���Ǵ�ӡ��ҳ��'})
//        .otherwise({redirectTo:'/'});
//}])