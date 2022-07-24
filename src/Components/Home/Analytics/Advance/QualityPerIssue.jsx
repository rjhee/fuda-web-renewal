import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";

const QualityPerIssue = (props) => {
    //지난 10개 문제 각각에 대해 소수, 합성수, 3의 배수 패턴에 대한 통계

    return(
        <div className={'QualityPerIssue sectionBoxCover'}>
            <header className={'issue'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, i)=>
                    <li key={i} className={'lottoNum'}>
                        <div className={'lottoNumFont'}>{num}</div>
                    </li>
                )}
                {props.type.name === 'super' ?
                   <li className={'bonusNum'}>
                       <span className={'lottoNumFont'}>{props.sn}</span>
                   </li> : null}

            </ul>
            <ul className={'indexCover'}>
                <li className={'indexFont'}>{lang().PRIME}</li>
                <li className={'indexFont'}>{lang().COMPOSITE}</li>
                <li className={'indexFont'}>{lang().MULTIPLES3}</li>
            </ul>
            <ul className={'indexCover'}>
                <li className={'indexFont'}>{props.primeNum.length === 0 ? '-' : props.primeNum.join(',')}</li>
                <li className={'indexFont'}>{props.compositeNum.length === 0 ? '-' : props.compositeNum.join(',')}</li>
                <li className={'indexFont'}>{props.multiples3Num.length === 0 ? '-' : props.multiples3Num.join(',')}</li>
            </ul>
        </div>
    );
};
export default QualityPerIssue;