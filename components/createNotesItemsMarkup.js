export default function createNotesItemsMarkup(notes) {
  return notes
    .map(
      ({ Image, Name, Created, Category, Content, Dates, i }) =>
        `
          <tr id=${i}>
            <td class="td">
            <span class="span-image">${Image}</span>
            ${Name}</td>
            <td>${Created}</td>
            <td>${Category}</td>
            <td>${Content}</td>
            <td>${Dates}</td>
            <td>
              <button class="btn btn-primary" ><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
<title>edit-pencil</title>
<path d="M12.3 3.7l4 4-12.3 12.3h-4v-4l12.3-12.3zM13.7 2.3l2.3-2.3 4 4-2.3 2.3-4-4z"></path>
</svg></button>
              <button class="btn btn-info">      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
<title>arrow-down</title>
<path d="M9 16.172l-6.071-6.071-1.414 1.414 8.485 8.485 8.485-8.485-1.414-1.414-6.071 6.071v-16.172h-2z"></path>
</svg></button>
              <button class="btn btn-danger"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
<title>trash</title>

<path d="M6 2l2-2h4l2 2h4v2h-16v-2h4zM3 6h14l-1 14h-12l-1-14zM8 8v10h1v-10h-1zM11 8v10h1v-10h-1z"></path>
</svg>
</button>
            </td>
          </tr>
        `,
    )
    .join('');
}




