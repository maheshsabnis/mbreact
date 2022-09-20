import React from "react";
import {render, unmountComponentAtNode} from 'react-dom';
import  ReactDOM  from "react-dom/client";
import { act } from "react-dom/test-utils";

import EventTestComponent from "../components/componentfortest/eventtestcomponent";

describe('The Suite For Testing React COmponent with Event',()=>{
    // define some objects
    let DOMContainer = null;
    let root = null;
    // THis will be executed for each Test Case under the current Test Suite
    beforeEach(()=>{
        // create a 'div' element in Memory so that DOM will be created in it
        DOMContainer = document.createElement('div');
      
        root = ReactDOM.createRoot(document); 

        console.debug(DOMContainer);
     
    });

    it('must toogel between save and update for button text on click, the div must toggel between true and false',
         async()=>{
        await act(async ()=>{
            root.render(<EventTestComponent/>);
        });

        

        // look for the button
        const button = DOMContainer.querySelector('button');
        // search for the div with class as '.dv'
        const div = DOMContainer.querySelector('dv');
        // initially the button MUST have text as 'Save' and div must have text as 'false'
        expect(button.innerHTML).toBe('Save');
        expect(div.innerHTML).toBe('false');
        // lets dispcteh the click event
        act(()=>{
            button.dispatchEvent(new MouseEvent("click", {bubbles:true}));
        });

         // after click the button MUST have text as 'Update' and div must have text as 'true'
         expect(button.innerHTML).toBe('Save');
         expect(div.innerHTML).toBe('false');

    });
});