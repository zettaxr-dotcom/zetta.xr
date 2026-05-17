// PROMO AUTO SLIDE

const promoSlider = document.querySelector('.promo-slider');

let promoScroll = 0;

function autoPromoSlide(){

    if(!promoSlider) return;

    promoScroll += 334;

    if(
        promoScroll >=
        promoSlider.scrollWidth - promoSlider.clientWidth
    ){
        promoScroll = 0;
    }

    promoSlider.scrollTo({
        left:promoScroll,
        behavior:'smooth'
    });

}

setInterval(autoPromoSlide,3000);

// CONTENT AUTO SLIDE

const contentSlider = document.querySelector('.content-slider');

let contentScroll = 0;

function autoContentSlide(){

    if(!contentSlider) return;

    contentScroll += 334;

    if(
        contentScroll >=
        contentSlider.scrollWidth - contentSlider.clientWidth
    ){
        contentScroll = 0;
    }

    contentSlider.scrollTo({
        left:contentScroll,
        behavior:'smooth'
    });

}

setInterval(autoContentSlide,3500);

// SCROLL ANIMATION

const sections = document.querySelectorAll('.section-box');

function revealSection(){

    sections.forEach(section => {

        const windowHeight = window.innerHeight;

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 80){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.7s";

});

window.addEventListener('scroll',revealSection);

revealSection();

// SOCIAL HOVER EFFECT

const socialBox = document.querySelectorAll('.social-media a');

socialBox.forEach(item => {

    item.addEventListener('mouseenter',() => {

        item.style.transform = "translateY(-6px) scale(1.05)";

    });

    item.addEventListener('mouseleave',() => {

        item.style.transform = "translateY(0px) scale(1)";

    });

});

// CLICK EFFECT

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click',() => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        },120);

    });

});

// PARALLAX VIDEO EFFECT

window.addEventListener('scroll',() => {

    const scrollY = window.scrollY;

    const bgVideo = document.querySelector('.bg-video');

    bgVideo.style.transform =
    `translateY(${scrollY * 0.15}px)`;

});