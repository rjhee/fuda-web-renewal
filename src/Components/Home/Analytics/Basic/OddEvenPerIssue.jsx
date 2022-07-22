import React, {useState} from "react";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"
import {lang} from "../../../../Assets/Lang/Lang";


const OddEvenPerIssue = (props) => {
    // 홀수, 짝수
    let result;
    Number(props.sn) % 2 === 0 ? result = 'even' : result = 'odd';
    return (
        <div className={'sectionCover'}>
            <header className={'issueFont'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num)=> {
                        let result;
                        num % 2 === 0 ? result = 'even' : result = 'odd';
                       return (
                           <li className={`${result} 'lottoNum'`}>
                                <div className={`${result} 'lottoNumFont'`}>{num}</div>
                           </li>)
                    }
                )}
                {props.type.name === 'daily' ? null
                    : <li>
                        <div className={'plusCover'}>
                            <img src={plusIcon} className={'plusImg'}/>
                        </div>
                        <div className={`${result} 'bonusNum'`}>
                            <span className={`${result} 'lottoNumFont'`}>{props.sn}</span>
                        </div>
                    </li>}
            </ul>
        </div>
    );
};
// const style = StyleSheet.create({
//     lottoNum: {
//         alignItems: "center",
//         justifyContent: "center",
//         width: 30,
//         height: 30,
//         borderRadius: 50,
//         marginHorizontal:2,
//         backgroundColor: Color.WHITE,
//         borderWidth: 1,
//     },
//     lottoNumFont: {
//         fontSize: 15,
//     },
//     odd: {
//         color: Color.NEON_BLUE,
//         borderColor: Color.NEON_BLUE,
//     },
//     even: {
//         color: Color.LIGHT_RED,
//         borderColor: Color.LIGHT_RED,
//     },
//     lottoNumRedFont: {
//         color: Color.LIGHT_RED_2,
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
//         color: Color.LIGHT_GREY,
//         borderWidth: 1,
//         // backgroundColor: Color.LIGHT_YELLOW,
//     },
//
// })
export default OddEvenPerIssue;
