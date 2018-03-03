$(document)
  .ready(() => {
    $('.delete-user')
      .each((i, elem) => {
        elem.onclick = () => {
          $.ajax({
            url: `/users/${elem.getAttribute('_id')}`,
            type: 'DELETE',
            success() {
              location.reload();
            }
          });
        };
      });
    $('.delete-city')
      .each((i, elem) => {
        elem.onclick = () => {
          $.ajax({
            url: `/cities/${elem.getAttribute('_id')}`,
            type: 'DELETE',
            success() {
              location.reload();
            }
          });
        };
      });
  });
