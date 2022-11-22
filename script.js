let inputUs = document.getElementById("inputUsername")
let password = document.getElementById("inputPassword")
let login = document.getElementById("inputSave")

// skapa inloggare

let users = [
    {userName: "janne", password: "test"},
    {user: "tony", password: "montana"}
]


// logga in användare 
login.addEventListener("click", ()=> {
    console.log("Click on button")
let user = users.find(user => user.userName === inputUs.value)
console.log(inputUs.value)
let pass = users.find(user => user.password === password.value)
console.log(password.value)
validate()
noLogin()

    // for (i = 0; i < user.length; i++) {
    //     if (user[i].password === inputPas.value && user[i].userName === inputUs.value){
    //         console.log("hej")
    //     }
    // }

})

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

// visa ny diplay på skärmen