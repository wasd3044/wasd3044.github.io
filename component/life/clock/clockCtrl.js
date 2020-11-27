define(function () {
  'use strict';
  blogApp.registerController('clockCtrl', function ($scope, $interval, $http, $timeout) {
    var vm = this;
    vm.second = 1;
    vm.mint = 1;
    vm.date = 1;
    vm.month = 1;
    vm.hour = 1;
    vm.years = new Date().getFullYear();
    vm.months = [];
    vm.hours = [];
    vm.calendar = {}
    for(var i=1;i<=12;i++) {
      vm.months.push({
        value: i,
        style: {
          'transform': 'rotate('+((i-1)*30)+'deg)'
        }
      })
    }
    for(var i=1;i<=24;i++) {
      vm.hours.push({
        value: i,
        style: {
          'transform': 'rotate('+((i-1)*15)+'deg)'
        }
      })
    }

    function mGetDate(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var d = new Date(year, month, 0);
      return d.getDate();
    }
    vm.dates = [];
    for(var i=1;i<=mGetDate();i++) {
      vm.dates.push({
        value: i,
        style: {
          'transform': 'rotate('+((i-1)*(360/mGetDate()))+'deg)'
        }
      })
    }
    vm.mints = [];
    vm.seconds = [];
    for(var i=1;i<=60;i++) {
      vm.mints.push({
        value: i,
        style: {
          'transform': 'rotate('+((i-1)*6)+'deg)'
        }
      })
      vm.seconds.push({
          value: i,
          style: {
            'transform': 'rotate('+((i-1)*6)+'deg)'
          }
        })
    }
    function init() {
      var getDate = new Date();
      var month = getDate.getMonth()+1;
      var date = getDate.getDate();
      var day = getDate.getDay();
      var hour = getDate.getHours();
      var mint = getDate.getMinutes();
      var second = getDate.getSeconds();
      vm.second = second;
      vm.mint = mint;
      vm.date = date;
      vm.month = month;
      vm.hour = hour;
    }
    $interval(function () {
      init()
    }, 1000)
    $scope.$watch('vm.mint', function (newValue) {
      // vm.calendar = calendar.CalConv(vm.years, vm.month, vm.date, vm.hour, vm.mint)
    });
    $scope.$watch('vm.date', function () {
      var nHours = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥', '子'];
      $http.get('https://api.xlongwei.com/service/datetime/convert.json').then(function (data) {
        var result = data.data;
        var chinese = result.chinese;
        vm.calendar.year = chinese.slice(0, chinese.indexOf('年')+1);
        vm.calendar.month = chinese.slice(chinese.indexOf('年') +1 ,chinese.indexOf('月')+1);
        vm.calendar.date = chinese.slice(chinese.indexOf('月')+1);
        vm.calendar.ganzhi = result.ganzhi;
        vm.calendar.hour = nHours[Math.floor(vm.hour/2)] + '时';
        vm.calendar.mint = vm.hour%2 ? vm.mint>30 ? '二刻' : '初刻': vm.mint>30 ? '四刻' : '三刻'
      })
    })
    //年月日时分秒星期
    // 农历月日时刻节气
    // 节假日
    // https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=2020%E5%B9%B412%E6%9C%88&resource_id=6018&format=json
  });
});
