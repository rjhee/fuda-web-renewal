import React, {useEffect, useState} from 'react';
import {lang} from "../../../Assets/Lang/Lang";
import ColumnBarGraph from "./ColumnBarGraph";
import ModalOnlyDesc from "../../Common/ModalOnlyDesc";

const ContentsTitleSection = (props) => {
    const [modalOn, setModalOn] = useState(false);
    const [bigSmallNum, setBigSmallNum] = useState('');


    const xLabelIndex = ['0尾', '1尾','2尾','3尾','4尾','5尾','6尾','7尾','8尾','9尾'];
    let yLabel = [0, 5, 10, 15, 20];
    const checkBigSmallNum = () => {
        const type = props.type;
        if(type === 'big'){
            setBigSmallNum('20~49');
        }
        else{
            setBigSmallNum('20~38');
        }
    }

    function setSubSubTitle(data) {
        switch (data.type) {
            case 'oddEven' :
                return (
                    <p className={'sizeCover'}>
                        <div className={'odd'}>{lang().ODD}</div>
                        <div className={'even'}>{lang().EVEN}</div>
                    </p>
                )
            case  'size':
                return (
                    <p className={'sizeCover'}>
                        <div className={'sizeSmall'}>{lang().SMALL}</div>
                        <div className={'sizeSmallFont'}>01~19</div>
                        <div className={'sizeBig'}>{lang().BIG}</div>
                        <div className={'sizeBigFont'}>{bigSmallNum}</div>
                    </p>
                )
            case 'mantissa' :
                return(
                    <p className={'mantissaCover'}>
                        <div className={'mantissaText'}>{lang().FREQUENT_MANTISSA} | 8</div>
                        <ColumnBarGraph
                            color={props.color}
                            type={data.type}
                            yLabelArr={yLabel}
                            xLabelIndex={xLabelIndex}
                            xLabelArr={props.sumMantissa}
                            size={363}
                        />
                    </p>
                )
            default : return null;
        }
    }

    const [modal, setModal] = useState(false);
    function onModal(){
        setModal(!modal);
    }

    function setSubTitle(data, i){
        switch (data.type){
            case props.staticsType :
                return (
                  <div key={i} className='subTitleCover'>
                      {data.info  && modal ? <ModalOnlyDesc setModal={setModal} color={props.color} title={data.L} data={data.infoText}/> : null}
                      <div className={'subCover'}>
                          <span className={'title'} style={props.color ? {color: props.color}: null}>{data.L}</span>
                      </div>
                      <div className={'line'} style={props.color ? {backgroundColor: props.color} : null}/>
                      <span className={'subTitle'}>{data.subTitle}</span>
                      {data.info === true
                          ? <div className='modalBtn'>
                               <button className={'info'} style={props.color ? {backgroundColor: props.color} : null}
                                        onClick={() => onModal()}>?
                               </button>
                          </div>
                          : null}
                      {setSubSubTitle(data)}

                  </div>
            )
        }
    }

    useEffect(()=>{
        checkBigSmallNum();
    },[])
    return (
        <div className={'ContentsTitleSection'}>
            {props.circleMenu.map((data, i)=> setSubTitle(data, i))}
        </div>
    );
};

export default ContentsTitleSection;