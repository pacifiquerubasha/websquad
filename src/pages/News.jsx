import React, { useEffect } from 'react';
import Header from '../components/Header';
import FixedContact from '../components/FixedContact';
import Footer from '../components/Footer';
import { images } from '../utils/images';
import { news } from '../utils/content';
import NewsTemplate from '../components/NewsTemplate';

function News(props) {

    
    useEffect(()=>{
        document.title = "News | JobMagnetix"
    }, [])
    
    return (
        <>

        <Header page="News"/>

        <main className='main__news'>
            <h1 data-aos="fade-down" data-aos-duration="1000">The <span className='text-blue'>Blog</span> </h1>

            <section className="intro flex">
                <div className="intro__left" data-aos="fade-right" data-aos-duration="1000">
                    <img src={images.hero} alt="" />
                </div>
                <div className="intro__right" data-aos="fade-left" data-aos-duration="1000">
                    <span>Lorem, ipsum dolor.</span>
                    <h2>Lorem ipsum dolor sit amet consectetur</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem quo impedit architecto quae, ea minus natus repellat illum consequatur!</p>
                    <a href="" className='main__btn'>                        
                        <span>Read</span>
                        <div>
                            <i className='fas fa-arrow-right'></i>
                        </div>
                    </a>    
                </div>
            </section>

            <section className='news__list' data-aos="fade-up" data-aos-duration="1000">
                <div className="container flex flex-col">
                    <h2 className='uppercase text-gray'>NEWS</h2>

                    <div className="news__grid flex">
                        {news.newsItems.map((item)=>{
                            return <NewsTemplate item={item}/>
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

export default News;