// /**
//  * Function to populate values in card from form input
//  */
// function generateCard() {
//     // Get value of Student name from form input 
//     const nameElement = document.getElementById("name");
//     const nameValue = nameElement.value; 
//     // Assign the value of student name to generated card
//     const cardNameElement = document.getElementById("cardName");
//     cardNameElement.innerHTML = nameValue;

//     // Get value of college name from form input 
//     const collegeNameValue = document.getElementById("collegeName").value;
//     // Assign the value of college name to generated card
//     document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

//     // Get value of location name from form input 
//     const locationValue = document.getElementById("location").value;
//     // Assign the value of location name to generated card
//     document.getElementById("cardLocation").innerHTML = locationValue;

//     // Get value of location name from form input 
//     const classValue = document.getElementById("class").value;
//     // Assign the value of location name to generated card
//     document.getElementById("cardClass").innerHTML = classValue;


//     // Display final generated card to user     
//     document.getElementById("collegeCard").style.display = "block";
// }

/**
 * Function to populate values in card from form input
 */
function generateCard() {
    // Get value of Student name from form input
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value;

    // Assign the value of student name to generated card
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;
  
    // Get value of college name from form input
    const collegeNameValue = document.getElementById("collegeName").value;
    // Assign the value of college name to generated card
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;
  
    // Get value of location name from form input
    const locationValue = document.getElementById("location").value;
    // Assign the value of location name to generated card
    document.getElementById("cardLocation").innerHTML = locationValue;
  
    // Get value of class name from form input
    const classValue = document.getElementById("class").value;
    // Assign the value of class name to generated card
    document.getElementById("cardClass").innerHTML = classValue;
  
    // Get the selected image file
    const mugshotInput = document.getElementById("mugshot");
    const selectedFile = mugshotInput.files[0];
  
    // Check if an image file is selected
    if (selectedFile) {
      // Create a FileReader to read the image file
      const reader = new FileReader();
  
      // Set up the FileReader onload event
      reader.onload = function (e) {
        // Get the base64-encoded image data
        const imageData = e.target.result;
  
        // Assign the image data to the user photo element
        const userPhotoElement = document.querySelector(".user-photo");
        userPhotoElement.style.backgroundImage = `url(${imageData})`;
      };
  
      // Read the image file as a data URL
      reader.readAsDataURL(selectedFile);
    }
  
    // Display the final generated card to the user
    document.getElementById("collegeCard").style.display = "block";
  }
  fetch('http://localhost:8080/api/students')
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data); // Log the response data to the console
    // Perform any necessary UI updates or data processing
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });
