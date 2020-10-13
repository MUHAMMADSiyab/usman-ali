const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Students get route");
})

module.exports = router;