
var menuIcon = document.getElementById("menu_icon");
var dropDown = document.getElementById("dropdown");
var body = document.getElementById("body")
var navbar = document.getElementById("navbar")
var line1 = document.getElementById("line1")
var line2 = document.getElementById("line2")
var line3 = document.getElementById("line3")


var open = false;
menuIcon.addEventListener("click", function(){

    if(open == false){
        dropDown.style.display = "block"
        // dropDown.style.transition = "all 4s ease-in"
        body.style.opacity = "0.85"
        navbar.style.backgroundColor = "#fff"
        line1.style.transform = "translateY(2px) rotate(-45deg)"
        line2.style.display = "none"
        line3.style.transform = "translateY(-5px) rotate(45deg)"
        open = true
    }else{
        dropDown.style.display = "none"
        body.style.opacity = "1"
        navbar.style.backgroundColor = "#fef9e6"
        line1.style.transform = "translateY(0px) rotate(0deg)"
        line2.style.display = "block"
        line3.style.transform = "translateY(0px) rotate(0deg)"
        open = false
        
    }


})





