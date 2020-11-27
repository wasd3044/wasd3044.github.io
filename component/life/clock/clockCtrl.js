define(function () {
  'use strict';
  blogApp.registerController('clockCtrl', function ($scope, $interval, calendar, $timeout) {
    var vm = this;
    vm.secondClass = 1;
    vm.mintClass = 1;
    vm.dateClass = 1;
    vm.monthClass = 1;
    vm.hourClass = 1;
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
      var a= calendar.CalConv(getDate.getFullYear(), month, date)
    }
    $interval(function () {
      init()
    }, 1000)
    $scope.$watch('vm.mint', function (newValue) {
      vm.calendar = calendar.CalConv(vm.years, vm.month, vm.date, vm.hour, vm.mint)
    });
    //年月日时分秒星期
    // 农历月日时刻节气
    // 节假日
    // https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=2020%E5%B9%B412%E6%9C%88&resource_id=6018&format=json
  });
});
