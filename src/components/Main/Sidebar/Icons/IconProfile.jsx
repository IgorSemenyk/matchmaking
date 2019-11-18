import React from 'react';

const IconProfile = () => {
    return <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
            <path d="M11.2 17V11.7059H14.8V17H19.3V9.94118H22L13 2L4 9.94118H6.7V17H11.2Z" fill="url(#paint0_linear)"/>
        </g>
        <defs>
            <filter id="filter0_d" x="0" y="0" width="26" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.137255 0 0 0 0 0.266667 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear" x1="13" y1="2" x2="13" y2="17" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF2747"/>
                <stop offset="1" stop-color="#D91835"/>
            </linearGradient>
        </defs>
    </svg>

}
export default IconProfile;