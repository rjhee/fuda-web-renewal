import React from 'react';
import {Link} from "react-router-dom";

const HomeMenu = (props) => {
    const MenuList = props.Icon && props.Icon.map((item, i)=>
        (
            <li key={i} className='menuCover'>
                <Link as={Link} to={item.urlPath}>
                    <img src={item.imgPath} alt={item.name}/>
                    <span>{item.title}</span>
                </Link>
            </li>
        ));

    return (
        <ul className='homeMenuSection'>
            {MenuList}
        </ul>
    );
};

export default HomeMenu;