const { catchErrors } = require('../../core/lib/error');

module.exports = (router, controller) => {
  router.route('/users/:user?')
    .get(controller.read)
    .post(catchErrors(controller.create))
    .delete(catchErrors(controller.delete));

  return router;
};
