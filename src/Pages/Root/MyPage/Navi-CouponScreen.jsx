import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import LineButton from "../../../Components/Common/LineButton";
import Pagination from "../../../Components/Common/Pagination";
import {getCouponHistory} from "../../../Service/PaymentService";
import {convertToChineseYear} from "../../../Service/util"
import {getAccessToken} from "../../../Service/AuthService";
import {usedCoupon} from "../../../Service/PaymentService";

const NaviCouponScreen = () => {
    const [coupon, setCoupon] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    const [data, setData] = useState([]);

    const pageCount = 10;

    let checkCoupon = () =>{
        if(!!coupon === false) {
            alert('쿠폰 번호를 입력하세요');
        }else {
            usedCoupon(coupon).then(r=>{
                if(r.data === true) {
                    alert('優惠券已使用'); // 쿠폰이 적용되었습니다.
                    getAccessToken().then();
                    getData().then();
                }else {
                    alert('無效的優惠券序號'); //유효하지 않은 쿠폰 번호입니다.
                }
            })
        }
    }
    let getData = async () => {
        await getCouponHistory((currentPage - 1) * pageCount, pageCount)
            .then(result => {
                console.log('Navi-CouponScreen.jsx:25 ->',result.data);
            if(result.data !== null) {
                setData(result.data);
            }
        });
    }
        useEffect(() => {
            getData().then();

        }, [currentPage]);

        return (
            <section className='couponCover'>
                <h1>
                    <Title text1={'登陸兌換券'} color={Color.MAIN_RED}/>
                </h1>
                <div className='inputCover'>
                    <LongInput
                        setValue={setCoupon}
                        placeHolder={'請輸入兌換券序號'}/>
                    <LineButton
                        onClick={checkCoupon}
                        text={'登錄'} btnStyle={{borderColor: Color.MAIN_RED, width: '100px'}}
                        fontStyle={{color: Color.MAIN_RED}}/>
                </div>
                <header>
                    <h1>兌換品項</h1>
                    <h2>兌換日期</h2>
                </header>
                {data.length === 0 ?
                    <p>目前沒有兌換紀錄</p> :
                    <ul>
                        {data.map((item)=>
                            <li>
                                <span>{item.name}</span>
                                <span>{convertToChineseYear(item.reg_date)}</span>
                            </li>
                        )}
                    </ul>

                }
                <Pagination current={0} last={1}/>
                <footer>
                    <h1>使用說明</h1>
                    <div className="line"/>
                    <ul>
                        <li>富達樂透所發行之兌換券可於此處進行登陸。</li>
                        <li>請確認兌換券之有效期限。</li>
                        <li>登錄完成後即可使用富達樂透之服務。</li>
                        <li>1張兌換券僅供1個帳號使用1次，無法重複使用。</li>
                        <li>{'使用兌換券期間若於商店內付款，將自動更換成付費 服務。'}</li>
                        <li>{'付費服務(1個月兌換券除外) 使用期間若登錄兌換券，會員期間將會在付費服務結束後自動延長。'}</li>
                        <li>若您已身為1個月黃金會員，將無法使用兌換券。</li>
                    </ul>
                </footer>
            </section>
        );
    };

export default NaviCouponScreen;