$(document)
  .ready(() => {
    $('body .delete-user').click((ev) => {
      $.ajax({
        url: `/users/${$(ev.target).attr('_id')}`,
        type: 'DELETE',
        success() {
          $(ev.target).closest('tr').remove();
        }
      });
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
    $('body .update-city').click((ev) => {
      const cityId = $(ev.target).attr('_idd');
      const cityname = $(`.city_name_${cityId}`).val();
      $.ajax({
        url: `/cities/${$(ev.target).attr('_id')}`,
        type: 'PUT',
        data: {
          name: cityname
        }
      });
    });
  });
