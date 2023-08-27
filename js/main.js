
// let logout = document.querySelector('.logoutBtn');
// logoutBtn=document.getElementById('logoutBtn')


// function log(){
//     window.location.href="main.html";
//     var btn=document.getElementById("btn");
//     btn.onclick=function(){
//         alert("you are logged out");
//     }
// }
// const logoutBtn=document.getElementById("logoutBtn");
// logoutBtn.addEventListener("click",function(){

// });
// function books(){
//     var books
// }




// IF ITS AN OFFICIAL WORK THEN IT IS NOT IMPORTANT BUT IF YOU ARE JUST TESTING THING OUT YOUR SELF THEN SURE.



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centerSlide: true,
    slidesPerView: 4,
    fade: true,
    loopFillGroupWithBlank: true,
    gragCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 7,
      },
      550: {
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1114: {
        slidesPerView: 4,
      }
    },
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
  