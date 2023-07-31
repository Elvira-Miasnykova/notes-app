import notesItems from "./notesItems.js";
import  createNotesItemsMarkup  from "./createNotesItemsMarkup.js";
import { categoryPicker } from "../index.js";

const form = document.querySelector(".container-form");
const tbody = document.querySelector(".tbody-js");


export default function formModal(e) {
  e.preventDefault();

  const {
    elements: { name, created, category, content, dates },
  } = e.currentTarget;

  const number = Math.ceil(Math.random() * (10000000 - 1) + 1);

  const info = {
    Name: name.value,
    Created: created.value,
    Category: categoryPicker(category.value),
    Content: content.value,
    Dates: dates.value,
    i: number,
    Boolean: false,
  };
  const newUser = `
          <tr id=${number}>
            <td class="td">${name.value}</td>
            <td>${created.value}</td>
            <td>${category.value}</td>
            <td>${content.value}</td>
            <td>${dates.value}</td>
            <td>
              <button class="btn btn-primary" >Edit</button>
              <button class="btn btn-info">Save</button>
              <button type="remove"class="btn btn-danger">Delete</button>
            </td>
          </tr>
        `;

  e.currentTarget.reset();

  form.classList.remove("active");

  notesItems.push(info);

  tbody.innerHTML = "";
  tbody.insertAdjacentHTML("beforeend", createNotesItemsMarkup(notesItems));

  return;
}

