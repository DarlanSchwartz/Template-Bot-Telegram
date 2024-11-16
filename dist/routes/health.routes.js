"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRouter = void 0;
const express_1 = require("express");
const healthRouter = (0, express_1.Router)();
exports.healthRouter = healthRouter;
healthRouter.all('/health', (req, res) => {
    res.status(200).send('OK');
});
