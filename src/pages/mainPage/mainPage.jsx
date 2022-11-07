import * as React from 'react';
import banner from '../../assets/Banner/banner.png';
import group from '../../assets/Banner/logo.png'
import './mainPage-style.css'
export default function MainPage(props) {
    return(
        <>
            <div class='banner-container' id='inicio' ref={props.reference}>
                <img src={`${banner}`} alt="banner" class='banner' loading='lazy'/>
            </div>
            {/* <div class='logo'>
                <img src={`${group}`} alt="group" class='group' />
            </div> */}
        </>
    );
}