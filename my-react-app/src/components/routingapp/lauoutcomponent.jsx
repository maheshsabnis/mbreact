import React from "react";
import {Link, Outlet} from 'react-router-dom';
const LayoutComponent=()=>{

    return (
        <div className="container">
            <table className="table table-bordered table-striped tale-dark">
                <tbody>
                    <tr>
                        <td>
                            {/* the '/'  will map itself with the 'Route'
                            That has the 'index' property set on it*/} 
                            <Link to="/">List of Employees</Link>
                        </td>
                        <td>
                            <Link to='/create'>Create Employee</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            {/* Manage Mounting */}
            <Outlet/>
        </div>
    );
};

export default LayoutComponent;