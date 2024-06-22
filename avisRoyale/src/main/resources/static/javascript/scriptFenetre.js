// Function to open the modal and fill it with the card's data
function openModal() {
    // Display the modal
    document.getElementById('modal').style.display = "block";
}

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

function LoadCommentaire(element){
    var sectionCommentaire = document.getElementById("modal");
    sectionCommentaire.innerHTML = '<div class="modal-content">\n' +
        '        <span class="close" onclick="closeModal()">&times;</span>\n' +
        '        <div class="division-modal">\n' +
        '            <div class="partie-modal">\n' +
        '                <div class="division-detail">\n' +
        '                    <div>\n' +
        '                        <img id="modal-image" src="/images/logoCr.jpeg" alt="Image de la carte">\n' +
        '                        <div class="carte-details">\n' +
        '                            <h2 id="modal-name"></h2>\n' +
        '                            <p id="modal-type"></p>\n' +
        '                            <p>Rareté de carte\n' +
        '                            <br><br>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="detail">\n' +
        '                        <h3>Détail:</h3>\n' +
        '                        <p id="modal-details"></p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="add-comment">\n' +
        '                    <h3>Ajouter votre avis:</h3>\n' +
        '                    <textarea placeholder="Écrire l\'avis..."></textarea>\n' +
        '                    <button>Ajouter</button>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="partie-modal">\n' +
        '                <div class="comments-section">\n' +
        '                    <h3>Commentaire:</h3>\n' +
        '                    <!-- Example response -->\n' +
        '                    <div class="response">\n' +
        '                        <p><strong>Utilisateur:</strong> Commentaire...</p>\n' +
        '                    </div>\n' +
        '                    <!-- Add more responses as needed -->\n' +
        '                    <form class="add-Comment">\n' +
        '                        <input type="text" placeholder="Ajouter commentaire">\n' +
        '                        <button type="submit"  title="Cliquer pour ajouter commentaire.">Commenter</button>\n' +
        '                    </form>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'
}
