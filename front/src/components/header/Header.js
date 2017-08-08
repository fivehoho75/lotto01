import React from 'react';

const Header = ({children}) => {
    return (
        <div>
            <div className="header-wrapper">
                <div className="header">
                    {children}
                </div>   
            </div>
        </div>
    )
};

export default Header;