import React, {useState} from 'react';
import Title from "../Common/Title";
import {Color} from "../../Styles/Base/color";
import {lang} from "../../Assets/Lang/Lang";
import PolicyModal from "../Modal/PolicyModal";
import {policyContents, termsContents} from "../../Service/util";


const InfoBox = () => {
    const [version, setVersion] = useState('3.0.6');
    const [onTerms, setOnTerms] = useState(false);
    const [onPolicy, setOnPolicy] = useState(false);

    return (
        <section className='infoBoxCover'>
            <h1>
                <Title text1={'注意事項'} size={'small'} color={Color.MAIN_RED}/>
            </h1>
            <ul>
                <li>
                    <span>一、 </span>
                    <p>
                        {'本服務所提供的任何數據資訊僅作參考，是否參考' +
                            '本服務所提供的任何資訊，均出於個人自由意志的' +
                            '選擇，與本公司無涉。'}
                    </p>
                </li>
                <li>
                    <span>二、</span>
                    <p>
                        {'本站並無任何彩票經營販售的行為，實際中獎獎號' +
                        '及派彩結果以台灣彩券公布為準。（未滿18歲者，' +
                        '不得購買或兌領彩券。）'}
                    </p>
                </li>
                <li>
                    <span>三、</span>
                    <p>
                        {'本站所引用的各項彩券或第三人的名稱或商標，其' +
                        '權利分別屬於各註冊公司所有。'}
                    </p>
                </li>
            </ul>
            <div className='versionInfo'>
                <span>ver.{version} (目前已是最新版本)</span>
            </div>
            <footer>
                <button onClick={()=>setOnTerms(true)}>{lang().TERMS}</button>
                <button onClick={()=>setOnPolicy(true)}>{lang().PRIVACY_POLICY}</button>
            </footer>
            {onTerms === true ?
                <PolicyModal title={lang().TERMS} contents={termsContents} setOn={setOnTerms}/> : null}
            {onPolicy === true ?
                <PolicyModal title={lang().PRIVACY_POLICY} contents={policyContents} setOn={setOnPolicy}/> : null}
        </section>
    );
};

export default InfoBox;