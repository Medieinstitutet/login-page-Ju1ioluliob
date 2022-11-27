let inputUsername = document.getElementById("inputUsername")
let inputPassword = document.getElementById("inputPassword")
let login = document.getElementById("inputSave")
let show = document.getElementById("showText")
let register = document.getElementById("newUser")

let logoutBtn = document.createElement("button")
let removeLogout = document.getElementById("userLogout")
let head = document.getElementById("head")
let signForm = document.getElementById("createForm")
let aa = document.getElementById("aa")

let createUser = document.getElementById("createUser")


let newUsername = document.getElementById("newUsername")
let newPassword = document.getElementById("newPassword")
let confirmPassword = document.getElementById("confirmPassword")



styleLogBtn()



signForm.style.display = "none"



window.localStorage = localStorage.getItem("logUser".logUser)
// styleLogBtn()
// let logUser = []
// tillgängliga inloggar
let users = [
    {
     id:1,   username: "janne", 
    password: "test"
    },
    {
     id:2,   username: "tony", 
    password: "montana"
     }
];
// localStorage.users = JSON.stringify(users)


if (localStorage.getItem("online")) {
    console.log("Det finns LS")
    homeScreen()


    
}else {
    console.log("finns inget LS logccccccccccccga in")

    localStorage.setItem("logUser", JSON.stringify(users))
    aa.style.display = "none"
// localStorage.setItem("allUsers",JSON.stringify(logUser))
 
// log1()


}
// users = JSON.parse(localStorage.getItem("logUser"))

function log() {
    // localStorage.setItem("logUser", JSON.stringify(users))
    let users = JSON.parse(localStorage.getItem("users"))
    
for (i = 0; i < users.length; i++) {
    if (inputUsername.value === users[i].username && inputPassword.value === users[i].password || localStorage.getItem("logUser") === inputUsername.value && inputPassword.value) {
                console.log("You have succesfully logged in " + inputUsername.value)
                head.style.display = "none"
                console.log(users)
                let logUser = localStorage.getItem("logUser")
                localStorage.setItem("logUser", logUser)
                let online = inputUsername.value
                localStorage.setItem("online",online)
                aa.style.display = "block"

                // logUser = localStorage.users
                // localStorage.setItem("newUser",JSON.stringify(users))
                homeScreen()
    return
    } 
    else{ 
                
                showText.innerText= "The user does not exist"
                showText.style.color= "red"
     console.log("not a valid account")
            head.appendChild(showText)
            
    }}

        }



// logga in användare 

login.addEventListener("click", ()=> {
    console.log("Click on button")
    log()
})




// hemsida visas inloggad

function homeScreen(){
    // localStorage.setItem("users", JSON.stringify(users))

    head.style.display = "none"
    let logoutBtn = document.createElement("button")
    let welcome = document.createElement("h2")
    welcome.innerText= "HI welcome to this page"

    welcome.style.position = "relative"
    welcome.style.top = "26px"
    welcome.style.left = "51px"
    


// newUserkapa och skriv ut en logga ut knapp
logoutBtn.innerText = "Logout"

// flttar kanppen till höger

logoutBtn.style.position= "fixed"
    logoutBtn.style.left= "93%"
    logoutBtn.style.top= "30px"

// // visa den som är inloggad
let loggedUser = document.createElement("h2")
loggedUser.innerText= "Inlogged as: " + localStorage.getItem("online");

// brevid logoutknapp

loggedUser.style.position= "fixed"
loggedUser.style.left= "78%"
loggedUser.style.top= "22px"
loggedUser.style.color= "grey"


aa.appendChild(logoutBtn)

aa.appendChild(loggedUser)
aa.appendChild(welcome)

    // lägger till funkiton logga ut 
logoutBtn.addEventListener("click", () => {
        showText.innerText= ""
        console.log("knapp igenom")
        head.style.display = "block"
        localStorage.removeItem("online")

 
        
        aa.style.display = "none"

        logoutBtn.style.display= "none"
        loggedUser.style.display= "none"
        welcome.style.display= "none"
        console.log("goodbye")
 })
}
        
//  // skapa ny användare


 register.addEventListener ("click", () => {
    signForm.style.display = "block"
    aa.style.display = "none"
    head.style.display = "none"

createUser.addEventListener("click", () =>{ 
    // hämta
    // let logUser = JSON.parse(localStorage.getItem("logUser"))
// gör ny användare
    let newUsernameA = newUsername.value
    let newPasswordA = newPassword.value
  

    for (i=0 ; i < users.length; i++) {
        if(newUsernameA === users[i].username) {
            console.log("taken")
            return

        } else{ 
            let newUser = { 
                // id: users.length +1,
                username: newUsernameA,
                password: newPasswordA
            }
    console.log("newUser", newUser)

    // ändra
   users.push(newUser)
    // logUser.push(newUser)

    //spara
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("logUser", JSON.stringify(users))
    // localStorage.setItem("",JSON.stringify(newUser))
// // console.log("logUser", logUser)
// logUser = localStorage.getItem("logUser")
   console.log("User", users)
   signForm.style.display = "none"
   head.style.display = "block"


   }
    }
} )
} )






function styleLogBtn (){

    // head.style.background = " #1c1c1c"
    // head.style.borderRadius = " 8px"
    // head.style.overflow = "hidden"
    // head:before.style.background = " #1c1c1c"
    // head.style.background = " #1c1c1c"
    // head.style.background = " #1c1c1c"
    // head.style.background = " #1c1c1c"
    // head.style.background = " #1c1c1c"
    // head.style.background = " #1c1c1c"
    // head.style.background = " #1c1c1c"




    login.style.position = "relative";
    login.style.display = "inline-block";
    login.style.padding = "12px 36px";
    login.style.color = "#fff";
    login.style.textDecoration = "none";
    login.style.textTransform = "uppercase";
    login.style.fontSize = "18px";
    login.style.letterSpacing = "2px";
    login.style.borderRadius = "40px";
    login.style.background = "linear-gradient(90deg, #0162c8, #55e7fc)";
    login.style.border = "none";
    login.style.cursor = "pointer";
    login.style.boxShadow = "0px 5px darkblue";
    login.style.boxShadowColor = "black";
    
    newUser.style.position = "relative";
    newUser.style.display = "inline-block";
    newUser.style.padding = "12px 36px";
    newUser.style.color = "#fff";
    newUser.style.textDecoration = "none";
    newUser.style.textTransform = "uppercase";
    newUser.style.fontSize = "18px";
    newUser.style.letterSpacing = "2px";
    newUser.style.borderRadius = "40px";
    newUser.style.background = "linear-gradient(90deg, #0162c8, #55e7fc)";
    newUser.style.border = "none";
    newUser.style.cursor = "pointer";
    newUser.style.boxShadow = "0px 5px darkblue"
    newUser.style.boxShadowColor = "black";
    
    createUser.style.padding = "12px 36px";
    createUser.style.color = "#fff";
    createUser.style.textDecoration = "none";
    createUser.style.textTransform = "uppercase";
    createUser.style.fontSize = "18px";
    createUser.style.letterSpacing = "2px";
    createUser.style.borderRadius = "40px";
    createUser.style.background = "linear-gradient(90deg, #0162c8, #55e7fc)";
    createUser.style.border = "none";
    createUser.style.cursor = "pointer";
    createUser.style.boxShadow = "0px 5px darkblue"
    createUser.style.boxShadowColor = "black";
    
}