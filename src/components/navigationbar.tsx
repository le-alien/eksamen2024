import React from 'react';

const NavigationBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/registrering">Registration</a>
                </li>
                </ul>
        </nav>
    );
};

export default NavigationBar;