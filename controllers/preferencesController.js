const Preference = require('../models/Preference');

exports.savePreferences = async (req, res) => {
  const { theme, layout } = req.body;
  const pref = await Preference.findOneAndUpdate(
    { userId: req.user.id },
    { theme, layout },
    { upsert: true, new: true }
  );
  res.json(pref);
};

exports.getPreferences = async (req, res) => {
  const pref = await Preference.findOne({ userId: req.user.id });
  res.json(pref);
};

exports.getDashboardSummary = (req, res) => {
  res.json({
    team: 5,
    projects: 3,
    notifications: 7
  });
};
