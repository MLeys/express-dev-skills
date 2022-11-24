module.exports = {
    index,
    show 
};


const Skill = require('../models/skill');

function index(req, res, next) {
    // res.send('respond with a resource');
    
  // // tell our model to get all of the skills *GETTING ALL OF THE SKILLS
    const allSkills = Skill.getAll();
  
  // // need to respond to the cloend with a view, 
  // // listing out all of the skills
    res.render('skills/index', {
      skills: allSkills
    })
  }

  function show(req, res) {
    console.log(req.params, ' <---- req params!');

    const skillFromDB = Skill.getOne(req.params.skill)

    res.render('skills/show', {skill: skillFromDB });
  };