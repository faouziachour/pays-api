const universityService = require('../services/universityService')

const getAllUniversities = async (req, res) => {

    try {

        const { data } = await universityService.getAllUniversitiesSer(req.params.pays);
        res.render("index", {

            universities: data,
            pays: req.params.pays
        });
    }


    catch (ex) {
        res.status(500).send(ex.data);

    }

}

module.exports = getAllUniversities;
