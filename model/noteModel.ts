import { Schema, model } from 'mongoose';
import path from 'path';
import { CATEGORIES, STATUS, ICONS_PATH, ICONS } from '../helpers/constants';
import getIsoDateInterval from '../helpers/getDatesInterval';

const notesSchema = new Schema({
    name: {
        type: String,
        required: [true, 'category is required'],
    },
    category: {
        type: String,
        required: [true, 'category is required'],
        lowercase:true,
    },
    content: {
        type: String,
        required: [true, 'category is required'],
    },
    dates: {
        type: Array,
        required: [true, 'dates is required']
    },
    icon: {
        type: String
    },
    status: {
        type: String,
        lowercase:true,
        enum:['active', 'archived']
    }
}, { versionKey: false, timestamps: true });

notesSchema.pre('save', function (next) {
    if (this.isNew) {
        let currentIcon = null;

        switch (this.category) {
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
        this.status = STATUS.ACTIVE;
        this.icon = path.join(ICONS_PATH, currentIcon);
    }

    this.dates = getIsoDateInterval(this.content);
    next();
});

notesSchema.pre('updateOne', function(next) {
    const updateData = this._update;
    
    if (updateData.content) { 
        updateData.dates = getIsoDateInterval(updateData.content);
    }

    next();
});

const Note = model('note', notesSchema);

export default Note;