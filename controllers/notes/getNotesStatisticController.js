const { getStatistic } = require('../../services');

const getNotesStatisticController = async (req, res) => {
    const urlInfo = {
        protocol: (req.connection.encrypted ? 'https' : 'http') + ':',
        host: req.headers.host
    };

    const result = await getStatistic(urlInfo);
    
    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

module.exports = getNotesStatisticController;