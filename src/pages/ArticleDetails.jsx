import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import FixedContact from '../components/FixedContact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { images } from '../utils/images';
import { articles } from '../utils/content';

function ArticleDetails({match}) {
    const params = useParams();

    useEffect(()=>{
        document.title ="News | JobMagnetix"
    }, [])

    const article = articles.newsItems.find((item)=> item.id === params.id);
    const nextArticle = articles.newsItems.find((item)=>item.id !== params.id)
    
    return (
        <>
            <Header page="News"/>
            <main className='main__with__banner'>
                {/* <Hero image={images.hero} title="News Title" author="Lady Mary" date="12-02-2023"/> */}

                <section className="news__hero">

                    <div className='news__image'>
                        <img src={article.image} alt="" />
                    </div>
                    <div className="news__headline">
                            <div className="date">
                                <span>Date</span>
                                <span>{article.date}</span>

                            </div>
                            <div className="author">
                                <span>Author</span>
                                <span>{article.author}</span>
                            </div>

                            <h1>
                                {article.title}
                            </h1>

                    </div>

                </section>


                <section className='news__text'>
                    <div className="container flex">

                        <div className="news__text__left flex flex-col">
                            <span className='uppercase text-gray'>WORD FROM AUTHOR</span>
                            <h2>
                                <q>
                                    {article.word}
                                </q>
                            </h2>
                            <span className='uppercase text-gray'>TAGS</span>
                            
                            <div className="tags">
                                {article.tags.split(",").map((tag, key)=>(<span key={key}>{tag}</span>))}

                            </div>

                        </div>

                        <div className="news__text__right">

                            {article.content.split("\n").map((paragraphe, key)=>( <p key={key}>{paragraphe}</p>))}

                            <div className='news__more flex flex-col'>
                                <span className='uppercase text-gray'>MORE</span>
                                <a href={`/blog/${nextArticle.id}`}>
                                    {nextArticle.title}
                                </a>
                            </div>
                        </div>


                    </div>
                </section>
            </main>

            <FixedContact/>
            <Footer/>

            
        </>
    );
}

export default ArticleDetails;