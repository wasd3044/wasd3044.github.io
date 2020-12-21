var cssStr = ""
var fs = require('fs')

var fileStr = fs.readFileSync('./clock.css','utf-8');
cssStr += fileStr.slice(0, fileStr.indexOf('.sc-60'));
cssStr += '\n';
// 秒
for (var i = 1; i <= 60; i++) {
  cssStr += '.sc-60-' + (i === 60 ? 0 : i) + '{\n';
  cssStr += '  animation: sc60' + i + ' 1s;\n';
  cssStr += '}\n'
  cssStr += '@keyframes sc60' + i + '{\n'
  cssStr += '  from {transform: rotate(-' + (6 * i) + 'deg);}\n'
  cssStr += '  50% {transform: rotate(-' + (6 * (i - 1)) + 'deg);}\n'
  cssStr += '  to {transform: rotate(-' + (6 * (i + 1)) + 'deg);}\n'
  cssStr += '}\n'
}
// 分钟
for (var i = 1; i <= 60; i++) {
  cssStr += '.mint-60-' + (i === 60 ? 0 : i) + '{\n';
  cssStr += '  transform: rotate(-' + (6 * (i - 1)) + 'deg);\n';
  cssStr += '  animation: mint60' + i + ' 3s;\n';
  cssStr += '}\n'
  cssStr += '@keyframes mint60' + i + '{\n'
  cssStr += '  from {transform: rotate(-' + (6 * i) + 'deg);}\n'
  cssStr += '  50% {transform: rotate(360deg);}\n'
  cssStr += '  to {transform: rotate(-' + (6 * (i - 1)) + 'deg);}\n'
  cssStr += '}'
}
// 日
for (var i = 1; i <= 30; i++) {
  cssStr += '.date-30-' + i + '{\n';
  cssStr += '  transform: rotate(-' + (12 * (i - 1)) + 'deg);\n';
  cssStr += '  animation: date30' + i + ' 3s;\n';
  cssStr += '}\n'
  cssStr += '@keyframes date30' + i + '{\n'
  cssStr += '  from {transform: rotate(-' + (12 * i) + 'deg);}\n'
  cssStr += '  50% {transform: rotate(-360deg);}\n'
  cssStr += '  to {transform: rotate(-' + (12 * (i - 1)) + 'deg);}\n'
  cssStr += '}\n'
}
for (var i = 1; i <= 31; i++) {
  cssStr += '.date-31-' + i + '{\n';
  cssStr += '  transform: rotate(-' + ((360 / 31) * (i - 1)) + 'deg);\n';
  cssStr += '  animation: date31' + i + ' 3s;\n';
  cssStr += '}\n'
  cssStr += '@keyframes date31' + i + '{\n'
  cssStr += '  from {transform: rotate(-' + ((360 / 31) * i) + 'deg);}\n'
  cssStr += '  50% {transform: rotate(-360deg);}\n'
  cssStr += '  to {transform: rotate(-' + ((360 / 31) * (i - 1)) + 'deg);}\n'
  cssStr += '}'
}
for (var i = 1; i <= 28; i++) {
  cssStr += '.date-28-' + i + '{\n';
  cssStr += '  transform: rotate(-' + ((360 / 28) * (i - 1)) + 'deg);\n';
  cssStr += '  animation: date30' + i + ' 3s;\n';
  cssStr += '}\n'
  cssStr += '@keyframes date30' + i + '{\n'
  cssStr += '  from {transform: rotate(-' + ((360 / 28) * i) + 'deg);}\n'
  cssStr += '  50% {transform: rotate(-360deg);}\n'
  cssStr += '  to {transform: rotate(-' + ((360 / 28) * (i - 1)) + 'deg);}\n'
  cssStr += '}\n'
}
for (var i = 1; i <= 29; i++) {
  cssStr += '.date-29-' + i + '{\n';
  cssStr += '  transform: rotate(-' + ((360 / 29) * (i - 1)) + 'deg);\n';
  cssStr += '  animation: date30' + i + ' 3s;\n';
  cssStr += '}\n'
  cssStr += '@keyframes date30' + i + '{\n'
  cssStr += '  from {transform: rotate(-' + ((360 / 29) * i) + 'deg);}\n'
  cssStr += '  50% {transform: rotate(-360deg);}\n'
  cssStr += '  to {transform: rotate(-' + ((360 / 29) * (i - 1)) + 'deg);}\n'
  cssStr += '}\n'
}
// 月
for (var i = 1; i <= 12; i++) {
  cssStr += '.month-12-' + i + '{\n';
  cssStr += '  transform: rotate(-' + (30 * (i - 1)) + 'deg);\n';
  cssStr += '  animation: month12' + i + ' 3s;\n';
  cssStr += '}\n'
  cssStr += '@keyframes month12' + i + '{\n'
  cssStr += '  from {transform: rotate(-' + (30 * i) + 'deg);}\n'
  cssStr += '  50% {transform: rotate(-360deg);}\n'
  cssStr += '  to {transform: rotate(-' + (30 * (i - 1)) + 'deg);}\n'
  cssStr += '}'
}
// 小时
for (var i = 1; i <= 24; i++) {
  cssStr += '.hours-24-' + (i === 24 ? 0 : i) + '{\n';
  cssStr += '  transform: rotate(-' + (15 * (i - 1)) + 'deg);\n';
  cssStr += '  animation: hours24' + i + ' 3s;\n';
  cssStr += '}\n'
  cssStr += '@keyframes hours24' + i + '{\n'
  cssStr += '  from {transform: rotate(-' + (15 * i) + 'deg);}\n'
  cssStr += '  50% {transform: rotate(-360deg);}\n'
  cssStr += '  to {transform: rotate(-' + (15 * (i - 1)) + 'deg);}\n'
  cssStr += '}\n'
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
