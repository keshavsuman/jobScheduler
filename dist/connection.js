"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
exports.connection = mysql_1.default.createConnection({
    host: '13.235.42.176',
    user: 'cruspoAdmin',
    password: '#TonyStark3000',
    database: 'scheduler'
});
// connection.connect();
