import axios from "axios";
class SecureService {

    async register(user){
        console.log(JSON.stringify(user));
        let response = await axios.post(
            'http://localhost:47962/api/Auth/Register',
            user,
            {
                headers:{
                    'Content-Type':'application/json'
                }
            }
        );
        return response;
    }
    async login(user){
        let response = await axios.post(
            'http://localhost:47962/api/Auth/Login',
            user,
            {
                headers:{
                    'Content-Type':'application/json'
                }
            }
        );
        return response;
    }
    // pass tne token in header
    async getdata(token){
        let response = await axios.get(
            'http://localhost:47962/api/Department',
            {
                headers: {
                    'AUTHORIZATION':`Bearer ${token}`    
                }
            }
        );
        return response;
    }


}

export default SecureService;