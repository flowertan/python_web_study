var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var path = request.url
    var query = ''
    if(path.indexOf('?') >= 0){
        query = path.substring(path.indexOf('?'))
    }
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method

    console.log('HTTP 路径为\n' + path)

    if(path == '/style.js'){
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write('body{background-color: #white;}h1{color: red;}')
        response.end()
    }else if(path == '/script.html'){
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write('alert("这是JS执行的")')
        response.end()
    }else if(path == '/index.css'){
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write('<!DOCTYPE>\n<html>' +
            '<head><link rel = "stylesheet" href="/style.js">' +
            '</head><body>' +
            '<h1>你好</h1>' +
            '<script src="/script.html"></script>' +
            '</body></html>')
        response.end()
    }else{
        response.StatusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write('呜呜呜')
        response.end()
    }
})

server.listen(port)
console.log('' + port + '成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

