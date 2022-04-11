const removeNoteController = async (req, res) => { 
    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'removed successfull'
    });
};

module.exports = removeNoteController;