import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import GradeText from "../../../Components/MyPage/GradeText";
import {getUserVipHistory,getUserReceiptHistory, getUserReciptHistoryCnt,  } from "../../../Service/PaymentService";
import {convertToChineseYear} from "../../../Service/util";

const NaviPaymentInfoScreen = () => {
    const [vipRenderObj, setVipRenderObj] = useState([]);
    const [receiptRenderObj, setReceiptRenderObj] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(5);
    const pageCount = 5;

    const [isFetching, setIsFetching] = useState(false);

    let key = 1;
    let getKey = () => {
        return key++
    };

    useEffect(() => {
        getData().then();
    }, [currentPage]);

    let getData = async () => {
        await getUserVipHistory().then(r => {

            console.log('PaymentInfoScreen.js::35 ->',r);

            let data = [];
            if (r.data !== null && r.data.length !== 0) {
                for (let i = 0; i < r.data.length; i++) {
                    data.push(getVipText(r.data[i], i, r.data.length));
                }
            } else {
                data.push('目前並未擁有會籍');
            }

            console.log('Navi-PaymentInfoScreen.jsx:39 ->',data);
            setVipRenderObj(data);
        });

        await getUserReceiptHistory((currentPage - 1) * pageCount, pageCount).then(r => {
            let data = [];
            if (r.data !== null && r.data.length !== 0) {
                for (let i = 0; i < r.data.length; i++) {
                    data.push(getReceiptText(r.data[i], i, r.data.length));
                }
            }else {
                data.push(<span className='noData'>沒有付款紀錄</span>);
            }
            setReceiptRenderObj(data);
        });

        await getUserReciptHistoryCnt().then(r=>{
            if(r.data !== null && r.data[0].cnt !== undefined) {
                let maxPage = parseInt(r.data[0].cnt/pageCount);
                setMaxPage(maxPage>0? maxPage : 1);
            }else {
                setMaxPage( 1);
            }
        });
    }


    let getVipText = (data, index, length) => {
        console.log('PaymentInfoScreen.js:getVipText:93 ->',data.start_date);
        console.log('PaymentInfoScreen.js:getVipText:94 ->',data.end_date);

        let nowDate = new Date();
        let now = new Date(data.start_date) <= nowDate && new Date(data.end_date) >= nowDate
        console.log('PaymentInfoScreen.js:getVipText:85 ->', now);

        let grade = data.grade;
        if(data.grade === 'FREE'){
            grade = '免費會員';
        }else if(data.grade.toLowerCase() === 'gold'){
            grade = '黃金會員';
        }
        return (
            <div className='vipRenderCover'>
                <span className='grade'>
                    {grade} {now === true ? '(使用中)':''}
                </span>
                <span className='date'>
                    {`${convertToChineseYear(data.start_date)} ~ ${convertToChineseYear(data.end_date)}`}
                </span>
            </div>
        )
    }



    let getOrderTypeText = (order_type) => {
        console.log('PaymentInfoScreen.js:getOrderTypeText:94 ->',order_type);
        switch (order_type) {
            case 'A':
                return 'Android';
            case 'G':
                return 'Google';
            case 'I':
                return 'Apple';
            case 'W':
                return 'Web';
            case 'C':
                return 'Coupon';
            default:
                return 'FREE';
        }
    }

    let getItemNameText = (premium_name, ticket_name) => {
        if(premium_name !== null && premium_name !== undefined) {
            return premium_name
        }else if(ticket_name !== null && ticket_name !== undefined) {
            return ticket_name
        }
    }

    let getReceiptText = (data, index, length) => {
        return (
            <li>
               <ul>
                   <li className='name'>{formatPremiumName(getItemNameText(data.premium_name, data.ticket_name))}</li>
                   <li className='money'>{data.price}元</li>
                   <li className='date'>{convertToChineseYear(data.reg_date)}</li>
                   <li className='order'>{getOrderTypeText(data.order_type)}</li>
               </ul>
            </li>
        )
    }

    let formatPremiumName = (pName) => {
        if(pName === 'VVIP會員(12+贈送2個月)'){
            return 'VVIP會員\n(12+贈送2個月)'
        }

        return pName;
    }
    return (
        <section className='paymentInfoCover'>
            <h1>
                <Title text1={'付款資訊'} color={Color.MAIN_RED}/>
            </h1>
            <GradeText/>
            <header>
                <h1>會籍</h1>
                <div></div>
                <h2>會員期間</h2>
            </header>
            <div className='list'>
                    {vipRenderObj}
            </div>
            <ul className='receiptHeader'>
               <li className='name'>服務名稱</li>
               <li className='money'>付款金額</li>
               <li className='date'>付款日期</li>
               <li className='order'>付款方式</li>
            </ul>
            <ul className='receiptBody'>
                {receiptRenderObj}
            </ul>
        </section>
    );
};

export default NaviPaymentInfoScreen;