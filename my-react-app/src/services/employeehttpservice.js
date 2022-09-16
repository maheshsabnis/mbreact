import axios from 'axios';

class EmployeeHttpService {
    constructor(){
        this.url = "http://localhost:47962/api/Employee";
    }

    async getData(){
       let response = await axios.get(this.url);
       return response;  
    }
    async getDataById(id){
        let response = await axios.get(`${this.url}/${id}`);
        return response;
    }
    async postData(emp){
        let response =  await axios.post(this.url, emp, {
             headers: {
                'Content-Type':'application/json'
             }   
        });
        return response;
    }
    async putData(id,emp){
        let response =  await axios.put(`${this.url}/${id}`, emp, {
            headers: {
               'Content-Type':'application/json'
            }   
       });
       return response;
    }
    async deleteData(id){
        let response = await axios.delete(`${this.url}/${id}`);
        return response;
    }


}

export default EmployeeHttpService;