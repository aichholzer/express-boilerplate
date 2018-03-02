// Boilerplate
const m = attract('core/models');

module.exports = {
  create: async (req, res, next) => {
    try {
      await m.user.create(req.body);
      return res.render('users', {
        section: 'Users',
        users: await m.user.find({ 'meta.status': 'active' }),
        cities: await m.city.find({ 'meta.status': 'active' })
      });
    } catch (error) {
      return next(error);
    }
  },

  read: async (req, res, next) => {
    if (req.params.user) {
      try {
        const user = await m.user.findById(req.params.user).exec();
        await user.remove();
        return res.render('users', {
          section: 'Users',
          users: await m.user.find({ 'meta.status': 'active' }),
          cities: await m.city.find({ 'meta.status': 'active' })
        });
      } catch (error) {
        return next(error);
      }
    }

    return res.render('users', {
      section: 'Users',
      users: await m.user.find({ 'meta.status': 'active' }),
      cities: await m.city.find({ 'meta.status': 'active' })
    });
  },

  delete: async (req, res, next) => {
    try {
      const user = await m.user.findById(req.params.user).exec();
      await user.remove();
      return res.status(200).end();
    } catch (error) {
      return next(error);
    }
  }
};
