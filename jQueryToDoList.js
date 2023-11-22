/**
 * Toggles "done" class on <li> element
 */

/**
 * Delete element when delete link clicked
/**
 * Adds new list item to <ul>
 */
/// add listener for add

$(document).ready(function() {
  // Add click event listener to the "Delete" links
  $('.delete').on('click', function() {
    // Toggle the "done" class on the parent <li> element
    $(this).parent('li').toggleClass('done');
  });
});

  // Delete element when delete link is clicked
  $(document).ready(function() {
    // Add click event listener to the "Delete" links
    $('.delete').on('click', function() {
      // Remove the parent <li> element
      $(this).parent('li').remove();
    });
  });
  
  // Add new list item to <ul> on button click
  $(document).ready(function() {
    // Add click event listener to the "Add" button
    $('.add-item').on('click', function() {
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
    });
  });
  
  $(document).ready(function() {
    // Add click event listener to the "Add" button
    $('.add-item').on('click', addItem);
  
    // Add keypress event listener for the "Enter" key
    $('#new-todo').keypress(function(event) {
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
  