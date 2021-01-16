const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1")

function getTime() {
    const dday = new Date(2021, 11, 16);
    const today = new Date();

    const gab = dday.getTime() - today.getTime()


    const day = Math.ceil(gab / (1000 * 60 * 60 * 24));
    const hours = Math.ceil((gab % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.ceil((gab % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.ceil((gab % (1000 * 60)) / (1000 * 60));
    const seconds = Math.ceil((gab / 1000) % 60);


    console.log(dday)
    console.log(today)
    // const date = new Date();
    // const minutes = date.getMinutes();
    // const hours = date.getHours();
    // const seconds = date.getSeconds();
    clockTitle.innerText = ` ${day}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init()

