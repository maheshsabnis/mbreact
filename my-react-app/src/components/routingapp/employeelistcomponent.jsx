import React, {useState,useEffect, Fragment} from "react";
import {Link} from 'react-router-dom';
import EmployeeHttpService from "../../services/employeehttpservice";
const EmployeeListComponent=()=>{
    const [employees,setEmps] = useState([]);
    const [statusMessage, setStatusMessage] = useState('');
    const serv =  new EmployeeHttpService();
 
    useEffect(()=>{
        loadData();
    }, []); 
         
    const loadData=()=>{
        serv.getData()
            .then((response)=>{
                // Read the response
                setEmps(response.data);
                setStatusMessage("Data is received succsessfully");

            })
            .catch((error)=>{
                setStatusMessage(error);
             });
    };


    return(
        <Fragment>
           <h2>List of Employees</h2>
           <strong>
             {statusMessage}
           </strong> 
          
           <table className="table table-bordered table-striped table-danger">
               <thead>
                   <tr>
                        <th>
                           EmpNo
                        </th>
                        <th>
                           EmpName
                        </th>
                        <th>
                           Designation
                        </th>
                        <th>
                           Salary
                        </th>
                        <th>
                           DeptNo
                        </th>
                        <th></th>
                   </tr>
               </thead>
               <tbody>
                   {
                       employees.map((e,index)=>(
                           <tr key={index}>
                                   
                    <td>{e.EmpNo}</td>
                    <td>{e.EmpName}</td>
                    <td>{e.Designation}</td>
                    <td>{e.Salary}</td>
                    <td>{e.DeptNo}</td>
                    <td>
                            <button className="btn btn-warning">
                                 <Link to={`/edit/${e.EmpNo}`}>Edit</Link>
                            </button>
                    </td>
                           </tr>
                       ))
                   }
               </tbody>
           </table>
          
        </Fragment>
   );

};

export default EmployeeListComponent;