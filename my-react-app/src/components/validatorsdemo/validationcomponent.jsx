import React, {useState, Fragment} from "react";

const ValidatorComponent =()=>{
    const [emp, setEmp] 
        = useState({EmpNo:0, EmpName:''});

    const [isEmpNoValid, checkEmpNo] = useState(true);
    const [isEmpNameValid, checkEmpName] = useState(true);
    const [isFormValid, checkForm] = useState(true);

    const clear=()=>{
        setEmp({EmpNo:0, EmpName:''});
    };
    const save=()=>{
        
    };

    const handleChange=(evt)=>{
        if(evt.target.name === "EmpNo"){
            setEmp({...emp, EmpNo:parseInt(evt.target.value)});
        }
        if(evt.target.name === "EmpName"){
            setEmp({...emp, EmpName:evt.target.value});
        }
        validateForm(evt.target.name, evt.target.value);
    }    
    const validateForm=(name, value)=>{
        if(name === "EmpNo"){
            if(parseInt(value)<0){
                checkEmpNo(false);
                checkForm(false);
            }
        }else {
            checkEmpNo(true);
            checkForm(true);
        }

        if(name === "EmpName"){
            if(value.length < 2){
                checkEmpName(false);
                checkForm(false);
            }
        }else {
            checkEmpName(true);
            checkForm(true);
        }
    };
    return(
        <Fragment>
            <form name="frmEmp">
                <div className="form-group">
                    <label>EmpNo</label>
                
                    <input type="text" className="form-control"
                    value={emp.EmpNo} required={true} name="EmpNo"
                    onChange={handleChange}/>
                    <div className="alert alert-danger" hidden={isEmpNoValid}>
                        EmpNo MUST be +ve integer
                    </div>
                </div>
                <div className="form-group">
                    <label>EmpName</label>
                    <input type="text" className="form-control"
                    value={emp.EmpName} required={true} name="EmpName"
                    onChange={handleChange}/>
                      <div className="alert alert-danger" hidden={isEmpNameValid}>
                        EmpName Must be 2 characters long
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-warning"
                    onClick={clear}>Clear</button>
                    <input type="submit" className="btn btn-success"
                    disabled={!isFormValid}
                    onClick={save}/>
                </div>
            </form> 
        </Fragment>
    );    
};

export default ValidatorComponent;