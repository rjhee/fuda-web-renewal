import React from "react";

import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"
import {lang} from "../../../../Assets/Lang/Lang";

const AmountPerIssue = (props) => {
    // 최근 10개의 회차의 각 당첨금액 통계

    return(
        <div className={'sectionCover'}>
            <header className={'issueFont'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num)=>
                    <li className={'lottoNum'}>
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
//
// const style = StyleSheet.create({
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
//     },
//     indexSubCover: {
//         flexDirection: "row",
//         justifyContent:"space-between",
//         width: "35%"
//     }
//
// })
export default AmountPerIssue;
