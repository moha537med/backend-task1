const fs = require("fs");

// add user
const addUser = (userData)=> {
    const allUsers = loadInfo();

    const foundUser = allUsers.findIndex(u => Number(u.id) === Number(userData.id) );
    if(foundUser === -1){
        console.log("This user is already exist");
        return;
    }
    allUsers.push({...userData , id : Date.now()});
    console.log("User has added successfully");
    saveData(allUsers)
}


// delete one user
const deleteUser = (userid) => {
    const allUsers = loadInfo();
    const foundUser = allUsers.findIndex(u => Number(u.id) === Number(userid));
    if(foundUser === -1 ){
        console.log("This user is not found");
        return;
    }

    allUsers.splice(foundUser , 1)
    console.log("User has deleted successfully");
    saveData(allUsers)
}


// delete all
const deleteAllUsers = () => {
    console.log("All users have deleted successfully");
    saveData([])
}




// read one user id id found , if you do not type read only ==> will show all users
const readUser = (userId) => {
    if(!userId){
        readAllUsers();
        return;
    }
    const allUsers = loadInfo();
    const foundUser = allUsers.findIndex(u => Number(u.id) === Number(userId));
    if(foundUser === -1){
        console.log("This user is not found");
        return;
    }
    const user = allUsers[foundUser]
    console.log(`'${user.fname} ${user.lname}' :` ,user.city);
}


// read all users 
const readAllUsers = () => {
    const allUsers = loadInfo();
    if(allUsers.length === 0){
        console.log("Your list is empty");
        return;
    }
    allUsers.forEach(user => {
        console.log(`'${user.fname} ${user.lname}' :` ,user.city);
    })
}



// edit user
const editUser = (userId) => {
    const allUsers = loadInfo();
    const foundUser = allUsers.findIndex(u => Number(u.id )=== Number(userId.id));
    if(foundUser === -1 ){
        console.log("This user is not found");
        return;
    }

    allUsers[foundUser] = {...allUsers[foundUser] , ...userId}
    console.log("User has updated successfully");
    saveData(allUsers)
}



function loadInfo() {
    try{
        const users = fs.readFileSync("users.json").toString();
        return JSON.parse(users);;
    }catch{
        return [];
    }
}


// store data in users json file
function saveData(allUsers){
    fs.writeFileSync("users.json" , JSON.stringify(allUsers, null, 2));
}

module.exports = {addUser , deleteUser , editUser , deleteAllUsers , readUser , readAllUsers};