import React from 'react';

const AnalyzeTotalValue = (props) => {
    return (
        <div className='analyzeTotalValue'>
            <strong>
                {Number(props.value).toLocaleString('ko-KR')}
            </strong>
            <span>{props.on === true ? '元' : '次'}</span>
        </div>
    );
};

export default AnalyzeTotalValue;