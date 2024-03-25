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
  const gifs = document.querySelectorAll('.gif');

  gifs.forEach(gif => {
    // Pause GIFs initially
    gif.src = gif.src;

    // Play GIFs on mouseover
    gif.parentElement.addEventListener('mouseover', function() {
      gif.src = gif.src;
    });

    // Optional: Pause GIFs on mouseout
    gif.parentElement.addEventListener('mouseout', function() {
      gif.src = gif.src;
    });
  });
});
