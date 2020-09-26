var express = require("express");
var router = express.Router();

router.get('/', function(req, res, next) {
    var a = 3+3;
res.status(200).send("API is working properly");
});
// res.send(body, status): Use res.status(status).send(body) instead routes\testAPI.js:6:5

module.exports = router;
