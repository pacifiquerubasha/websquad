import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import FixedContact from '../components/FixedContact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { images } from '../utils/images';

function NewsDetails({match}) {
    const params = useParams();

    useEffect(()=>{
        console.log(params.id)
    }, [])
    return (
        <>
            <Header/>
            <main className='main__with__banner'>
                {/* <Hero image={images.hero} title="News Title" author="Lady Mary" date="12-02-2023"/> */}

                <section className="news__hero">

                    <div className='news__image'>
                        <img src={images.hero} alt="" />
                    </div>
                    <div className="news__headline">
                            <div className="date">
                                <span>Date</span>
                                <span>12-07-2038</span>

                            </div>
                            <div className="author">
                                <span>Author</span>
                                <span>Emmanuel Murairi</span>
                            </div>

                            <h1>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cupiditate.
                            </h1>

                    </div>

                </section>


                <section className='news__text'>
                    <div className="container flex">

                        <div className="news__text__left flex flex-col">
                            <span className='uppercase text-gray'>WORD FROM AUTHOR</span>
                            <h2>
                                <q>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius excepturi iure, dolore libero totam harum modi dolor esse soluta!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius excepturi iure, dolore libero totam harum modi dolor esse soluta!

                                </q>
                            </h2>
                            <span className='uppercase text-gray'>TAGS</span>
                            
                            <div className="tags">
                                <span>Tag 1</span>
                                <span>Tag 1</span>
                                <span>Tag 1</span>  
                            </div>

                        </div>

                        <div className="news__text__right">

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est, magnam laborum reiciendis fuga quisquam quia eius voluptatem accusamus voluptate!
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt molestias nisi neque aut, voluptas accusamus voluptatum incidunt eligendi possimus corporis doloribus modi veritatis eaque eum cumque impedit repellendus, perferendis eveniet vero voluptatibus sed saepe magnam velit corrupti. Quidem, inventore dicta.
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae harum similique odio natus ipsum ut hic, perspiciatis aliquam ducimus autem voluptatibus mollitia optio molestias architecto, laborum ex, deleniti nihil quos! Repellendus quis quo tempora corporis error, explicabo exercitationem maiores, incidunt, nostrum architecto numquam? Placeat, nam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est, magnam laborum reiciendis fuga quisquam quia eius voluptatem accusamus voluptate!
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt molestias nisi neque aut, voluptas accusamus voluptatum incidunt eligendi possimus corporis doloribus modi veritatis eaque eum cumque impedit repellendus, perferendis eveniet vero voluptatibus sed saepe magnam velit corrupti. Quidem, inventore dicta.
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae harum similique odio natus ipsum ut hic, perspiciatis aliquam ducimus autem voluptatibus mollitia optio molestias architecto, laborum ex, deleniti nihil quos! Repellendus quis quo tempora corporis error, explicabo exercitationem maiores, incidunt, nostrum architecto numquam? Placeat, nam.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni rem ullam voluptates obcaecati officiis est facilis consectetur laboriosam quam?
                            </p>

                            <div className='news__more flex flex-col'>
                                <span className='uppercase text-gray'>MORE</span>
                                <a href="">
                                    Lorem ipsum dolor sit amet.
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

export default NewsDetails;