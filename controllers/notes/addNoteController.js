const addNoteController = async (req, res) => { 

    res.status(201).json({
        status: 'success',
        code: 201,
        result: 'add one'
    });
};

module.exports = addNoteController;