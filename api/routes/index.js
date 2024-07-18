const middleware = require('@blocklet/sdk/lib/middlewares');
const router = require('express').Router();
const User = require('../models/user');

router.use('/user', middleware.user(), async (req, res) => {
  const { did } = req.query;

  if (!did) return res.status(404).json({ error: 'did empty' });

  const user = await User.findByPk(did);

  if (!user) return res.status(404).json({ error: 'User not found' });

  return res.json(user);
});

router.post('/profile', middleware.user(), async (req, res) => {
  const { name, email, phone, did } = req.body;

  const user = await User.findByPk(did);
  if (!user) {
    await User.create({ ...req.body });
  } else {
    await User.update(
      { name, email, phone },
      {
        where: { did },
      },
    );
  }
  return res.json({ msg: 'Ok' });
});

module.exports = router;
