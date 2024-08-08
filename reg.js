import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js"
const email = document.querySelector("#email");
const password = document.querySelector("#password");
// const btn = document.querySelector("#btn");
const form = document.querySelector("#form");



form.addEventListener( 'submit' , (event)=>{
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("successfully registered !!");
      window.location("./login.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})


