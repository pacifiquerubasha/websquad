import React from 'react';
import Header from '../components/Header';
import { images } from '../utils/images';

function NotFound(props) {
    return (
        <>
            <Header/>
            <main className='not__found'>
                <img src={images.error} alt="" />
            </main>
            
        </>
    );
}

export default NotFound;