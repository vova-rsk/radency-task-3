const { Schema, model } = require('mongoose');
const { CATEGORIES } =require('../../utils/constants');
const getDateIntervalFromContent = require('../../utils/getDatesIntervalFromContent');

const notesSchema = new Schema({
    name: {
        type: String,
        required: [true, 'category is required']
    },
    category: {
        type: String,
        required: [true, 'category is required']
    },
    content: {
        type: String,
        required: [true, 'category is required']
    },
    dates: {
        type: Array,
        required: [true, 'dates is required']
    },
    icon: {
        type: String
    }
}, { versionKey: false, timestamps: true });

notesSchema.pre('save', { document: true }, function (next) {
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

        this.icon = path.join('icons', currentIcon);
    }
    
    this.dates = getDateIntervalFromContent(doc.content);
    next();
});

const Notes = model('note', notesSchema)

module.exports = Notes