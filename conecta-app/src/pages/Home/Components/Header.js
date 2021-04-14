import React from 'react';

function Header() {
    return (
        <header className='header'>
                <div className='toolbar'>
                    <div>
                        <a href='/'>Conecta-DEV - alteração</ a>
                    </div>
                    <div>
                        <button>Novo Post</button>
                        <span>Img1</span>
                        <span>Img2 - alteração</span>
                    </div>
                </div>
            </header>
    );
}

export default Header;