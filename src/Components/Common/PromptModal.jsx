import React, {useState} from 'react';
import LongInput from "../Login/LongInput";

const PromptModal = (props) => {
    const [inputValue, setInputValue] = useState('');
    function closeModal(e) {
        let targeted = e.target.className;
            console.log('PromptModal.jsx:8 ->',targeted);
        if(targeted === 'ok') {
            props.setValue(inputValue);
            props.setInputValue(inputValue);
            props.setOn(false);
        }else if(targeted !== 'longInput'){
            props.setOn(false);
        }
    }
    return (
        <section className='promptModalCover' onClick={(e)=>closeModal(e)}>
            <div className='box'>
                <h1>請輸入您想達到的目標金額</h1>
                <div className='inputCover'>
                    <LongInput type={'number'} placeHolder={' '} setValue={setInputValue}/>
                    <span>元</span>
                </div>
                <div className='btnCover'>
                    <button className='cancel'>取消</button>
                    <button className='ok' onClick={props.updateValue}>確認</button>
                </div>
            </div>
        </section>
    );
};

export default PromptModal;