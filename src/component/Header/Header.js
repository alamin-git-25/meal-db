import React from 'react';
import './Header.css';

const Header = () => {
    const button = ()=>{
        const input = document.getElementById('search');
        const value = input.value;
        console.log(value);
        input.value = '';
    }
    return (
        <nav>
            <div className="logo">
                <h3>Hangry</h3>
            </div>
            <div className="search">
                <input type="text" name="search" id="search" />
                <button className='btn' id='button' onClick={button}>Search</button>
            </div>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/Items">Items</a>
                <a href="/order">Order</a>
                <a href="/contact">Contacts</a>
            </div>
           
        </nav>
     
    );
};

export default Header;