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
    $('body .delete-city').click((ev) => {
      $.ajax({
        url: `/cities/${$(ev.target).attr('_id')}`,
        type: 'DELETE',
        success() {
          $(ev.target).closest('tr').remove();
        }
      });
    });
  });
