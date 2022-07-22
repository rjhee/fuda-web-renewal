import React from 'react';
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"
import {lang} from "../../../../Assets/Lang/Lang";

const ContinuousPerIssue = (props) => {
    // 각 회차별 연속숫자
    return (
        <div className={'sectionCover'}>
            <header className={'issueFont'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
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
                    <li>
                        <div className={'plusCover'}>
                            <img src={plusIcon} className={'plusImg'}/>
                        </div>
                        <div className={'bonusNum'}>
                            <span className={'lottoNumFont'}>{props.sn}</span>
                        </div>
                    </li>: null}
            </ul>
            <ul className={'indexCover'}>
                <li className={'indexFont'}>{lang().APPEARANCE_MODE}</li>
                <li className={'line'}></li>
                <li className={'indexFont'}>{!props.continuousNum ? lang().NOT : Object.keys({...props.continuousNum}).length}{lang().CONTINUOUS_NUM}</li>
            </ul>
        </div>
    );
};
// const style = StyleSheet.create({
//     lottoNum: {
//         backgroundColor: Color.LIGHT_GREY_3,
//     },
//     lottoNumFont: {
//         fontSize: 15,
//         color: Color.LIGHT_GREY,
//     },
//     lottoNumRedFont: {
//         color: Color.LIGHT_RED_2,
//     },
//     indexCover: {
//         flexDirection: "row",
//         justifyContent:"center",
//         width: "100%",
//         paddingVertical: 4,
//     },
//     indexFont: {
//         fontFamily: Font.SANS_REGULAR,
//         fontSize: 14,
//         color: Color.DARK_GREY_2,
//         textAlign: "center",
//         marginHorizontal: 10,
//     },
//     line: {
//         borderLeftWidth: 1,
//         borderColor: Color.LIGHT_GREY_2,
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
export default ContinuousPerIssue;