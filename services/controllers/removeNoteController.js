const repositories = require('../../repositories');

const removeNote = async (req, res) => {
    const { id } = req.params;
    
    await repositories.removeNote(id);
    
    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'removed successfull'
    });
};

module.exports = removeNote;