import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"

const MantissaPerIssue = (props) => {
    // 각 회차의 1의 자리숫자중 반복되는 수

    return(
        <div className={'sectionCover'}>
            <header className={'issueFont'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, i)=>
                    <li key={num+i} className={'lottoNum'}>
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
                <li className={'indexFont'}>{lang().REPEAT_MANTISSA}</li>
                <li className={'line'}></li>
                <li className={'indexNumFont'}>{!props.repeatNum ? '-' : props.repeatNum.join(',')}</li>
            </ul>
        </div>
    )
};
//
// const style = StyleSheet.create({
//     lottoNum: {
//         alignItems: "center",
//         justifyContent: "center",
//         width: 30,
//         height: 30,
//         borderRadius: 50,
//         marginHorizontal:2,
//         backgroundColor: Color.LIGHT_GREY_3,
//     },
//     lottoNumFont: {
//         fontSize: 15,
//         color: Color.LIGHT_GREY,
//     },
//     lottoNumFontPoint:{
//         color:Color.LIGHT_RED,
//     },
//     indexCover: {
//         flexDirection: "row",
//         paddingVertical: 4,
//     },
//     indexFont: {
//         fontFamily: Font.SANS_REGULAR,
//         fontSize: 14,
//         color: Color.DARK_GREY_2,
//         textAlign: "center",
//     },
//     indexNumFont: {
//         fontFamily: Font.SANS_REGULAR,
//         fontSize: 13,
//         color: Color.DARK_GREY_2,
//         textAlign: "center",
//     },
//     line: {
//         borderLeftWidth: 1,
//         borderColor: Color.LIGHT_GREY_2,
//         marginHorizontal:  10,
//         ...Platform.select({
//             ios: {},
//             android: {
//                 marginVertical: 10,
//             },
//         }),
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

export default MantissaPerIssue;
