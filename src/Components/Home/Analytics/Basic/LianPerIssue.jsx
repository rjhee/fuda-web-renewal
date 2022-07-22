import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"

const LianPerIssue = (props) => {
    // 전 회차의 숫자와 같은 수

    return(
        <div className={'LianPerIssue sectionBoxCover'}>
            <header className={'issue'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, index)=> {
                    for (let i = 0; i < props.lianNum.length; i++) {
                        if (Number(props.lianNum[i]) === Number(num)) {
                            return (
                                <li key={num+index} className={'lottoNum lottoPointBall'}>
                                    <div className={'lottoNumFont lottoPointBall'}>{num}</div>
                                </li>)
                        }
                    }
                    return (
                        <li key={num+index} className={'lottoNum'}>
                            <div className={'lottoNumFont'}>{num}</div>
                        </li>)
                    })
                }
                {props.type === 'super'
                    ? <li className={'bonusNum'}>
                        <span className={'lottoNumFont'}>{props.sn}</span>
                    </li>
                    : null}
            </ul>
        </div>
    );
};

export default LianPerIssue;