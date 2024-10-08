const express = require('express');
const {mainView, tableView, notificationView} = require('../controllers/PageControllers');
const router = express.Router();

router.get('/', mainView);
router.get('/table', tableView);
router.get('/notification', notificationView);

module.exports = {
  routes: router
}