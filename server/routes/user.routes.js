const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const { protect, restrictTo } = require('../middleware/auth.middleware');

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      status: 'success',
      data: { user: user.getPublicProfile() }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching profile'
    });
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
router.put('/profile', protect, async (req, res) => {
  try {
    const { name, avatar, preferences } = req.body;

    const user = await User.findById(req.user.id);

    if (name) user.name = name;
    if (avatar) user.avatar = avatar;
    if (preferences) user.preferences = { ...user.preferences, ...preferences };

    await user.save();

    res.status(200).json({
      status: 'success',
      message: 'Profile updated successfully',
      data: { user: user.getPublicProfile() }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error updating profile'
    });
  }
});

// @desc    Add to watch history
// @route   POST /api/users/history
// @access  Private
router.post('/history', protect, async (req, res) => {
  try {
    const { movieId, title, poster, progress } = req.body;

    const user = await User.findById(req.user.id);

    // Remove if already exists
    user.watchHistory = user.watchHistory.filter(item => item.movieId !== movieId);

    // Add to beginning
    user.watchHistory.unshift({
      movieId,
      title,
      poster,
      progress: progress || 0,
      watchedAt: new Date()
    });

    // Keep only last 50 items
    if (user.watchHistory.length > 50) {
      user.watchHistory = user.watchHistory.slice(0, 50);
    }

    await user.save();

    res.status(200).json({
      status: 'success',
      message: 'Watch history updated',
      data: { watchHistory: user.watchHistory }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error updating watch history'
    });
  }
});

// @desc    Get watch history
// @route   GET /api/users/history
// @access  Private
router.get('/history', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      status: 'success',
      data: { watchHistory: user.watchHistory }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching watch history'
    });
  }
});

// @desc    Get all users (Admin only)
// @route   GET /api/users
// @access  Private/Admin
router.get('/', protect, restrictTo('admin'), async (req, res) => {
  try {
    const users = await User.find().select('-password');

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: { users }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching users'
    });
  }
});

module.exports = router;
