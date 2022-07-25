import React from 'react';
import closeBtn from "../../Assets/Images/icon/btn-close.png";
const ModalOnlyDesc = (props) => {
    return (
        <section className='ModalOnlyDesc'>
            <div className='box'>
                <div className='title' style={props.color ? {borderColor: props.color} : null}>
                    <h1 style={props.color ? {color:props.color } : null}>{props.title}</h1>
                    <button onClick={()=>props.setModal(false)}>
                        <img src={closeBtn} alt="close button"/>
                    </button>
                </div>
                <ul className='contents'>
                    {props.data.map((item)=>
                        <li>
                            <strong>{item.title}</strong>
                            <p>{item.desc}</p>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default ModalOnlyDesc;