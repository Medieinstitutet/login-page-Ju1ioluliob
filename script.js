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


// logga in användare 
login.addEventListener("click", ()=> {
    console.log("Click on button")
// let user = users.find(() => ({userName: inputUs.value}))
// console.log(inputUs.value)
// let pass = users.find(user => ({password: password.value}))
//   let username = inputUs.value;
//         let pass = password.value;
for (i = 0; i < users.length; i++) {
if (inputUs.value == users[i].username && password.value == users[i].password /*|| username === "tony" && pass === "montana" */) {
            console.log("You have succesfully logged in " + inputUs.value)
            noLogin()
    LogoutButton()
// console.log(password.value)
return
}
            }    

            show.innerText= "The user does not exist"
 console.log("not a valid account")
        }
// validate() === true
    


    // for (i = 0; i < user.length; i++) {
    //     if (user[i].password === inputPas.value && user[i].userName === inputUs.value){
    //         console.log("hej")
    //     }
    // }

)

// kollar igenom om det är rätt inloggning
    function validate() {
        let username = inputUs.value;
        let pass = password.value;
        if (username === "janne" && pass === "test" || username === "tony" && pass === "montana") {
            console.log("You have succesfully logged in")
            // const head = document.getElementById("head")
            // head.style.display = "none"

    } else {
        alert("login failed, please try again....")
    }
}

// tar bort section i header alltså login funktion

function noLogin(){
    validate = true;
    const head = document.getElementById("head")
    head.style.display = "none"

}

function LogoutButton(){

//  skapa och skriv ut en logga ut knapp
let logoutBtn = document.createElement("button")
logoutBtn.innerText = "Logout"
logoutBtn,addEventListener("click", () => {
    console.log("knapp igenom")
})
logout.appendChild(logoutBtn)

}


// visa ny diplay på skärmen