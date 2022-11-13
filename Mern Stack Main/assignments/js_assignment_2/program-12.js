// 12 . Write program to call the getUsers then print users using callback, promise.

                // Using Callbacks
function getUsers(callback){
    console.log("Getting the users");
    setTimeout(()=>{
        users=([{
            id:1,
            name:"Tehith",
            age:20
        },{
            id:2,
            name:"Teja",
            age:22
        }]);
        console.log("Got the users from db");
        callback(users);
    },2000);
}
function printUsers(users){
    console.log("Printing the users")
    for(i of users){
        console.log(i);
    }
}
getUsers(printUsers);

                // Using Promises
function getUsers(){
    console.log("Getting the users");
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            users=[
                {
                    id:1,
                    name:"Tehith",
                    age:20
                },{
                    id:2,
                    name:"Teja",
                    age:22
                }
            ]
            console.log("Got the users from db");
            resolve(users);
        },5000);
    });
}
function printUsers(users){
    console.log("Printing the users")
    for(i of users){
        console.log(i);
    }
}
getUsers().then(function(result){
    printUsers(result);
}).catch(function(error){
    console.log(error);
    console.log("Some error occured while getting data");
})
