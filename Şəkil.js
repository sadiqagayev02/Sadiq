const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        // Update main image
        mainImage.src = thumbnail.src;

        // Add active class to the clicked thumbnail
        document.querySelector(".thumbnail.active").classList.remove("active");
        thumbnail.classList.add("active");

        // Add zoom animation to main image
        mainImage.style.transform = "scale(1.1)";
        setTimeout(() => {
            mainImage.style.transform = "scale(1)";
        }, 500);
    });
});
