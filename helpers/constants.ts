export const REQ_VALIDATION_TARGET = {
    BODY: 'body',
    QUERY: 'query',
    PARAMS: 'params'
};

export const MESSAGES = {
    SERV_CONNECTION_SUCCESS: 'Server started successfull',
    DB_CONNECTION_SUCCESS: 'Database connected successful',
    SERVER_CONNECTION_ERROR: 'Server connection error',
    SERVER_ERROR: 'Internal server error',
    DB_CONNECTION_ERROR:'Cannot create connection to DB',
    NOT_FOUND: 'Not Found',
    BAD_REQUEST: 'Bad Request',
    MISSING_FIELDS:'Missing fields',
    MISSING_NAME: 'Missing Name field',
    INVALID_NAME_VALUE: 'Invalid Name value',
    INVALID_NAME_LENGTH: 'Name value does not meet minimum length (2 charaсters)',
    MISSING_CONTENT: 'Missing Content field',
    INVALID_CONTENT_VALUE: 'Invalid Content value',
    INVALID_CONTENT_LENGTH: 'Content value does not meet minimum length (2 charaсters)',
    MISSING_CATEGORY: 'Missing Category field',
    INVALID_CATEGORY_VALUE: 'Invalid Category value',
    MISSING_STATUS: 'Missing Status field',
    INVALID_STATUS_VALUE: 'Invalid Status value',
 };

export const STATUS = {
    ACTIVE: 'active',
    ARCHIVED:'archived'
};

export const CATEGORIES = {
    TASK: 'task',
    RANDOM_THOUGHT: 'random thought',
    IDEA: 'idea',
    QUOTE:'quote'
};

export const ICONS_PATH = 'public/icons';

export const ICONS = {
    GLOCERY_STORE: 'local_grocery_store.svg',
    PSYHOLOGY: 'psychology.svg',
    QUOTE:'format_quote.svg',
    LIGHTBULB: 'lightbulb_outline.svg',
    DEFAULT:'default.svg'
};