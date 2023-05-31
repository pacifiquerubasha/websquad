import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { images } from '../utils/images';
import FixedContact from '../components/FixedContact';
import Hero from '../components/Hero';

function About(props) {
    return (
        <>

        <Header/>       
        
        <main className='main__with__banner'>
            
            <Hero image={images.hero} title="About Us" />

            <section className="story">
                <div className="container flex">
                    <div className="story__left">
                        <h3 className='section__title' data-aos="fade-down" data-aos-duration="1000">
                        Our <span className='text-blue'>Story</span>
                        </h3>
                        <p className='section__desc' data-aos="fade-up" data-aos-duration="1000">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum temporibus quo autem cumque eaque necessitatibus accusantium sit aperiam culpa.
                        </p>
                        <ul>
                            <li className='flex'>
                                <div className="numbering">
                                    1
                                </div>
                                <div>
                                    <h5 className='story__item--title'>Lorem ipsum dolor sit.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, earum.</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className="numbering">
                                    1
                                </div>
                                <div>
                                    <h5 className='story__item--title'>Lorem ipsum dolor sit.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, earum.</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className="numbering">
                                    1
                                </div>
                                <div>
                                    <h5 className='story__item--title'>Lorem ipsum dolor sit.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, earum.</p>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className="story__right">
                        <img src={images.hero} alt="" loading='lazy'/>
                    </div>
                </div>
            </section>

            <section className="services">
                <div className="container flex flex-col">
                    <h3 className='section__title' data-aos="fade-down" data-aos-duration="1000">Our <span className='text-blue'>Services</span> </h3>
                    <p className='section__desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quod!
                    </p>
                    <div className="service flex">
                        <div>
                            <i className='fas fa-user'></i>
                            <h5>Service Title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus libero odit cum. A, autem.</p>

                        </div>
                        <div className='service__image'>
                            <img src={images.hero} alt='' loading='lazy'/>
                        </div>
                    </div>
                    <div className="service flex">
                        <div className='service__image'>
                            <img src={images.hero} alt='' loading='lazy'/>
                        </div>
                        <div>
                            <i className='fas fa-user'></i>
                            <h5>Service Title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus libero odit cum. A, autem.</p>

                        </div>
                    </div>
                    <div className="service flex">
                        <div>
                            <i className='fas fa-user'></i>
                            <h5>Service Title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus libero odit cum. A, autem.</p>

                        </div>
                        <div className='service__image'>
                            <img src={images.hero} alt='' loading='lazy'/>
                        </div>
                    </div>
                    

                </div>
            </section>

            <section className="team">
                <div className="container flex flex-col">
                    <h3 className='section__title' data-aos="fade-down" data-aos-duration="1000"><span className='text-blue'>Meet</span> The Team</h3>
                    <p className='section__desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quod!
                    </p>

                    <div className="team__members flex">
                        <div className="member">
                            <img src={images.hero} alt="" loading='lazy'/>
                            <div className="member__info">
                                <div className="socials">
                                    <i className='fab fa-facebook'></i>
                                    <i className='fab fa-twitter'></i>
                                    <i className='fab fa-instagram'></i>
                                    <i className='fab fa-github'></i>
                                </div>
                                <h5>Member Name</h5>
                                <p>Member Role</p>
                            </div>
                        </div>
                        <div className="member">
                            <img src={images.hero} alt="" loading='lazy'/>
                            <div className="member__info">
                                <div className="socials">
                                    <i className='fab fa-facebook'></i>
                                    <i className='fab fa-twitter'></i>
                                    <i className='fab fa-instagram'></i>
                                    <i className='fab fa-github'></i>
                                </div>
                                <h5>Member Name</h5>
                                <p>Member Role</p>
                            </div>
                        </div>
                        <div className="member">
                            <img src={images.hero} alt="" loading='lazy'/>
                            <div className="member__info">
                                <div className="socials">
                                    <i className='fab fa-facebook'></i>
                                    <i className='fab fa-twitter'></i>
                                    <i className='fab fa-instagram'></i>
                                    <i className='fab fa-github'></i>
                                </div>
                                <h5>Member Name</h5>
                                <p>Member Role</p>
                            </div>
                        </div>
                        <div className="member">
                            <img src={images.hero} alt="" />
                            <div className="member__info">
                                <div className="socials">
                                    <i className='fab fa-facebook'></i>
                                    <i className='fab fa-twitter'></i>
                                    <i className='fab fa-instagram'></i>
                                    <i className='fab fa-github'></i>
                                </div>
                                <h5>Member Name</h5>
                                <p>Member Role</p>
                            </div>
                        </div>
                        <div className="member">
                            <img src={images.hero} alt="" loading='lazy'/>
                            <div className="member__info">
                                <div className="socials">
                                    <i className='fab fa-facebook'></i>
                                    <i className='fab fa-twitter'></i>
                                    <i className='fab fa-instagram'></i>
                                    <i className='fab fa-github'></i>
                                </div>
                                <h5>Member Name</h5>
                                <p>Member Role</p>
                            </div>
                        </div>
                        <div className="member">
                            <img src={images.hero} alt="" loading='lazy'/>
                            <div className="member__info">
                                <div className="socials">
                                    <i className='fab fa-facebook'></i>
                                    <i className='fab fa-twitter'></i>
                                    <i className='fab fa-instagram'></i>
                                    <i className='fab fa-github'></i>
                                </div>
                                <h5>Member Name</h5>
                                <p>Member Role</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partners">
                <div className="container flex flex-col">
                    <h3 className='section__title' data-aos="fade-down" data-aos-duration="1000">Our <span className='text-blue'>Partners</span> </h3>
                    <p className='section__desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quod!
                    </p>

                    <div className="partners__list flex">
                        <div className="partner">
                            <img src={images.react} alt="" loading='lazy'/>
                            <span>ReactJs</span>
                        </div>
                        <div className="partner">
                            <img src={images.react} alt="" loading='lazy'/>
                            <span>ReactJs</span>
                        </div>
                        <div className="partner">
                            <img src={images.react} alt="" loading='lazy'/>
                            <span>ReactJs</span>
                        </div>
                        
                    </div>
                </div>

            </section>

            <section className="contact">
                {/* <img src={images.hero} alt="" /> */}
                <div className="contact__container">
                    <form action="">
                        <h3 className='section__title' data-aos="fade-down" data-aos-duration="1000">Contact <span className='text-blue'>Us</span> </h3>
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
                </div>
            </section>

        </main>


        <FixedContact/>

        <Footer/>
            
        </>
    );
}

export default About;