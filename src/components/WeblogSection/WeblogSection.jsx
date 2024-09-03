import React, { useEffect, useState } from 'react';
import './WeblogSection.css'
import HeaderSection from '../HeaderSection/HeaderSection';
import WeblogBox from '../WeblogBox/WeblogBox';

export default function WeblogSection() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/weblogs`).then((res) => res.json()).then((articles) => {
            console.log(articles);
            setArticles(articles);
        })
    }, []);
    return (
        <>
            <section className="weblog">
                <div className="container">
                    <div className="row margin-right">
                        <HeaderSection title="مقاله های برند استایل" href="weblog"/>
                    </div>
                    <div className="weblog__wrapper">
                        <div className="row margin-right">
                            {articles.map((article, index) => (
                                <WeblogBox {...article} key={index} />

                            ))}
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
