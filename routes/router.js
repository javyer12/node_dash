const express = require('express');
const {mainView, tableView, notificationView, userView,Typography} = require('../controllers/PageControllers');
const router = express.Router();

router.get('/', mainView);
router.get('/table', tableView);
router.get('/notification', notificationView);
router.get('/user', userView);
router.get('/typography', Typography);

module.exports = {
  routes: router
}