import  notesItems  from "./js/notes-items.js";

let id = null;
const tbody = document.querySelector(".tbody-js");
//console.log(tbody);


function createNotesItemsMarkup(notes) {
  return notes.map(({ Name, Created, Category, Content, Dates, Id }) => {
    return `
          <tr id="${Id}">
            <td>${Name}</td>
            <td>${Created}</td>
            <td>${Category}</td>
            <td>${Content}</td>
            <td>${Dates}</td>
            <td>
              <button class="btn btn-primary edit-js">Edit</button>
              <button class="btn btn-info save-js">Save</button>
              <button class="btn btn-danger delete-js">Delete</button>
            </td>
          </tr>
        `}).join("");
};

const NotesItemsMarkup = createNotesItemsMarkup(notesItems);
//console.log(NotesItemsMarkup);
tbody.insertAdjacentHTML('beforeend', NotesItemsMarkup);


for (let btn of document.querySelectorAll(".edit-js")) {
  btn.addEventListener("click", handleNoteChange)
};

for (let btn of document.querySelectorAll(".save-js")) {
  btn.addEventListener("click", handleNoteSave)
};

for (let btn of document.querySelectorAll(".delete-js")) {
  btn.addEventListener("click", handleNoteDelete)
};

function handleNoteChange(e) {
  id = e.target.parentElement.parentElement.id;
  console.log(id);
};

function handleNoteSave(e) {
  id = e.target.parentElement.parentElement.id;
};

function handleNoteDelete (e) {
  id = e.target.parentElement.parentElement.id;
};