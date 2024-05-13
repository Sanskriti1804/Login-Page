const container = document.getElementById('container');         /* retrives HTML element id "container" and store in var "container// holds the entire sign-in and sign-up form*/
const registerBtn = document.getElementById('register');         /* retrives HTML element id "register" and store in var "registerBtn"*/
const loginBtn = document.getElementById('login');                 /* retrives HTML element id "login" and store in var "loginBtn"*/

registerBtn.addEventListener('click', () => {       /*click->*/
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});