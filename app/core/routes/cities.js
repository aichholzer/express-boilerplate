module.exports = (router, controller) => {
  router.route('/cities/:city?')
    .get(controller.read)
    .post(controller.create)
    .delete(controller.delete)
    .put(controller.update);
  return router;
};
