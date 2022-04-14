const { Schema, model } = require('mongoose');
const path = require('path');
const { CATEGORIES, STATUS } =require('../helpers/constants');
const getIsoDateInterval = require('../helpers/getDatesInterval');

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
                currentIcon = 'local_grocery_store.svg';
                break;
            case CATEGORIES.RANDOM_THOUGHT:
                currentIcon = 'psychology.svg';
                break;
            case CATEGORIES.QUOTE:
                currentIcon = 'format_quote.svg';
                break;
            case CATEGORIES.IDEA:
                currentIcon = 'lightbulb_outline.svg';
                break;
            default:
                currentIcon = 'default.svg';
        }
        this.status = STATUS.ACTIVE;
        this.icon = path.join('icons', currentIcon);
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

module.exports = Note;