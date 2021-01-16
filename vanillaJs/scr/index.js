const h2 = document.querySelector("h2");
const body = document.querySelector("body")
const colors = ["#ecf0f1", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// const body = document.querySelector("body")
h2.style.color = colors[0];
const superEventHandler = {

    handleResize: function () {

        h2.style.color = colors[0];

        console.log(document.body.clientWidth)

        if (document.body.clientWidth < 500) {
            body.style.backgroundColor = colors[1];
        } else if (document.body.clientWidth < 700) {
            body.style.backgroundColor = colors[2];
        } else if (document.body.clientWidth < 800) {
            body.style.backgroundColor = colors[3];
        } else {
            body.style.backgroundColor = colors[4];
        }



    },

};

h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);
