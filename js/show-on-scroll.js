const fade = document.querySelectorAll('.fade');
const line = document.querySelector('.fist-line');

function run(){
    const tl = setTimeout(function(){
        line.style.opacity = 0;
        line.style.zIndex = -999
    },15000)
    
    console.log(line)

}

run();


// IntersectionObserver
let option ={
    threshold:1,
    rootMargin: "0px 0px -25px 0px"
}
const observe = new IntersectionObserver(function(entries,observer){
    {
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.toggle('fatein');
                observer.unobserve(entry.target)
            }
        })
    }
},option)
fade.forEach(fade =>{
    observe.observe(fade)
})
// IntersectionObserver



// const scroll = window.requestAnimationFrame;
// const fistLine = document.querySelectorAll('.show-on-scroll');

// function loop(){
//     document.querySelectorAll('.show-on-scroll').forEach(function(element){
//         if (isElementInViewport(element)){
//             element.classList.add('is-visible');

//         } else{
//             element.classList.remove('is-visible')
//         }
//     });
//     scroll(loop);
// }

// loop();


// function isElementInViewport(el) {
//     if (typeof jQuery === "function" && el instanceof jQuery) {
//       el = el[0];
//     }
//     var rect = el.getBoundingClientRect();
//     return (
//       (rect.top <= 0
//         && rect.bottom >= 0)
//       ||
//       (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//       ||
//       (rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//     );
//   };

//   const fadeOut = document.querySelectorAll('.fade-out');

//   // window.scroll(function(){
//     fadeOut.forEach(i=>{
//         // const bottom_of_oj = this.offset().top + this.outHeigth();
//         // const bottom_of_win = this.scrollTop() + window.height();

//         // console.log(bottom_of_oj);
//         console.log(i);
//     });