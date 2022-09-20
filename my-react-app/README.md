# React Application

1. Creating React App
    - Install the React Comman-Line-Interface (CLI)
    - npm install --global create-react-app
        - The Tenplate recommnded by the Facebook for production based React App
    - Alternatively the custom react configuration can be created using WebPack
        -     https://www.webnethelper.com/2021/10/reactjs17x-creating-application-with.html
    - Creating a Project using create-react-app
        - create-react-app [PROJECT-NAME]    
        - npx create-react-app my-app --template typescript
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

4. Programming with React
    - Creating a Component with State
        - Defining State Properties
        - Defining Binding of State properties with HTML UI Elements
        - Working with Events
        - Defining a Composable UI using Parent Child Relationships across Components
            - Stretegies of passing data across Components
    - JavaScript XML Extensions aka JSX
        - This is a Compiler that re-written the HTML DOM those are encapsulated by React Component
```` html
       <input className=""/> 
````
        - Do not use 'class' instead use 'className', the 'class' is JavaSript/TyueSpcript standard keyword
        - The HTML element MUST have closing tag, else the component will crash while mounting in browser
        - use the ES 6 expression syntax '{}' to bind 'state property' or 'props property' wuith HTML element as well as the componen's method to HTML elements' event

```` javascript
import {useState} from 'react';
import './App.css';


function App() {
  // lets define a 'state' using 'useState'

  const [x, setX] = useState(0);


  return (
    <div className="App">
        <h1>The First Component</h1> `` 
    </div>
  );
}

export default App;


(alias) useState<number>(initialState: number | (() => number)): [number, React.Dispatch<React.SetStateAction<number>>] (+1 overload)

````
        - const [x,setX] = useState(0);
            - The 'x' is a state property for the component
            - The '0' is an initial value of 'x'
            - The 'setX', this is a method that will be sued to update the initial value of 'x' to next value
                - React.Dispatch    
                     - This will dispatch an event on UI that will be responsible to update 'x'
                - React.SetStateAction<number>
                     - This is the execution or invokation for 'setX' that will update an initial state of 'x' to next value   

    - Using Forms
    - Ajax Calls
    - Testing 
6. Project Strcture
    - The 'components' folder
        - This will have all components
    - The 'models' folder
        - This will hae all model or data classes
    - The 'services' or 'utilities' folder
        - This will have logic for external HTTP calls
        - Front-End Business Logic                
7. React Compositional Nature        
    - Component
        - Parent-Child Relationships
    -  Data Communication Strategies
        - Using 'props' to pass data from Parent COmponent to Child Component
        - This is React's Immutable  object that is used to dynamically create an object with properties added in it
            - props.children
                - Used to read values of properties defined for the props object    
        - Using the 'React.Context' object
            - The 'createContext()'
                - This is used to create a Global Object which contains schema for data that can be used across react components on Demend based on 'Provider' and 'Consumer' relationships      
                - The Sender and Receiver MUST subscribe to context
                    - The Sender 'Provide' the 'value' to Receiver
                    - The Receiver 'Consume' the 'value' which is present in the Global Object
                - The 'Provider' has the 'value' as a Complex JavaScript object. This can contains 'object-of-objects' as a data in it
                    - e.g.
```` html
     <Context.Provider value={{}}></Context./Provider>
````
                - the 'value' is not contains object-of-objects, which may be properties and/or callback methods to be used across Provider abd Consumer
    - Make a wise decision for creating Re-Usable Components based on following possible cases 
        - If the Same UI with Different data is occuring in same or mutiple components across React Application
        - Planning for Re-Usable Component
            - Decide what standard HTML Element(s) are required in UI
            - Decide the strategy of passing data from Parent component to this re-usable component            
            - Decide when the child component will emit data to parent component 
- React Lifecycle
    -  They are internal Events those are resoponsible to manage the behavior of the Component based on
        - Props Change
        - State Change
        - Rendering
- Lifecycle with Funcational COmponents (Mapping with Class Components)
    - getInitialProps -- as it is in Functional Components
    - getInitialState -- Managed using 'useState()' hook with its initial value
        - e.g.
            - const [x,setX]= useState(0);
                - x is a state property with initial value as 0.
        - Initial State Transition managed using the following hooks
            - useReducer()
                - Update the state from Initial-to-New State using State Transition
            - useRef()             
                - Directly update the DOM by referring the DOM
        - createContext() aka React.Context
            - Provider
            - Consumer
    - render() -- managed using return() from funcational component                         
    - componentDidMount() and componentWillUnMount() are clubed in the 'useEffect()' hook
        - componentDidMount(), used for heavy-load operations e.g. AJAX calls (aka Promise based called) as well as regisering global events
        - componentWillUnMount(), cleanup operations e.g. unregistering the global event as well as cleaning the promise object       
        - useEffect(()=>{initial operatoins; return(()=>{cleanup operations}));
    - The componentDidUpdate()
        - This will be managed while the rendering takes place after execution of following hooks
            - useState()
            - useReducer()
            - useRef()
            - useEffect()    
    - NOTE: No replacement for 'componentDidCatch()',. we still need the Class component, this is called as ErrorBoundary      
- useEffect(()=>{... return ()=>{...}}, []);
    - The [], is the DepednencyList which is used by React to collect the current state of each 'state' propoerty of the component.
    - If the logic or execution  of useEffect() causing the 'state' property to update to new value then the useEffect() execution MUST stop and it MUST come-ot from the useEffct() block
    - If this parameter is not poassed then the useEffect() will continue execution and will result into the overhead for state updates on the UI thread
    - Although the state is updated, since there is not change into the earlier state during the first execution of the useEffect(), the 'shouldComponentUpdate()' will return false and hence the DOM will remain as it is.  
- Making AJAX Calls to REST APIs from React App
    - The 'Promise' object
        - Promise().then().catch();
            - Promise()
                - Initiate the Call
            - then()
                - Executed if the call is successful
            - catch()
                - Executed if the call fails
        - The First Promise can return result as other promise 
            - Chain of Promises
                - Promise().then().then().then()......catch();  
        - If making multiple promise based calls
            - Promise.all([ARRAY-OF-PROMISES]).then()                     
    - Use Promise Based Library
        - The 'fetch()' object, written by Mozilla in ES 6
        - The 'axios' Library based on Promises
            - get():Promise<T> of AxiosResponse<T>
            - post():Promise<T> of AxiosResponse<T
            - put():Promise<T> of AxiosResponse<T
            - delete():Promise<T> of AxiosResponse<T
                - AxiosResponse<T>
                    - The Promise Object
                    - The 'T' is the data responded by the service
            - npm install --local axios  
   - In ES 6, its is recommended that use async/await is the method returns the 'Promise' object          

    - Working with forms to valiudate use inputs
        - USe the HTML form tag and each editable element in the form MUST have 'name' attribute
        - You must write a logic to validate user input
        - There is no standatrd library for input validations in React.js   
              
 # Points to be taken in consideration for deploying Applications on Cloud
 1. Dffault Benefits
    - Availablilty and Scalability    
        - Hardware, Software, and network resources provided by cloud
        - Scalability Advantages with elasticity
            - COnfiguiration to manage load increase and decerase based on requests to App  
 2. Strategiest to Migrate to cloud
    - Lift-and-Shift
        - Take from On-Premised and deploy on Cloud
            - Local Database to Cloud Database   
    - Cloud BAsed Application Architecture
        - Plan for Database Providers and its services
        - Application Deployment 
            - Front-End Application Deployment
                - amplify, static apps
            - Back-End Application  Deployment
                - Amplify 
                - Web Apps
                - Container Based Apps**
            - Microservices Based Apps   
        - Container Based Apps
            - Applications those are frequently updated based on End-USer's Needs
                - Application Updates, Tests, and Deployment is time Consuming process, so use the Concept for CI,CD,CT (DevOps Pipeline)
                    - Continuous Integration (CI)
                    - Continuous Delivery (CD)
                    - Continuous Testing (CT)
            - Divide Apps in small chunks and mange their deployment as an individual components
                - Components
                    - Front-End UI Apps
                    - Server-Side Apps aka Services (REST APIs)
        - Plan for Containerized App Deployment Env.
            - Azure
                - Azure Container Registry (ACR)
                - Azure Kubernetes Service (AKS)
            - AWS
                - Elasic Container Registry (ECR)
                    - Docker Images Repository that will contains all images to be deployed as back-end apps on AWS EKS
                - Elastic Kubernetes Service (EKS)
            - GCP       
                - GCR
                - GKS      
        - Kubernetes aka K8s
            - IAM Role Configuration that will have access for
                - Container Registery (ACR, ECR)
                - Kubernetes Service (AKS, EKS) 
                - Access to Database
                    - SQL
                    - NoSQL
                - Configuration Access
                    - Networkign
                    - VPC Creation
                    - ... and many more    
            - Nodes
                - Virtual Machins (VPc) used for Providing the Storage and running Env. for Apps
                - Network Subnets
                    - Public and Private IP Addresses used for Communication Management
                    - Reserve Ports for Connecting to Services form Other Apps
                    - Communication Gateways aka Load Balancer     
            - EKS CLuster Creation Services
                - CloudFormation
                    - A Stack that is used to create VPC and Network Subment Groups
                - Fargate
                    - Serverless service to create and configure the AWS EKS CLuster             

- Installing App on AWS ECR and EKS
    - Download and install aws-cli and eksctl
        - aws-cli is a commandline tool to connect the dev machine to AWS cloud env. for deployment of apps
            - e.g. Docker Images, AWS Lambda, ect.
            - https://docs.aws.amazon.com/cli/v1/userguide/cli-chap-install.html
        - eksctl
            - Tool to work with EKS Cluster        
            - https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html     

# React Advanced Features
1. Custom Hooks
    - Creating Re-Usable Functional Objects those will be executed at Functional Component Level to provide common fucntoinalities across all components
    - Need?
        - Using standard hook in an encapsulation with the custom logic assiciated with it
        - e.g.
            -  Create a reusable Hook, that will accept a URL with header values e.g. Content-Type, AUTHORIZATION, etc. and will make call to REST APIs and will receive data for the component
        - Performing State-Transition with 'state' property updates in Stages, e.g. Initial Value-to-Next-Value-to-Final Value or Error-Value
            - useReducer() a hook that can be used as an alternative to useState for updating the state-transition in steps  
                - Used to mantain the Data in Responsive manner based on state transition so that, the 'DispatchAction' aka 'Dispatch' method for State Update need not be called again-and-again instead it will be executed based on the State-Transition COndition  
                    - State-Transition COndition   
                        - Conditions those will keep on monitoring the operations those are responsible to perform state transition or state updates
                            - e.g.
                                - CALL_INITIALIZED
                                    - Initial Value for State in Empty
                                - CALL_SUCCESS
                                    - The State Value is the data received from Call
                                - CALL_FAILED
                                    - The State value is Exception result
                                - DEFAULT
                                    - The default value in state when the app is loaded
            - useReducer(reducer, initialState)
                - reducer: An object that will be responsible for performing execution for state updates using state stransition
                - initialState: The Initial State object which has following 3 properties
                    - Initial-Transition-Condition e.g. loading
                    - An Actual State Object, which will be updated
                    - Error property, thsi will be set if the state transition is failed
            - WHat is reducer function?
                - Techincally: This is a JavaScrtipt 'pure function'. This means that the input parameters and output  parameters are same.
                - By Code: This function is used to accept 2 parameters
                    - Parameter 1: is a state which will be updated
                    - Parameter 2: is the 'action' that will be dispatched which result into the state update   
                        - the 'action' is a complex object that has various parameters but one parameter is always mandatory that is known as 'type'    
                        - the 'type' represents that 'what has happened?'
                            - e.g. INITIATED, SUCCESS, FAILED, etc.
                        - the 'payload' parameter is also used for action that represents the data which is to be updated in the state    

2. Error Boundaries
    - Error Handling
    - Still use the Class Component
        - create a global error handler
    - Create an ErrorBoundary Component that will manage the Lifecycle of each child-component so that if any chiold compnent throws an exception, then it will be cought, advantage is that we need not to create fallback ui for each child component
        - Create a class component that will implement the 'componentDidCatch()' method to listen to error thrown by any child component

        - implement the 'getDerivedStateFromError()' method that will listen to the error received from child component and update the state of the Error Boundary component 

3. Code Splitting and Lazy Loading
    - Peformance
4. Routing
    - Single Page Applciation
    - react-router-dom
    - npm install --local react-router-dom
    - BrowserRouter
        - Create a 'Context.Provider' to manage the Routing
        - Mount following object for routing on DOM in browser
            - Router Table
            - Route Parameters
            - Components
    - Routes
        - Used to define route table where ench entry is 'Route' object
    - Route
        - define route URLs and component to route to
        - Properties
            - path: the URL
            - index property, this is applied on the Route that define an element that is loaded as defult element when the routing starts
            - element: the Component to Navigate to
    - Link
        - Provides a Query to Routes table so that the component is loaded for routing
        - The 'to' property that will be used to query to route table and ask the route table to mount the component bt matching the value of 'to' property  with route table 'path' property of the 'Route'  
    - Outlet
        - USed to Mount component in routing on DOM so that it will be rendered
    - The 'useNavigate()' hook
        - This is used to perform explict navigation to Route   
    - The  'useParams()' hook
        - This is used for reading the Query parameters in Routing     
    - Create MainRoutingComponent that contains the Route Table using Routes
    - Create LayoutComponent that will manage the Routing and Outlet (Mounting of Components)
    - Create a NotFoundCompopnent that will be loaded when route goes wrong          


5. PureComponent
    - The class component uses  'Component<P,S>' class
        - This base class contains the shouldComponentUpdate() that is executed for each propschange and statechange. This is cost
        - PureComponent will avoid frequent execution  of  shouldComponentUpdate()
6. Highr-Order-Component (HoC)
    - It is a function that accepts component as input parameter and return component
    - It is a Pure Function
    - It is not a class but it is a pattern
    - e.g.
```` javascript
      function Hoc(Component, properties){
          // Other logic to modify the input 'Component' to OPutput 'Component' 
         return (<Component {...properties}/>)
      }
````
7. JS Testing was always challanging
    - Browser based JS Testing Libraries
        - qUnit
            - Writen by jQuery            
        - Jasmine
            - JS Object to Test JS Code
    - Engine
        - Karma By Google
            - V8 Engine aka chromium engine to execute JS Tests in-side browser (Chrome*, IE, FireFox, etc.) as well as out-side browser             
    - Browserless Testing
        - Loads the DOM in V8 engine (similar engine used by browser e.g. Spider for FireFox) and loads JS Test file in it and test them
        - Karma Browserless Testing with Jasmine
        - Enzyme, by Air-BnB, well suted for React Apps upto React 16
        - Jest, by Open Source Community for
            - Angular
            - React
            - Vue
            - ... an many more JS Libs and Frwks
        - Jest start the Im-Memory DOM Creation for Testing then UI
    - React-Scripts + Jest
        - executes all 'xxxx.test.js' as well as 'xxxx.spec.js' in entire application
    - Testing Strategious
        - Write Test for the DOM with and withiut data
        - Write Test for JS Event Object executed by React 
    - The Test Structure
        - Test Suite
            - describe()               
        - Common Object those are required by all test cases
            - beforeEach()
        - The Test case aka Test Method
            - it()        
        - Cleanup operation after each Test Case
            - afterEach()    



            