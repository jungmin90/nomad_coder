// const title = document.getElementById("title");
const title = document.querySelector("#title")

const CLICKCED_CLASS = "clicked";


function handleClick() {
    // const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKCED_CLASS);
    title.classList.toggle(CLICKCED_CLASS);

}

// function handleClick() {
//     // const currentClass = title.className;
//     const hasClass = title.classList.contains(CLICKCED_CLASS);
//     if (!hasClass) {
//         title.classList.add(CLICKCED_CLASS);
//         // title.className = CLICKCED_CLASS;
//     } else {
//         title.classList.remove(CLICKCED_CLASS);
//         // title.className = ""
//     }
//     console.log(hasClass)
// }


function init() {
    title.addEventListener("click", handleClick);
}
init();