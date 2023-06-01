import React from 'react';
import { menuItems } from '../utils/content';

function Footer(props) {
    return (
        <footer>
            <div className="footer__top flex flex-col">
                <div className='logo' ><span className='text-blue'>Job</span>Magnetix</div>
                <nav>
                    <ul className='flex'>
                        {menuItems.map((item)=>{
                            return (
                                <li><a href={item.link}>{item.name}</a></li>
                            )
                        })}
                    </ul>
                </nav>      
            </div>

            <div className="footer__bottom flex">
                <span>
                    &copy; 2021 JobMetrix. All Rights Reserved.
                </span>
                <a href="">
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
}

export default Footer;