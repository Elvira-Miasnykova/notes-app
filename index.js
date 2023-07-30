import notesItems from "./js/notes-items.js";
import editButton from "./js/editButton.js";
import buttonRemove from "./js/buttonRemove.js";
import buttonCreateNote from "./js/buttonCreateNote.js";
import buttonModalCancel from "./js/buttonModalCancel.js";
import buttonSave from "./js/buttonSave.js";
import formModal from "./js/formModal.js";
import createNotesItemsMarkup from "./js/createNotesItemsMarkup.js";

const tbody = document.querySelector(".tbody-js");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const saveBtn = document.querySelector(".save");
const forma = document.querySelector(".container-form");


const NotesItemsMarkup = createNotesItemsMarkup(notesItems);
tbody.innerHTML = ''
tbody.insertAdjacentHTML("beforeend", NotesItemsMarkup);

function buttons() {
  for (let btn of document.querySelectorAll(".btn-primary")) {
    btn.addEventListener("click", editButton);
  }
  for (let btn of document.querySelectorAll(".btn-danger")) {
    btn.addEventListener("click", buttonRemove);
  }
  for (let btn of document.querySelectorAll(".btn-info")) {
    btn.addEventListener("click", buttonSave);
    
  }
  addBtn.addEventListener("click", buttonCreateNote);
  cancelBtn.addEventListener("click", buttonModalCancel);
  forma.addEventListener("submit", formModal);
}
buttons();



export default buttons