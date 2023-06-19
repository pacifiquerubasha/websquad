import React from 'react';

function ContactForm(props) {
    
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => setSuccess(true))
          .catch((error) => alert("An error occurred. Please try again"));
      };

    return (
        <form 
            onSubmit={handleSubmit}
            name="contact" 
            method="POST" 
            data-netlify="true">
                        
            <input type="hidden" name="form-name" value="contact" />

            <h3 className='section__title' data-aos="fade-down" data-aos-duration="1000">Contact <span className='text-blue'>Us</span> </h3>
            
            <p className='section__desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quod!
            </p>

            {!success && (
                <p className='success__message'>Thanks for your message! </p>
            )}

            <div className="form__group flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name='name' />
            </div>
            <div className="form__group flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email'/>
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
    );
}

export default ContactForm;