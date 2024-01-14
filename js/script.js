// Navication_Bar Effect
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle('sticky', this.window.scrollY > 0);
});




// Navbar Active
const li=document.querySelectorAll(".links");
const sec=document.querySelectorAll("section");

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active")
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);



// Responsive Menu
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});
closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});





// Progress Bar
const skillSection = document.getElementById('skill_section');
const progressBars = document.querySelectorAll('.progress_bar');

function showProgress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity =1;
        progressBar.style.width = `${value}%`;
    });
}
function hideProgress(){
    progressBars.forEach(p =>{
        p.style.opacity = 0;
        p.style.width = 0;
    });
}
window.addEventListener('scroll', () =>{
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if(sectionPos < screenPos){
        showProgress();
    }
    else{
        hideProgress();
    }
});




// Isotope
let $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
    //Defult ==> //   columnWidth: '.grid-sizer'
      columnWidth: 1
    }
  })
  // filter items on button click
  $('.portfolio_menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });




//   for portfolio menu active class
$('.portfolio_menu button').on('click',function(event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
});


// SwiperJs for Testimonial Scrool
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// BOTTOM CORNER ARROW
const gotopbtn = document.querySelector(".gotopbtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        gotopbtn.classList.add("active");
    } else{
        gotopbtn.classList.remove("active");
    }
});



/**
 * Custom cursor
 */

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});



