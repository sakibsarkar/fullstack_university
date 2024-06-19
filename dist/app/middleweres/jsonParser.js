"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParser = void 0;
const jsonParser = (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
};
exports.jsonParser = jsonParser;
