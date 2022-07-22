import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";
import plusIcon from "../../../../Assets/Images/icon/plus-icon.png"

const ACvaluePerIssue = (props) => {
   // 간격수, 최대수 - 최소수, AC

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
                <li style={{width:'30%'}}>{lang().INTERVAL_NUM}</li>
                <li style={{width:'40%'}}>{lang().HEIGHT_DIFF}</li>
                <li style={{width:'20%'}}>{lang().AC_S}</li>
            </ul>
            <ul className={'indexCover'}>
                <li style={{width:'30%'}}>{props.diffNum.join('-')}</li>
                <li style={{width:'40%'}}>{props.heightDiffNum}</li>
                <li style={{width:'20%'}}>{props.AcNum}</li>
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
//         width: "100%",
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
//
//
// })

export default ACvaluePerIssue;