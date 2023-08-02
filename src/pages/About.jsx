import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { images } from '../utils/images';
import FixedContact from '../components/FixedContact';
import Hero from '../components/Hero';


const ContactForm = React.lazy(()=>import('../components/ContactForm'));
const Footer = React.lazy(()=>import('../components/Footer'));

function About(props) {

    useEffect(()=>{
        document.title = "About | JobMagnetix"
    }, [])

    const teamMembers = [
        {
            name: 'Pacifique Rubasha',
            role: 'Frontend Developer',
            image: images.pac,
            linkedin: 'www.linkedin.com/in/pacifique-rubasha-444b90206',
            github: 'https://github.com/pacifiquerubasha',
            instagram: '',
            facebook: '',
            more:{
                interests: ['Frontend Dev', 'Mobile Dev', 'Cybersecurity'],
                summary:`
                Passionate React frontend developer from Congo, eager to create delightful web experiences. 
                Committed to continuous learning and growth. Driven to make a positive impact through coding. 
                Ready to contribute skills and creativity to meaningful projects. 
                Open to collaborative opportunities in the web development realm.
                `
            }
        },

        {
            name: 'Emmanuel Okorwoit',
            role: 'Project Manager',
            image:  images.emmanuel,
            linkedin: 'https://www.linkedin.com/in/emmanuel-okorwoit/',
            github: '',
            instagram: '',
            facebook: '',
            more:{
                interests: ['Research', 'Big Data', 'Startups'],
                summary:'Ambitious kenyan student exploring Research, Big Data, and Startups. Eager to innovate and make an impact in the tech world.'

            }

        },
        {
            name: 'Hallan Warigia',
            role: 'Backend Developer',
            image:  images.allan,
            linkedin: 'https://www.linkedin.com/in/hallan-warigia/',
            github: '',
            instagram: '',
            facebook: '',
            more:{
                interests: ['Backend Dev', 'Mobile Dev', 'Cybersecurity'],
                summary:'Aspiring student backend dev from Kenya passionate about Node.js, creating delightful web experiences with code. Eager to learn and grow. '
            }
           
        },
        {
            name: 'Funke Aderoju',
            role: 'Content Writer',
            image:  images.esther,
            linkedin: 'https://mu.linkedin.com/in/funke-aderoju-856b85215',
            github: 'https://github.com/FunkeEsther',
            instagram: 'https://instagram.com/fu_esther?igshid=OGQ5ZDc2ODk2ZA==',
            facebook: '',
            more:{
                interests: ['Environmental Sustainability',`Gender Equality and Women's Rights Advocacy`,`Women's Health and Wellness`],
                summary:`
                I am Funke Aderoju, a passionate computer science student from Nigeria, with a love for coding. 
                My mission is to inspire women to join the tech industry, bridging the gender gap in technology 
                through advocacy and empowering initiatives. Eager to contribute my skills to create an inclusive
                 and innovative digital world.

                `
            }
        },

        {            
            name: 'Wamuyu Gitonga',
            role: 'Project Manager',
            image:  images.wamuyu,
            linkedin: 'https://www.linkedin.com/in/wamuyu-gitonga/',
            github: '',
            instagram: '',
            facebook: '',
            more:{
                interests: ['Project Management', 'Research', 'Startups'],
                summary:'Ambitious Kenyan student exploring Project Management, Research, and Startups. Eager to innovate and make an impact in the tech world.'
            }

        },

        {
            name: 'Sumaya Abdulramah',
            role: 'Digital News Writer',
            image:  images.sumaya,
            linkedin: 'https://www.linkedin.com/in/sumaya-abdulramah/',
            github: '',
            instagram: '',
            facebook: '',
            more:{
                interests: ['Digital News Writing', 'Research', 'Startups'],
                summary:'Ambitious Kenyan student exploring Digital News Writing, Research, and Startups. Eager to innovate and make an impact in the tech world.'
            }
        },
        ];
    

    return (
        <>

        <Header page="About"/>       
        
        <main className='main__with__banner'>
            
            <Hero image={images.code} title="About Us" />

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

                    <div className="story__right" data-aos="fade-up" data-aos-duration="1000">
                        <img src={images.about} alt="" loading='lazy'/>
                    </div>
                </div>
            </section>

            <section className="services">
                <div className="container flex flex-col">
                    <h3 className='section__title' data-aos="fade-down" data-aos-duration="1000">Our <span className='text-blue'>Services</span> </h3>
                    <p className='section__desc text-center' data-aos="fade-down" data-aos-duration="1000">
                    By offering these services, we aim to support job seekers in every stage of their global career exploration, 
                    from searching for relevant opportunities to expanding their professional network and acquiring the skills necessary
                     for success in an international context.
                    </p>
                    <div className="service flex" data-aos="zoom-in" data-aos-duration="1000">
                        <div>
                            <i className='fas fa-bolt'></i>
                            <h5>Job Search Assistance</h5>
                            <p>Under this service, we provide various tools and resources to assist job seekers in their global career exploration. This includes advanced search filters, personalized job recommendations,</p>

                        </div>
                        <div className='service__image'>
                            <img src={images.hero} alt='' loading='lazy'/>
                        </div>
                    </div>
                    <div className="service flex"  data-aos="zoom-in" data-aos-duration="1000">
                        <div className='service__image'>
                            <img src={images.hero} alt='' loading='lazy'/>
                        </div>
                        <div>
                            <i className='fas fa-globe'></i>
                            <h5>International Networking</h5>
                            <p>Through our platform, job seekers can expand their professional network, gain insights from industry experts, and build meaningful connections that can enhance their career prospects.</p>

                        </div>
                    </div>
                    <div className="service flex"  data-aos="zoom-in" data-aos-duration="1000">
                        <div>
                            <i className='fas fa-bar-chart'></i>
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
                        {
                            teamMembers.map((member, index) => (
                                <div className="member" data-aos="fade-up" data-aos-duration="1000">
                                    <img src={member.image} alt="" loading='lazy'/>
                                    <div className="member__info">
                                        <div className="socials">
                                            <a href={member.facebook} target='_blank'><i className='fab fa-facebook'></i></a>
                                            <a href={member.linkedin} target='_blank'><i className='fab fa-linkedin'></i></a>
                                            <a href={member.instagram} target='_blank'><i className='fab fa-instagram'></i></a>
                                            <a href={member.github} target='_blank'><i className='fab fa-github'></i></a>
                                        </div>
                                        <h5>{member.name}</h5>
                                        <p>{member.role}</p>
                                    </div>

                                    <div className='member__more flex flex-col'>
                                        <h5>{member.name}</h5>
                                        <p>
                                            {member.more.summary}
                                        </p>
                                        <div className='flex flex-col member__interests'>
                                            <span>Interests</span>
                                            <ul>
                                                {member.more.interests.map((interest, i)=><li key={i}>{interest}</li>)}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                        
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
                            <a href="https://www.alueducation.com/" target='_blank'>
                                <img src={images.alu} alt="" loading='lazy'/>
                            </a>
                        </div>
                        <div className="partner">
                            <a href="https://www.gcu.ac.uk/" target='_blank'>
                                <img src={images.gcu} alt="" loading='lazy'/>
                            </a>
                        </div>
                        <div className="partner">
                            <a href="https://remotive.com/" target='_blank'>
                                <img src={images.remotive} alt="" loading='lazy'/>
                            </a>
                        </div>
                        
                    </div>
                </div>

            </section>

            <section className="contact">
                {/* <img src={images.hero} alt="" /> */}
                <div className="contact__container">
                    <ContactForm/>
                </div>
            </section>

        </main>


        <FixedContact/>

        <Footer/>
            
        </>
    );
}

export default About;