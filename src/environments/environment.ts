import {ProdEnvironment} from "./environment.prod";
import {DevEnvironment} from "./environment.dev"



export function getEnvironmentVariables() {
    if(process.env.NODE_ENV === 'production'){
        return ProdEnvironment
    }

    return DevEnvironment
}