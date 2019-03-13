blogApp.service('$$http', function ($http) {
    var url = {
        main: 'data/navData.json',
        road: 'data/life/road.json'
    }
    var get = function (type) {
        return $http.get(url[type]).then(function (value) {
            return value.data
        })
    };
    return {
        get: get
    }
});
blogApp.directive('ngState', function ($state) {
    return {
        restrict: 'A',
        scope: {
            ngState: '='
        },
        link: function (scope, ele) {
            scope.$watch('ngState', function (newVal) {
                if (newVal) {
                    var index = scope.ngState.indexOf(":");
                    var state, param = {};
                    if (index > 0) {
                        state = scope.ngState.slice(0, index);
                        param = JSON.parse(scope.ngState.slice(index + 1, scope.ngState.length));
                    } else {
                        state = scope.ngState;
                    }
                    param.author = "sen";
                    ele.bind('click', function () {
                        $state.go(state, param)
                    })
                }
            })
        }
    }
});
blogApp.directive("playAudio", function ($sce) {
    return {
        restrict: "E",
        scope: {
            ngSrc: "=",
        },
        link: function (scope, element, attrs) {

            var stopWatch = scope.$watch("ngSrc", function (newData, oldData) {
                if (newData != undefined) {
                    var time = $("<span></span>");
                    var button = $("<button class='btn btn-primary'>试听</button>");
                    var ele = "<div id='playPause'>";
                    for (var i = 0; i < scope.ngSrc.length; i++) {
                        ele += "<audio id='audioTag" + i + "' src='" + scope.ngSrc[i] + "'></audio>";
                    }
                    ele += "</div>";

                    var content = angular.element(ele);
                    content.attr({
                        "class": $(element).attr('class')
                    });
                    $(element).replaceWith(content);
                    var audio = $(content.find('audio'))[0];
                    if(!attrs.tittle){
                        $(content).append(time);
                    }
                    $(content).append(button);
                    button.on('click', function () {
                        //改变暂停/播放icon
                        if (audio.paused) {
                            audio.play();
                        } else {
                            audio.pause();
                        }
                    });
                    // 监听音频播放时间并更新进度条
                    audio.addEventListener('timeupdate', function () {
                        updateProgress(audio);
                    }, false);

                    /**
                     * 更新进度条与当前播放时间
                     * @param {object} audio - audio对象
                     */
                    function updateProgress(audio) {
                        time.html(transTime(audio.currentTime)+"/"+transTime(audio.duration));
                    }

                    /**
                     * 音频播放时间换算
                     * @param {number} value - 音频当前播放时间，单位秒
                     */
                    function transTime(value) {
                        var time = "";
                        var h = parseInt(value / 3600);
                        value %= 3600;
                        var m = parseInt(value / 60);
                        var s = parseInt(value % 60);
                        if (h > 0) {
                            time = formatTime(h + ":" + m + ":" + s);
                        } else {
                            time = formatTime(m + ":" + s);
                        }

                        return time;
                    }

                    /**
                     * 格式化时间显示，补零对齐
                     * eg：2:4  -->  02:04
                     * @param {string} value - 形如 h:m:s 的字符串
                     */
                    function formatTime(value) {
                        var time = "";
                        var s = value.split(':');
                        var i = 0;
                        for (; i < s.length - 1; i++) {
                            time += s[i].length == 1 ? ("0" + s[i]) : s[i];
                            time += ":";
                        }
                        time += s[i].length == 1 ? ("0" + s[i]) : s[i];

                        return time;
                    }
                }
            });
        }
    }
})