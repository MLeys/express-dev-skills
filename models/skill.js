const skills = [
    {id: 100001, skill: 'Java', level: 'beginner' , done: false},
    {id: 100002, skill: 'JavaScript', level: 'beginner' , done: true},
    {id: 100003, skill: 'HTML', level: 'beginner' , done: true},
    {id: 100004, skill: 'CSS', level: 'beginner' , done: true},
    {id: 100005, skill: 'Python', level: 'beginner' , done: false},
    {id: 100006, skill: 'Express', level: 'none' , done: true},
    {id: 100007, skill: 'Ruby', level: 'none', done: false},
    {id: 100008, skill: 'Rails', level: 'none', done: false}
  ];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };



function getAll() {
    return skills;
}

// USING 'skill' instead of 'id' **
function getOne(s) {
 
    return skills.find(code => code.skill === s)
}

//   WHAT IS Date.now() doing??
function create(skill) {
    skill.level = 'none';
    skills.push(skill);
};  




// function editOne(level) {
//     const index = skills.findIndex(skill => skill.level === level);
//     return skills[index]['level'] = level;
// };

function deleteOne(skill) {
    const index = skills.findIndex(code => code.skill === skill);
    return skills.splice(index, 1);

};


