const { removeNote } = require('../../services');

const removeNoteController = async (req, res) => {
    const { id } = req.params;
    
    await removeNote(id);
    
    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'removed successfull'
    });
};

module.exports = removeNoteController;