const { getAllUniversitiesSer, getUniversitiesByCountrySer } = require('../services/universityService')

const getAllUniversities = async (req, res) => {
    try {

        const { data } = await getAllUniversitiesSer(req.params.pays);
        res.render("index", {

            universities: data,
            pays: req.params.pays
        });
    }
    catch (ex) {
        res.status(500).render('error500');
    }
}

const getUniversitiesByCountry = async (req, res) => {
    try {

        const { data } = await getAllUniversitiesSer(req.body.pays);
        res.render("index", {
            universities: data,
            pays: req.body.pays
        });
    }
    catch (ex) {
        res.status(500).render('error500');
    }
}

module.exports = { getAllUniversities, getUniversitiesByCountry };
