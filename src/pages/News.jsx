import React from 'react';
import Header from '../components/Header';
import FixedContact from '../components/FixedContact';
import Footer from '../components/Footer';
import { images } from '../utils/images';
import { news } from '../utils/content';
import NewsTemplate from '../components/NewsTemplate';

function News(props) {
    
    return (
        <>

        <Header/>

        <main className='main__news'>
            <h1>The <span className='text-blue'>Blog</span> </h1>

            <section className="intro flex">
                <div className="intro__left">
                    <img src={images.hero} alt="" />
                </div>
                <div className="intro__right">
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

            <section className='news__list'>
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