let notesList = [];

function generateNote(text, ind) {
    let note = document.createElement("div");
    note.className = "note";
    note.innerHTML = text + `<div class="buttons"><button class='viewButton'>View</button> <button class='deleteButton' onclick='removeNote(${ind})'>X</button></div>`;
    return note;
}

function generateNotesList() {
    let notes = document.getElementById('notes');
    notes.innerHTML = '';
    let count = 0;
    for (let text of notesList) {
        let note = generateNote(text, count);
        notes.appendChild(note);
    }
}

function addNote() {
    let notes = document.getElementById("notes");
    let input = document.querySelector("input");
    let val = input.value;
    input.value = '';
    if (val == "") {
        alert("Please enter a note!");
    }
    else {
        notesList.push(val);
        generateNotesList();
    }
}

function removeNote(ind) {
    notesList.splice(ind, 1);
    generateNotesList();
}