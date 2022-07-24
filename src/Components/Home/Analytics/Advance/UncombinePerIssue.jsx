import React from 'react';

import {lang} from "../../../../Assets/Lang/Lang";

const UncombinePerIssue = (props) => {
    // 숫자가 나타나지 않은 횟수 통계

    return (
        <div className={'UncombinePerIssue sectionBoxCover'}>
            <ul className={'columnCover'}>
                {props.noShowArr.map((item, i)=>
                    <li key={i+1} className={'rowCover'}>
                        <div className={'circleCover'}>
                            <div className={'circle'}>
                                <span className={'circleFont'}>{i+1}</span>
                            </div>
                        </div>
                        <span className={'countFont'}>{lang().RECENTLY}{item}{lang().NO_SHOW}</span>
                    </li>
                )}
            </ul>
        </div>
    );
};
//
// const style = StyleSheet.create({
//     sectionCover: {
//         flexDirection:"row",
//         borderRadius: 15,
//         borderColor: Color.LIGHT_GREY_2,
//         borderWidth: 1,
//     },
//     columnCover: {
//         flexGrow: 1,
//         flexDirection:"row",
//         flexWrap: "wrap",
//         width: "100%",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginVertical: 20,
//         paddingTop: 5,
//         paddingBottom: 5,
//         paddingHorizontal: 15,
//     },
//     rowCover:{
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         borderBottomWidth: 1,
//         borderBottomColor: Color.LIGHT_GREY_2,
//         paddingBottom: 7,
//         marginTop: 7,
//         marginHorizontal: 5,
//         width: "45%",
//         maxWidth: 155,
//     },
//     circleCover: {
//         flexDirection: "row",
//         marginHorizontal: 5,
//     },
//     circle: {
//         width: 30,
//         height: 30,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 50,
//         backgroundColor: Color.LIGHT_GREY_3,
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

export default UncombinePerIssue;