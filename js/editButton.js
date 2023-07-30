import notesItems from "./notes-items.js";
export default function editButton(e) {
    
  const forma = document.querySelector(".container-form");
    forma.classList.add("active")

  console.log(e.target.parentElement.parentElement);
  const idUser = parseInt(e.target.parentElement.parentElement.id); 
   let p = [];

  for (let item of notesItems) {
    // console.log(typeof id.i);
    //  console.log(typeof idUser);
  
    if (item.id === idUser) {
        
      p.push(item);
    }
   }
 console.log(p);
  return;
}
