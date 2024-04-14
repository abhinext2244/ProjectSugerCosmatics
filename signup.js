let form=document.querySelector("#form")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
form.addEventListener("submit",function(e){
    e.preventDefault()
    const userDetails={
        "email":email.value,
        "password":password.value
    }
    localStorage.setItem("userDetails",JSON.stringify(userDetails))
})