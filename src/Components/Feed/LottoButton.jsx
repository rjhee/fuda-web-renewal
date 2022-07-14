import React from 'react';
import {lang} from "../../Assets/Lang/Lang";
import {Color} from "../../Styles/Base/color";
import {useNavigate} from "react-router-dom";

const LottoButton = (props) => {
    const navigate = useNavigate();
    function moveToLottoListScreen(e){
        let targetLotto = e.target.className;
        console.log('LottoButton.jsx:10 ->', props.data);
        navigate(`${props.lottoListPath}/${targetLotto}`, {
            state: {
                type: targetLotto,
                category: props.category,
                path: props.lottoListPath+targetLotto}});
    }

    return (
        <section className='lottoButtonCover'>
            <h1>各期獎號</h1>
            <div>
                <button className='daily' onClick={(e)=>moveToLottoListScreen(e)}>{lang().DAILY_LOTTO}</button>
                <button className='big' onClick={(e)=>moveToLottoListScreen(e)}>{lang().BIG_LOTTO}</button>
                <button className='super' onClick={(e)=>moveToLottoListScreen(e)}>{lang().SUPER_LOTTO}</button>
            </div>
        </section>
    );
};

export default LottoButton;