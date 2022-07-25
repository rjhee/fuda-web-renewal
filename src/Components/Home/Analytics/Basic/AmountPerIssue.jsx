import React from "react";

import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"
import {lang} from "../../../../Assets/Lang/Lang";

const AmountPerIssue = (props) => {
    // 최근 10개의 회차의 각 당첨금액 통계

    return(
        <div className={'AmountPerIssue sectionBoxCover'}>
            <header className={'issue'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, i)=>
                    <li className={'lottoNum'} key={i}>
                        <div className={'lottoNumFont'}>{num}</div>
                    </li>
                )}
                {props.type === 'super' ?
                    <li className={'bonusNum'}>
                        <span className={'lottoNumFont'}>{props.sn}</span>
                    </li>
                : null}
            </ul>
            <ul className={'indexCover'}>
                <li className={'indexSubCover'}>
                    <span className={'indexFont'}>{lang().JACKPOT}</span>
                    <span className={'indexFont'}>{!props.win_1 ? 0 : props.win_1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {lang().RANK}</span>
                </li>
                <li className={'indexFont'}>{!props.win_1 ? 0 : props.win_mny_1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {lang().YUAN}</li>
            </ul>
            <ul className={'indexCover'}>
                <li className={'indexSubCover'}>
                    <span className={'indexFont'}>{lang().SECOND_PRIZE}</span>
                    <span className={'indexFont'}>{!props.win_2 ? 0 : props.win_2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {lang().RANK}</span>
                </li>
                <li className={'indexFont'}>{!props.win_2 ? 0 : props.win_mny_2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {lang().YUAN}</li>
            </ul>
        </div>
    );
};

export default AmountPerIssue;
