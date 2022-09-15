import React, { useState } from "react";
import SelectContextComponent from "../reusablecomponents/selectcontextcomponent";
import SelectContextEventComponent from "../reusablecomponents/selectcontextevevtcomponent";
// importing DataContext
import { DataContext } from "../datacontext";

const EmployeeContextComponent=()=>{

    const [emp, setEmp] 
        = useState({EmpNo:0, EmpName:'', Designation:'', DeptName:'',Salary:0});
    const [employees, setEmps] = useState([]);

 const designations = ['Director', 'Manager', 'Lead', 'Staff'];
    // const  designations=null;
    const departments = ['Human Resource', 'Acounts', 'Sales', 'Store', 'Dispatch', 'Procurrement'];

    const clear=()=>{
        setEmp({EmpNo:0, EmpName:'', Designation:'', DeptName:'',Salary:0});
    };

    const save=()=>{
        // Mutate the array
        setEmps([...employees, emp]);
    };

    const getSelectedEmp=(e)=>{
        setEmp(e);
    }

    const getDesignation=(desig)=>{
        setEmp({...emp, Designation:desig});
    };


    const getDeptName=(dname)=>{
        setEmp({...emp, DeptName:dname});
    };

    return(
        <div className="container">
            <h3>The Employee Data Entry Form</h3>
            <div className="form-group">
                <label>EmpNo</label>
                {/* Using Object Mutation by updating the same object with new value
                for its property */}
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
                {/* Provide the Array Data 
                  PAss the 'setEmp' callback that will listen to the emitted
                  data from the SelectContextEventComponent*/}
                <DataContext.Provider value={{designations, getDesignation}}>
                     <SelectContextEventComponent></SelectContextEventComponent>
                </DataContext.Provider>
            </div>
            <div className="form-group">
                <label>DeptName</label>
                  {/* Provide the Array Data */}
                <DataContext.Provider value={{departments, getDeptName}}>
                     <SelectContextEventComponent></SelectContextEventComponent>
                </DataContext.Provider>
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
            {/* <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>
                            EmpNo
                        </th>
                        <th>
                            EmpName
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((e,idx)=>(
                            <tr key={idx}>
                                <td>
                                    {e.EmpNo}
                                </td>
                                <td>
                                    {e.EmpName}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> */}
            <table className="table table-bordered table-striped table-danger">
                <thead>
                    <tr>
                        {
                            Object.keys(emp).map((header,index)=>(
                                <th key={index}>{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((e,index)=>(
                            <tr key={index} onClick={()=>setEmp(e)}>
                                {
                                    Object.keys(emp).map((header,index)=>(
                                        <td key={index}>{e[header]}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );


};


export default EmployeeContextComponent;