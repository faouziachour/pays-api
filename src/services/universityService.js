const axios = require('axios')
const LINK = 'http://universities.hipolabs.com/search?country=';
exports.getAllUniversitiesSer = async function (pays) {
    try {

        const universities = await axios.get(LINK + pays)

        return universities;

    } catch (e) {
        throw Error('Error while Getting universities')

    }

}
