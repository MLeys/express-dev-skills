var express = require('express');
var router = express.Router();

const Skill = require('../models/skill');


// import controller to get index function


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

// // tell our model to get all of the skills *GETTING ALL OF THE SKILLS
  const allSkills = Skill.getAll();

// // need to respond to the cloend with a view, 
// // listing out all of the skills
  res.render('skills/index', {
    skills: allSkills
  })
});

// app.get('/', function(req, res) {

//   const allSkills = Skill.getAll();

//   res.render('skills/index', {
//     skills: allSkills
//   });
// });


 // existing route above
 
//  app.get('/', function(req, res) {
//   res.render('skills/index', {
//     skills: skillDb.getAll()
//   });
// });

module.exports = router;
