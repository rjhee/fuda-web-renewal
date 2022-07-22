import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";
import {Color} from "../../../../Styles/Base/color";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"

const QualityPerIssue = (props) => {
    //지난 10개 문제 각각에 대해 소수, 합성수, 3의 배수 패턴에 대한 통계

    return(
        <div className={'sectionCover'}>
            <header className={'issueFont'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, i)=>
                    <li key={i} className={'lottoNum'}>
                        <div className={'lottoNumFont'}>{num}</div>
                    </li>
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
//     indexCover: {
//         flexDirection: "row",
//         justifyContent:"space-between",
//         borderTopWidth: 1,
//         borderTopColor: Color.LIGHT_GREY_2,
//         width: "80%",
//         ...Platform.select({
//             ios: {
//                 paddingVertical: 4,
//             },
//             android: {
//                 paddingVertical: 0,
//             },
//         }),
//     },
//     indexFont: {
//         fontFamily: Font.SANS_REGULAR,
//         fontSize: 14,
//         color: Color.DARK_GREY_2,
//         textAlign: "center",
//         width: '30%',
//     },
//
//
// })

export default QualityPerIssue;