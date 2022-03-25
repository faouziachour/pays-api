const axios = require('axios')

exports.getAllUniversitiesSer = async function (pays) {

    const LINK = 'http://universities.hipolabs.com/search?country=';
    try {

        const universities = await axios.get(LINK + pays)

        return universities;

    } catch (e) {
        throw Error('Error while Getting universities')

    }

}




