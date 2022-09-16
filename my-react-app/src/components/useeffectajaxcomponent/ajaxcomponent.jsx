import React, {useState, useEffect, Fragment} from "react";
import EmployeeHttpService from "../../services/employeehttpservice";

const UseEffectAjaxEmployeeComponent=()=>{
    const [employees,setEmps] = useState([]);
    const [emp, setEmp] 
    = useState({EmpNo:0, EmpName:'', Designation:'', Salary:0,DeptNo:0});
    const [statusMessage, setStatusMessage] = useState('');

    // define an instance of the EmployeeHttpService

    const serv =  new EmployeeHttpService();

    // use the 'useEffect()' to make the call  
    // after the  component is in rendering and mounting process
    useEffect(()=>{
        loadData();
    }, []); // The dependency list Parameter that 
            // will detect the state change in out case its 'employees'
            // THis will stop and execution of useEffect() 


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

    const postData=()=>{
        let e = {
            EmpNo:9001, EmpName:'Kumar', Designation: 'Manager', Salary:40000, DeptNo:10
        };
        serv.postData(e)
            .then((response)=>{
                setEmps([...employees, response.data]);
                setStatusMessage("Data is posted succsessfully");
            })
             .catch((error)=>{
                setStatusMessage(error);
             });
    };
    const putData=()=>{
        let e = {
            EmpNo:9001, EmpName:'Kishor Kumar', Designation: 'Manager', Salary:40000, DeptNo:20
        };
        serv.putData(9001,e)
            .then((response)=>{
                setEmps([...employees, response.data]);
                setStatusMessage("Data is updated succsessfully");
            })
             .catch((error)=>{
                setStatusMessage(error);
             });
    };
    const deleteData=()=>{
         
        serv.deleteData(9001)
            .then((response)=>{
                setStatusMessage("Data is deleted succsessfully");
            })
             .catch((error)=>{
                setStatusMessage(error);
             });
    };

    return(
         <Fragment>
            <h2>REST API Calls</h2>
            <table className="table table-bordered table-striped table-danger">
                <tbody>
                    <tr>
                        <td>
                            <button className="btn btn-primary" onClick={loadData}>Get</button>
                        </td>
                        <td>
                            <button className="btn btn-success" onClick={postData}>Post</button>
                        </td>
                        <td>
                            <button className="btn btn-warning" onClick={putData}>Put</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={deleteData}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <strong>
              {statusMessage}
            </strong> 
            <br/>
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
                                    
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* {JSON.stringify(employees)} */}
         </Fragment>
    );
};

export default UseEffectAjaxEmployeeComponent;