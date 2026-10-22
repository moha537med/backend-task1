const usersScript = require("./users");

const yargs = require("yargs");


// add command
yargs.command({
    command:"add",
    describe:"To add user",
    builder: {
        fname:{
            describe:"This is first name field",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"This is last name field",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"This is age  field",
            demandOption:false,
            type:"number"
        },
        city:{
            describe:"This is city  field",
            demandOption:false,
            type:"string"
        },
        id:{
            describe:"This is user ud field",
            demandOption:true,
            type:"string"
        },
    } ,
    handler:(data)=> {
        usersScript.addUser({fname:data.fname , lname:data.lname , age :data.age})
    }
})


// delete command
yargs.command({
    command:"delete",
    describe:"To delete user",
    builder: {
        id:{
            describe:"This is user ud field",
            demandOption:true,
            type:"number"
        },
    } ,
    handler:(data)=> {
        usersScript.deleteUser(data.id)
    }
})

// delete all command
yargs.command({
    command:"deleteAll",
    describe:"To delete all users",
    handler:()=> {
        usersScript.deleteAllUsers()
    }
})

// read all command
yargs.command({
    command:"readAll",
    describe:"To read all users",
    handler:()=> {
        usersScript.readAllUsers()
    }
})

// read command
yargs.command({
    command:"read",
    describe:"To read users",
    builder: {
        id:{
            describe:"This is user ud field",
            demandOption:false,
            type:"number"
        },
    } ,
    handler:(data)=> {
        usersScript.readUser(data.id)
    }
})







const fs = require("fs");

yargs.command({
    command:"edit",
    describe:"To edit user",
    builder: {
        fname:{
            describe:"This is first name field",
            demandOption:false,
            type:"string"
        },
        lname:{
            describe:"This is last name field",
            demandOption:false,
            type:"string"
        },
        id:{
            describe:"This is id field",
            demandOption:true,
            type:"number"
        },

    } ,
    handler:(data)=> {
        usersScript.editUser({fname:data.fname , lname:data.lname , id : data.id})
    }
})



// console.log(yargs.argv)
yargs.parse();