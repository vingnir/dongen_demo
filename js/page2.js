document.getElementById('hamburger').onclick = function() {
    alert("dongen klicka");
};

/**
* Opens the modal by setting the display style to 'block'.
* 
* This function targets the element with the ID 'modal' and changes its display 
* property to 'block', making the modal visible on the screen. This function can be 
* called, for example, when a user clicks a button that should trigger the modal to open.
* 
* @function openDongensModal
* @example
* // Example usage:
* openDongensModal(); // Opens the modal
*/
function openDongensModal(){
  document.getElementById('modal').style.display='block'
}

function closeDongensModal(){
  document.getElementById('modal').style.display='none'
}


// Form actions 
// Attach an event listener to the form's submit event
document.getElementById('loginForm').onsubmit = function(event) {
  // Prevent the default form submission action (which would refresh the page)
  event.preventDefault();

  // Get the values entered in the username and password input fields
  const username = document.getElementById('nameInput').value;
  const password = document.getElementById('passwordInput').value;

  // Send a POST request to the '/login' endpoint with the username and password as JSON
  fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', // Set the request headers to indicate JSON content
      },
      body: JSON.stringify({ username, password }), // Convert the username and password into a JSON string
  })
  .then(response => response.json()) // Parse the JSON response from the server
  .then(result => {
      if (result.success) {
          // If the login is successful, update the button text to show the username and "Logout"
          document.getElementById('btntext').innerHTML = `${result.username} (Logout)`;

          // Hide the modal after a successful login
          document.getElementById('modal').style.display = 'none';

          // Change the button's click handler to handle logging out
          document.querySelector('.loginbtn').onclick = function() {
              // Reset the button text to "signin/signup" on logout
              document.getElementById('btntext').innerHTML = '<img id="loginicon" src="images/usericon.png"> signin/signup';

              // Reassign the button's click handler to reopen the login modal
              this.onclick = openDongensModal;
          };
      } else {
          // If the login fails, alert the user with the error message
          alert(result.message);
      }
  })
  .catch(error => console.error('Error:', error)); // Log any errors that occur during the fetch request
};
