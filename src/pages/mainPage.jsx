import * as React from 'react';
import banner from '../assets/Banner/banner.png';
import group from '../assets/Banner/logo.png'
import './mainPage-style.css'
export default function MainPage() {
    return(
        <>
            <div class='banner-container'>
                <img src={`${banner}`} alt="banner" class='banner' />
            </div>
            <div class='logo'>
                <img src={`${group}`} alt="group" class='group' />
            </div>
            <div>
                limite
            </div>
        </>
    );
}