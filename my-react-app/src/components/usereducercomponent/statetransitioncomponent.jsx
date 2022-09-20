import React,{useReducer, Fragment, useEffect} from "react";

import axios from "axios";

// 1. Defining an initial State Object

const initialState = {
    loading: '', // initial State for transition
    error: '', // error state for transition
    data:[]  // actual state object that will be updated
};

// 2. Defining a Reducer Object that will contain logic for state updates based 
// on dispatched actions
// the 'action' is a complex object that has various parameters
// but one parameter is always mandatory that is known as 'type'
const reducer=(state, action)=>{
    console.log('In Reducer');
    switch(action.type) {
        case 'DATA_FETCH_INITIATED':
              // update the state object
             return {...state, loading: 'call is initiated', error: ''};   
        case 'DATA_FETCH_SUCCESS':
              return {
                ...state, 
                loading: 'call is completed with success', 
                error:'',
                data: action.payload};  
        case 'DATA_FETCH_FAILED':
              return {
                ...state, loading: 'call completed with error', error:action.payload
              }              
        default: 
            return {...state};     
    }
};


// 3. A Custom Hook that will use useReducer to get the statet updated based on
// dispatched actions defined using the reducer function and perform state updates
// in stages aka state-transition

const useStateUpdater=(url)=>{
   console.log('In Custom Hook that is updating the state');

   // 3.a. use useReducer, that will have followijng
   // 3.a.1: The state to be updated based on state transition, stateData
   // 3.a.2: The Dispatch Object that will be responsible to handle transitions,
    // dispatch

    // useReducer will update 'stateData' from 'initaiState' using actions 
    // dispatched by 'reducer' using the 'distach' object

   const [stateData, dispatch] = useReducer(reducer, initialState);

   // 3.b. lets do the state transition

   useEffect(()=>{
    // 3.b.1: start initilization by dispatching the 'DATA_FETCH_INITIATED'
     dispatch({type: 'DATA_FETCH_INITIATED'});   
     // 3.b.2: Start performing external calls
     axios(url)
        .then((response)=>{
            // 3.b.3: get the respose from the service
            return response.data;
        })
        .then((json)=>{
            // 3.b.4: dispatch the success action and pass the payload to state
            dispatch({type: 'DATA_FETCH_SUCCESS', payload:json});
        })
        .catch((error)=>{
            // 3.b.5: for error dispatch the Failed action with error as payload
            dispatch({type: 'DATA_FETCH_FAILED', payload: error.message});
        });
   },[]);

   // return the final state
   return stateData; 

};


// 4. The actual component 

const UseReducerCustomHookComponent=()=>{
    console.log('In Component');

    const state = useStateUpdater("http://localhost:47962/api/Employee");

     return (
        <Fragment>
            <h2>Using the Custom Reducer</h2>
            <Fragment>
                
                   <div>
                      {
                        JSON.stringify (state.loading)
                      }
                   </div>
                   <br/>
                    <div>
                        {
                           JSON.stringify (state.data)
                        }
                    </div>
                    <br/>
                    <div>
                        {
                           JSON.stringify (state.error)
                        }
                    </div>
            </Fragment>
        </Fragment>
     );
    
};

export default UseReducerCustomHookComponent;