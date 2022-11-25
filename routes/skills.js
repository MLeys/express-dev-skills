var express = require('express');
var router = express.Router();


// import controller to get index function
const skillsController = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.get('/:skill', skillsController.show);
router.post('/', skillsController.create);
router.get('')




module.exports = router;
