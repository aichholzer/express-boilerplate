const m = require('../models');

module.exports = {
  read: async (req, res) => {
    if (req.params.user) {
      return res.send(await m.city.findById(req.params.user));
    }

    return res.render('cities', {
      section: 'Cities',
      cities: await m.city.find({ 'meta.status': 'active' })
    });
  },

  create: async (req, res) => {
    const user = await m.city.create(req.body);
    return res.render('cities', user);
  },

  delete: async (req, res) => {
    const user = await m.city.findById(req.params.user).exec();
    await user.remove();
    return res.status(200).end();
  }
};
