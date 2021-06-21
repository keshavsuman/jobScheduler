"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var scheduleController = __importStar(require("../Controller/scheduleController"));
var scheduleRoutes = express_1.Router();
/**
 *  method POST
 *
 *  requestBody:{
*     "taskName":"",
*     "creationTimestamp":"",
*     "scheduledTimestamp":"",
*     "payload":"",
*     "taskType":"",
*     "scheduleType":"",
*     "calbackUrl":""
 *  }
 *
 */
scheduleRoutes.post('/schedule', scheduleController.createTask);
/**
 *  method post
 *
 *  requestBody{
 *      "taskType":"",
 *      "scheduledTimestamp":"",
 *      "payload":"",
 *      "callbackurl":"",
 *      "scheduleType":"",
 *  }
 *
 */
scheduleRoutes.post('/updateSchedule/:taskId', scheduleController.createTask);
scheduleRoutes.delete('/:taskId', scheduleController.createTask);
exports.default = scheduleRoutes;
