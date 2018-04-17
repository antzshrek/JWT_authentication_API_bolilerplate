const express = require('express');
const router = express.Router();

const apiRoutes = require('./api/index');

router.get('/', (req, res) => {
    res.json({status: 200, message:'Trust me, you made it! Best regards from Antz'});
});

router.use('/api', apiRoutes);
module.exports = router;