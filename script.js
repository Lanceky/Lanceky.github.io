window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const maxScrollPosition = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const backgroundColorRange = ['#f2fcfe', '#a9fff1', '#7ff3e9', '#4de9e2', '#00d6cc'];
    const numColors = backgroundColorRange.length;

    const colorIndex = Math.floor((scrollPosition / maxScrollPosition) * (numColors - 1));
    const backgroundColor = backgroundColorRange[colorIndex];

    document.body.style.backgroundColor = backgroundColor;
});




///iamge slider
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
}

showSlides();
setInterval(showSlides, 5000); // Change image every 5 seconds

document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Show the loader
    document.querySelector(".loader").style.display = "block";

    // Simulate loading time (remove setTimeout if unnecessary)
    setTimeout(function() {
        // Hide the loader after some time (simulating loading)
        document.querySelector(".loader").style.display = "none";
        
        // Navigate to the href link
        window.location.href = event.target.href;
    }, 2000); // Adjust the delay time as needed (2000 milliseconds = 2 seconds)
});
