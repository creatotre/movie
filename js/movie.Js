// Initialize Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        540: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

// Show Video
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closebtn = document.querySelector('.close-video');

playButton.onclick = () => {
    video.classList.add("show-video");
    // Auto play when clicking the button
    myvideo.play();
};

// Function to handle the click event for the "watch" buttons
function handleWatchButtonClick() {
    // Add an event listener to all elements with class "watch-btn" and "play-btn"
    const watchButtons = document.querySelectorAll('.watch-btn.play-btn');

    // Iterate through all the watch buttons and add a click event listener
    watchButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            video.classList.add("show-video");
            // Auto play when clicking the button
            myvideo.play();
        });
    });
}

// Call the function to handle the click event
document.addEventListener("DOMContentLoaded", function () {
    handleWatchButtonClick();
});

closebtn.onclick = () => {
    video.classList.remove("show-video");
    // Pause the video when closing
    myvideo.pause();
};
