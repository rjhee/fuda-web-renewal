import React, {useEffect, useState} from 'react';
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"
import {lang} from "../../../../Assets/Lang/Lang";

const WinningPerIssue = (props) => {
    // 지난 10개 문제의 당첨 번호 각 문제에 대한 요약 통계
    // 1. 연속 숫자
    // 2. 반복되는 1의 자리 수
    // 3. 전 회차의 숫자와 같은 수
    // 4. 전 회차의 숫자와 연속되는 수

        return(
            <div className={'sectionCover'}>
                <header className={'issueFont'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
                <ul className={'lottoNumCover'}>
                    {props.lotto.map((num)=>
                        <li className={'lottoNum'}>
                            <div className={'lottoNumFont'}>{num.toString()[0]}<span className={'lottoNumFontPoint'}>{num.toString()[1]}</span></div>
                        </li>
                    )}
                    {props.type.name === 'daily' ? null
                        : <li>
                            <div className={'plusCover'}>
                                <img src={plusIcon} className={'plusImg'}/>
                            </div>
                            <div className={'bonusNum'}>
                                <span className={'lottoNumFont'}>{props.sn.toString()[0]}<span className={'lottoNumFontPoint'}>{props.sn.toString()[1]}</span></span>
                            </div>
                        </li>}
                </ul>
                <ul className={'indexCover'}>
                    <li className={'indexFont'}>{lang().CONTINUOUS_L}</li>
                    <li className={'indexFont'}>{lang().REPEAT_MANTISSA}</li>
                    <li className={'indexFont'}>{lang().LIAN_L}</li>
                    <li className={'indexFont'}>{lang().ADJACENT_L}</li>
                </ul>
                <ul className={'indexNumCover'}>
                    <li className={'indexNumFont'}>{!props.continuousNum  ? '-' : props.continuousNum.join(',')}</li>
                    <li className={'indexNumFont'}>{!props.repeatNum ? '-' : props.repeatNum.join(',')}</li>
                    <li className={'indexNumFont'}>{!props.lianNum ? '-' : props.lianNum.join(',')}</li>
                    <li className={'indexNumFont'}>{!props.adjacentNum ? '-' : props.adjacentNum.join(',')}</li>
                </ul>
            </div>
        )
};
//
// const style = StyleSheet.create({
//     lottoNumFont: {
//         fontSize: 15,
//         color: Color.LIGHT_GREY,
//     },
//     lottoNumFontPoint:{
//         color:Color.LIGHT_RED,
//     },
//     indexCover: {
//         flexDirection: "row",
//         borderTopWidth: 1,
//         borderTopColor: Color.LIGHT_GREY_2,
//         borderBottomWidth: 1,
//         borderBottomColor: Color.LIGHT_GREY_2,
//         width: "100%",
//         paddingVertical: 4,
//     },
//     indexFont: {
//         fontFamily: Font.SANS_REGULAR,
//         fontSize: 14,
//         color: Color.DARK_GREY_2,
//         width: "25%",
//         textAlign: "center",
//     },
//     indexNumCover: {
//         flexDirection: "row",
//         width: "100%",
//         paddingVertical: 4,
//     },
//     indexNumFont: {
//         fontFamily: Font.SANS_REGULAR,
//         fontSize: 13,
//         color: Color.DARK_GREY_2,
//         width: "25%",
//         textAlign: "center",
//     },
//     plusCover: {
//         alignItems: "center",
//         justifyContent: "center",
//         marginHorizontal: 2,
//     },
//     plusImg: {
//         width: 7.5,
//         height: 7.5,
//         resizeMode: "contain",
//     },
//     bonusNum: {
//         alignItems: "center",
//         justifyContent: "center",
//         width: 30,
//         height: 30,
//         borderRadius: 50,
//         marginHorizontal: 2,
//         backgroundColor: Color.LIGHT_YELLOW,
//         color: Color.LIGHT_GREY,
//     },
//
// })

export default WinningPerIssue;
