import React from 'react';
import {lang} from "../../Assets/Lang/Lang";


const Caution = () => {
    return (
        <div className='cautionSection'>
            <strong>{lang().CAUTION_TEXT}</strong>
        </div>
    );
};

export default Caution;