export const card = ([employee, itemLabel, item, icon, name, id, email]) => {
  return `<div class='card col-4'>
    <div class='card-body'>
      <h3 class='card-title'>${name}</h3>
      <h5 class='card-title d-flex>
        <span class='material-symbols-outlined'>${icon}</span>
        ${employee[0].toUpperCase() + employee.substring(1)}
      </h5>
      <ul class='list-group'>
        <li class='list-group-item'>Id: ${id}</li>
        <li class='list-group-item'>Email: <a href='mailto:${email}'>${email}</a></li>
        <li class='list-group-item'>${itemLabel[0].toUpperCase() + itemLabel.substring(1)}: ${item}</li>
      </ul>
    </div>
  </div>`
};


// return $('<div>')
//     .addClass('card col-4')
//     .append(
//       $('<div>')
//         .addClass('card-body')
//         .append($('<h3>').addClass('card-title d-flex').text(`${name}`))
//         .append(
//           $('<h5>')
//             .addClass('card-title d-flex')
//             .append(
//               $('<span>')
//                 .addClass('material-symbols-outlined')
//                 .text(`${icon}`)
//             )
//             .append(`${employee[0].toUpperCase() + employee.substring(1)}`)
//         )
//         .append(
//           $('<ul>')
//             .addClass('list-group')
//             .append($('<li>').addClass('list-group-item').text(`Id: ${id}`))
//             .append(
//               $('<li>').addClass('list-group-item')
//               .text('Email: ')
//               .append($('<a>').attr('href', `mailto:${email}`).text(`${email}`))
//             )
//             .append(
//               $('<li>')
//                 .addClass('list-group-item')
//                 .text(
//                   `${
//                     itemLabel[0].toUpperCase() + itemLabel.substring(1)
//                   }: ${item}`
//                 )
//             )
//         )
//     );