import * as mongoose from 'mongoose'
import * as express from "express";
import { getEnvironmentVariables } from './environments/environment';
import UserRouter from './routers/UserRouter';
import * as bodyParser from 'body-parser'




export class Server{
    public app: express.Application = express();
    
    constructor(){
        this.setConfigs();
        this.setRoutes();
        this.error404Handler();
        this.handlerErrors();
    }

    setConfigs(){
        this.connectMongoDB();
        this.configureBodyParser();
    }

    connectMongoDB(){
        mongoose.connect(getEnvironmentVariables().db_uri )
        .then(() => {
          console.log('Connected to mongodb.');
        });
        
    }

    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    setRoutes(){
        this.app.use('/api/user', UserRouter);
    }

error404Handler() {
    this.app.use((req,res) => {
        res.status(404).json({
            message: 'Not found',
            status_code: 404
        });
    })
}

handlerErrors() {
    this.app.use((error,req,res,next) => {
        const errorStatus = req.errorStatus || 500;
        res.status(404).json({
            message: error.message || 'something went wrong. Please try again!',
            status_code: 422
        });
    })
}
   

}