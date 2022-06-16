import axios from "axios";
import { getToken } from "../Auth/handleJWT";

export default function configureInterceptor(){
    axios.interceptors.request.use(
        function(config){
           const token=getToken();

           if(token){
            config.headers.Authentication=`bearer ${token}`;
           }
           return config;
        },
        function (error){
            return Promise.reject(error);
        }
    )
}


