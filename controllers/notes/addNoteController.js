const services = require('../../services');

const addNoteController = async (req, res) => { 
    const urlInfo = {
        protocol: (req.connection.encrypted ? 'https' : 'http') + ':',
        host: req.headers.host
    };

    const result = await services.addNote(urlInfo, req.body);

    res.status(201).json({
        status: 'success',
        code: 201,
        result
    });
};

module.exports = addNoteController;