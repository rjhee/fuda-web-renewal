import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import {getFastQnAList} from "../../../Service/ConfigService";

const NaviFAQScreen = () => {
    const [data, setData] = useState([]);
    let getData = async () => {
        await getFastQnAList().then(result=>{
            console.log('Fast QNA : ',result.data);
            if(result.data !== null) {
                setData(result.data);
            }
        });
    };
    useEffect(()=>{
        getData();
    },[])
    return (
        <section className='faqCover'>
            <h1>
                <Title text1={'常見問題'} color={Color.MAIN_RED}/>
            </h1>
            <ul>
                {data.map((data)=>
                    <li>
                        <div className='question'>
                            <strong>Q</strong>
                            <p>{data.question}</p>
                        </div>
                        <div className='answer'>
                            <strong>A</strong>
                            <p>{data.answer}</p>
                        </div>
                    </li>
                )}

                <li>
                    <div className='question'>
                        <strong>Q</strong>
                        <p>富達樂透是什麼？</p>
                    </div>
                    <div className='answer'>
                        <strong>A</strong>
                        <p>我們以科學方法分析樂透大數據，並提供您中獎機率更高的樂透號碼。</p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default NaviFAQScreen;