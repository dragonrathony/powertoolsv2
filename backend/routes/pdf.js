var express = require('express');
var router = express.Router();
const fs = require("fs");
// Invoice pdf viewer in sales
router.get("/", (req, res) => {
    var file = fs.createReadStream("." + req.query.path);
    file.pipe(res);
});

module.exports = router;
