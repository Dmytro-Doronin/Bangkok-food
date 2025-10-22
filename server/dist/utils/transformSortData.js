"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNum = exports.toBool = void 0;
const toBool = (v) => {
    return v === 'true' ? true : v === 'false' ? false : undefined;
};
exports.toBool = toBool;
const toNum = (v) => {
    return typeof v === 'string' && v.trim() !== '' ? Number(v) : undefined;
};
exports.toNum = toNum;
