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

    // for (i = 0; i < user.length; i++) {
    //     if (user[i].password === inputPas.value && user[i].userName === inputUs.value){
    //         console.log("hej")
    //     }
    // }

})
    function validate() {
        let username = inputUs.value;
        let pass = password.value;
        if (username === "janne" && pass === "test" || username === "tony" && pass === "montana") {
            console.log("bra")

    } else {
        alert("login failed")
    }
}


// visa ny diplay på skärmen