const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); 
        } else {
            entry.target.classList.remove("show"); 
        }
    });
}, { threshold: 0.7 }); 

document.querySelectorAll(".box").forEach((box) => {
    observer.observe(box);
});




let slideIndex = 0;
let slideInterval;

// Function to show slides
function showSlides() {
    let slides = document.querySelectorAll(".slide");

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Move to the next slide
    slideIndex++;

    // If it's the last slide, go back to the first
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Restart automatic slideshow
    slideInterval = setTimeout(showSlides, 3000);
}

// Function to manually change slides
function changeSlide(n) {
    clearTimeout(slideInterval);  // Stop auto slideshow
    slideIndex += n - 1;  // Adjust slide index
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll(".slide").length - 1;
    }
    showSlides(); // Show new slide
}

// Start slideshow on page load
showSlides();


let selectedSeats = [];
const ticketPrice = 10;

function selectSeat(seat) {
    seat.classList.toggle('selected');
    const seatNumber = seat.innerText;

    if (selectedSeats.includes(seatNumber)) {
        selectedSeats = selectedSeats.filter(s => s !== seatNumber);
    } else {
        selectedSeats.push(seatNumber);
    }

    document.getElementById('total-price').innerText = `$${selectedSeats.length * ticketPrice}`;
}

document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});




const moreInfoButtons = document.querySelectorAll('.more-info');
const bookNowButtons = document.querySelectorAll('.book-now');

moreInfoButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('More information coming soon!');
  });
});

bookNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Booking your ticket!');
  });
});




function showConfirmation(event) {
    event.preventDefault();
    alert("Thank you for your submission! We will get in touch with you soon.");
    document.getElementById("advertising-form").reset();
}

document.addEventListener("DOMContentLoaded", function() {
    const detailsElements = document.querySelectorAll("details");
    detailsElements.forEach(detail => {
        detail.addEventListener("click", function() {
            detailsElements.forEach(otherDetail => {
                if (otherDetail !== detail) {
                    otherDetail.removeAttribute("open");
                }
            });
        });
    });
});


// navbar
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
  }