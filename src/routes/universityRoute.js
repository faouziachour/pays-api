const express = require('express')
const { getAllUniversities, getUniversitiesByCountry } = require('../controllers/universityController')
const router = express.Router()

const app = express();

app.set("view engine", "ejs");

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.get("/universite", function (req, res) {
    res.render("form");
});

router.post('/universite', getUniversitiesByCountry)

router.get('/:pays', getAllUniversities);
module.exports = router
