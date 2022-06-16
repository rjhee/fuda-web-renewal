import React, {useEffect} from 'react';
import {lang} from "../../Assets/Lang/Lang";

const ResultList = (props) => {
    useEffect(()=>{

    },[props.numberData])
    return (
        <ol>
            {props.numberData.map((item,i)=>
                (i !== props.numberData.length-1 ?
                        <li>
                            <input type="checkbox"/>
                            <ul>
                                <li style={props.setWinNumColor(item.b1)}>{item.b1}</li>
                                <li style={props.setWinNumColor(item.b2)}>{item.b2}</li>
                                <li style={props.setWinNumColor(item.b3)}>{item.b3}</li>
                                <li style={props.setWinNumColor(item.b4)}>{item.b4}</li>
                                <li style={props.setWinNumColor(item.b5)}>{item.b5}</li>
                            </ul>
                            <span>{lang().WAITING}</span>
                        </li>
                        : null
                ))}
        </ol>
    );
};

export default ResultList;