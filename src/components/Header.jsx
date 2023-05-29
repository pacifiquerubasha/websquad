import React from 'react';
import { menuItems } from '../utils/content';

function Header(props) {
    return (
        <header className='flex'>
            <div className='logo'><span className='text-blue'>Job</span>Metrix</div>
            <nav>
                <ul className='flex'>
                    {menuItems.map((item)=>{
                        return (
                            <li><a href={item.link}>{item.name}</a></li>
                        )
                    })}
                </ul>
            </nav>        
        </header>
    );
}

export default Header;