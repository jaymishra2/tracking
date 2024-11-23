import React from 'react';

function Header() {
    return (
        <header className="py-4 text-white text-center">
            <div className='flex justify-between px-5'>
                <h1>
                    <a href="#/">RKVL Express Courier</a>
                </h1>
                <a href="#/admin">Login</a>

            </div>
        </header>
    );
}

export default Header;
