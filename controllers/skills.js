
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    delete: deleteSkill,
    update
    
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.skill);

    res.redirect('/skills');
    
}

function update(req, res) {
  console.log(' -----  EDIT ------')
  Skill.edit(req.body);
  res.redirect('/skills');

};

function create(req, res) {
  console.log('create controller ran')
    
  Skill.create(req.body);
  res.redirect('/skills');
};

function edit(req, res) {
  res.render('skills/edit');
}


function newSkill(req, res) {
    res.render('skills/new');
};

function show(req, res) {
    console.log(req.params, ' <---- req params!');

    const skillFromDB = Skill.getOne(req.params.skill)

    res.render('skills/show', {skill: skillFromDB });
  };


function index(req, res, next) {
    // res.send('respond with a resource');
    
  // // tell our model to get all of the skills *GETTING ALL OF THE SKILLS
    const allSkills = Skill.getAll();
  
  // // need to respond to the cloend with a view, 
  // // listing out all of the skills
    res.render('skills/index', {
      skills: allSkills,
      time: req.time
    });
  };

