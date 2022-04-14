const repositories = require('../../repositories');

const getNotesList = async (req, res) => {
    const urlInfo = {
        protocol: (req.connection.encrypted ? 'https' : 'http') + ':',
        host: req.headers.host
    };

    const result = await repositories.getNotesList(urlInfo);
    
    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

module.exports = getNotesList;