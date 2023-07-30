//import buttons from "../index.js";
import createNotesItemsMarkup from "./createNotesItemsMarkup.js";
import notesItems from "./notes-items.js";
const tbody = document.querySelector(".tbody-js");
export default function buttonRemove(e) {
    console.log(e.target.parentElement.parentElement.id);
    const id = e.target.parentElement.parentElement.id;
    
    function filteredItems(id) {
        return notesItems.filter(item => item.id !== id);
    }
        
        tbody.innerHTML = "";
        tbody.insertAdjacentHTML("beforeend", createNotesItemsMarkup(filteredItems(id)));
}
    


 

// for (let btn of document.querySelectorAll(".btn-danger")) {
//     btn.addEventListener("click", buttonRemove);
//   }
//buttons();