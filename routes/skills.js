var express = require('express');
var router = express.Router();


// import controller to get index function
const skillsController = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsController.index);
router.get('/:skill', skillsController.show);
router.get('')



module.exports = router;
