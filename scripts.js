function changeImage() {
    var img = document.getElementById("imgClickAndChange");
    var additionalImages = document.querySelector(".additional-images");
    
    if (img.src.endsWith("glavapocetna.gif")) {
        img.src = "liceklik.gif";
        additionalImages.style.display = "block"; // Reveal additional images
    } else {
        img.src = "glavapocetna.gif";
        additionalImages.style.display = "none"; // Hide additional images
    }
}

document.addEventListener("DOMContentLoaded", function() {
        const gifs = document.querySelectorAll(".gif");

        gifs.forEach(gif => {
            const fullAnimationSrc = gif.getAttribute("data-src");
            const firstFrameSrc = gif.getAttribute("src");

            gif.addEventListener("mouseover", function() {
                gif.setAttribute("src", fullAnimationSrc);
            });

            gif.addEventListener("mouseout", function() {
                gif.setAttribute("src", firstFrameSrc);
            });
        });
    });
