let menuBtn = document.getElementById("menuBtn")
let sideBar = document.getElementById("sideBar")
let videoscontainer = document.getElementById("videoContainer")

menuBtn.addEventListener('click',()=>{
    //alert('f');
    sideBar.classList.toggle("resize-sidebar")
    videoscontainer.classList.toggle("wider-container")
})

