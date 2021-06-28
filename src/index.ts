import * as express from 'express';
import cron from 'node-cron';
import moment from 'moment';
import * as scheduleController from './Controller/scheduleController';
import scheduleRoutes from './Routes/ScheduleRoutes';

const app  = express.default();

app.use(express.json());
app.use('/schedule',scheduleRoutes);

cron.schedule('* * * * *',()=>{
    var currentDate = Date.now();
    console.log(moment(currentDate).unix());
    scheduleController.getTasks(moment(currentDate).unix());
});

app.listen(9090,()=>{
    console.log('App is listening on 9090');
});

app.get('/',(req:express.Request,res:express.Response)=>{
    res.send('This is the API endPoint for cruspo Scheduler');
});