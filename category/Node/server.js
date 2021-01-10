//使用node.js创建服务器
//接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。

//实例如下，在你项目的根目录下创建一个叫 server.js 的文件，并写入以下代码：
var http = require('http').createServer();

http.on('request', function (request, reponse) {
    console.log('request:' + request.url);
    reponse.write("node.js");
    reponse.end("hello word")
})
http.listen('8888')

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

//分析
// 第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。
// 接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，
// 这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。