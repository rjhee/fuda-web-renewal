import React from 'react';
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"
import {lang} from "../../../../Assets/Lang/Lang";

const AdjacentPerIssue = (props) => {
    // 전 회차의 숫자와 연속되는 수

    return(
        <div className={'AdjacentPerIssue sectionBoxCover'}>
            <header className={'issue'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, index)=> {
                    for (let i = 0; i < props.adjacentNum.length; i++) {
                        if (Number(props.adjacentNum[i]) === Number(num)) {
                            return (
                                <li key={num+index} className={'lottoNum lottoPointBall'}>
                                    <span className={'lottoNumFont lottoPointBall'}>{num}</span>
                                </li>)
                        }
                    }
                    return (
                        <li key={num+index} className={'lottoNum'}>
                            <span className={'lottoNumFont'}>{num}</span>
                        </li>)
                    })
                }
                {props.type === 'super'
                    ?
                    <li className={'bonusNum'}>
                        <span className={'lottoNumFont'}>{props.sn}</span>
                    </li>
                    : null}
            </ul>
        </div>
    );
};

export default AdjacentPerIssue;