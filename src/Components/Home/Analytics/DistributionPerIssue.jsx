import React from 'react';
import {Color} from "../../../Styles/Base/color";
import {lang} from "../../../Assets/Lang/Lang";

const DistributionPerIssue = (props) => {
    // 최근 10개의 회차의 당첨번호 네모 박스로 표기

    let num = [];
    let sn = [];
    let typeLength = 0;

    if(props?.type === 'big') {
        typeLength = 49;
    }
    else if(props?.type === 'super'){
        typeLength = 38;
    }
    else if(props?.type === 'daily'){
        typeLength = 39;
    }

    for(let i = 0; i < typeLength; i++){
        num[i] = i+1;
    }
    for(let i = 0; i < 9; i++){
        sn[i] = i+1;
    }
    return (
        <ul className={'DistributionPerIssue'}>
            {props?.lotto.map((items, i)=>
                <li className='sectionBoxCover'>
                    <div key={i}>
                        <span className={'issue'}>{lang().FIRST}{items.issue}{lang().ISSUE}</span>
                        <div>
                            <ul className={'numBoxCover'}>
                                {num.map((item, i)=>
                                    <li key={i} className={`numBox ${(items.value.indexOf(item) !== -1) 
                                        ? 'pickNumBox'
                                        : ((props.type === 'big' && item === items.sn) 
                                            ? 'bigPickNumBox' 
                                            : '')}`}>
                                        <span>{item}</span>
                                    </li>
                                )}
                            </ul>
                            <ul className={'snBoxCover'}>
                                {props?.type === 'super' && sn.map((item, i)=>
                                    <li key={i} className={`snBox ${items.sn === item ? 'pickSnBox' : ''}`}>
                                        <span>{item}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    );
};

// const style = StyleSheet.create({
//     sectionCover: {
//         width: "100%",
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 10,
//         borderColor: Color.LIGHT_GREY_2,
//         borderWidth: 1,
//         marginVertical: 20,
//         paddingTop: 21,
//         paddingBottom: 10,
//         paddingHorizontal: 21,
//     },
//     contentsCover:{
//         paddingHorizontal:21,
//         marginBottom: 76,
//         paddingTop:20,
//     },
//     issueFont: {
//         paddingHorizontal: 10,
//         paddingVertical: 10,
//         backgroundColor: Color.WHITE,
//
//         fontSize: 15,
//         color: Color.DARK_GREY_2,
//         position: "absolute",
//
//
//     },
//     numBoxCover:{
//         flexDirection: "row",
//         flexWrap: "wrap",
//         alignItems:"center",
//         marginBottom: 10,
//         width: 310,
//     },
//     numBox: {
//         width:23,
//         height: 23,
//         backgroundColor: Color.LIGHT_GREY_3,
//         justifyContent: "center",
//         alignItems: "center",
//         margin:4,
//
//     },
//     snBoxFont: {
//         color: Color.REGULAR_GREY,
//     },
//     snBoxCover:{
//         flexDirection: "row",
//         flexWrap: "wrap",
//         alignItems:"center",
//     },
//     snBox: {
//         width:23,
//         height: 23,
//         backgroundColor: Color.LIGHT_GREY_3,
//         justifyContent: "center",
//         alignItems: "center",
//         margin:4,
//     },
//
// });

export default DistributionPerIssue;