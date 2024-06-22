// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Event listener for clicking outside the modal content to close it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to open the modal and fill it with the card's data
function openModal(element) {
    // Retrieve data attributes from the clicked element
    const id = element.getAttribute('data-id');
    const name = element.getAttribute('data-name');
    const type = element.getAttribute('data-type');
    const image = element.getAttribute('data-image');
    const details = element.getAttribute('data-details');

    // Set the modal content with the retrieved data
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-type').textContent = type;
    document.getElementById('modal-details').textContent = details;

    // Display the modal
    document.getElementById('modal').style.display = "block";
}
