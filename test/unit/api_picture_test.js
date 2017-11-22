'use strict';
var request = require('supertest');
var sinon = require('sinon');
var should = require('should');

var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

describe('picturejs api', function() {
    var app;
    
    before(function() {
        app = express();
        //app.set('port', (process.env.PORT || 8080));
        app.set('views', './views');
        app.set('view engine', 'ejs');

        app.use(express.static('./public'));
        app.use(favicon('./public/icons/favicon.ico'));
        app.use(bodyParser.urlencoded({ extended: true }));
        
        var apirouter = express.Router();
        apirouter.get('/', function(req, res) {
            res.json({ message: 'ok' });   
        });
        var picture = require('../../api/picture');
        picture(apirouter);
        
        app.use('/api', apirouter);
    });
    
    describe('start express and add picture.js api', function() {
        it('should response from /', function(done) {
            request(app.listen())
                .get('/')
                .end(function() {
                    // oauth.server.authenticate.callCount.should.equal(1);
                    // oauth.server.authenticate.firstCall.args.should.have.length(3);
                    // oauth.server.authenticate.firstCall.args[0].should.be.an.instanceOf(Request);
                    // oauth.server.authenticate.firstCall.args[1].should.be.an.instanceOf(Response);
                    // should.not.exist(oauth.server.authenticate.firstCall.args[2])
                    // oauth.server.authenticate.restore();
            
                    done();
                });
        });
    });
});