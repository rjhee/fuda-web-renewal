import React, {useState} from "react";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"
import {lang} from "../../../../Assets/Lang/Lang";


const OddEvenPerIssue = (props) => {
    // 홀수, 짝수
    let result;
    Number(props.sn) % 2 === 0 ? result = 'even' : result = 'odd';
    return (
        <div className={'OddEvenPerIssue sectionBoxCover'}>
            <header className={'issue'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, i)=> {
                        let result;
                        num % 2 === 0 ? result = 'even' : result = 'odd';
                       return (
                           <li key={i} className={`${result} lottoNum`}>
                                <div className={'lottoNumFont'}>{num}</div>
                           </li>)
                    }
                )}
                {props.type === 'daily' ? null
                    :<li className={`${result} bonusNum`}>
                            <span className={'lottoNumFont'}>{props.sn}</span>
                        </li>}
            </ul>
        </div>
    );
};

export default OddEvenPerIssue;
