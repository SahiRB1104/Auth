const express = require('express');
const { savePreferences, getPreferences, getDashboardSummary } = require('../controllers/preferencesController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/preferences', auth, savePreferences);
router.get('/preferences', auth, getPreferences);
router.get('/dashboard-summary', auth, getDashboardSummary);

module.exports = router;
