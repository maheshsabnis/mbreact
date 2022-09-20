import React, { useState,useEffect } from "react";
import {useNavigate,useParams} from 'react-router-dom';
import EmployeeHttpService from './../../services/employeehttpservice';

import SelectComponent from "../reusablecomponents/selectcomponent";

const UpdateEmployeeComponent=()=>{

    const [emp, setEmp] 
        = useState({EmpNo:0, EmpName:'', Designation:'', DeptNo:0,Salary:0});
     
    const [message, setMessage] = useState('');    
    const serv = new EmployeeHttpService();

    const designations = ['Director', 'Manager', 'Lead', 'Staff'];

    const departments = [10,20,30,40,50,60];

    // Read the Route URL with pareameter and fetch the Employee Data

    // get the parameter data from the Route URL 

    const params = useParams();

    const id = parseInt(params.empno);

    // define a navigation

    const navigate = useNavigate();

    useEffect(()=>{
        // call the method from service asunchronously and read
        // Employee data based on id
        // The reason behind the loadData() function is that
        // we want to make sure that the useEffect() will call
        // the method from the service and get the data
        async function loadData(){
            try {   
                let response = await serv.getDataById(id);
                setEmp(response.data);    
            }catch(e) {
               setMessage(e.message) ;    
            }
        }
        loadData();
    },[]);



    const clear=()=>{
        setEmp({EmpNo:0, EmpName:'', Designation:'', DeptName:'',Salary:0});
    };

    const save = async()=>{
         try {
            let response = await serv.putData(id,emp);
            navigate("/");
         }catch(ex){
            setMessage(ex.message) ;    
         }      
    };

    const getSelectedEmp=(e)=>{
        setEmp(e);
       
    }


    return(
        <div className="container">
            <h3>The Employee Data Entry Form for Update</h3>
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
                <label>DeptName</label>
                
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
            <strong>
                {message}
            </strong>
            
        </div>
    );


};


export default UpdateEmployeeComponent;