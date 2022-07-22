import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {lang} from "../../../Assets/Lang/Lang";
import mainIcon from "../../../Assets/Images/banner/chara.png"
import scanIcon from "../../../Assets/Images/icon/icon-QR.png"

const MyCombineScreen = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <section className='myCombineMenuCover'>
            <Link to={props.pathResult+'/daily'}>
                <button>
                    <img src={mainIcon} alt='fuda lotto main icon'/>
                    <span>{lang().CENTER}</span>
                </button>
            </Link>
            <Link to={props.pathHistory+'/daily'}>
                <button>
                    <img src={scanIcon} alt='QR code image'/>
                    <span>{lang().MAKE_SCAN}</span>
                </button>
            </Link>
        </section>
    );
};

export default MyCombineScreen;