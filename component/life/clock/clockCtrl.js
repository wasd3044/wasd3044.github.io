define(function () {
  'use strict';
  blogApp.registerController('clockCtrl', function ($scope, $interval, $http, calendar) {
    var vm = this;
    vm.second = 1;
    vm.mint = 1;
    vm.date = 0;
    vm.month = 0;
    vm.hour = 0;
    vm.years = new Date().getFullYear();
    vm.months = [];
    vm.hours = [];
    vm.calendar = {};
    vm.holiday = [];
    vm.workday = [];
    // $scope.changeShowTitle(false);
    for(var i=1;i<=12;i++) {
      vm.months.push({
        value: i,
        style: {
          'transform': 'rotate('+((i-1)*30)+'deg)'
        }
      })
    }
    for(var i=0;i<=23;i++) {
      vm.hours.push({
        value: i,
        style: {
          'transform': 'rotate('+((i-1)*15)+'deg)'
        }
      })
    }


    vm.mints = [];
    vm.seconds = [];
    for(var i=0;i<60;i++) {
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
      var nHours = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥', '子'];
      vm.calendar.hour = nHours[Math.ceil(vm.hour/2)] + '时';
      vm.calendar.mint = vm.hour%2 ? vm.mint>30 ? '二刻' : '初刻': vm.mint>30 ? '四刻' : '三刻'
      // vm.calendar = calendar.CalConv(vm.years, vm.month, vm.date, vm.hour, vm.mint)
    });
    var callbackName = Math.random().toString(32).replace(/\d/gi, '').replace('.','').slice(-8).toLocaleUpperCase();
    window[callbackName] = function (data) {
      var day = data.data[0];
      vm.almanac = day.almanac.find(function (item) {
        return item.date === (vm.years+'-'+vm.month+'-'+vm.date)
      });
      var holiday = day.holiday.find(function (item) {
        return item.list.find(function (date) {
          return date.date.indexOf(vm.years+'-'+vm.month)>-1
        })
      });
      angular.forEach(holiday, function (item) {
        vm.holiday.rest =item.rest
          angular.forEach(item.list, function (date) {
          var ismonth = date.date.split('-')[1] === vm.month;
          if(!ismonth) {
            return ;
          }
          var day = date.date.split('-')[2];
          if(date.status === 1) {
            vm.holiday.push(day)
          } else {
            vm.workday.push(day)
          }
        })
      })

      console.log(data);
    };
    function getdate () {
      $http.jsonp('https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query='+vm.years+'%E5%B9%B4'+vm.month+'%E6%9C%88&resource_id=6018&format=json&cb=window.'+callbackName);
      vm.calendar = Object.assign(vm.calendar, calendar.toCn(vm.years, vm.month, vm.date));
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
    }
    $scope.$watch('vm.date', function (newvalue) {
      if(!newvalue) {
        return ;
      }
      getdate()
    });

    //年月日时分秒星期
    // 农历月日时刻节气
    // 节假日
    // https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=2020%E5%B9%B412%E6%9C%88&resource_id=6018&format=json
  });
});
