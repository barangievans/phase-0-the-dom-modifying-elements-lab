// Remove <main id="main"> from index.html
const mainElement = document.querySelector('main#main');
if (mainElement) {
    mainElement.remove();
}

// Create a new <h1> element and assign it to the variable newHeader
const newHeader = document.createElement('h1');

// Set the id attribute of newHeader to 'victory'
newHeader.id = 'victory';

// Set the text content of newHeader
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append newHeader to the document body (or any other desired location)
document.body.appendChild(newHeader);


