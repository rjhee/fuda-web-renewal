import React from 'react';

const DotBtnMenu = (props) => {
    return (
        <ul className='dotBtnMenuCover'>
           <li>
               <button onClick={props.onDelete}>刪除</button>
           </li>
            <li>
               <button onClick={props.onEdit}>編輯</button>
           </li>
        </ul>
    );
};

export default DotBtnMenu;