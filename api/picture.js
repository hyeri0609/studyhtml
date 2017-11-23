'use strict';
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

var uploadPath = "uploads";

module.exports = function(router) {
    router.get('/picture', function(req, res) {
        res.json({ message: 'get ok' });   
    });
    router.post('/picture', function(req, res) {
        var form = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        form.uploadDir = uploadPath;
        form.keepExtensions = false;
        form.maxFieldsSize = 2 * 1024 * 1024;
        form.maxFields = 1000;
        form.parse(req, function (err, fields, files) {
            if (err) throw err;
            // `file` is the name of the <input> field of type `file`
            var old_path = files.fileImage.path,
            //file_size = files.file.size,
            file_ext = files.fileImage.name.split('.').pop(),
            index = old_path.lastIndexOf('/') + 1,
            file_name = old_path.substr(index),
            new_path = path.join(process.env.PWD, '/uploads/', file_name + '.' + file_ext);
            fs.readFile(old_path, function(err, data) {
                if (err) {
                    res.status(500);
                    res.json({'success': false});
                                    throw err;
                }
                fs.writeFile(new_path, data, function(err) {
                    if (err) {
                        res.status(500);
                        res.json({'success': false});
                                        throw err;
                    }
                    fs.unlink(old_path, function(err) {
                        if (err) {
                            res.status(500);
                            res.json({'success': false});
                                            throw err;
                        } else {
                            res.status(200);
                            res.json({'success': true});
                        }
                    });
                });
            });


            // if (err) throw err;
            // var oldpath = files.filetoupload.path;
            // var newpath = files.filetoupload.name;
            // fs.rename(oldpath, newpath, function (err) {
            //     if (err) throw err;
            //     res.json({ message: 'ok200' });
            // });
        });
    });
    router.put('/picture', function(req, res) {
              console.log(req.body.data);
        res.json({ message: 'api post!' });   
    });
    router.delete('/picture', function(req, res) {
              console.log(req.body.data);
        res.json({ message: 'api post!' });   
    });
    
    // router.route('/textformat').post(function(req, res) {
    //   console.log(req.body.data);
    //   res.json({ message: 'hooray! welcome to our api!' }); 
    // });

    // router.route('/user').get(function(req, res) {
    //   res.json({ message: 'user' }); 
    // });
};
