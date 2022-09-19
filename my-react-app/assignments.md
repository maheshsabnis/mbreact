# Date: 14-Sept-2022

1. Create a Calculator Component of which look must be like Calculator and having following Functionalities (HINT: Use JavaScript Math object)
    - +, -, *, /
    - Square, SquareRoot,
    - y raised to x
    - %

# Date: 15-Dept-2022
1.(Show Today) Create a Re-Usable DataGridComponent which will have following specifications 
    - It should have dataSource poroperty to accept data from parent, based on the data in dataSource property, the DataGridComponent should generate its column headrers and rows
    - It should have the 'canSelect' property as boolen, if this property is 'true', then the row of DataGrid can be cliecked and the selected row data can be passed to parent component
    - If should have 'canDelete' property as boolean, if tgis property is 'true', then each row will have Delete button. When this button is clicked, the the row MUST be deleted from parent component
    - If should 'canSort' property as boolean and 'SortProperty' as string. If the canSort is true, then whatever the value of 'SortProperty' passed from Parent component to DataGridComponent, the DataGridComponent should show data in Sorted order by the SortProperty value. E.g. if DataGrid is showing Employees data. If the 'canSort' is 'true' and 'SortPropety' is EmpName, then the DataGridCompoennt should show employeed data sorted by EmpName
2. (By Tomorrow) Create a new component known as 'SearchBoxComponent', use this copmponent to acept data to serach based on which the DataGridComponent will show data in it
    - e.g. If SerachBoxComponent accepts serat text as 'Mahesh', then DataGridComponent will show all records contains 'Mahesh' in it       

3. Create RadioButtonListComponent that will be showing Departments for the Employee. This List must be populated using the departments array passed it using the 'createContext()'. The EmployeeComponent will be emitted tyhe selected DeptName from the RadioButtonListComponent.
    - MAke sure that the HTML for the RadioButtonList will be generated when the data is available on the Context provided to it from its parent


4. Perform CRUD operations with Employee API COntroller using the React Application. 
    - Modify the EMployee API Controller for Searching EMployees based on EmpName and Designation
    - Modify the EMployeeComponent by adding a Textbox above the HTML Table that is showing the Emoployees data. When the thios textbox is either entred with EMpName or Designation, the call MUST be made to Employee API and retrived only matching employees those are in the Table. 

5. Create a ValidationSummaryComponent, with ErrorMessages as input props (or Context) to accept error messages from its parent e.g. EmployeeFormComponent
    - This component will be shown at the bottom of the EmployeeFormComponent
    - When an error condition occurres, the error messages MUST be passed to ValdiationSummaryComponent
    - When the valid value is entered in the EmployeeFormComponent, immediately the corresponding error message should be removed from the ValidationSummaryComponent        