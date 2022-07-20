import React from 'react';

const SelectBox = (props) => {
    let issueSelect = props.setSelectedValue ? true : false;
    function onChange(e){
        if(issueSelect) {
            let result = JSON.parse(e.target.value);
            props.setSelectedValue(result);
            props.setSelected(result.issue);
        }else {
            props.setSelected(e.target.value);
        }
    }
    return (
        <div>
            <label htmlFor="">{props.label}</label>
            <select className='selectCover' onChange={onChange}>
                <option value="" selected>{props.placeHolder}</option>
                {props.option.map((data)=>
                    <option value={issueSelect ? JSON.stringify(data.value) : data.value}>{data.name}</option>
                )}
            </select>
        </div>
    );
};

export default SelectBox;