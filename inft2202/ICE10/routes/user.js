const express = require('express');
const { homeView, aboutView } = require('../controllers/userController');
const { formView } = require('../controllers/userController');

// Create an Express router object
const router = express.Router();

// Handle the '/' URL with a GET method and point it to the homeView function
router.get('/', homeView);
router.get('/about', aboutView);
router.get('/form', formView);

// Export the router
module.exports = router;