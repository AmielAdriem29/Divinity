const countdown_date = new Date("May 14, 2024 00:00:00").getTime();

const countdown_days = document.getElementById("days");
const countdown_hours = document.getElementById("hours");
const countdown_minutes = document.getElementById("minutes");
const countdown_seconds = document.getElementById("seconds");

let x = setInterval(() => {
    let date_today = new Date().getTime();

    let days_left = countdown_date - date_today;

    let days = Math.floor(days_left / (1000 * 60 * 60 * 24));
    let hours = Math.floor((days_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((days_left % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((days_left % (1000 * 60)) / 1000);

    countdown_days.innerHTML = days < 10 ? "0" + days : days;
    countdown_hours.innerHTML = hours < 10 ? "0" + hours : hours;
    countdown_minutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    countdown_seconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (days_left < 0) {
        clearInterval(x);
        countdown_days.innerHTML = "00";
        countdown_hours.innerHTML = "00";
        countdown_minutes.innerHTML = "00";
        countdown_seconds.innerHTML = "00";
    }
}, 1000);

// ~~~~ POINTER SECTION ~~~~


// ~~~~ PRODUCT GALLERY SECTION ~~~~~

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider());

// function initializeSlider(){

//     if (slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide");
//      intervalId = setInterval(nextSlide, 7000);
//     }

// }
// function showSlide(index ){

//     if (index >= slides.length){
//             slideIndex = 0;
//     }
//     else if (index < 0){
//             slideIndex = slides.length - 1;
//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     })
//     slides[slideIndex].classList.add("displaySlide");
// }
// function prevSlide(){
//     slideIndex--;
//     showSlide(slideIndex);
// }
// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }