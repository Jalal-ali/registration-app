import { GoogleAuthProvider , signInWithRedirect , 
  signInWithPopup,  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js"
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
 btn.addEventListener('clicK' , ()=>{
  btn.innerHTML = "Loading" ;

 })
 const google = document.querySelector("ggl-btn");
const provider = new GoogleAuthProvider();

form.addEventListener( 'submit' ,  (event)=>{
    event.preventDefault();
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      btn.innerHTML = "SUCCESS" ;
      const user = userCredential.user;
      console.log(email.value + ' ' + password.value);
      window.location = "index.html" ;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

//register with google
google.addEventListener('click' , ()=>{
  signInWithRedirect(auth, provider);
  // signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
})


