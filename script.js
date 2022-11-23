let inputUs = document.getElementById("inputUsername")
let password = document.getElementById("inputPassword")
let login = document.getElementById("inputSave")
let show = document.getElementById("showText")

// skapa inloggare

const users = [
    {
        "username": "janne", 
    "password": "test"
    },
    {
        "username": "tony", 
    "password": "montana"
     }
]
  

function log() {
for (i = 0; i < users.length; i++) {
    if (inputUs.value == users[i].username && password.value == users[i].password /*|| username === "tony" && pass === "montana" */) {
                console.log("You have succesfully logged in " + inputUs.value)
                noLogin()
        LogoutButton()
    // console.log(password.value)
    return
    }
                }    
                const head = document.getElementById("head")
                showText=document.createElement("h2")
                showText.innerText= "The user does not exist"
     console.log("not a valid account")
            head.appendChild(showText)
            }
            

// logga in användare 
login.addEventListener("click", ()=> {
    console.log("Click on button")
    log()
})



// tar bort section i header alltså login funktion

function noLogin(){
    
    const head = document.getElementById("head")
    head.style.display = "none"

}


    let logoutBtn = document.createElement("button")


//  skapa och skriv ut en logga ut knapp
function LogoutButton(){
logoutBtn.innerText = "Logout"

// flttar kanppen till höger

logoutBtn.style.position= "fixed"
    logoutBtn.style.left= "93%"
    logoutBtn.style.top= "30px"

// visa den som är inloggad
let loggedUser = document.createElement("h2")
loggedUser.innerText= "Inlogged as: " + inputUs.value;

// brevid logoutknapp

loggedUser.style.position= "fixed"
loggedUser.style.left= "78%"
loggedUser.style.top= "9px"
loggedUser.style.color= "grey"



logout.appendChild(logoutBtn)
logout.appendChild(loggedUser)
}
    // lägger till funkiton logga ut 
 logoutBtn.addEventListener("click", () => {
        console.log("knapp igenom")
        const head = document.getElementById("head")
        head.style.display = "block"
        console.log("funkion funka inte")
        let removeLogout = document.getElementById("logout") 
        removeLogout.style.display= "none"
 })
// visa ny diplay på skärmen