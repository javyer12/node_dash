const express = require('express');
const {mainView, tableView, notificationView, userView,Typography, Icons,Maps,RTL, upgrade} = require('../controllers/PageControllers');
const router = express.Router();

router.get('/', mainView);
router.get('/icons', Icons);
router.get('/maps', Maps);
router.get('/table', tableView);
router.get('/notification', notificationView);
router.get('/user', userView);
router.get('/typography', Typography);
router.get('/rtl', RTL);
router.get('/upgrade', upgrade);

module.exports = {
  routes: router
}