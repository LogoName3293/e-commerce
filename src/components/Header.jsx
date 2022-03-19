import React from 'react';
import cart from '../assets/gitLogo.png'

const Header = () => {
    return (
        <>
        <div className='header'>
            <p><a href='https://github.com/abuizid/e-commerce' rel="noreferrer" target={'_blank'}>Github ShopCode</a></p>
            <img src={cart} alt="logo" />
        </div>
        <hr id='headHr'/>
        </>
    );
};

export default Header;