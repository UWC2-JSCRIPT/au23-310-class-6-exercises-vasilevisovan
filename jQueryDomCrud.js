$(document).ready(function(){
      
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const buyNowLink = $("<a>");
    buyNowLink.text("Buy Now!").attr("id", "cta");
    $("p:last").after(buyNowLink);

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const imgColor = $("img").attr("data-color");
    console.log("Image Color:", imgColor);

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    $("li:eq(2)").addClass("highlight");

   // Remove (delete) the last paragraph
   // (starts with "Available for purchase now…")
    $("p:last").remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $("#cta").on("click", function(event) {
      event.preventDefault();
      $(this).replaceWith("<p>Added to cart</p>");
    });
  });