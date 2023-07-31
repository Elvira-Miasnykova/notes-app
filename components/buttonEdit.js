const form = document.querySelector(".container-form");
const saveBtn = document.querySelector(".save");
import createNotesItemsMarkup from "./createNotesItemsMarkup.js";

import notesItems from "./notesItems.js";

export default function editButton(e) {
  form.classList.add("active");

  const idUser = parseInt(e.target.parentElement.parentElement.id);
  console.log(e.target.parentElement.parentElement.id);

  for (let id of notesItems) {
    if (id.i === idUser) {
      const name = document.querySelector(".name");
      name.value = id.Name;

      name.addEventListener("input", (event) => {
        // console.log(event.currentTarget.value);
        id.Name = event.currentTarget.value;
      });

      const created = document.querySelector(".created");
      created.value = id.Created;

      created.addEventListener("input", (event) => {
        //  console.log(event.currentTarget.value);
        id.Created = event.currentTarget.value;
      });

      const category = document.querySelector(".category");
      category.value = id.Category;

      category.addEventListener("input", (event) => {
        // console.log(event.currentTarget.value);
        id.Category = event.currentTarget.value;
      });

      const content = document.querySelector(".content");
      content.value = id.Content;

      content.addEventListener("input", (event) => {
        //  console.log(event.currentTarget.value);
        id.Content = event.currentTarget.value;
      });

      const dates = document.querySelector(".dates");
      dates.value = id.Dates;
      dates.addEventListener("input", (event) => {
        // console.log(event.currentTarget.value);
        id.Dates = event.currentTarget.value;
      });

      console.log(id);
    }
  }
  createNotesItemsMarkup(notesItems);
  return;
}
