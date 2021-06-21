"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var node_cron_1 = __importDefault(require("node-cron"));
var moment_1 = __importDefault(require("moment"));
var scheduleController = __importStar(require("./Controller/scheduleController"));
var ScheduleRoutes_1 = __importDefault(require("./Routes/ScheduleRoutes"));
var app = express.default();
app.use(express.json());
app.use('/schedule', ScheduleRoutes_1.default);
node_cron_1.default.schedule('* * * * *', function () {
    var currentDate = Date.now();
    console.log(moment_1.default(currentDate).unix());
    console.log(moment_1.default(currentDate).add(1, 'minute').unix());
    scheduleController.getTasks(moment_1.default(currentDate).unix());
});
app.listen(9090, function () {
    console.log('App is listening on 9090');
});
app.get('/', function (req, res) {
    res.send('dfhfhg');
});
