import notesItems from './components/notesItems.js';
import editButton from './components/buttonEdit.js';
import buttonCreateNote from './components/buttonCreateNote.js';
import buttonModalCancel from './components/buttonModalCancel.js';
import buttonDelete from './components/buttonDelete.js';
import formModal from './components/formModal.js';
import buttonDeleteAll from './components/buttonDeleteAll.js';
import createNotesItemsMarkup from './components/createNotesItemsMarkup.js';
const btnDeleteAll = document.querySelector('.btn-deleteAll');

const tbody = document.querySelector('.tbody-js');
const addBtn = document.querySelector('.add');
const cancelBtn = document.querySelector('.cancel');
const forma = document.querySelector('.container-form');

const NotesItemsMarkup = createNotesItemsMarkup(notesItems);
tbody.insertAdjacentHTML('beforeend', NotesItemsMarkup);

const imgEl = document.querySelector('.span-image');

function categoryPicker(category) {
  switch (category) {
    case 'task':
      imgEl.classList.add('category-task');
      imgEl.classList.add('category');
      break;
    case 'thought':
      imgEl.classList.add('category-thought');
      break;
    case 'idea':
      imgEl.classList.add('category-idea');
      break;
    case 'quote':
      imgEl.classList.add('category-quote');
      break;
  }
}

function buttons() {
  for (let btn of document.querySelectorAll('.btn-primary')) {
    btn.addEventListener('click', editButton);
  }
  for (let btn of document.querySelectorAll('.btn-danger')) {
    btn.addEventListener('click', buttonDelete);
  }
  // for (let btn of document.querySelectorAll(".btn-info")) {
  //   btn.addEventListener("click", buttonSave);

  // }
  addBtn.addEventListener('click', buttonCreateNote);
  cancelBtn.addEventListener('click', buttonModalCancel);
  forma.addEventListener('submit', formModal);
  btnDeleteAll.addEventListener('click', buttonDeleteAll);
}
buttons();

export { createNotesItemsMarkup, categoryPicker }

