const express = require('express')
const getAllUniversities = require('../controllers/universityController')
const router = express.Router()

const app = express();

app.set("view engine", "ejs");


router.get('/:pays', getAllUniversities);
module.exports = router