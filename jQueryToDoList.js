
$(document).ready(function () {
  // Add click event listener to the "Delete" links
  $('.today-list').on('click', '.delete', function () {
    // Toggle the "done" class on the parent <li> element
    $(this).parent('li').toggleClass('done');
    
    // Remove the parent <li> element
    $(this).parent('li').remove();
  });

  // Add new list item to <ul> on button click
  $('.add-item').on('click', function () {
    addItem();
  });

  // Add keypress event listener for the "Enter" key
  $('#new-todo').keypress(function (event) {
    if (event.which === 13) {
      addItem();
    }
  });

  function addItem() {
    // Get the value from the input field
    var newItemText = $('#new-todo').val();

    // Check if the input is not empty
    if (newItemText.trim() !== '') {
      // Create a new list item with the input value and a "Delete" link
      var newListItem = $('<li><span>' + newItemText + '</span><a class="delete">Delete</a></li>');

      // Append the new list item to the <ul>
      $('.today-list').append(newListItem);

      // Clear the input field
      $('#new-todo').val('');
    }
  }
});
