let notesList = [];

function generateNote(text) {
    let note = document.createElement("div");
    note.className = "note";
    note.innerHTML = text + "<button class='viewButton'>View</button> <button class='deleteButton'>X</button>";
    return note;
}

function generateNotesList() {
    let notes = document.getElementById('notes');
    notes.innerHTML = '';
    for (let note of notesList) {
        notes.appendChild(note);
    }
}

function addNote() {
    let notes = document.getElementById("notes");
    let input = document.querySelector("input");
    let val = input.value;
    if (val == "") {
        alert("Please enter a note!");
    }
    else {
        let n = generateNote(val)
        notesList.push(n);
        generateNotesList();
    }
}