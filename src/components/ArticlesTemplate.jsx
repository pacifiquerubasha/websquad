import React from 'react';

function ArticlesTemplate({item}) {
    return (
        <div className="news__box">
            <div className="news__img w-full">
                <img src={item.image} alt="" loading='lazy'/>
            </div>
            <div className="news__content">
                <div className="news__icon">
                    <i className={item.icon}></i>
                </div>
                <h4>{item.author}</h4>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
                
                <a href={`blog/${item.id}`} className="news__btn">
                    Read More
                </a>
            </div>
        </div>
    );
}

export default ArticlesTemplate;