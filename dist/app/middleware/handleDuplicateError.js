"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (error) => {
    const errors = [
        {
            path: Object.keys(error.keyPattern)[0],
            message: `${Object.keys(error.keyPattern)[0]} is already exists`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Duplicate Entry',
        errorMessages: errors,
    };
};
exports.default = handleDuplicateError;
