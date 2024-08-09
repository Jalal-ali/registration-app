// import { getAuth,  } from "firebase/auth";
import { signOut , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";
const btn = document.querySelector("#btn");

// btn.innerHTML = yuu ;
btn.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
      window.location = "index.html";
    }).catch((error) => {
      // An error happened.
      alert("err");
    });

})


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    window.location = "index.html" ;
    // ...
  }
});