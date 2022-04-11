const getNotesStatistics = async (req, res) => { 
    res.status(200).json({
        status: 'success',
        code: 200,
        result: 'get stats'
    });
};

module.exports = getNotesStatistics;