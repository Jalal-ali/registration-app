import { signOut , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";
const btn = document.querySelector("#btn");
const show = document.querySelector("#show");

// show.addEventListener('click' , ()=>{
//   alert(user.email);
// })

btn.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
      window.location = "index.html";
    }).catch((error) => {
      alert("err");
    });

})


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {
    window.location = "index.html" ;
  }
});