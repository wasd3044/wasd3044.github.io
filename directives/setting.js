blogApp.service('$$http', function ($http) {
    var url = {
        main: 'data/navData.json',
        road: 'data/life/road.json',
        love: 'data/life/love.json',
        note: 'data/work/note.json'
    };
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
            autoPlay: '@?',
            circle: "@?",
            ngName: '='
        },
        link: function (scope, element, attrs) {

            var stopWatch = scope.$watch("ngSrc", function (newData, oldData) {
                if (newData != undefined) {
                    var time = $("<span></span>");
                    var button = $("<button class='btn btn-primary'>试听</button>");
                    var index = 0;
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
                    var audio = $(content.find("audio"))[0];
                    $(content).append(time);
                    button.on('click', function () {
                        //改变暂停/播放icon
                        scope.$emit('playIndex', index);
                        if (audio.paused) {
                            audio.play();
                            button.html("暂停")
                        } else {
                            audio.pause();
                            button.html("播放")
                        }
                    });
                    scope.$on('lisindex',function (event,data) {
                        $(content.find("audio")).each(function (index,item) {
                            item.pause()
                            item.currentTime = 0
                        });
                        scope.$emit('playIndex', data);
                        audio = $(content.find("audio"))[data];
                        audio.play();
                        timeupdate();
                    });
                    var prve = function () {
                        if (scope.circle) {
                            index = (index + scope.ngSrc.length - 1) % scope.ngSrc.length;
                        } else {
                            index = index - 1;
                        }
                        scope.$emit('playIndex', index);
                        audio = $(content.find("audio"))[index];
                        audio.play();
                        timeupdate();
                    };
                    var nextSibling = function () {
                        if (scope.circle) {
                            index = (index + scope.ngSrc.length + 1) % scope.ngSrc.length;
                        } else {
                            index = index + 1;
                        }
                        scope.$emit('playIndex', index);
                        audio = $(content.find("audio"))[index];
                        audio.play();
                        timeupdate();
                    };
                    var downloadSong = function () {
                        window.open(scope.ngSrc,'_blank')
                    };
                    if (scope.ngSrc.length > 1) {
                        var prevbtn = $("<button class='btn btn-primary'>上一曲</button>");
                        var nextbtn = $("<button class='btn btn-primary'>下一曲</button>");
                        prevbtn.bind('click', function () {
                            audio.pause();
                            prve()
                        });
                        nextbtn.bind('click', function () {
                            audio.pause();
                            nextSibling()
                        });
                        var cont = $('<div class="btnContent"></div>')
                        $(content).append(cont);
                        $(cont).append(prevbtn);
                        $(cont).append(button);
                        $(cont).append(nextbtn);
                    }

                    function timeupdate() {
                        // 监听音频播放时间并更新进度条
                        audio.addEventListener('timeupdate', function () {
                            updateProgress(audio);
                            if (scope.autoPlay) {
                                if (audio.currentTime === audio.duration) {
                                    nextSibling()
                                }
                            }
                        }, false);
                    }

                    timeupdate();

                    function updateProgress(audio) {
                        time.html(transTime(audio.currentTime) + "/" + transTime(audio.duration));
                    }

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
                var download = function (url) {
                    $.ajax({
                        type: "get",
                        async: true,
                        url: url,
                        dataType: "jsonp",
                        jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                        jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                        success: function (json) {

                            $("#kecon>img[random='" + json[0].random + "']").attr("src") = json[0].name;

                        },
                        error: function () {
                            alert('fail');
                        }

                    });
                }
            });
        }
    }
})