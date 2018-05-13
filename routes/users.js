var express = require('express');
var router = express.Router();

// User models lives here
var User     = require('../models/users');


router.get('/', function(req, res, next) {
    User.find(function(err, users) {
		if (err)
			res.send(err);
		res.json(users);
	});
})

router.post('/', function(req, res, next) {
    var user = new User();		// create a new instance of the Bear model
		user.name = req.body.name;  // set the bears name (comes from the request)

		user.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'User created!' + user.name });
		});
})


router.get('/:user_id', function(req, res, next) {
    User.findById(req.params.user_id, function(err, user) {
		if (err)
			res.send(err);
		res.json(user);
	});
})
    
    
router.put('/:user_id', function(req, res, next) {
    User.findById(req.params.user_id, function(err, user) {

		if (err)
			res.send(err);

		user.name = req.body.name;
		user.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'User updated!' });
		});
	});
})
    
    
router.delete('/:user_id', function(req, res, next) {
    User.remove({
			_id: req.params.user_id
		}, function(err, user) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
})

module.exports = router;


