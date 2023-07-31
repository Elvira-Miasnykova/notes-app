import notesItems from "./notesItems.js";
import createNotesItemsMarkup from "./createNotesItemsMarkup.js";
const tbody = document.querySelector(".tbody-js");

export default function buttonDeleteAll(e) {
  notesItems.splice(0, notesItems.length);
  console.log(notesItems);

  tbody.innerHTML = "";
  tbody.insertAdjacentHTML("beforeend", createNotesItemsMarkup(notesItems));
}
