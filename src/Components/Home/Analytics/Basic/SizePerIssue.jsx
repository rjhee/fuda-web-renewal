import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"

const SizePerIssue = (props) => {
    // 1-19, 20이상

    return (
        <div className={'SizePerIssue sectionBoxCover'}>
            <header className={'issue'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, i)=> {
                    return (
                        <li key={num+i} className={`${num < 20 ? 'even' : 'odd'} lottoNum`}>
                            <div className={'lottoNumFont'}>{num}</div>
                        </li>)
                    }
                )}
                {props.type === 'daily' ? null
                    : <li className={`${props.sn < 20 ? 'even' : 'odd'} bonusNum`}>
                            <span className={'lottoNumFont'}>{props.sn}</span>
                        </li>}
            </ul>
        </div>
    );
};


export default SizePerIssue;