const updateNoteController = async (req, res) => { 
    res.status(200).json({
        status: 'success',
        code: 200,
        result: 'update one'
    });
};

module.exports = updateNoteController;