var slideIndex = 1;

function showSlider() {
    var slides = document.getElementsByClassName("slides");
    
    if (slideIndex > slides.length) 
        slideIndex = 1;
    if (slideIndex < 1)
        slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}

showSlider();

setInterval(addSlide, 3000, 1);
function addSlide(index) {
    slideIndex += index;
    showSlider();
};
