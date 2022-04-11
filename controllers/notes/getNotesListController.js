const getNotesListController = async (req, res) => { 
    res.status(200).json({
        status: 'success',
        code: 200,
        result: 'get all'
    });
};

module.exports = getNotesListController;