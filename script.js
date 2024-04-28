$(document).ready(function(){
  var images = [
    "https://storage.googleapis.com/acciojob-open-file-collections/image1.jpg",
    "https://storage.googleapis.com/acciojob-open-file-collections/image2.jpg",
    "https://storage.googleapis.com/acciojob-open-file-collections/image3.jpg",
    "https://storage.googleapis.com/acciojob-open-file-collections/image4.jpg",
    "https://storage.googleapis.com/acciojob-open-file-collections/image5.jpg",
    "https://storage.googleapis.com/acciojob-open-file-collections/image6.jpg",
    "https://storage.googleapis.com/acciojob-open-file-collections/image7.jpg",
    "https://storage.googleapis.com/acciojob-open-file-collections/image8.jpg",
    "https://storage.googleapis.com/acciojob-open-file-collections/image9.jpg"
  ];

  var currentIndex = 0;
  var totalImages = images.length;

  var cardRow = $("#cardRow");

	
for (var i = 0; i < totalImages; i++) {
  var cardHTML = `
    <div class="col-md-4 mb-4">
      <div class="card" data-toggle="modal" data-target="#exampleModal">
        <img src="${images[i]}" class="card-img-top" alt="Image ${i+1}" data-index="${i}">
        <div class="card-body">
          <h6 class="card-title">Card ${i+1}</h6>
          <p class="card-text">Details about Image ${i+1}.</p>
        </div>
      </div>
    </div>
  `;
  cardRow.append(cardHTML);
}


  // Lightbox functionality
  $(".card").click(function() {
    var imageUrl = $(this).find("img").attr("src");
    currentIndex = parseInt($(this).find("img").attr("data-index"));
    $("#lightboxImage").attr("src", imageUrl);
  });

  // Navigate to previous image
  $("#lightboxPrev").click(function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    var imageUrl = images[currentIndex];
    $("#lightboxImage").attr("src", imageUrl);
  });

  // Navigate to next image
  $("#lightboxNext").click(function() {
    currentIndex = (currentIndex + 1) % totalImages;
    var imageUrl = images[currentIndex];
    $("#lightboxImage").attr("src", imageUrl);
  });
});
