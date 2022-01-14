
//changing the navbar background on scroll and scroll to top icon
const navbar = document.getElementById('nav');
const scrollTop = document.getElementById('scroll')
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('colored-bakground');
        scrollTop.classList.add('active-scroll')
    } else {
        navbar.classList.remove('colored-bakground');
        scrollTop.classList.remove('active-scroll')
    }
}

//init testmonial slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
    grabCursor:true,
    breakpoints: {
        640: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 2,
        spaceBetween: 50,
        },
    },
});

//init team slider

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
    grabCursor:true,
    breakpoints: {
        524: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
        992: {
        slidesPerView: 4,
        spaceBetween: 50,
        },
    },
});


//init partner slider

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
    grabCursor:true,
    breakpoints: {
        300: {
        slidesPerView: 3,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 6,
        spaceBetween: 40,
        },
        992: {
        slidesPerView: 6,
        spaceBetween: 50,
        },
    },
});


//init services slider


var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay:true,
    grabCursor:true,
    breakpoints: {
        300: {
        slidesPerView: 1,
        spaceBetween: 50,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 50,
        },
        992: {
        slidesPerView: 1,
        spaceBetween: 50,
        },
    },
});


//active selector button

const selectorBtn = document.querySelector('.selector').children;

for(let i = 0; i < selectorBtn.length; i++){
    selectorBtn[i].addEventListener('click', function(){
        for(let j = 0; j< selectorBtn.length; j++){
            selectorBtn[j].classList.remove('current');
        }
        this.classList.add('current');
    });
}

