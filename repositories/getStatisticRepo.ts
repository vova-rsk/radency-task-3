import {nanoid} from 'nanoid';
import createError from 'http-errors';
import Note from '../model';
import createUrl from '../helpers/createUrl';
import { MESSAGES } from '../helpers/constants';

interface IInitEntry { 
    id: string;
    category: string;
    active: number;
    archived: number;
    iconUrl: object;
}

type Summary = IInitEntry[]; 

const getStatistic = async (urlHost:string) => { 

    const notes = await Note.find().select({ updatedAt: 0 });

    if (!notes) { 
        throw createError(404, MESSAGES.NOT_FOUND);
    }

    const statistic=notes.reduce((summary:Summary, note) => {
        const { category, status, icon } = note;
        const existingEntry = summary.find(elem => elem.category === category);
    
        if (existingEntry) {
        status === 'active'
            ? existingEntry.active += 1
            : existingEntry.archived += 1;

        return summary;
        }

        const initEntry: IInitEntry = {
            id: nanoid(7),
            category: category,
            active: status === 'active' ? 1 : 0,
            archived: status === 'archived' ? 1 : 0,
            iconUrl: createUrl(urlHost, icon)
        };

        return [...summary, initEntry];
    }, []);

    return statistic;
};

export default getStatistic;