var nav = document.getElementById("nav");
var navToggleSwitch = document.getElementById("nav-toggle-switch");

function navSwitchToggle() {
    if (navToggleSwitch.className === "normal") {
        navToggleSwitch.className = "active";
        
    } else {
        navToggleSwitch.className = "normal";
    }
}

function navToggle() {
    if (nav.className === "hidden") {
        nav.className = "visible";
    } else {
        nav.className = "hidden";
    }
}

window.addEventListener("mouseup", function (event) {
    if (event.target !== nav && event.target.parentNode !== nav && event.target.parentNode.parentNode !== nav && event.target.parentNode.parentNode.parentNode !== nav && event.target.parentNode.parentNode.parentNode.parentNode !== nav && event.target !== navToggleSwitch && event.target.parentNode !== navToggleSwitch) {
        nav.className = "hidden";
        navToggleSwitch.className = "normal";
    }
});





            