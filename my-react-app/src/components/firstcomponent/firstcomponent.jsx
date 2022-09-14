import React, {useState} from 'react';

function FirstComponent() {

    const [num1, setN1] = useState(0);
    const [num2, setN2] = useState(0);
    const [result, setResult] = useState(0)

    const clear=()=>{
         setN1(0);
         setN2(0);
         setResult(0);   
    };

    const add=()=>{
        setResult(num1 + num2);
    };

    return (
        <div className='container'>
            <h3>The First Simple Component</h3>
            <table className='table table-bordered table-striped'>
                <tbody>
                    <tr>
                        <td>
                            N1
                        </td>
                        <td>
                            <input type="text" className='form-control'
                             value={num1} onChange={(evt)=>setN1(parseInt(evt.target.value))}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            N2
                        </td>
                        <td>
                            <input type="text" className='form-control'
                             value={num2} onChange={(evt)=>setN2(parseInt(evt.target.value))}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Result
                        </td>
                        <td>
                            <input type="text" className='form-control'
                             value={result} readOnly/>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                             {/* Event Binding onClick={add}*/}
                            <input type="button" value="Add" className='btn btn-primary' 
                            onClick={add}/>
                        </td>
                        <td>
                            {/* Event Binding */}
                            <input type="button" value="Clear" className='btn btn-warning' 
                             onClick={clear}/>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );

}

export default FirstComponent;