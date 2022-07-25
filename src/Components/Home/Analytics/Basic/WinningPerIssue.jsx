import React, {useEffect, useState} from 'react';
import {lang} from "../../../../Assets/Lang/Lang";

const WinningPerIssue = (props) => {
    // 지난 10개 문제의 당첨 번호 각 문제에 대한 요약 통계
    // 1. 연속 숫자
    // 2. 반복되는 1의 자리 수
    // 3. 전 회차의 숫자와 같은 수
    // 4. 전 회차의 숫자와 연속되는 수

        return(
            <div className={'WinningPerIssue sectionBoxCover'}>
                <header className={'issue'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
                <ul className={'lottoNumCover'}>
                    {props?.lotto?.map((num, i)=>
                        <li className={'lottoNum'} key={i}>
                            <span className={'lottoNumFont'}>{num.toString()[0]}<span className={'lottoNumFontPoint'}>{num.toString()[1]}</span></span>
                        </li>
                    )}
                    {props?.type === 'daily'
                        ? null
                        :
                        <li className={'bonusNum'}>
                            <span className={'lottoNumFont'}>{props?.sn.toString()[0]}<span className={'lottoNumFontPoint'}>{props.sn.toString()[1]}</span></span>
                        </li>}
                </ul>
                <ul className={'indexCover'}>
                    <li>{lang().CONTINUOUS_L}</li>
                    <li>{lang().REPEAT_MANTISSA}</li>
                    <li>{lang().LIAN_L}</li>
                    <li>{lang().ADJACENT_L}</li>
                </ul>
                <ul className={'contentsCover'}>
                    <li>{!props.continuousNum  ? '-' : props.continuousNum.join(',')}</li>
                    <li>{!props.repeatNum ? '-' : props.repeatNum.join(',')}</li>
                    <li>{!props.lianNum ? '-' : props.lianNum.join(',')}</li>
                    <li>{!props.adjacentNum ? '-' : props.adjacentNum.join(',')}</li>
                </ul>
            </div>
        )
};


export default WinningPerIssue;
