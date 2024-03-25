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
    // Add event listeners for mouseenter and mouseleave
    gif.parentElement.addEventListener('mouseenter', function() {
      // Show and play GIF on hover
      gif.style.display = 'block';
      gif.src = gif.getAttribute('data-src');
    });

    gif.parentElement.addEventListener('mouseleave', function() {
      // Pause and hide GIF when mouse leaves
      gif.style.display = 'none';
      gif.src = '';
    });
  });
});
