

// let user = [];

// // CreateUser

// function createUser(name , email  , id){
    //     user.push({
        //         name : name ,
        //         email :  email, 
        //         id :  id
        //     })
        // }
        
        // // ReadUser
        // function getUser(){
            //     return user
            // }
            // // ReadUser by id
            // function getUser(id){
//     return user.find((user) => user.id === id);
// }

// // update user

// function updateUser(newName , newEmail , id ){
    
//     const users = user.find((user) => user.id === id);
//     if(users){
    //         users.name = newName,
    //         users.email = newEmail
    //     }
    
    // }
    
    // // DeleteUser
    // function DeleteUser(id){
        //     user =  user.filter((uid)=> uid.id !== id)
        // }
        
        
        // createUser("Akash" , "akash@gmail.com" , 21);
        // createUser("Ak" , "akash@gmail.com" , 3)
        // createUser("rishu" , "akash@gmail.com" , 1);
        
        // console.log(...user);
        // DeleteUser(1);
        // console.log(...user);
        
        
        
// Small TodoApp        // 

let users = [];
function render(){
    let list = document.getElementById("list");
    list.innerHTML = "";
    
    users.forEach((user , index)=> {
        list.innerHTML += `
        <li>
        ${user}
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
        </li>
        `;
    })
    
    
}

function AddUser(){
    let input = document.getElementById("name");
    const name = input.value.trim();
    if(name == "") return;
    users.push(name);
    input.value = "";
    render();

}

function editUser(index){
    const newName = prompt("Enter Your Name")
    if(newName){
        users[index] = newName;
        render();
    }
}

function deleteUser(index){
    const dlt = confirm("Are you really went to delete")
    if(dlt){

        users.splice(index , 1)
        render();
    }
}