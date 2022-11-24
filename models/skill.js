const skills = [
    {id: 100001, skill: 'Java', level: 'beginner' },
    {id: 100002, skill: 'JavaScript', level: 'beginner' },
    {id: 100003, skill: 'HTML', level: 'beginner' },
    {id: 100004, skill: 'CSS', level: 'beginner' },
    {id: 100005, skill: 'Python', level: 'beginner' },
    {id: 100006, skill: 'Express', level: 'none' },
    {id: 100007, skill: 'Ruby', level: 'none'},
    {id: 100008, skill: 'Rails', level: 'none'}
  ];
  
module.exports = {
    getAll,
    getOne 
  };

function getAll() {
    return skills;
}

// USING 'skill' instead of 'id' **
function getOne(skill) {

    
    return skills.find(code => code.skill === skill)
}

//   function getAll() {
//     return skills;

//  }
 
