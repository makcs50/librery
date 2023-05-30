const express = require('express');
const clientController = require('../controllers/client.Controller');
const router = express.Router();


router.get('/client', clientController.getAllClient);
router.post('/client', clientController.addClient);
router.patch('/client/admin/:blockId', clientController.blockClient);



module.exports = router;

