
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,    
    delete: deleteSkill,
    edit,
    update
};
function update(req, res) {
  req.body.done = !!req.body.done;

  res.redirect(`/skills/${req.params.skill}`);
}

function edit(req, res) {
   // To send a prefilled out form of the item we want to edit!
   // 1. Ask the DB for the item we want to edit
   //2. We know what the client wants because the 'skill' (id) is in the params.
   const skillEdit = Skill.getOne(req.params.skill);
   res.render('skills/edit', {skill: skillEdit})
}


function deleteSkill(req, res) {
    Skill.deleteOne(req.params.skill);

    res.redirect('/skills');
    
}

function create(req, res) {
  console.log('create controller ran')
  console.log(req.body, "-------- req.body")
    
  Skill.create(req.body);
  res.redirect('/skills');
};

function newSkill(req, res) {
    res.render('skills/new');
};

function show(req, res) {
    console.log(req.params, ' <---- req params!');

    const skillFromDB = Skill.getOne(req.params.skill);
    const levelFromDB = Skill.getOne(req.params.level);

    res.render('skills/show', {skill: skillFromDB, level: levelFromDB });
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

// function edit(req, res) {
//   // const skillFromDB = Skill.getOne(req.params.skill);
//   // res.render('skills/edit', {skill: skillFromDB});

//   const skillFromDB = Skill.getOne(req.params.skill);
//   const levelFromDB = Skill.getOne(req.params.level);

//   res.render('skills/edit', {skill: skillFromDB, level: levelFromDB });

// }

// function update(req, res) {
//   console.log(' -----  EDIT ------')
//   Skill.edit(req.body);
//   res.redirect('/skills');
// };

// function updateSkill(req, res) {
//   console.log(' HERE WE ARE RUNNING UPDATE')
//   console.log(req.body, ' <---------- BODY')
  
//   Skill.update(req.body)
//   //  const skillFromDB = Skill.getOne(req.params.skill)
//   //  const levelFromSkill = Skill.getOne(req.params.level)

//   // res.render('/skills/edit', {skill: skillFromDB, level: levelFromSkill})
//   res.redirect('/');
// }

// function edit(req, res) {
//   // res.render('skills/edit');

//   const skillFromDB = Skill.getOne(req.params.skill);
//   const levelFromDB = Skill.getOne(req.params.level);

//   res.render('skills/edit', {skill: skillFromDB, level: levelFromDB });
// };
