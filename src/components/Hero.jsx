import React from 'react';

function Hero({image, title, author, date}) {
    return (
        <section className="about__hero">
                <div className="hero__image">
                    <img src={image} alt="" />
                </div>


                <div className="hero__content flex flex-col">
                    <h1>{title}</h1>
                    {author &&

                    (
                        <div className="hero__author">
                            <p>{author}</p>
                            <span>{date}</span>
                        </div>
                    )
                    
                    }

                </div>
                

            </section>
    );
}

export default Hero;