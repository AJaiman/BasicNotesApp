let notesList = [];

function generateNote(text, ind) {
    let note = document.createElement("div");
    note.className = "note";
    note.innerHTML = text + `<div class="buttons"><button class='viewButton' onclick='viewNote(${ind})'>View</button> <button class='deleteButton' onclick='removeNote(${ind})'>X</button></div>`;
    return note;
}

function generateNotesList() {
    let notes = document.getElementById('notes');
    notes.innerHTML = '';
    let count = 0;
    for (let text of notesList) {
        let note = generateNote(text[0], count);
        notes.appendChild(note);
        count++;
    }
}

function addNote() {
    let notes = document.getElementById("notes");
    let noteInput = document.getElementById("note");
    let titleInput = document.getElementById("title");
    let noteVal = noteInput.value;
    let titleVal = titleInput.value;
    
    if (noteVal == "" || titleVal == "") {
        alert("Please complete both fields!");
    }
    else {
        notesList.push([titleVal, noteVal]);
        noteInput.value = '';
        titleInput.value = '';
        generateNotesList();
    }
}

function removeNote(ind) {
    notesList.splice(ind, 1);
    generateNotesList();
}

function viewNote(ind) {
    let noteCard = document.createElement('div');
    noteCard.className = 'noteCard';
    let noteCardContent = document.createElement('div');
    noteCardContent.className = 'noteCardContent';
    noteCardContent.innerHTML = `
    <h1>${notesList[ind][0]}</h1>
    <p>${notesList[ind][1]}</p>
    `;
    noteCard.appendChild(noteCardContent);
    document.querySelector('body').appendChild(noteCard);
}