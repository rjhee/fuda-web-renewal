import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"

const LianPerIssue = (props) => {
    // 전 회차의 숫자와 같은 수

    return(
        <div className={'sectionCover'}>
            <header className={'issueFont'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, index)=> {
                    for (let i = 0; i < props.lianNum.length; i++) {
                        if (Number(props.lianNum[i]) === Number(num)) {
                            return (
                                <li key={num+index} className={'lottoNum lottoPointNum'}>
                                    <div className={'lottoNumFont lottoPointNum'}>{num}</div>
                                </li>)
                        }
                    }
                    return (
                        <li key={num+index} className={'lottoNum'}>
                            <div className={'lottoNumFont'}>{num}</div>
                        </li>)
                    })
                }
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
//     lottoPointNum: {
//         backgroundColor: Color.LIGHT_RED,
//         color: Color.WHITE,
//     },
//     lottoNumFont: {
//         fontSize: 15,
//         color: Color.LIGHT_GREY,
//     },
//     lottoNumFontPoint:{
//         color:Color.LIGHT_RED,
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
// })

export default LianPerIssue;