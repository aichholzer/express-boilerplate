// Boilerplate
const m = attract('core/models');

module.exports = {
  create: async (req, res, next) => {
    try {
      const city = await m.city.create(req.body);
      return res.render('cities', {
        section: 'Cities',
        cities: await m.city.find({ 'meta.status': 'active' })
      });
    } catch (error) {
      return next(error);
    }
  },

  read: async (req, res, next) => {
    if (req.params.city) {
      try {
        const city = await m.city.findById(req.params.city).exec();
        await city.remove();
        return res.render('cities', {
          section: 'Cities',
          cities: await m.city.find({ 'meta.status': 'active' })
        });
      } catch (error) {
        return next(error);
      }
    }

    return res.render('cities', {
      section: 'Cities',
      cities: await m.city.find({ 'meta.status': 'active' })
    });
  },

  delete: async (req, res, next) => {
    try {
      const city = await m.city.findById(req.params.city).exec();
      await city.remove();
      return res.status(200).end();
    } catch (error) {
      return next(error);
    }
  }
};
