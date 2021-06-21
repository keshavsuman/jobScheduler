import {Router} from 'express';
import * as scheduleController from '../Controller/scheduleController';

const  scheduleRoutes = Router();

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
scheduleRoutes.post('/schedule',scheduleController.createTask);
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

scheduleRoutes.post('/updateSchedule/:taskId',scheduleController.createTask);

scheduleRoutes.delete('/:taskId',scheduleController.createTask);


export default scheduleRoutes;