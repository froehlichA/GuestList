/**
 * Created by christoph.kerschenba on 18.08.2016.
 */
var jsonServer = require('json-server')
var server = jsonServer.create()
var middlewares = jsonServer.defaults()
var fs = require('fs');
var path = require('path');
var express = require('express');
const port = process.env.PORT || 3400;

function concatJsonFiles(jsonfolder) {
    var currentDir = fs.realpathSync(__dirname) + jsonfolder;
    var db = {};
    var files = fs.readdirSync(currentDir);
    files.forEach(function (file) {
        if (path.extname(jsonfolder + file) === '.json') {
            db[path.basename(jsonfolder + file, '.json')] = require(currentDir + file);
        }
    });
    console.log(db);
    return db;
}

server.use(middlewares);

server.use(rewriter());

function rewriter() {
    var router = express.Router();
    router.all('*', function (req, res, next) {
        if (req.url.indexOf('?') !== -1) {
            var target = req.url.replace('?', '_');
            req.url = target;
        }
        next()
    });
    return router;
}

const useJson = name => jsonServer.router(concatJsonFiles(name));
server.use('/api/maturaball', useJson('/api/maturaball/'));
server.use('/api', useJson('/api/'));

server.listen(port, () => console.log('JSON Server is running'));
