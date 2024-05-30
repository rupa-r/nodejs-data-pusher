const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/accounts', accountController.createAccount);
router.get('/accounts', accountController.getAccounts);
router.get('/accounts/:id', accountController.getAccount);
router.put('/accounts/:id', accountController.updateAccount);
router.delete('/accounts/:id', accountController.deleteAccount);

module.exports = router;