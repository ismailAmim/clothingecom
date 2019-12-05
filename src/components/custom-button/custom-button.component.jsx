import React from 'react';

import './custom-button.styles.scss';

const CustomButton =({children,isGoogleSignIn, ...oprps})=>
(
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...oprps}>
        {children}
    </button>
)
export default CustomButton; 