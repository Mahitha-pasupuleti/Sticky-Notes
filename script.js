const divElement = document.getElementById('notes-section');
const ulElement = document.getElementById('list-of-notes');
const btn = document.getElementById('new-note');
const reset = document.getElementById('reset');
const notesDiv = document.getElementById('notes-form');
const title_expanded = document.getElementById('title-expanded');
const note_expanded = document.getElementById('note-expanded');
const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

function unHide() {
    notesDiv.hidden = false;
    btn.hidden = true;
    reset.hidden = false;
}

function hide() {
    notesDiv.hidden = true;
    btn.hidden = false;
    reset.hidden = true;
}

function addNotesToElement(noteDetails) {
    
    let listElement = document.createElement('li');

    let ahref = document.createElement('a');
    ahref.setAttribute("href", "#");
    ahref.addEventListener('click', () => {
        overlay.style.display = 'block';
    });

    let title = document.createElement('h2');
    let note = document.createElement('p');

    ulElement.appendChild(listElement);
    listElement.appendChild(ahref);

    ahref.appendChild(title);
    title.innerHTML = noteDetails[0];
    title_expanded.innerHTML = noteDetails[0];
    ahref.appendChild(note);
    note.innerHTML = noteDetails[1];
    note_expanded.innerHTML = noteDetails[1];

}

function addNote(form) {
    let formData = new FormData(form);
    let noteDetails = [];
    formData.forEach(function (value, key) {
        // Add only non null values
        if(value != "") {
            noteDetails.push(value);
            console.log(value);
        }
        else {
            alert("Both fields are mandatory!");
        }
    });
    if(noteDetails.length == 2) {
        addNotesToElement(noteDetails);
    }
}