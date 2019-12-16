import React from 'react';

import './custom-button.styles.scss';

const CustomButton =({children,isGoogleSignIn,inverted, ...oprps})=>
(
    <button className={`
    ${isGoogleSignIn ? "google-sign-in" : ""}
    ${inverted ? "inverted":""}
    custom-button`} {...oprps}>
        {children}
    </button>
)
// props like isGoogleSignIn , Inverted for css
export default CustomButton; 