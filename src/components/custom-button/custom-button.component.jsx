import React from 'react';

import './custom-button.styles.scss';

const CustomButton =({children, ...oprps})=>
(
    <button className="custom-button" {...oprps}>
        {children}
    </button>
)
export default CustomButton; 