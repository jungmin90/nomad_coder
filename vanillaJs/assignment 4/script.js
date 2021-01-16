// const title = document.getElementById("title");
const title = document.querySelector("#title")
const body1 = document.querySelector("#body1")
const CLICKCED_CLASS = "clicked";
const RCLICKCED_CLASS = "rclicked"
const MOUSEON_CLASS = "mouse_on"
const MOUSE_ON_WORD = "mouse on the box"


function handleClick() {
    // const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKCED_CLASS);
    title.classList.toggle(CLICKCED_CLASS);

}

function handleRclick() {
    title.innerHTML = "That was a right click"
    title.style.color = "#e67e22"
    console.log("click rihgt")
}

// window resized
function resize_title() {
    title.innerHTML = "You just resize"
    title.style.color = "#9b59b6"
    console.log("resize!!!")
    body1.style.color = red;
}



function hadleOn() {

    title.innerHTML = "The mouse is here"
    console.log("the mouse is here")
    title.style.color = "#2ecc71"

}

function hadleOFF() {
    console.log(title.innerHTML)

    title.innerHTML = "The mouse is gone"
    title.style.color = "blue"
    // console.log("MOUSE off!!!")

}


function init() {
    body1.addEventListener("contextmenu", handleRclick)
    title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", hadleOn)
    title.addEventListener("mouseleave", hadleOFF)
    window.addEventListener("resize", resize_title)


}
init();




