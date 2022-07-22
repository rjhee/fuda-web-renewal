import React from 'react';
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"
import {lang} from "../../../../Assets/Lang/Lang";

const ContinuousPerIssue = (props) => {
    // 각 회차별 연속숫자
    return (
        <div className={'ContinuousPerIssue sectionBoxCover'}>
            <header className={'issue'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num)=> {
                    for (let i = 0; i < Object.keys({...props.continuousNum}).length; i++) {
                        if (props.continuousNum[i] === num) {
                            return (
                                <li className={'lottoNum lottoNum'}>
                                    <div className={'lottoNumRedFont'}>{num}</div>
                                </li>)
                        }
                    }
                    return (
                        <li className={'lottoNum'}>
                            <div className={'lottoNumFont'}>{num}</div>
                        </li>)
                    }
                )}
                {props.type.name === 'super' ?
                        <li className={'bonusNum'}>
                            <span className={'lottoNumFont'}>{props.sn}</span>
                        </li> : null}
            </ul>
            <ul className={'indexCover'}>
                <li className={'indexFont'}>{lang().APPEARANCE_MODE}</li>
                <li className={'line'}>|</li>
                <li className={'indexFont'}>{!props.continuousNum ? lang().NOT : Object.keys({...props.continuousNum}).length}{lang().CONTINUOUS_NUM}</li>
            </ul>
        </div>
    );
};

export default ContinuousPerIssue;