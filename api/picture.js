'use strict';
module.exports = function(router) {
    router.get('/picture', function(req, res) {
        res.json({ message: 'api get!' });   
    });
    router.post('/picture', function(req, res) {
              console.log(req.body.data);
        res.json({ message: 'api post!' });   
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
