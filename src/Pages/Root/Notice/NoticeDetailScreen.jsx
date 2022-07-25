import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {lang} from "../../../Assets/Lang/Lang";
import {Color} from "../../../Styles/Base/color";
import {useLocation, useNavigate} from "react-router-dom";
import {getImageUrl} from "../../../Service/util";
import LineButton from "../../../Components/Common/LineButton";

const NoticeDetailScreen = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [img, setImg] = useState('');
    const [uid, setUid] = useState('');
    const [view, setView] = useState('');
    const [date, setDate] = useState('');

    function moveToBack(){
        navigate(-1);
    }

    useEffect(()=>{
        setTitle(location?.state?.title);
        setContents(location?.state?.contents);
        setImg(location?.state?.img);
        setUid(location?.state?.uid);
        setView(location?.state?.view);
        setDate(location?.state?.date);

    })

    return (
        <section className='NoticeDetailScreen'>
            <h1>
                <span className='hidden'>{uid}</span>
                <Title text1={lang().ANNOUNCEMENT} color={Color.MAIN_RED}/>
            </h1>
            <header>
                <h1 className='title'>{title}</h1>
                <div className='dateBox'>
                    <span>{date}</span>
                    <span>{lang().VIEW} {view}</span>
                </div>
            </header>
            <main>
                <p>{contents}</p>
                {img
                    ? <img src={getImageUrl(img)} alt="contents image"/>
                    : null}

            </main>
            <div className='backBtn'>
                <LineButton onClick={moveToBack} text={lang().FORM} btnStyle={{borderColor: Color.MAIN_RED, width: '180px'}} fontStyle={{color: Color.MAIN_RED}}/>
            </div>
        </section>
    );
};

export default NoticeDetailScreen;