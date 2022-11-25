let inputUsername = document.getElementById("inputUsername")
let inputPassword = document.getElementById("inputPassword")
let login = document.getElementById("inputSave")
let show = document.getElementById("showText")
let register = document.getElementById("newUser")

let logoutBtn = document.createElement("button")
let removeLogout = document.getElementById("userLogout")
let head = document.getElementById("head")





//  if(localStorage.getItem("usersLogin")) {
//     console.log("är inloggad finns ls")
//     let noUser =[
//         {
//             username: "", 
//         password: ""
//         },   
//     ];

//     localStorage.setItem("userLogin", JSON.stringify(noUser))
//     logged()
//  } else {
//     console.log("inte inloggad iget ls")
//     let users = [
//         {
//             username: "janne", 
//         password: "test"
//         },
//         {
//             username: "tony", 
//         password: "montana"
//          }
//     ];
    
//    localStorage.setItem("usersLogin", JSON.stringify(users))
// logged()
//  }

//  function logged () {
//     document.body.classList = localStorage.getItem("usersLogin")
//     showButoon()
//  }
 
//  function showButoon () {
//     let toggleBtn = document.createElement("button")
//     toggleBtn.innerText = ""
//  let users =  localStorage.getItem("usersLogin")

// for (i = 0; i < users.length; i++) {
//     if (username.value == users[i].username && password.value == users[i].password /*|| username === "tony" && pass === "montana" */) {
//         //                 console.log("You have succesfully logged in " + username.value)
                        
//         //                 console.log(users)        // localStorage.setItem("usersLogin", "noUser")
//         // logged()
//         toggleBtn.innerText = "logout"

//     } else {
//         toggleBtn.innerText = "login"

//         // localStorage.setItem("usersLogin", "users")
//         // logged()
//     }
//     head.appendChild(toggleBtn)
// }
// }


// // skapa inloggare
let users = [
    {
        username: "janne", 
    password: "test"
    },
    {
        username: "tony", 
    password: "montana"
     }
];
// localStorage.setItem("users",JSON.stringify(users))
// console.log(users)
//  log1()
   


if (localStorage.getItem("users")) {
    console.log("Det finns LS")
    // let users = JSON.parse(localStorage.getItem("users"))
    // localStorage.setItem("users", users)
    log1()

    

}else {
    console.log("finns inget LS logccccccccccccga in")
 // sätt localstorage
 localStorage.setItem("users", JSON.stringify(users))


}
let usersReg = JSON.parse(localStorage.getItem("users"))

function log() {
    let users = JSON.parse(localStorage.getItem("users"))
for (i = 0; i < users.length; i++) {
    if (inputUsername.value == users[i].username && inputPassword.value == users[i].password) {
                console.log("You have succesfully logged in " + inputUsername.value)
                head.style.display = "none"
                console.log(users)
                noLogin()
    // console.log(password.value)
    return
    }
                }    
                
                showText=document.createElement("h2")
                showText.innerText= "The user does not exist"
     console.log("not a valid account")
            head.appendChild(showText)
            
            }


function setlocal() {


}


// logga in användare 
function log1() {
login.addEventListener("click", ()=> {
    // evt.preventDefault()
    console.log("Click on button")
    log()
})
}

// stnna inloggad







// tar bort section i header alltså login funktion

function noLogin(){
    head.style.display = "none"
    let logoutBtn = document.createElement("button")


//  skapa och skriv ut en logga ut knapp
logoutBtn.innerText = "Logout"

// flttar kanppen till höger

logoutBtn.style.position= "fixed"
    logoutBtn.style.left= "93%"
    logoutBtn.style.top= "30px"

// // visa den som är inloggad
let loggedUser = document.createElement("h2")
loggedUser.innerText= "Inlogged as: " + inputUsername.value;

// brevid logoutknapp

loggedUser.style.position= "fixed"
loggedUser.style.left= "78%"
loggedUser.style.top= "9px"
loggedUser.style.color= "grey"


document.body.appendChild(logoutBtn)

document.body.appendChild(loggedUser)

    // lägger till funkiton logga ut 
    logoutBtn.addEventListener("click", () => {
        console.log("knapp igenom")
        head.style.display = "block"
        // localStorage.clear()
        
        // location.reload()
        logoutBtn.style.display= "none"
        loggedUser.style.display= "none"
        console.log("goodbye")
 })

    }
window.onload = function () {
    localStorage.getItem("users")
}
        
//  // skapa ny användare


//  register.addEventListener ("click", () => {

//     // hämta
//     let users = JSON.parse(localStorage.getItem("users"))
// // gör ny användare
//     let newUsername = username.value
//     let newPassword = password.value
//     let newUser = { 
//         username: newUsername,
//         password: newPassword
//     }

//     for (i=0 ; i < users.length; i++) {
//         if(newUsername == users[i].username) {
//             console.log("taken")
//             return

//         } 
        
//     }
//     console.log("newUser", newUser)

//     // ändra
//     users.push(newUser)
//     //spara
//     localStorage.setItem("users", JSON.stringify(users))

//    console.log("User", users)
//     }
//  )

// //  function clean() {
    
    
// // inputUs.innerText = ""
// //     password.innerText = ""
// //  }


// // //  function realod (logintoken) {
// // //     if (logintoken === null) {
// // //         logout()
// // //     } else if (logintoken === "users") {
// // //         log()
// // //     }
// // //  }

// // //  window.onload = realodLog
// // // visa ny diplay på skärmen