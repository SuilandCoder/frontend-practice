var fs = require("fs");
var path = require("path");
var iconv = require('iconv-lite');
var filePath = path.resolve("./QXJM.dbf");

// fs.readFile("./QXJM", (err, data) => {
//   if (err) {
//     console.log("文件读取失败");
//   } else {
//     //   var res = data.toString('ascii');
//     var res = iconv.decode(data, 'GBK');
//     console.log(res);
//   }
// });
var data = fs.readFileSync(filePath);
var res = iconv.decode(data, 'gb2312');
console.log(res);
