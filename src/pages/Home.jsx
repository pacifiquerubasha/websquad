import React from 'react';
import { images } from '../utils/images';

function Home(props) {

    return (
        <>
        <header className='flex'>
            <div><span className='text-blue'>Job</span>Metrix</div>
            <nav>
                <ul className='flex'>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </nav>        
        </header>
        <main>
            <section className="hero flex w-full">
                <div className="hero__left">
                    {/* <img src={images.hero} alt="" /> */}
                </div>
                <div className="hero__right">
                    <h1 data-aos="fade-down" data-aos-duration="1000">
                        Lorem, ipsum dolor sit amet.
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.</p>

                    <a href="" className="main__btn" data-aos="fade-up" data-aos-duration="1000">                        
                        <span>EXPLORE NOW FOR FREE</span>
                        <div>
                            <i className='fas fa-arrow-right'></i>
                        </div>
                    </a>
                </div>
            </section>

            <section className="about">
                <div className="container flex">
                    <div className="about__left" data-aos="fade-right" data-aos-duration="1000">
                        <h3 className='section__title'>
                            <span>About The Platform</span>                            
                        </h3>
                        <p className='section__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.</p>
                    </div>
                    <div className="about__right flex" data-aos="fade-left" data-aos-duration="1000">
                        <div className="about__box">
                            <div className="box__header flex">
                                <i className='fas fa-user'></i>
                                <h5>Box Title</h5>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, quas.</p>
                        </div>
                        <div className="about__box">
                            <div className="box__header flex">
                                <i className='fas fa-user'></i>
                                <h5>Box Title</h5>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, quas.</p>
                        </div>
                        <div className="about__box">
                            <div className="box__header flex">
                                <i className='fas fa-user'></i>
                                <h5>Box Title</h5>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, quas.</p>
                        </div>
                        <div className="about__box">
                            <div className="box__header flex">
                                <i className='fas fa-user'></i>
                                <h5>Box Title</h5>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, quas.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className='section2'>
                <div className="container flex">
                    <div className="section2__left" data-aos="fade-left" data-aos-duration="1000">
                        <img src={images.hero} alt="" />
                    </div>
                    <div className="section2__right flex flex-col" data-aos="fade-right" data-aos-duration="1000">
                        <h3 className='section__title'>
                            <span>About The Platform</span>                            
                        </h3>
                        <p className='section__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.</p>   
                       
                        <a href="" className="main__btn">                        
                            <span>EXPLORE NOW FOR FREE</span>
                            <div>
                                <i className='fas fa-arrow-right'></i>
                            </div>
                        </a>          
                    </div>

                </div>
            </section>
        </main>
        <footer></footer>
        </>
        
    );
}

export default Home;