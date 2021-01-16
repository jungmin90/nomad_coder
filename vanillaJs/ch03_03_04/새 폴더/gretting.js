const form = document.querySelector("js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
function askForName() {
    form.classList.add(SHOWING_CN);

}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        console.log("if")
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init()