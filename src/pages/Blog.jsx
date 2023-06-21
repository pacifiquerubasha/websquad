import React, { useEffect } from 'react';
import Header from '../components/Header';
import FixedContact from '../components/FixedContact';
import Footer from '../components/Footer';
import { images } from '../utils/images';
import { articles } from '../utils/content';
import NewsTemplate from '../components/ArticlesTemplate';

function Blog(props) {

    
    useEffect(()=>{
        document.title = "Blog | JobMagnetix"
    }, [])
    
    return (
        <>

        <Header page="News"/>

        <main className='main__news'>
            <h1 data-aos="fade-down" data-aos-duration="1000">The <span className='text-blue'>Blog</span> </h1>

            <section className="intro flex">
                <div className="intro__left" data-aos="fade-right" data-aos-duration="1000">
                    <img src={articles.newsItems[3].image} alt="" />
                </div>
                <div className="intro__right" data-aos="fade-left" data-aos-duration="1000">
                    <span>{articles.newsItems[3].author}</span>
                    <h2>{articles.newsItems[3].title}</h2>
                    <p>{articles.newsItems[3].content}</p>
                    <a href={`/blog/${articles.newsItems[3].id}`} className='main__btn'>                        
                        <span>Read More</span>
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
                        {articles.newsItems.map((item)=>{
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

export default Blog;