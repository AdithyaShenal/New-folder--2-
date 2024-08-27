document.addEventListener("DOMContentLoaded", function () {
    function handleScroll() {
        const scrollY = window.scrollY;
        const translateYValue = scrollY * 0.4; // Adjust the multiplier as needed

        document.querySelector('.col2').style.transform = `translateY(${translateYValue}px)`;
    }

    window.addEventListener("scroll", handleScroll);
});

