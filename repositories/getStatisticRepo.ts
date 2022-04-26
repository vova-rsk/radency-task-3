import {nanoid} from 'nanoid';
import db from '../bin/server';
import createUrl from '../helpers/createUrl';

interface IInitEntry { 
    id: string;
    category: string;
    active: number;
    archived: number;
    iconUrl: object;
}

type Summary = IInitEntry[]; 

const getStatistic = async (urlHost:string) => { 

    const result = await db.query('SELECT * FROM notes');
    const notes = result.rows;

    if (!notes) { 
        return null;
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