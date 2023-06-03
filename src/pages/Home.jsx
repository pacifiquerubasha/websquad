import React, { useEffect } from 'react';
import { images } from '../utils/images';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { about, ceo, cta, hero, news, section2, section3, testimonials } from '../utils/content';
import FixedContact from '../components/FixedContact';
import NewsTemplate from '../components/NewsTemplate';

function Home(props) {

    
    useEffect(()=>{
        document.title = "Home | JobMagnetix"
    }, [])

    return (
        <>
        <Header/>

        <main>
            <section className="hero flex w-full">
               
                <div className="hero__right">
                    <h1 data-aos="fade-down" data-aos-duration="1000">
                       {hero.title}
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="1000">{hero.subtitle}</p>

                    <a href="" className="main__btn" data-aos="fade-up" data-aos-duration="1000">                        
                        <span>{hero.cta}</span>
                        <div>
                            <i className='fas fa-arrow-right'></i>
                        </div>
                    </a>
                </div>

                <div className="hero__left">

                    <video id="hero__video" autoplay="" muted="" loop="" playsinline="">
                        <source src={hero.video} type="video/mp4"/>
                    </video> 
                </div>

            </section>

            <section className="about">
                <div className="container flex">
                    <div className="about__left" data-aos="fade-right" data-aos-duration="1000">
                        <h3 className='section__title'>
                            <span>{about.title}</span>                            
                        </h3>
                        <p className='section__desc'>{about.subtitle}</p>
                    </div>
                    <div className="about__right flex" data-aos="fade-left" data-aos-duration="1000">

                        {about.aboutBoxes.map((box)=>{
                            return(
                                <div className="about__box">
                                    <div className="box__header flex">
                                        <i className={box.icon}></i>
                                        <h5>{box.box_title}</h5>
                                    </div>
                                    <p>{box.box_content}</p>
                                </div>
                            )
                        })
                        }

               

                    </div>
                </div>
            </section>

            <section className="ceo">
                <div className="container flex flex-col">
                    <p>
                        {ceo.message}
                    </p>
                    <div className="ceo__info flex flex-col">
                        <span className='ceo__name'>{ceo.name}</span>
                        <span className='ceo__role'>{ceo.role}</span>
                    </div>
                </div>
            </section>

            <section className='section2'>
                <div className="container flex">
                    <div className="section2__left" data-aos="fade-left" data-aos-duration="1000">
                        <img src={section2.image} alt="" loading='lazy'/>
                    </div>
                    <div className="section2__right flex flex-col" data-aos="fade-right" data-aos-duration="1000">
                        <h3 className='section__title'>
                            <span>{section2.title}</span>                            
                        </h3>
                        <p className='section__desc'>
                            {section2.subtitle}
                        </p>   
                       
                        <a href="" className="main__btn">                        
                            <span>
                                {section2.cta}
                            </span>
                            <div>
                                <i className='fas fa-arrow-right'></i>
                            </div>
                        </a>          
                    </div>

                </div>
            </section>

            <section className="section3">
                <div className="container flex">
                    <div className="section3__left flex flex-col">
                        <h3 className='section__title'>
                            <span>{section3.title}</span>
                        </h3>
                        <p className='section__desc'>
                            {section3.subtitle}
                        </p>
                        {
                            section3.stats.map((stat)=>{
                                return(
                                    <div className="stat">
                                        <p>{stat.total}</p>
                                        <span>{stat.label}</span>
                                    </div>
                                )}
                            )
                        }
                        

                    </div>

                    <div className="section3__right flex flex-col">
                        {section3.section3Boxes.map((item)=>{
                            return(
                                <div className="section3_box">
                                    <i className={item.icon}></i>
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })

                        }
                    </div>
                </div>
            </section>

            <section className="news">
                <div className="container flex flex-col">

                    <h3 className='section__title'>
                        <span>{news.title}</span>
                    </h3>
                    <p className='section__desc'>
                        {news.subtitle}
                    </p>
                    <a href="" className='main__btn'>                        
                        <span>{news.cta}</span>
                        <div>
                            <i className='fas fa-arrow-right'></i>
                        </div>
                    </a>

                    <div className="news__grid flex">
                        {news.newsItems.map((item)=>{
                            return(
                                <NewsTemplate item={item}/>
                            )
                        })

                        }
                        
                    

                    </div>

                </div>
            </section>

            

            <section className="cta">
                <div className="container flex flex-col">
                    <p>{cta.question}</p>
                    <h4>{cta.title}</h4>
                    <p>
                       {cta.desc}
                    </p>  

                    <a href="" className='main__btn'>                        
                        <span>{cta.cta}</span>
                        <div>
                            <i className='fas fa-arrow-right'></i>
                        </div>
                    </a>              
                
                </div>
            </section>

            <section className="testimonials">
                <div className="container flex">
                    <div className="testimonials__left">
                        <h3 className='section__title'>
                            <span>{testimonials.title}</span>
                        </h3>
                        <p className='section__desc'>
                            {testimonials.subtitle}
                        </p>
                    </div>
                    <div className="testimonials__right flex">

                        {testimonials.testimonials.map((testimonial)=>{
                            return(
                                <div className="testimonial flex flex-col">
                                    <img src={testimonial.image} alt="" loading='lazy'/>
                                    <p>
                                        {testimonial.message}
                                    </p>

                                    <div>
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            )
                        })

                        }


                    </div>

                </div>
            </section>
        </main>

        
        <FixedContact/>      
        <Footer/>
        </>
        
    );
}

export default Home;