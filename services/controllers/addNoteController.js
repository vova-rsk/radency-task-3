const repositories = require('../../repositories');

const addNote = async (req, res) => { 
    const urlInfo = {
        protocol: (req.connection.encrypted ? 'https' : 'http') + ':',
        host: req.headers.host
    };

    const result = await repositories.addNote(urlInfo, req.body);

    res.status(201).json({
        status: 'success',
        code: 201,
        result
    });
};

module.exports = addNote;