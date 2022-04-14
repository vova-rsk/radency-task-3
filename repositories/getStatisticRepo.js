const {nanoid} = require('nanoid');
const createError = require('http-errors');
const Note = require('../model');
const createUrl = require('../helpers/createUrl');
const { MESSAGES } = require('../helpers/constants');

const getStatistic = async (urlInfo) => { 

    const notes = await Note.find().select({ updatedAt: 0 });

    if (!notes) { 
        throw createError(404, MESSAGES.NOT_FOUND);
    }

    const statistic=notes.reduce((summary, note) => {
        const { category, status, icon } = note;
        const existingEntry = summary.find(elem => elem.category === category);
    
        if (existingEntry) {
        status === 'active'
            ? existingEntry.active += 1
            : existingEntry.archived += 1;

        return summary;
        }

        const initEntry = {
            id: nanoid(7),
            category: category,
            active: status === 'active' ? 1 : 0,
            archived: status === 'archived' ? 1 : 0,
            iconUrl: createUrl(urlInfo, icon)
        };

        return [...summary, initEntry];
    }, []);

    return statistic;
};

module.exports = getStatistic;