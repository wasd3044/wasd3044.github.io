define(function () {
  'use strict';
  blogApp.registerController('clockCtrl', function ($scope, $interval, calendar) {
    var vm = this;
    vm.secondClass = 1;
    vm.mintClass = 1;
    vm.years = new Date().getFullYear();
    vm.month = [];
    for(var i=1;i<=12;i++) {
      vm.month.push({
        value: i,
        style: {
          'transform': 'rotate('+((i-1)*30)+'deg)'
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
    vm.day = [];
    for(var i=1;i<=mGetDate();i++) {
      vm.day.push({
        value: i,
        style: {
          'transform': 'rotate('+((i-1)*(360/mGetDate()))+'deg)'
        }
      })
    }
    vm.mint = [];
    vm.second = [];
    for(var i=1;i<=60;i++) {
      vm.mint.push({
        value: i,
        style: {
          'transform': 'rotate('+((i-1)*6)+'deg)'
        }
      })
      vm.second.push({
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
      vm.secondClass = second;
      vm.mintClass = mint;
      vm.dateClass = date;
      vm.monthClass = month;
      var a= calendar.CalConv(getDate.getFullYear(), month, date)
    }
    $interval(function () {
      init()
    }, 1000)
    //年月日时分秒星期
    // 农历月日时刻节气
    // 节假日
    // https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=2020%E5%B9%B412%E6%9C%88&resource_id=6018&format=json
  });
});
