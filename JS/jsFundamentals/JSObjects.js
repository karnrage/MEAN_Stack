// Challenge I
// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];
// console.log(students);

// Challenge II
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for(let name in users){
    let message = `EMPLOYEES : ${first_name}, ${last_name}`;
    // Take note of the backticks instead of quotes
    console.log(message);
}

 