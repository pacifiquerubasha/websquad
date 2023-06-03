import React, { useEffect, useState } from 'react';
import { menuItems } from '../utils/content';

function Header(props) {

    const [isFixed, setIsFixed] = useState();

    useEffect(() => {
        const handleScroll = () => {
          setIsFixed(window.scrollY > window.innerHeight)
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <header className={`flex ${isFixed && "fixedHeader"}`}>
            <a href='/' className='logo'><span className='text-blue'>Job</span>Magnetix</a>
            <nav>
                <ul className='flex'>
                    {menuItems.map((item)=>{
                        return (
                            <li><a href={item.link}>{item.name}</a></li>
                        )
                    })}
                </ul>
            </nav> 
            <div class="toggleContainer">
                    <input type="checkbox" id="checkbox1" class="checkbox1 visuallyHidden"/>
                    <label for="checkbox1">
                        <div class="hamburger hamburger1">
                            <span class="bar bar1"></span>
                            <span class="bar bar2"></span>
                            <span class="bar bar3"></span>
                            <span class="bar bar4"></span>
                        </div>
                    </label>
                </div>       
        </header>
    );
}

export default Header;