import React from 'react';

import './social-net-icons.styles.scss';

import telegramIcon from '../../Assets/Icons/telegram.png';
import instagramIcon from '../../Assets/Icons/instagram.png';
import facebookIcon from '../../Assets/Icons/facebook.png';
import skypeIcon  from '../../Assets/Icons/skype.custom.PNG';


const SocialIcons = () => (
    <div className='social-icons'>
        <img className='telegram' src={telegramIcon} alt="telegramIcon"/>         
        <img src={instagramIcon} alt="instagramIcon"/>                    
        <img src={facebookIcon} alt="facebookIcon"/>                    
        <img src={skypeIcon} alt="skypeIcon"/>                    
    </div>       
);

export default SocialIcons;