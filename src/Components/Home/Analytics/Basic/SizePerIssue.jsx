import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"

const SizePerIssue = (props) => {
    // 1-19, 20이상

    return (
        <div className={'sectionCover'}>
            <header className={'issueFont'}>{lang().FIRST}{props.issue}{lang().ISSUE}</header>
            <ul className={'lottoNumCover'}>
                {props.lotto.map((num, i)=> {
                    return (
                        <li key={num+i} className={`${num < 20 ? 'even' : 'odd'} lottoNum`}>
                            <div className={`${num < 20 ? 'even' : 'odd'} lottoNumFont`}>{num}</div>
                        </li>)
                    }
                )}
                {props.type.name === 'daily' ? null
                    : <li>
                        <div className={'plusCover'}>
                            <img src={plusIcon} className={'plusImg'}/>
                        </div>
                        <div className={`${props.sn < 20 ? 'even' : 'odd'} bonusNum`}>
                            <span className={`${props.sn < 20 ? 'even' : 'odd'} lottoNumFont`}>{props.sn}</span>
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

export default SizePerIssue;