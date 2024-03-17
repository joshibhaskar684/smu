

/*
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}*/



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

//for company [placement]

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
function facilty(){
  window.location.href='facilty.html';
}
function placement(){
  window.location.href='placement.html';
}
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))