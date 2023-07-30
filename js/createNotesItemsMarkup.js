export default function createNotesItemsMarkup(notes) {
 
  return notes
    .map(
      ({ Name, Created, Category, Content, Dates, id }) =>
        `
          <tr id=${id}>
            <td>${Name}</td>
            <td>${Created}</td>
            <td>${Category}</td>
            <td>${Content}</td>
            <td>${Dates}</td>
            <td>
              <button class="btn btn-primary" >Edit</button>
              <button class="btn btn-info">Save</button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        `
    )
    .join("");
    
}
