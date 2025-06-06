const User = require('../models/user');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const { email, name } = req.body;
  const updatedUser = await User.findByIdAndUpdate(req.user.id, { email, name }, { new: true });
  res.json(updatedUser);
};
