import React from 'react';
import plusIcon from "../../Assets/Images/icon/plus-icon.png";

const LottoNumList = (props) => {
   let setColor = props.setColor ? props.setColor : ()=> null;
   let setSnColor = props.setSnColor ? props.setSnColor : ()=> null;
    return (
        <>
            <ul className='lottoListCover'>
                <li style={setColor(props.i, props.b1)}>{props.b1}</li>
                <li style={setColor(props.i, props.b2)}>{props.b2}</li>
                <li style={setColor(props.i, props.b3)}>{props.b3}</li>
                <li style={setColor(props.i, props.b4)}>{props.b4}</li>
                <li style={setColor(props.i, props.b5)}>{props.b5}</li>
                {props.b6 ? <li style={setColor(props.i, props.b6)}>{props.b6}</li> : null}
            </ul>
            {props.sn ?
            <ul className='bonusNum'>
                <img src={plusIcon} alt=""/>
                <li style={setSnColor(props.i)}>{props.sn}</li>
            </ul>
            : null}
        </>
    );
};

export default LottoNumList;