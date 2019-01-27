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

function countdown(event){
    var countDownDate = new Date("Dec 24, 2019 15:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerHTML = days + "\ndagar";
        if (distance = 0) {
            clearInterval(x);
        }
        document.getElementById("hours").innerHTML = hours + "\ntimmar";
        if (distance = 0) {
            clearInterval(x);
        }
        document.getElementById("minutes").innerHTML = minutes + "\nminuter";
        if (distance = 0) {
            clearInterval(x);
        }
        document.getElementById("seconds").innerHTML = seconds + "\nsekunder";
        if (distance = 0) {
            clearInterval(x);
        }
    }, 1000);
}

// traditioner

function klapp(event){
    let klapptext = document.querySelector(".klapptext")
    let klapp = document.querySelector(".klapp")

    klapp.classList.toggle("klapp-activate")
    klapptext.classList.toggle("klapptext-activate")

}

function lucia(event){
    let luciatext = document.querySelector(".luciatext")
    let lucia = document.querySelector(".lucia")

    luciatext.classList.toggle("luciatext-activate")
    lucia.classList.toggle("lucia-activate")
}

function gran(event){
    let gran = document.querySelector(".gran")
    let grantext = document.querySelector(".grantext")
    
    grantext.classList.toggle("grantext-activate")
    gran.classList.toggle("gran-activate")
}

function glogg(event){
    let glogg = document.querySelector(".glogg")
    let gloggtext = document.querySelector(".gloggtext")
    
    gloggtext.classList.toggle("gloggtext-activate")
    glogg.classList.toggle("glogg-activate")
}

function tomten(event){
    let tomten = document.querySelector(".tomten")
    let tomtentext = document.querySelector(".tomtentext")
    
    tomtentext.classList.toggle("tomtentext-activate")
    tomten.classList.toggle("tomten-activate")
}


// mat
function kott(event){
    let kotttext = document.querySelector(".kotttext")
    let kott = document.querySelector(".kott")

    kott.classList.toggle("kott-activate")
    kotttext.classList.toggle("kotttext-activate")

}

function korv(event){
    let korvtext = document.querySelector(".korvtext")
    let korv = document.querySelector(".korv")

    korvtext.classList.toggle("korvtext-activate")
    korv.classList.toggle("korv-activate")
}

function skinka(event){
    let skinka = document.querySelector(".skinka")
    let skinkatext = document.querySelector(".skinkatext")
    
    skinkatext.classList.toggle("skinkatext-activate")
    skinka.classList.toggle("skinka-activate")
}

function sill(event){
    let sill = document.querySelector(".sill")
    let silltext = document.querySelector(".silltext")
    
    silltext.classList.toggle("silltext-activate")
    sill.classList.toggle("sill-activate")
}

function jansons(event){
    let jansons = document.querySelector(".jansons")
    let jansonstext = document.querySelector(".jansonstext")
    
    jansonstext.classList.toggle("jansonstext-activate")
    jansons.classList.toggle("jansons-activate")
}

function lax(event){
    let lax = document.querySelector(".lax")
    let laxtext = document.querySelector(".laxtext")
    
    laxtext.classList.toggle("laxtext-activate")
    lax.classList.toggle("lax-activate")
}

function grot(event){
    let grot = document.querySelector(".grot")
    let grottext = document.querySelector(".grottext")
    
    grottext.classList.toggle("grottext-activate")
    grot.classList.toggle("grot-activate")
}