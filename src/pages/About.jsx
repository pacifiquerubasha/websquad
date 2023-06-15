import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { images } from '../utils/images';
import FixedContact from '../components/FixedContact';
import Hero from '../components/Hero';

function About(props) {

    useEffect(()=>{
        document.title = "About | JobMagnetix"
    }, [])
    
    return (
        <>

        <Header page="About"/>       
        
        <main className='main__with__banner'>
            
            <Hero image={images.hero} title="About Us" />

            <section className="story">
                <div className="container flex">
                    <div className="story__left">
                        <h3 className='section__title' data-aos="fade-down" data-aos-duration="1000">
                        Our <span className='text-blue'>Story</span>
                        </h3>
                        <p className='section__desc' data-aos="fade-up" data-aos-duration="1000">
                        Together, these six teams worked collaboratively, each contributing their unique expertise to build a global job search website that would empower individuals in their career exploration. Through their collective efforts, they created a platform that connects job seekers with global opportunities, breaks down barriers, and propels individuals towards international career success.

                        </p>
                        <ul>
                            <li className='flex'>
                                <div className="numbering">
                                    1
                                </div>
                                <div>
                                    <h5 className='story__item--title'>The Visionaries</h5>
                                    <p>Shaping the Future of Job Search</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className="numbering">
                                    2
                                </div>
                                <div>
                                    <h5 className='story__item--title'>The Developers</h5>
                                    <p>Transforming Vision into Reality</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className="numbering">
                                    3
                                </div>
                                <div>
                                    <h5 className='story__item--title'>The Content Curators</h5>
                                    <p>Fueling the Platform with Opportunities</p>
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
                    <p className='section__desc text-center'>
                    By offering these services, we aim to support job seekers in every stage of their global career exploration, 
                    from searching for relevant opportunities to expanding their professional network and acquiring the skills necessary
                     for success in an international context.
                    </p>
                    <div className="service flex">
                        <div>
                            <i className='fas fa-user'></i>
                            <h5>Job Search Assistance</h5>
                            <p>Under this service, we provide various tools and resources to assist job seekers in their global career exploration. This includes advanced search filters, personalized job recommendations,</p>

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
                            <h5>International Networking</h5>
                            <p>Through our platform, job seekers can expand their professional network, gain insights from industry experts, and build meaningful connections that can enhance their career prospects.</p>

                        </div>
                    </div>
                    <div className="service flex">
                        <div>
                            <i className='fas fa-user'></i>
                            <h5>Industry Insights</h5>
                            <p>Our platform provides job seekers with valuable industry insights and market research to stay informed about global job trends, salary expectations, and in-demand skills.</p>

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
                    <p className='section__desc text-center'>
                        Our team of six is a powerhouse of talent, passion, and expertise dedicated to empowering individuals worldwide in their pursuit of career success
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
                                <h5>Pacifique Rubasha</h5>
                                <p>Frontend Developer</p>
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
                                <h5>Emmanuel Okorwoit</h5>
                                <p>Project Manager</p>
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
                                <h5>Hallan Warigia</h5>
                                <p>Backend Developer</p>
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
                                <h5>Funke Aderoju</h5>
                                <p>Content Writer</p>
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
                                <h5>Wamuyu Gitonga</h5>
                                <p>Project Manager</p>
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
                                <h5>Sumaya Abdulramah</h5>
                                <p>Digital news writers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partners">
                <div className="container flex flex-col">
                    <h3 className='section__title' data-aos="fade-down" data-aos-duration="1000">Our <span className='text-blue'>Partners</span> </h3>
                    <p className='section__desc text-center'>
                        Our partners are the cornerstone of our success, driving innovation, collaboration, and growth.
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