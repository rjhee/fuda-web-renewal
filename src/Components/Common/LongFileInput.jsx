import React, {useState} from 'react';
import photoIcon from "../../Assets/Images/icon/img-icon.png"

const LongFileInput = (props) => {
    const [name, setName] = useState('請上傳圖片');

    const onChange = (e) => {
        setName(e.target.files[0].name);
    }
    return (
        <label htmlFor="fileInput" className='fileInputCover'>
            <span>{name}</span>
            <img src={photoIcon} alt="image upload icon"/>
            <input
                id='fileInput'
                autoFocus={true}
                className='longFileInput'
                type={'file'}
                onChange={onChange}/>
        </label>
    );
};

export default LongFileInput;