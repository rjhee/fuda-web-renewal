import React from 'react';
import {lang} from "../../../../Assets/Lang/Lang";

const CooperatePerIssue = (props) => {
    // 모든 회차에서 함께나온 횟수가 많은 숫자, 적은 숫자

    return (
        <div className={'sectionCover'}>
            <ul className={'matchingCover'}>
            {props.cooperArr
                .sort((a, b)=> b['count'] - a['count'])
                .map((items, i)=>
                i < 10 ?
                   <li>
                       <div className={'titleFont'}>{lang().MATCHING_NUM}</div>
                       <div className={'rowCover'}>
                           <div className={'circleCover'}>
                               {items.num.map((item, i) =>
                                   <div key={i} className={'circle'}>
                                       <span className={'circleFont'}>{item}</span>
                                   </div>
                               )}
                           </div>
                           <span className={'countFont'}>{items.count}次</span>
                       </div>
                   </li>
                    : null)}
            </ul>
            <ul className={'matchingCover'}>
                {props.cooperArr
                    .sort((a, b)=> a['count'] - b['count'])
                    .map((items, i)=>
                    i < 10 ?
                        <li>
                            <div className={'titleFont'}>{lang().UN_MATCHING_NUM}</div>
                            <div className={'rowCover'}>
                                <div className={'circleCover'}>
                                    {items.num.map((item, i) =>
                                        <div key={i} className={'circle'}>
                                            <span className={'circleFont'}>{item}</span>
                                        </div>
                                    )}
                                </div>
                                <span className={'countFont'}>{items.count}次</span>
                            </div>
                        </li>
                    : null)}
            </ul>
        </div>
    );
};
// const style = StyleSheet.create({
//     sectionCover: {
//         flexDirection:"row",
//     },
//     titleFont:{
//         position:"absolute",
//         top: -30,
//         backgroundColor: Color.WHITE,
//         paddingHorizontal: 10,
//         paddingVertical: 10,
//         fontFamily:Font.SANS_REGULAR,
//         fontSize: 15,
//     },
//     matchingCover: {
//         flexGrow:1,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 15,
//         borderColor: Color.LIGHT_GREY_2,
//         borderWidth: 1,
//         marginVertical: 20,
//         paddingTop: 30,
//         paddingBottom: 30,
//         paddingHorizontal: 10,
//     },
//     rowCover:{
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         borderBottomWidth: 1,
//         borderBottomColor: Color.LIGHT_GREY_2,
//         paddingVertical: 7,
//     },
//     circleCover: {
//         flexDirection: "row",
//         marginHorizontal: 7,
//     },
//     circle: {
//         width: 30,
//         height: 30,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 50,
//         backgroundColor: Color.LIGHT_GREY_3,
//         marginHorizontal: 2,
//     },
//     circleFont: {
//         color: Color.LIGHT_GREY,
//         fontSize: 15,
//     },
//     countFont: {
//         color:Color.REGULAR_GREY,
//         fontSize: 14,
//         marginHorizontal: 7,
//     }
//
// })

export default CooperatePerIssue;