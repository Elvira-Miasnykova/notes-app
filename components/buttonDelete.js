import notesItems from "./notesItems.js";import createNotesItemsMarkup from "./createNotesItemsMarkup.js";
const tbody = document.querySelector(".tbody-js");

export default function buttonDelete(e) {
  remove(e.target.parentElement.parentElement.id);

  function remove(o) {
    notesItems.splice(o.indexOfLi, 1);
  }
  tbody.innerHTML = "";
  tbody.insertAdjacentHTML("beforeend", createNotesItemsMarkup(notesItems));
}
