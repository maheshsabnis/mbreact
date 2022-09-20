import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import components
import App from './App';
import FirstComponent from './components/firstcomponent/firstcomponent';
import ParentComponent from './components/parentchild/parentcomponent';
import EmployeeComponent from './components/employeecomponent/employeecomponent';
import EmployeeContextComponent from './components/employeecontextcomponent/employeecontextcomponent';
import ToggleComponent from './components/lifecyclecomponent/togglecomponent';
import UseEffectAjaxEmployeeComponent from './components/useeffectajaxcomponent/ajaxcomponent';
import SecureCallComponent from './components/securecallcomponent/securecallcomponent';
import ValidatorComponent from './components/validatorsdemo/validationcomponent';
import CustomHookUserComponent from './components/customhooks/cusomhookusercomponent';
import UseReducerCustomHookComponent from './components/usereducercomponent/statetransitioncomponent';
import ContainerErrorBoundaryComponent from './components/errorboundaries/usingerrorboundaries';
import ContainerComponent from './components/errorboundaries/simpleerrorcheckcomponent';

// for Routing
import {BrowserRouter} from 'react-router-dom';
import MainRoutingComponent from './components/routingapp/mainroutingcomponent';
// For Testing

import HelloTestComponent from './components/componentfortest/HelloTestComponenty';
import EventTestComponent from './components/componentfortest/eventtestcomponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const message = "I am from ROOT";
root.render(
  <React.StrictMode>
    {/* Component Mounting */}
    {/* <BrowserRouter>
     <MainRoutingComponent></MainRoutingComponent>
    </BrowserRouter> */}
    <EventTestComponent></EventTestComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
