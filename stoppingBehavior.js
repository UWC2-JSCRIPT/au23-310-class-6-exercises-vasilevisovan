// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"


document.getElementById('more-info').addEventListener('click', (event) => {
  // Prevent the default behavior of the link (navigation)
  event.preventDefault();

  // Display the custom alert message
  alert("Here's more info");
});

document.getElementById('dog').addEventListener('click', (event) => {
  // Prevent the event from propagating to the parent elements
  event.stopPropagation();

  // Display the custom alert message
  alert('Bow wow!');
});
