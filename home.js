import { signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";
const btn = document.querySelector("#btn");

// btn.innerHTML = yuu ;
btn.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
      window.location = "./login.html";
    }).catch((error) => {
      // An error happened.
      alert("err");
    });

})