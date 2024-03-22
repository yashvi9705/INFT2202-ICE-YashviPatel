const express = require('express');
const { homeView, aboutView } = require('../controllers/index.controller');

// Create an Express router object
const router = express.Router();

// Handle the '/' URL with a GET method and point it to the homeView function
router.get('/', homeView);
router.get('/about', aboutView);

// Export the router
module.exports = router;