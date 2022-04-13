const REQ_VALIDATION_TARGET = {
    BODY: 'body',
    QUERY: 'query',
    PARAMS: 'params'
};

const MESSAGES = {
    SERV_CONNECTION_SUCCESS: 'Server started successfull',
    DB_CONNECTION_SUCCESS: 'Database connected successful',
    SERVER_CONNECTION_ERROR: 'Internal server error',
    DB_CONNECTION_ERROR:'Cannot create connection to DB',
    NOT_FOUND: 'Not Found',
    BAD_REQUEST: 'Bad Request',
    MISSING_NAME: 'Missing Name field',
    INVALID_NAME_VALUE: 'Invalid Name value',
    INVALID_NAME_LENGTH: 'Name value does not meet minimum length (2 charaсters)',
    MISSING_CONTENT: 'Missing Content field',
    INVALID_NAME_VALUE: 'Invalid Content value',
    INVALID_NAME_LENGTH: 'Content value does not meet minimum length (2 charaсters)',
    MISSING_CATEGORY: 'Missing Category field',
    INVALID_CATEGORY_VALUE: 'Invalid Category value',
 };

const STATUS = {
    ACTIVE: 'active',
    ARCHIVED:'archived'
};

const CATEGORIES = {
    TASK: 'Task',
    RANDOM_THOUGHT: 'Random thought',
    IDEA: 'Idea',
    QUOTE:'Quote'
};

module.exports = {
    REQ_VALIDATION_TARGET,
    MESSAGES,
    STATUS,
    CATEGORIES
};