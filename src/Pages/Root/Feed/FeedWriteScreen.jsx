import React, {useState, useEffect} from 'react';
import Title from "../../../Components/Common/Title";
import {Color} from "../../../Styles/Base/color";
import LongInput from "../../../Components/Login/LongInput";
import Textarea from "../../../Components/Common/Textarea";
import LongFileInput from "../../../Components/Common/LongFileInput";
import LineButton from "../../../Components/Common/LineButton";
import {useLocation, useNavigate} from "react-router-dom";
import {editFeed, writeWinnerFeed, writeWishFeed, writeComment} from "../../../Service/FeedService";
import SelectBox from "../../../Components/Common/SelectBox";
import {getUserWinIssue} from "../../../Service/LottoService";

const FeedWriteScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [bigTitle, setBigTitle] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [imgUrl, setImgUrl] = useState([]);
    const [titlePlaceHolder, setTitlePlaceHolder] = useState('');
    const [contentPlaceHolder, setContentPlaceHolder] = useState('');
    const [isSelect, setIsSelect] = useState(false);

    const [win_id, setWinId] = useState('');
    const [selectedLotto, setSelectedLotto] = useState(null);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [selectedRate, setSelectedRate] = useState(null);
    const [selectedValue, setSelectedValue] = useState({});
    const [issueItems, setIssueItems] = useState([
        {label: '', value: 0},
    ]);

    let boardType = location.state?.board_type;
    let mode =  location.state?.mode;

    const [lottoItems, setLottoItems] = useState([
        {name: '威力彩', value: 'super'},
        {name: '大樂透', value: 'big'},
        {name: '今彩539', value: 'daily'}
    ]);

    useEffect(()=>{
        setDefaultDataIntoForm();
        if(mode === 'edit'){
            setTitle(location.state?.title);
            setContents(location.state?.contents);
            setImgUrl(location.state?.img_url??'');
        }



    },[]);



    function setDefaultDataIntoForm(){
        console.log('FeedWriteScreen.jsx:37 ->',boardType);
        if(boardType === 6){
            setBigTitle('中獎分享');
            setTitlePlaceHolder('請先選擇上方類別與獎項，再輸入標題');
            setContentPlaceHolder('請在此填寫您的貼文\n' +
                '如果您的貼文內容是捏造的，誹謗的，不准確的，辱罵性的，粗俗的，憤恨的，騷擾性的，淫穢的，褻瀆性的，性暗示的，威脅性的，侵犯個人隱私的，或以其他方式違反任何法律的，您的貼文將可能被移除。');
            setIsSelect(true);
        }
        else if(boardType === 7) {
            setBigTitle('許願池');
            setTitlePlaceHolder('請填寫標題');
            setContentPlaceHolder('請在此填寫您的貼文\n' +
                '如果您的貼文內容是捏造的，誹謗的，不准確的，辱罵性的，粗俗的，憤恨的，騷擾性的，淫穢的，褻瀆性的，性暗示的，威脅性的，侵犯個人隱私的，或以其他方式違反任何法律的，您的貼文將可能被移除。');
            setIsSelect(false);
        }
    }

    let checkInputData = () =>{
        if(!!title === false) {
            alert('請輸入標題'); //제목을 입력해주세요
            return false;
        }else if(!!contents === false) {
            alert('請輸入內文'); //내용을 입력해주세요
            return false;
        }


        if(boardType === 6) {
            if(!!selectedLotto === false) {
                alert('請選擇期數'); //회차를 선택해주세요
                return false;
            }else if(!!selectedIssue === false) {
                alert('請選擇期數'); //회차를 선택해주세요
                return false;
            }else if(!!selectedRate === false) {
                alert('請選擇期數'); //회차를 선택해주세요
                return false;
            }
        }
    }


    let resetData = () => {
        setTitle('');
        setContents('');
        setImgUrl('');
    }

    let resetDataImage = () => {
        setImgUrl('');
    }
    // TODO 이미지 업로드 기능
    // let getImage = () =>{
    //     launchImageLibrary({
    //         mediaType:'photo',
    //         includeBase64: true,
    //         maxWidth: 400,
    //         maxHeight: 600,
    //     }, (response) => {
    //         if (response.error) {
    //             console.log('LaunchCamera Error: ', response.error);
    //         } else {
    //             console.log('get Assets');
    //             console.log(JSON.stringify(response.assets));
    //             setImgUrl(response.assets);
    //         }
    //     }).then(r =>{console.log(r)});
    // }



    let createFeedData = async () => {
        if(checkInputData() === false) {
            return;
        }

        if(boardType === 6) {
            await writeWinnerFeed(title,contents,imgUrl[0],selectedLotto, selectedIssue, selectedRate, win_id)
                .then((result)=>{
                    console.log(JSON.stringify(result));
                    if(result.message === 'success') {
                        resetData();
                        navigate(-1);
                    }else {
                        // TODO 업로드 실패시 처리하기
                        alert('re try');
                    }
                }).finally(()=>{
                })
        }else {
            await writeWishFeed(title,contents,imgUrl[0])
                .then((result)=>{
                    console.log('FeedWriteScreen.jsx:106 ->',imgUrl[0]);
                    console.log('FeedWriteScreen.jsx:106 ->',JSON.stringify(result));
                    if(result.message === 'success') {
                        resetData();
                        navigate(-1);
                    }else {
                        // TODO 업로드 실패시 처리하기
                        alert('re try');
                    }
                }).finally(()=>{
                })
        }
    }


    let updateFeedData = async () => {
        if(checkInputData() === false) {
            return;
        }
        console.log('FeedWriteScreen.js:edit:126 ->',location.state?.uid, title, contents, imgUrl[0] !== undefined ? imgUrl[0] : imgUrl);
        await editFeed(location.state?.uid, title, contents, imgUrl[0] !== undefined ? imgUrl[0] : imgUrl)
            .then((result)=>{
                console.log(JSON.stringify(result));
                if(result.message === 'success') {
                    resetData();
                    navigate(-2);
                }else {
                    // TODO 업로드 실패시 처리하기
                    alert('re try');
                }
            }).finally(()=>{
            })
    }



    const checkBeforeSubmit = (text, okFunction) => {
        alert(text);
        okFunction();
    }


    function getLottoData(){
        if(selectedLotto !== null) {
            getUserWinIssue(selectedLotto).then(r => {
                if(r.data !== null && r.data.length > 0) {
                    let items = [];
                    for(let i = 0; i< r.data.length; i++) {
                        let win_id = r.data[i].uid;
                        let issue = r.data[i].issue;
                        let price = r.data[i].price;
                        items.push({name: '第'+issue+'期 '+price+'獎', value: {issue: issue, price: price, win_id: win_id}});
                    }
                    setIssueItems([...items]);

                }else if(r.data !== null && r.data.length === 0) {
                    setIssueItems([{label: '尚無中獎紀錄', value: 0}]);
                }
            });
        }
    }
    useEffect(()=>{
        if(boardType === 6) {
            getLottoData();
            setSelectedRate(selectedValue.price)
            setWinId(selectedValue.win_id)
        }

    },[selectedLotto, selectedIssue, selectedValue])


    return (
        <section className='FeedWriteScreenCover'>
            <h1>
                <Title text1={bigTitle} color={Color.MAIN_RED}/>
            </h1>
            <div className='inputCover'>
                {isSelect === true
                ? <div className='selectBox'>
                        <SelectBox label={'類別'} option={lottoItems} setSelected={setSelectedLotto} placeHolder={'請選擇類別'}/>
                        <SelectBox label={'獎項'} option={[...issueItems]} setSelected={setSelectedIssue} setSelectedValue={setSelectedValue} placeHolder={'請選擇獎項'}/>
                    </div>
                : null}
                <LongInput type={'text'} placeHolder={titlePlaceHolder} value={title} setValue={setTitle}/>
                <Textarea placeHolder={contentPlaceHolder} value={contents} setValue={setContents}/>
                <LongFileInput setValue={setImgUrl} value={''}/>
            </div>
            <div className='btnCover'>
                <LineButton
                    text={'取消'} btnStyle={{width:'48%'}}/>
                <LineButton
                    onClick={mode === 'edit' ? ()=>checkBeforeSubmit('수정하시겠습니까?', updateFeedData) : ()=>checkBeforeSubmit('確定要上傳嗎?', createFeedData)}
                    text={'發布'} btnStyle={{borderColor: Color.MAIN_RED, width:'48%'}} fontStyle={{color: Color.MAIN_RED}}/>
            </div>
        </section>
    );
};

export default FeedWriteScreen;