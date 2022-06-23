import React from 'react';
import Title from "../Common/Title";
import closeIcon from "../../Assets/Images/icon/btn-close.png"
import {Color} from "../../Styles/Base/color";

const PolicyModal = (props) => {
    let title = props.title ? props.title : 'Title';
    let contents =
        props.contents ?
        props.contents :
            [{subTitle:'subtitle', content:'contents'}];


    function close() {
        props.setOn(false);
    }
    return (
        <article className='policyModalCover'
                 onClick={()=> close()}>
           <div className='box'>
               <h1>
                   <Title text1={title} color={Color.MAIN_RED}/>
                   <button onClick={()=>props.setOn(false)}>
                       <img src={closeIcon} alt="close button"/>
                   </button>
               </h1>
               <div className='contentsCover'>
                   {contents.map((data)=>
                       <div>
                           <strong>{data.subTitle}</strong>
                           <p>{data.content}</p>
                       </div>
                   )}
               </div>
           </div>
        </article>
    );
};

export default PolicyModal;