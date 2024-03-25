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
  // Get all elements with class 'pr' (your GIF images)
  const gifs = document.querySelectorAll('.pr');

  // Loop through each GIF element
  gifs.forEach(gif => {
    // Add mouseover event listener
    gif.addEventListener('mouseover', function() {
      // Start GIF animation by setting the 'src' attribute again
      gif.src = gif.src;
    });

    // Add mouseout event listener (optional: to pause GIF on mouseout)
    gif.addEventListener('mouseout', function() {
      // You can add logic here to pause GIF on mouseout if needed
    });
  });
});
