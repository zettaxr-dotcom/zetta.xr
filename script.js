// PROMO AUTO SLIDE

const promoSlider =
document.querySelector('.promo-slider');

let promoScroll = 0;

function autoPromoSlide(){

    if(!promoSlider) return;

    const cardWidth =
    promoSlider.querySelector('.promo-card')
    ?.offsetWidth || 324;

    promoScroll += cardWidth + 14;

    if(
        promoScroll >=
        promoSlider.scrollWidth -
        promoSlider.clientWidth
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

const contentSlider =
document.querySelector('.content-slider');

let contentScroll = 0;

function autoContentSlide(){

    if(!contentSlider) return;

    const cardWidth =
    contentSlider.querySelector('.content-card')
    ?.offsetWidth || 324;

    contentScroll += cardWidth + 14;

    if(
        contentScroll >=
        contentSlider.scrollWidth -
        contentSlider.clientWidth
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

const sections =
document.querySelectorAll('.section-box');

function revealSection(){

    sections.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 80){

            section.style.opacity = "1";
            section.style.transform =
            "translateY(0px)";

        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform =
    "translateY(40px)";
    section.style.transition =
    "0.7s ease";

});

window.addEventListener(
'scroll',
revealSection
);

revealSection();

// CATEGORY BUTTON ACTIVE + AUTO SCROLL

const categoryButtons =
document.querySelectorAll(
'.category-buttons button'
);

const minecraftSection =
document.querySelector(
'.minecraft-grid'
);

categoryButtons.forEach(button => {

    button.addEventListener('click',() => {

        categoryButtons.forEach(btn => {

            btn.classList.remove('active');

        });

        button.classList.add('active');

        if(minecraftSection){

            minecraftSection.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });

        }

    });

});

// BUTTON CLICK EFFECT

const buttons =
document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click',() => {

        button.style.transform =
        "scale(0.95)";

        setTimeout(() => {

            if(
                button.classList.contains(
                'active'
                )
            ){

                button.style.transform =
                "scale(1)";

            }else{

                button.style.transform =
                "scale(1)";

            }

        },120);

    });

});

// SOCIAL EFFECT MOBILE + DESKTOP

const socialBox =
document.querySelectorAll(
'.social-media a'
);

socialBox.forEach(item => {

    item.addEventListener(
    'mouseenter',
    () => {

        item.style.transform =
        "translateY(-6px) scale(1.05)";

    });

    item.addEventListener(
    'mouseleave',
    () => {

        item.style.transform =
        "translateY(0px) scale(1)";

    });

    item.addEventListener(
    'touchstart',
    () => {

        item.style.transform =
        "scale(0.92)";

    });

    item.addEventListener(
    'touchend',
    () => {

        item.style.transform =
        "scale(1)";

    });

});

// VIDEO PARALLAX

const bgVideo =
document.querySelector('.bg-video');

if(bgVideo){

    window.addEventListener('scroll',() => {

        const scrollY =
        window.scrollY;

        bgVideo.style.transform =
        `translateY(${scrollY * 0.15}px)`;

    });

}