import * as express from 'express';

const app  = express();
app.use(express.json());

app.listen(9090,()=>{
    console.log('App is listening on 9090');
});

app.get('/',(req:express.Request,res:express.Response)=>{
    console.log('sfghdgf');
    res.send('dfhfhg');
});