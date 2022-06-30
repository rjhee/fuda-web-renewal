import React from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";

const NaviReceiptLottoScreen = (props) => {
    const data = [
        {key:'千萬 特別獎' , value:['31150905']},
        {key: '二百萬特獎', value: ['28564531']},
        {key: '頭獎', value: ['05754 219', '52891 675', '45327 106']},
        {key: '增開二百元', value: ['252']},
        {key: '對獎期限', value: ['2022/02/06 ~ 2022/05/05']},]
    return (
        <section className='receiptLottoCover'>
            <h1>
                <Title text1={'統一發票'} color={Color.MAIN_RED}/>
            </h1>
            <main>
                <header>
                    <h1>2021 11月、12月<br/>
                        統一發票中獎號碼</h1>
                </header>
                <ul>
                    {data.map((items)=>
                        <li>
                            <span>{items.key}</span>
                            <div>
                                {items.value.map((item)=>
                                    <strong>{item}</strong>
                                )}
                            </div>
                        </li>
                    )}

                </ul>
            </main>
        </section>
    );
};

export default NaviReceiptLottoScreen;