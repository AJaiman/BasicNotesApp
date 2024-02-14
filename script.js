function generateNote(text) {
    let note = document.createElement("div");
    note.className = "note";
    note.innerHTML = text;
    return note;
}
