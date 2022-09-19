import React, {Fragment, useState} from "react";
import SecureService from "../../services/secureservice";
const SecureCallComponent=()=>{

    const [response, setResponse]=useState({Message:''});
    const [data,setData]= useState([]);

    const serv = new SecureService();

    const registerUser=()=>{
        serv.register({
            "Email": "user1@msit.com",
            "Password": "P@ssw0rd_"
          }).then((resp)=>{
            setResponse({Message:resp.data.Message});
          }).catch((error)=>{
            setResponse({Message:error});
          });
    };

    const authUser=()=>{
        serv.login({
            "UserName": "user1@msit.com",
            "Password": "P@ssw0rd_"
          }).then((resp)=>{
            setResponse({Message:resp.data.Message});
            sessionStorage.setItem('token', resp.data.Message);
          }).catch((error)=>{
            setResponse({Message:error});
          });
    };

    const getDeptData=()=>{
        const token = sessionStorage.getItem('token');
        serv.getdata(token).then((resp)=>{
            setData(resp.data);
          }).catch((error)=>{
            setResponse({Message:error});
          });;
    };

    return(

        <Fragment>
            <h3>Calling a Secure REST API</h3>

            <div className="btn-group">
                <button  className="btn btn-primary"
                 onClick={registerUser}>Register</button>
                <button  className="btn btn-success"
                onClick={authUser}>Login</button>
                <button  className="btn btn-warning"
                onClick={getDeptData}>Get Data</button>
            </div>
            <br/>
            {response.Message}
            <hr/>
            Received Data: <br/>
            {
                JSON.stringify(data)
            }

        </Fragment>
    );

};

export default SecureCallComponent;