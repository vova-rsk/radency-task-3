const repositories = require('../../repositories');

const getNotesStatistic = async (req, res) => {
    const urlInfo = {
        protocol: (req.connection.encrypted ? 'https' : 'http') + ':',
        host: req.headers.host
    };

    const result = await repositories.getStatistic(urlInfo);
    
    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

module.exports = getNotesStatistic;