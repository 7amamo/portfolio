let switchcolor = document.querySelector(".switch-color");
let styleswitcher = document.querySelector(".style-switcher")

switchcolor.addEventListener("click", function () {
    styleswitcher.classList.toggle("open")
})

window.addEventListener("scroll", function () {
    if (styleswitcher.classList.contains("open")) {
        styleswitcher.classList.remove("open");
    }
})


let alternate = document.querySelectorAll(".alternate-style")
function setActiveStyle(color) {
    alternate.forEach((style) => {

        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        } else {
            style.setAttribute("disabled", true)
        }
    }
    )
}


let darknight = document.querySelector(".dark-night")
darknight.addEventListener("click", function () {

    darknight.querySelector("i").classList.toggle("fa-sun")
    darknight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")

})

window.addEventListener("load", function () {
    if (document.body.classList.contains("dark")) {
        darknight.querySelector("i").classList.add("fa-sun")
    } else {
        darknight.querySelector("i").classList.add("fa-moon")
    }
})





let aside = document.querySelectorAll(".main-container .aside ul.nav li a");
let arrayofli = Array.from(aside);
let allsection = document.querySelectorAll(".section")

arrayofli.forEach(function (a) {
    a.addEventListener("click", function () {
        arrayofli.forEach(function (e) {
            e.classList.remove("active")
        })
        this.classList.add("active")
        showsection(this)
    })
})


function showsection(element) {
    
    allsection.forEach(function(sec){
        sec.classList.remove("active")
    })

    let target = element.getAttribute("href").split("#")[1]
    console.log(target)
    document.querySelector("#"+ target).classList.add("active")
}

let navtoggler = document.querySelector(".nav-toggler")
let mainaside =  document.querySelector(".aside")
navtoggler.addEventListener("click",function(){
    mainaside.classList.toggle("open")
    navtoggler.classList.toggle("open")
})



