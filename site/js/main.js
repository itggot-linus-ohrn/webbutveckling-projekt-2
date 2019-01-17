function doStuff(event){
    let klick = document.querySelector(".sidebar")
    let skit = document.querySelector(".sidebar-fade")
    let header = document.querySelector(".wrapper")
    klick.classList.toggle("activate")
    skit.classList.toggle("sidebar-fade-activate")
    header.classList.toggle("wrapper-activate")
}
