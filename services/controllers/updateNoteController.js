const repositories = require('../../repositories');

const updateNote = async (req, res) => {
    const urlInfo = {
        protocol: (req.connection.encrypted ? 'https' : 'http') + ':',
        host: req.headers.host
    };
    const { id } = req.params;
    const noteDataToUpdate = req.body;

    const result = await repositories.updateNote(urlInfo, id, noteDataToUpdate);

    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

module.exports = updateNote;