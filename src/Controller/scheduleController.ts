import {connection} from '../connection';
import { Task } from '../Interfaces/taskInterface';
import axios from 'axios';
import {Request,Response} from 'express';
import moment from 'moment';

export async function createTask(req:Request,res:Response){
    try {
        
        var creationTimestamp = moment(Date.now()).unix();
        
        var query =  "INSERT INTO tasks(taskName,creationTimestamp,scheduledTimestamp,payload,taskType,callbackUrl,scheduleType) value ?";
        
        var arr = [["EMAIL",creationTimestamp,req.body.scheduleTimestamp,req.body.payLoad,req.body.taskType,req.body.apicallback,req.body.scheduleType]];
        connection.query(query,[arr],(err,result,fields)=>{
            if(err){
                res.status(401).send(err);
            }
            else{
                res.status(201).send('TASK_SCHEDULED');
            }
        });
    } catch (error) {
        res.send(error.message);
    }
}

export async function getTasks(timestamp:number){
    var query = "SELECT * FROM tasks WHERE scheduledTimestamp = ?";
    connection.query(query,[timestamp],(err,result:Array<Task>,fields)=>{
        if(err)
        {
            console.log(err.message);
        }else{
            result.forEach(async (task)=>{
                try {
                    var response = await axios.post(task.callbackUrl,{
                        'payload':task.payload
                    },
                    {
                        headers:{
                            'Content-Type':'application/json'
                        }  
                    });
                    
                    if(response.status!=200)
                    {
                        
                    }
                } catch (error) {
                    console.log(error.message);
                    
                }
            });
        }
    });
}

export function reschedule(taskId:number,data:Task){
    try {
    var query =  "UPDATE task (taskType,scheduledTimestamp,payload,callbackurl,scheduleType) value ? WHERE taskId = ?";

    var arr = [[data.taskType,data.scheduledTimestamp,data.payload,data.callbackUrl,data.scheduleType]];
    connection.query(query,[arr,taskId],(err,result,fields)=>{
        if(err){
            console.log(err);
            return err;
        }
        else{
            console.log(result);
            return 'TASK_SCHEDULED';
        }
    });
    } catch (error) {
        console.log(error.message);
    }
}
