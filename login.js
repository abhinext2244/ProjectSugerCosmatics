let form=document.querySelector("#form")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
form.addEventListener("submit",function(e){
    e.preventDefault()
   let loginDetails={
    email:email.value,
    password:password.value,
   }
   let saveuser=JSON.parse(localStorage.getItem('userDetails'))||{};
   console.log(saveuser)
   if(loginDetails.email===saveuser.email && loginDetails.password===saveuser.password){
       alert("Login Successfully")
       localStorage.setItem("isAuth","Authenticated")
    }else{
        alert("wrong user")
    }
})