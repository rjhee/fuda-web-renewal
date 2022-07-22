import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"

const MantissaPerIssue = (props) => {
    // 각 회차의 1의 자리숫자중 반복되는 수

    return(
        <div className={'MantissaPerIssue sectionBoxCover'}>
            <header className={'issue'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props?.lotto?.map((num, i)=>
                    <li key={num+i} className={'lottoNum'}>
                        <div className={'lottoNumFont'}>{num.toString()[0]}<span className={'lottoNumFontPoint'}>{num.toString()[1]}</span></div>
                    </li>
                )}
                {props?.type === 'daily'
                    ? null
                    :
                    <li className={'bonusNum'}>
                        <span className={'lottoNumFont'}>{props.sn.toString()[0]}<span className={'lottoNumFontPoint'}>{props.sn.toString()[1]}</span></span>
                    </li>}
            </ul>
            <ul className={'indexCover'}>
                <li className={'indexFont'}>{lang().REPEAT_MANTISSA}</li>
                <li className={'line'}>|</li>
                <li className={'indexNumFont'}>{!props.repeatNum ? '-' : props.repeatNum.join(',')}</li>
            </ul>
        </div>
    )
};


export default MantissaPerIssue;
