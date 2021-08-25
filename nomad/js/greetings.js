const loginForm = document.querySelector('#login-form');
const logininput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY ='username'

function onLoginSubmit(event) {
    event.preventDefault(); //event의 기본 행동이 발생되지 않게 막음
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = logininput.value; 
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username)  
}

function paintGreeting(username){
    greeting.innerText=`hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(!savedUsername){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    paintGreeting(savedUsername)
}


