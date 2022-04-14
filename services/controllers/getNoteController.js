const repositories = require('../../repositories');

const getNote = async (req, res) => {
    const urlInfo = {
        protocol: (req.connection.encrypted ? 'https' : 'http') + ':',
        host: req.headers.host
    };
    const { id } = req.params;

    const result = await repositories.getNote(urlInfo, id);
    
    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

module.exports = getNote;