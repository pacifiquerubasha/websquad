import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Contact(props) {

    
    useEffect(()=>{
        document.title = "Contact | JobMagnetix"
    }, [])
    return (
        <>

        <Header page="Contact"/>       
        
        <main className='main__contact'>            
        
            <form action="" className='contact__form'>
                <h3 className='section__title'>Contact <span className='text-blue'>Us</span> </h3>
                <p className='section__desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quod!
                </p>

                <div className="form__group flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>
                <div className="form__group flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="form__group flex flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="5">

                    </textarea>
                </div>

                <button type='submit' >
                    Send Message
                </button>

            </form>

        </main>

        <Footer/>
            
        </>
    );
}

export default Contact;