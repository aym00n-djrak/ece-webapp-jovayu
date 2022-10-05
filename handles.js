
const url = require('url')
const qs = require('querystring')


module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
      
        res.writeHead(200, {'Content-Type': 'text/plain'});
      
        if (path === '/hello' && 'name' in params) {
          res.write('Hello ' + params['name'])
        }else if(path === '/Hello remy'){
            res.write('JOVANOVIC Rémy: 21 ans, Permis B')
        }
        else if (path === '/Hello ShiHao')
        {
          res.write('ShiHao Yu: 23 ans, Etudiant d ECE')
        }         
        else {
          res.write('Error 404')
        }
        
        res.end();    } 
  }