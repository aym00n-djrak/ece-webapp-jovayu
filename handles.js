// ./handles.js
// Necessary imports
const http = require('http')
const url = require('url')
const qs = require('querystring')
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'


module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
      
        res.writeHead(200, {'Content-Type': 'text/plain'});
      
        if (path === '/hello' && 'name' in params) {
          res.write('Hello ' + params['name'])
        }else if(path === '/helloremy'){
            res.write('JOVANOVIC Rémy: 21 ans, Permis B')
        }         
        else {
          res.write('Error 404')
        }
        
        res.end();    } 
  }