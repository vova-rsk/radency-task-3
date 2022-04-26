import path from 'path';
import { CATEGORIES, ICONS_PATH, ICONS } from '../helpers/constants';

const createIconPath = (category: string) => { 
    let currentIcon = null;

        switch (category) {
            case CATEGORIES.TASK:
                currentIcon = ICONS.GLOCERY_STORE;
                break;
            case CATEGORIES.RANDOM_THOUGHT:
                currentIcon = ICONS.PSYHOLOGY;
                break;
            case CATEGORIES.QUOTE:
                currentIcon = ICONS.QUOTE;
                break;
            case CATEGORIES.IDEA:
                currentIcon = ICONS.LIGHTBULB;
                break;
            default:
                currentIcon = ICONS.DEFAULT;
        }

    return path.join(ICONS_PATH, currentIcon);
};

export default createIconPath;
