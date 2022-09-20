import React from "react";

// import the Testing Object Model
// 1. render(), this will be used to render the DOM in Memory
// 2. unmountComponentAtNode(), this will unload the component from DOM
// and the memory will be cleared 
import {render, unmountComponentAtNode} from 'react-dom';
// 3. ReactDOM, this is used to generate DOM Tree
import  ReactDOM  from "react-dom/client";
// 4. this will start iterating over the DOM in memory and test the DOM 
import { act } from "react-dom/test-utils";
// import the ompoennt being tested
import HelloTestComponent from "../components/componentfortest/HelloTestComponenty";

describe('The Test for React HelloTestComponent for UI',()=>{
    // define some objects
    let DOMContainer = null;
    let root = null;
    // THis will be executed for each Test Case under the current Test Suite
    beforeEach(()=>{
        // create a 'div' element in Memory so that DOM will be created in it
        DOMContainer = document.createElement('div');
        // Make this DOMContainer as root element for React's DOM Rendering
        root = ReactDOM.createRoot(DOMContainer);
    });

    // The Test Case
    it('the component must render without props',()=>{
        // act
        act(()=>{
            // render the component
            root.render(<HelloTestComponent/>)
        });
        // assert
        expect(DOMContainer.textContent).toBe('Hello, Mr. Unknown');
    });

    it('the component must render with props',()=>{
        // act
        act(()=>{
            // render the component
            root.render(<HelloTestComponent name={'Mahesh'}/>)
        });
        // assert
        expect(DOMContainer.textContent).toBe('Hello, Mr. Mahesh');
    });
    // cleanup
    afterEach(()=>{
        // Unmount the Component
        //unmountComponentAtNode(root);
        // free tye memory
        DOMContainer.remove();
        // reset the container
        DOMContainer = null;
    });

});

