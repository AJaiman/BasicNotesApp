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
    let noteInput = document.getElementById("newNoteInput");
    let newNoteTitle = noteInput.value;
    
    if (newNoteTitle == "") {
        alert("Please the field!");
    }
    else {
        notesList.push([newNoteTitle, '']);
        noteInput.value = '';
        generateNotesList();
    }
}

function removeNote(ind) {
    notesList.splice(ind, 1);
    generateNotesList();
}

function viewNote(ind) {
    let noteCard = document.getElementById('noteCard');
    if (noteCard.innerHTML == '') {
        let noteCardContent = document.createElement('div');
        noteCardContent.className = 'noteCardContent';
        noteCardContent.innerHTML = `
        <h1>${notesList[ind][0]}</h1>
        <button class="deleteButton" id="closeNoteCard" onclick="closeNote(${ind})">X</button>
        `;

        let noteCardEditor = document.createElement('textarea');
        noteCardEditor.id = 'noteCardEditor';
        noteCardEditor.onkeydown = textAreaAdjust;
        noteCardEditor.value = notesList[ind][1];
        noteCardContent.appendChild(noteCardEditor);

        noteCard.appendChild(noteCardContent);
        let popupBack = document.createElement('div');
        popupBack.id = 'popupBackground';
        document.querySelector('body').appendChild(popupBack);
        clickOut = () => {closeNote(ind);}
        setTimeout(() => {popupBack.onclick = clickOut}, 20);
        textAreaAdjust();
    }
}

function closeNote(ind) {
    let noteCard = document.getElementById('noteCard');
    let noteContent = document.getElementById('noteCardEditor');
    notesList[ind][1] = noteContent.value;
    noteCard.innerHTML = '';
    let popupBack = document.getElementById('popupBackground');
    popupBack.remove();
}

function textAreaAdjust() {
    let element = document.getElementById('noteCardEditor');
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
  }