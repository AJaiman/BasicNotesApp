function generateNote(text) {
    let note = document.createElement("div");
    note.className = "note";
    note.innerHTML = text;
    return note;
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
        notes.appendChild(n);
    }
}