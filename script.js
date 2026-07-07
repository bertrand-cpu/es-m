// ============================
// Sticky Navigation
// ============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#002855";

    } else {

        header.style.background = "rgba(0,0,0,.25)";

    }

});


// ============================
// Counter Animation
// ============================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 120;

        const update = () => {

            count += speed;

            if(count < target){

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        }

        update();

    });

};

const statSection = document.querySelector(".stats");

let started = false;

window.addEventListener("scroll", () => {

    if(!started && window.scrollY + window.innerHeight > statSection.offsetTop){

        started = true;

        startCounters();

    }

});


// ============================
// Scroll Reveal
// ============================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", ()=>{

    reveals.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            element.classList.add("active");

        }

    });

});