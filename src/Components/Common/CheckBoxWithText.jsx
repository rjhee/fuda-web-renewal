import React, {useEffect, useState} from 'react';
import {lang} from "../../Assets/Lang/Lang";

const CheckBoxWithText = (props) => {
    let text = props.text ? props.text : "同意使用條款 (必填)";
    let subText = props.subText ? props.subText : "checkbox sub text";

    const [isChecked, setIsChecked] = useState(false);

    function checkedInput(e) {
        if(e.target.checked) {
            props.setChecked(true);

        }else {
            props.setChecked(false);
        }
    }

    useEffect(()=>{
        setIsChecked(props.checked);
    },[])

    return (
        <div className='checkBoxWithText' onClick={()=> props.onClick(props.i) ? props.onClick(props.i) : null}>
            <div className='checkboxCover'>
                <input className='hidden' type="checkbox" id={`checkbox_${props.i}`} onClick={(e)=>props.setChecked ? checkedInput(e) : null} />
                <label htmlFor={`checkbox_${props.i}`} className='checkboxLabel'>
                <div className={`checkbox  ${props.checked === true ? 'checked' : ''} `}/>
                    <p className='text'>
                        <strong>{text}</strong>
                    </p>
                </label>
                <span>
                {props.isDescBtn ?
                    <button onClick={() => props.setOn(true)}>
                        {lang().CHECK}▶
                    </button> : null}
            </span>
            </div>
            {props.isSubText ? <span className='subText'>{subText}</span> : null}
        </div>
    );
};

export default CheckBoxWithText;