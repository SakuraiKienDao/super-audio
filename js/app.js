const mySong = document.getElementById("mysong");
const icon = document.getElementById("icon");

icon.onclick = function(){
 if(mySong.paused){
     mySong.play();
     icon.src= "./media/pause.png";
     console.log("1")
 }else{
    mySong.pause();
     console.log("2")
     icon.src= "./media/play.png";
 }
}





// gsap.registerPlugin(ScrollTrigger);


// gsap.to(".box",{
//     ScrollTrigger:{
//         trigger: ".box",
//         start:"top center",
//         markers:"true",
//         toggleActions: "restart pause reverse pause"
//     },

//     x: 400,
//     rotation:360,
//     duration:10
// });

particlesJS.load('particles-js', './js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
