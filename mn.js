
var slideshows = document.getElementsByClassName("slideshow");

for (var i = 0; i < slideshows.length; i++) {
  startCarousel(slideshows[i]);
}

function startCarousel(slideshow) {
  var index = 0;
  carousel();

  function carousel() {
    var slides = slideshow.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) { index = 1 }
    slides[index - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
}


function redirectToSelectedPage() {
    var selectedPage = document.getElementById("pageSelect").value;
  
    // Check if a page is selected
    if (selectedPage.trim() === "") {
        alert("Please select a page.");
        return;
    }
  
    // Redirect to the selected page
    window.location.href = selectedPage;
  }

function faciltys(){
  window.location.href='facilty.html';
}
