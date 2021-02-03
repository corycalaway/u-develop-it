//pulls api routes together


const express = require('express');
const router = express.Router();

router.use(require('./voterRoutes'));
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;