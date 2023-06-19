import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

function Contact(props) {

    
    useEffect(()=>{
        document.title = "Contact | JobMagnetix"
    }, [])
    return (
        <>

        <Header page="Contact"/>       
        
        <main className='main__contact'>            
            
            <ContactForm isContactPage={true}/>

        </main>

        <Footer/>
            
        </>
    );
}

export default Contact;