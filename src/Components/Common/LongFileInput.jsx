import React, {useState} from 'react';
import photoIcon from "../../Assets/Images/icon/img-icon.png"
const LongFileInput = (props) => {
    const [name, setName] = useState('請上傳圖片');
   const onChange = async (e) => {
       const files = [...e.target.files];
       const reader = new FileReader();
       // TODO  이미지 업로드 기능
       reader.onloadend = () => {
           if (typeof props.setValue === 'function') {
               props.setValue([{
                   fileSize:files[0].size,
                   height:300,
                   base64:reader.result,
                   fileName:files[0].name}]);

           }
       }
        reader.readAsDataURL(files[0]);
       setName(files[0].name);
   };

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
                value={props.value ? props.value : ''}
                onChange={onChange}/>
        </label>
    );
};


export default LongFileInput;