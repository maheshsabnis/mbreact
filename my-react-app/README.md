# React Application

1. Creating React App
    - Install the React Comman-Line-Interface (CLI)
    - npm install --global create-react-app
        - The Tenplate recommnded by the Facebook for production based React App
    - Alternatively the custom react configuration can be created using WebPack
        -     https://www.webnethelper.com/2021/10/reactjs17x-creating-application-with.html
    - Creating a Project using create-react-app
        - create-react-app [PROJECT-NAME]    
2. Concepts
    - Component
        - w3c concept of 'WebComponent'
            - WebComponent to create a re-usable HTML UI elements
            - Create a object with UI + Data Models (aka Properties) + Behavior (Events + Methods)
            - WebComponent Encapsulate the UI updates based on property update caused because of events and methods
3. Components in React
    - Class Components (From React 16.8 onwards, the use is stopped)
        - The initial approach to create a re-usable UI 
        - The class derived from 'Component<P,S>' base class
            - The 'P' is a 'props' object that is used to accepot data from Parent Component
                - The 'props' is an 'immutable' object that has read-only properties of which value is set by the Parent Component
                - The Data is maintained from Parent to child component as well as from hild to parent component
            - The 'S' is a 'state' object, this is a local state (aka data) of the component
                - The data for 'state' properties is limitted only for the current or containing component aka within the scope of component
        - The Component<P,S> bass class defines Lifecycle methods those MUST be implemeneted by the child component
            - The 'render()' method (Mandatory)
                   - this returns the HTML DOM that isn loaded in browser when the component is loaded in browser
            - The 'constructor()' is mandatory to define the 'state' object
                - this.state = {};
            - The 'componentDidMount()' (Optional)
                - This is used only when the class component makes the external REST API Calls or perform heavy-load operations     
            - componentWillUnmount() (optional)
                - Used when the component is removed from the DOM 
                - If global events (mouseleave, kyboard events, etc)  are explicitly to be killed by the code then this is mandatory method
        - class component syntax
```` javascript
     export class MyComponent extends Component {
         constructor(props){
            super(props);
            // define state
            this.state = {
                 S1:V1,
                 ....   
            };
         }

         render(){
            return (
                <HTML/>
            );
         }   
     }

````


    - Functional Components, (Recommended by Facebook from Reat 16.8+) 
        - They are the JavaScript functions those returns HTML DOM     
        - They uses 'props'  a standard React object to accept data from parent component
        - They uses 'React-Hooks' to work for State Management   
        - Three Types of Functional COmponents
            - The Component that retuns HTML
```` javascript
     export function MyComponent(props) {
        ..... some methods    
       
        return (
           <HTML/>
        );

     }   
````            
            - Note: props is not mamndatory, but can be used if the component is child component 

            - The Component as JavaScript Functional Expression
```` javascript
    export const MyComponent=(props)=>{
         ..... some methods

         return (
           <HTML/>
        );   

    };
````
            - The Component that define an HTML UI, this does not return anything

```` javascript
     export const MyComponent=()=>({
        <HTML/>
     });       
````

    - React Hooks
        - They are standard functions provided by React for
            - State management in React Functional Components
                - useState()
            - Managing External REST APIs Calls, Heavy-Load Operations, and Global Events
                - useEffect()
            - Maintaining Data communication across Components
                - useContext()
            - Handling State Transition
                - useReducer()
        - We can create custom Hooks        
        - The Standard React Hooks cannot be called inside JavaScript function in a functional component
        - The Custom Hook can be called inside the function     

4. React Object Model
    - The 'react'
        - The React Object Model 
        - This contains the 'Comnponent<P,S>' base class
    - The 'react-dom'
        - Contains ReactDOM.render() method
            - used to MOUNT the Component in thne browser   
    - @testing-library/react
        - An Integration between the React object Model and the 'Jest' testing tool
    - @testing-library/jest-dom
        - USed to manage the react component's lifecycle in the memory (Browserless testing)
    - @testing-library/user-event
        - Used to test the DOM events in the Memory
    - react-scripts
        - The React CLI thatn is used for following operations in  the React Application   
            - Build
            - Test
            - Run           
```` javascript
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
````          
            - 'npm run start' will call react-scripts start  
            - 'npm run build' will call react-scripts build 
            - 'npm run test' will call react-scripts test


```` javascript
// 1.
const root = ReactDOM.createRoot(document.getElementById('root'));
// 2.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
````
        - 1. Detect the HTML element with 'id' as 'root' from 'index.html' asn this element will be used to MOUNT the React Component on it
        - 2. Render the React component named 'App' on the browser by mounting it on 'root' element
