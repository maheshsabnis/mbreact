import React from "react";

import {Routes, Route} from 'react-router-dom';
import CreateEmployeeComponent from "./createemployeecomponent";
import EmployeeListComponent from "./employeelistcomponent";
import LayoutComponent from "./lauoutcomponent";
import NotFoundComponent from "./notfoundcomponent";
import UpdateEmployeeComponent from "./updateemployeecomponent";

const MainRoutingComponent=()=>{
    return(
        <div className="container">
            <Routes>
                <Route path="/" element={<LayoutComponent/>}>
                     {/* The EmployeeListComponent will be loaded and mounted on dom
                       by default
                     */}
                    <Route index element={<EmployeeListComponent/>}/>
                    <Route path="/create" element={<CreateEmployeeComponent/>}/>
                    {/* The Route Parameters */}
                    <Route path="/edit/:empno" element={<UpdateEmployeeComponent/>}/>
                    {/* if path does not match then mound the NotFOundComponent */}
                    <Route path="*" element={NotFoundComponent}/>
                </Route>
            </Routes>
        </div>
    );
};

export default MainRoutingComponent;