import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import SelectComponent from "../reusablecomponents/selectcomponent";
import EmployeeHttpService from "../../services/employeehttpservice";

const CreateEmployeeComponent=()=>{

    const [emp, setEmp] 
        = useState({EmpNo:0, EmpName:'', Designation:'', DeptNo:'',Salary:0});
     
    const [message,setMessage] = useState('');    
    // define a navigation object
    const navigate = useNavigate();
    const serv = new EmployeeHttpService();

    const designations = ['Director', 'Manager', 'Lead', 'Staff'];

    const departments = [10,20,30,40,50,60];

    const clear=()=>{
        setEmp({EmpNo:0, EmpName:'', Designation:'', DeptName:'',Salary:0});
    };

    const save=()=>{
       serv.postData(emp)
           .then((resp)=>{
              setMessage('Add Success');
              // navigate to the EMployeeListComponent
              navigate("/");
           })
           .catch((error)=>{
            setMessage(error.message)
           }); 
    };

    const getSelectedEmp=(e)=>{
        setEmp(e);
       
    }


    return(
        <div className="container">
            <h3>The Employee Data Entry Form</h3>
            <div className="form-group">
                <label>EmpNo</label>
                
                <input type="number" className="form-control"
                 value={emp.EmpNo}
                  onChange={(evt)=>setEmp({...emp, EmpNo:parseInt(evt.target.value)})}/>
            </div>
            <div className="form-group">
                <label>EmpName</label>
                <input type="text" className="form-control"
                value={emp.EmpName}
                onChange={(evt)=>setEmp({...emp, EmpName:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Designation</label>
                
                <SelectComponent dataSource={designations}
                 valueProperty={emp.Designation}
                 emitData={(value)=>setEmp({...emp, Designation:value})}></SelectComponent>
            </div>
            <div className="form-group">
                <label>DeptNo</label>
                
                <SelectComponent dataSource={departments}
                 valueProperty={emp.DeptNo}
                 emitData={(value)=>setEmp({...emp, DeptNo:value})}></SelectComponent>
            </div>
            <div className="form-group">
                <label>Salary</label>
                <input type="number" className="form-control"
                value={emp.Salary}
                onChange={(evt)=>setEmp({...emp, Salary:parseInt(evt.target.value)})}/>
            </div>
            <div className="form-group">
                 <button className="btn btn-warning"
                  onClick={clear}>Clear</button>
                 <button className="btn btn-success"
                 onClick={save}>Save</button>
            </div>
            <hr/>
            
        </div>
    );


};


export default CreateEmployeeComponent;