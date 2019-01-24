function doStuff(event){
    let klick = document.querySelector(".sidebar")
    let skit = document.querySelector(".sidebar-fade")
    let header = document.querySelector(".wrapper")
    klick.classList.toggle("activate")
    skit.classList.toggle("sidebar-fade-activate")
    header.classList.toggle("wrapper-activate")
    
    let icon = document.querySelector("#menubutton")
    if(icon.innerHTML == "close"){
        icon.innerHTML = "menu"
    }else{
        icon.innerHTML = "close"
    }
}
countdown()

function countdown(){
    var countDownDate = new Date("Dec 24, 2019 15:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerHTML = days + "\ndays";
        if (distance = 0) {
            clearInterval(x);
        }
        document.getElementById("hours").innerHTML = hours + "\nhours";
        if (distance = 0) {
            clearInterval(x);
        }
        document.getElementById("minutes").innerHTML = minutes + "\nminutes";
        if (distance = 0) {
            clearInterval(x);
        }
        document.getElementById("seconds").innerHTML = seconds + "\nseconds";
        if (distance = 0) {
            clearInterval(x);
        }
    }, 1000);
}