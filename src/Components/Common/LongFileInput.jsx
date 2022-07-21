import React, {useEffect, useState} from 'react';
import photoIcon from "../../Assets/Images/icon/img-icon.png"
import {getImageUrl} from "../../Service/util";
const LongFileInput = (props) => {
    const [name, setName] = useState('請上傳圖片');
   const onChange = async (e) => {
       const reader = new FileReader();
      if(e) {
       const files = [...e.target.files];
          reader.onloadend = () =>{
              if (typeof props.setValue === 'function') {
                  let base = reader.result;
                  let tmp = base.split(',');
                  props.setValue([{
                      fileSize:files[0].size,
                      height:400,
                      width: 400,
                      type: files[0].type,
                      base64:tmp[1],
                      fileName:files[0].name}]);
              }
          }
          reader.readAsDataURL(files[0]);
          setName(files[0].name);
      }else {
      //    TODO 글 수정시 이전 업로드했던 이미지 데이터 가져오기
      }
   };

   useEffect(()=>{
       onChange();
   },[])

    return (
        <label htmlFor="fileInput" className='fileInputCover'>
            <span>{name}</span>
            <img src={photoIcon} alt="image upload icon"/>
            <input
                id='fileInput'
                autoFocus={true}
                className='longFileInput'
                type={'file'}
                accept="image/*"
                // value={props.value}
                onChange={onChange}/>
        </label>
    );
};


export default LongFileInput;