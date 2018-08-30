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
app.controller('mainCtrl',['$scope','$state',function($scope,$state){
    setInterval(
        function(){
            var a=Math.floor((new Date('2018-12-14 00:00:00')-new Date())/1000)
            var day=Math.floor(a/86400)
            var h=Math.floor(a%86400/3600)
            var m=Math.floor(a%86400%3600/60)
            var s=Math.floor(a%86400%3600%60)
            logo.innerHTML='还有'+day+'天'+h+'时'+m+'分'+s+'秒'
        },1000
    )

    $scope.mainData=[]
       angular.forEach(data.Adata,function(_data,_index){
            $scope[_index]=_data;
            if(_data[0]){
                $scope.mainData=$scope.mainData.concat(_data)
            }
        })

}])
app.controller('jsNoteCtrl',['$scope','$stateParams',function($scope,$stateParams){
       $scope.mainData=data.jsNoteData[$stateParams.id]
        console.log($scope.mainData)
}])
app.controller('articleCtrl',['$scope','$stateParams',function($scope,$stateParams){
    $scope.mainData=data.articleData[$stateParams.id]
    console.log($stateParams.id)
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