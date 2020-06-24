// How to create a component
// 1=> import react;
// 2=> define a functional components
    // => ultimately returns jsx;
// 3 => export the component

import React from 'react';

function Header() {
    return (
        <nav>
            <span>It's Vanshika</span>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Header;
