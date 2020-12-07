var cssStr = "body {\n" +
  "    position: relative;\n" +
  "    width: 100%;\n" +
  "    height: 100%;\n" +
  "    min-height: 1080px;\n" +
  "    background-image: url(\"./img/lifebg.jpg\");\n" +
  "    background-size: 100% 110%;\n" +
  "    overflow: hidden;\n" +
  "}\n" +
  ".htmlTitle{\n" +
  "    background: #985f0d;\n" +
  "    border-color: #985f0d;\n" +
  "}\n" +
  ".clockContent {\n" +
  "  width: 800px;\n" +
  "  height: 800px;\n" +
  "  margin: 20px auto;\n" +
  "  overflow: hidden;\n" +
  "}\n" +
  ".circle {\n" +
  "  position: relative;\n" +
  "  width: 100%;\n" +
  "  height: 100%;\n" +
  "  border: 1px solid #ddd;\n" +
  "  border-radius: 50%;\n" +
  "  background: #eee;\n" +
  "}\n" +
  ".centerLine {\n" +
  "  position: relative;\n" +
  "  left: 50%;\n" +
  "  top: 50%;\n" +
  "  width: 50%;\n" +
  "  height: 1px;\n" +
  "  border: 1px solid #ddd;\n" +
  "}\n" +
  ".calendar {\n" +
  "  position: absolute;\n" +
  "  background: #fff;\n" +
  "  top:  calc(50% - 12px);\n" +
  "  left: calc(50% - 35px);\n" +
  "  padding-right: 20px;\n" +
  "  color: #007bff;\n" +
  "}\n" +
  ".calendar span {\n" +
  "  display: inline-block;\n" +
  "  width: 50px;\n" +
  "  text-align: left;\n" +
  "}\n" +
  ".color-blue {\n" +
  "  color: #007bff;\n" +
  "}\n" +
  ".color-red {\n" +
  "  color: red;\n" +
  "}\n" +
  ".color-green {\n" +
  "  color: green;\n" +
  "}\n" +
  ".year {\n" +
  "  position: relative;\n" +
  "  width: 80px;\n" +
  "  height: 80px;\n" +
  "  border-radius: 50%;\n" +
  "  left: calc(50% - 40px);\n" +
  "  top: calc(50% - 40px);\n" +
  "}\n" +
  ".year > span {\n" +
  "  display: block;\n" +
  "  position: absolute;\n" +
  "  left: 50%;\n" +
  "  top: calc(50% - 12px);\n" +
  "  transform-origin: left center;\n" +
  "}\n" +
  ".month {\n" +
  "  position: absolute;\n" +
  "  width: 100px;\n" +
  "  height: 100px;\n" +
  "  border-radius: 50%;\n" +
  "  left: calc(50% - 50px);\n" +
  "  top: calc(50% - 50px);\n" +
  "}\n" +
  ".month > span {\n" +
  "  display: block;\n" +
  "  position: absolute;\n" +
  "  padding-left: 85px;\n" +
  "  width: 100px;\n" +
  "  left: 50%;\n" +
  "  top: calc(50% - 12px);\n" +
  "  transform-origin: left center;\n" +
  "  text-align: center;\n" +
  "}\n" +
  ".day {\n" +
  "  position: absolute;\n" +
  "  width: 100px;\n" +
  "  height: 100px;\n" +
  "  border-radius: 50%;\n" +
  "  left: calc(50% - 50px);\n" +
  "  top: calc(50% - 50px);\n" +
  "}\n" +
  ".day > span {\n" +
  "  display: block;\n" +
  "  position: absolute;\n" +
  "  padding-left: 140px;\n" +
  "  width: 170px;\n" +
  "  left: 50%;\n" +
  "  top: calc(50% - 12px);\n" +
  "  transform-origin: left center;\n" +
  "  text-align: center;\n" +
  "}\n" +
  ".hour > span {\n" +
  "  display: block;\n" +
  "  position: absolute;\n" +
  "  padding-left: 190px;\n" +
  "  width: 250px;\n" +
  "  left: 50%;\n" +
  "  top: calc(50% - 12px);\n" +
  "  transform-origin: left center;\n" +
  "  text-align: center;\n" +
  "}\n" +
  ".mint > span {\n" +
  "  display: block;\n" +
  "  position: absolute;\n" +
  "  padding-left: 260px;\n" +
  "  width: 310px;\n" +
  "  left: 50%;\n" +
  "  top: calc(50% - 12px);\n" +
  "  transform-origin: left center;\n" +
  "  text-align: center;\n" +
  "}\n" +
  ".second > span {\n" +
  "  display: block;\n" +
  "  position: absolute;\n" +
  "  padding-left: 330px;\n" +
  "  width: 360px;\n" +
  "  left: 50%;\n" +
  "  top: calc(50% - 12px);\n" +
  "  transform-origin: left center;\n" +
  "  text-align: center;\n" +
  "}\n" +
  ".holiday {\n" +
  "  position: absolute;\n" +
  "  left: calc(50% - 800px);\n" +
  "  top: 0;\n" +
  "  width: 800px;\n" +
  "  height: 800px;\n" +
  "  background: #fff;\n" +
  "  opacity: 0.9;\n" +
  "  border-radius: 50%;\n" +
  "  z-index: 2;\n" +
  "}\n" +
  ".holidayContent {\n" +
  "  margin-top: 25%;\n" +
  "  width: 50%;\n" +
  "  float: right;\n" +
  "  height: 50%;\n" +
  "  padding: 80px 50px;\n" +
  "}"
var fs = require('fs')
// 秒
for (var i = 1; i <= 60; i++) {
  cssStr += '.sc-60-' + (i===60?0:i) + '{';
  cssStr += 'animation: sc60' + i + ' 1s;}';
  cssStr += '@keyframes sc60' + i + '{'
  cssStr += 'from {transform: rotate(-' + (6 * i) + 'deg);}'
  cssStr += '50% {transform: rotate(-' + (6 * (i - 1)) + 'deg);}'
  cssStr += 'to {transform: rotate(-' + (6 * (i + 1)) + 'deg);}'
  cssStr += '}'
}
// 分钟
for(var i=1;i<=60; i++) {
    cssStr += '.mint-60-'+(i===60?0:i)+'{';
    cssStr += 'transform: rotate(-'+(6*(i-1))+'deg);';
    cssStr += 'animation: mint60'+i+' 3s;}';
    cssStr += '@keyframes mint60'+i+'{'
    cssStr += 'from {transform: rotate(-'+(6*i)+'deg);}'
    cssStr += '50% {transform: rotate(360deg);}'
    cssStr += 'to {transform: rotate(-'+(6*(i-1))+'deg);}'
    cssStr += '}'
}
// 日
for(var i=1;i<=30; i++) {
    cssStr += '.date-30-'+i+'{';
    cssStr += 'transform: rotate(-'+(12*(i-1))+'deg);';
    cssStr += 'animation: date30'+i+' 3s;}';
    cssStr += '@keyframes date30'+i+'{'
    cssStr += 'from {transform: rotate(-'+(12*i)+'deg);}'
    cssStr += '50% {transform: rotate(-360deg);}'
    cssStr += 'to {transform: rotate(-'+(12*(i-1))+'deg);}'
    cssStr += '}'
}
for(var i=1;i<=31; i++) {
  cssStr += '.date-31-'+i+'{';
  cssStr += 'transform: rotate(-'+((360/31)*(i-1))+'deg);';
  cssStr += 'animation: date30'+i+' 3s;}';
  cssStr += '@keyframes date30'+i+'{'
  cssStr += 'from {transform: rotate(-'+(12*i)+'deg);}'
  cssStr += '50% {transform: rotate(-360deg);}'
  cssStr += 'to {transform: rotate(-'+(12*(i-1))+'deg);}'
  cssStr += '}'
}
for(var i=1;i<=28; i++) {
  cssStr += '.date-28-'+i+'{';
  cssStr += 'transform: rotate(-'+((360/28)*(i-1))+'deg);';
  cssStr += 'animation: date30'+i+' 3s;}';
  cssStr += '@keyframes date30'+i+'{'
  cssStr += 'from {transform: rotate(-'+(12*i)+'deg);}'
  cssStr += '50% {transform: rotate(-360deg);}'
  cssStr += 'to {transform: rotate(-'+(12*(i-1))+'deg);}'
  cssStr += '}'
}
for(var i=1;i<=29; i++) {
  cssStr += '.date-29-'+i+'{';
  cssStr += 'transform: rotate(-'+((360/29)*(i-1))+'deg);';
  cssStr += 'animation: date30'+i+' 3s;}';
  cssStr += '@keyframes date30'+i+'{'
  cssStr += 'from {transform: rotate(-'+(12*i)+'deg);}'
  cssStr += '50% {transform: rotate(-360deg);}'
  cssStr += 'to {transform: rotate(-'+(12*(i-1))+'deg);}'
  cssStr += '}'
}
// 月
for(var i=1;i<=12; i++) {
    cssStr += '.month-12-'+i+'{';
    cssStr += 'transform: rotate(-'+(30*(i-1))+'deg);';
    cssStr += 'animation: month12'+i+' 3s;}';
    cssStr += '@keyframes month12'+i+'{'
    cssStr += 'from {transform: rotate(-'+(30*i)+'deg);}'
    cssStr += '50% {transform: rotate(-360deg);}'
    cssStr += 'to {transform: rotate(-'+(30*(i-1))+'deg);}'
    cssStr += '}'
}
// 小时
for (var i = 1; i <= 24; i++) {
  cssStr += '.hours-24-' + (i===24?0:i) + '{';
  cssStr += 'transform: rotate(-' + (15 * (i - 1)) + 'deg);';
  cssStr += 'animation: hours24' + i + ' 3s;}';
  cssStr += '@keyframes hours24' + i + '{'
  cssStr += 'from {transform: rotate(-' + (15 * i) + 'deg);}'
  cssStr += '50% {transform: rotate(-360deg);}'
  cssStr += 'to {transform: rotate(-' + (15 * (i - 1)) + 'deg);}'
  cssStr += '}'
}
fs.writeFile('./clock.css', cssStr, () => {
});
//.sc-60-58 {
//   animation: sc6058 1s;
// }
// @keyframes sc6058
// {
//   to {transform: rotate(18deg);}
//   50% {transform: rotate(12deg);}
//   from {transform: rotate(24deg);}
// }
// .sc-60-57 {
//   animation: sc6057 1s;
// }
