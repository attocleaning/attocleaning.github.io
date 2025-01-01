document.addEventListener('scroll', function() {
    const backgroundImage = document.querySelector('.background-image');
    const scrollY = window.scrollY;
    const maxY = document.body.scrollHeight - window.innerHeight;
    const percentage = scrollY / maxY;

    // Adjust the background position to create a parallax effect
    backgroundImage.style.transform = `translate(-50%, calc(-50% + ${percentage * 20 - 10}px))`;
});
