import React from "react";

const SelectComponent=(props)=>{

    const handleChange=(evt)=>{
        props.emitData(evt.target.value);
    };

    if(props.dataSource === undefined || props.dataSource === null || props.dataSource.length === 0) {
        return (<div className="container">
            <strong>
                No Data to Display
            </strong>
        </div>);
    } else {
        return (
            <select className="form-control"
               value={props.valueProperty}
               onChange={handleChange}>
                {
                    props.dataSource.map((entry,idx)=>(
                        <option key={idx} value={entry}>{entry}</option>
                    ))
                }
            </select>
        );
    }

    
};

export default SelectComponent;