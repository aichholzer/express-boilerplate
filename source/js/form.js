(function() {
  window.$ = $;
  const email = $('#email')[0];
  const city = $('#city')[0];
  const name = $('#name')[0];
  const formMap = {name, city, email};
  Object.keys(formMap).map(key => !formMap[key] && delete formMap[key]);

  const buttonSend = $('#send-form')[0];
  buttonSend.onclick = e => {
    e.preventDefault();
    const validationFail = validation();
    if (!Object.keys(validationFail).length) {
      $.post(`/cities/${name}`, $('#form').serialize())
        .done(() => alert('success'))
        .fail(() => alert('fail'))
    } else {
      Object.keys(validationFail).map(key => {
        $(`#required_${key}`).style = 'display: block;';
        formMap[key].style.borderColor = 'red';
        formMap[key].onkeyup = () => {
          $(`#required_${key}`).style = 'display: none;';
          formMap[key].style.borderColor = 'grey';
          formMap[key].onkeyup = null;
        }
      });
    }
  };

  function validation() {
    const validationFail = {};

    Object.keys(formMap).map(key => {
      if (key === 'email' && !/[\w]*@[\w\S]*\.{1}[\w]*$/g.test(formMap[key].value)) {
        validationFail[key] = formMap[key];
      } else if (!/\w/g.test(formMap[key].value)) {
        validationFail[key] = formMap[key];
      }
    });

    return validationFail;
  }
}());
