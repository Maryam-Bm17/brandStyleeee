import React, { useEffect, useState } from 'react';
import './Blog.css';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/FooterSection/FooterSection';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { useLocation } from 'react-router-dom';



export default function Blog() {


    const [allArticles, setAllArticles] = useState([]);
    const [filterAticle, setFilterArticle] = useState({});
    const [articleCover, setArticleCover] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    const [articleBody, setArticleBody] = useState("");
    const [articleHref,setArticleHref] = useState("");

    const location = useLocation().pathname;

    useEffect(() => {

        console.log(location);
        fetch(`http://localhost:3000/weblogs`).then((res) => res.json()).then((articles) => {
            setAllArticles(articles);
            let filterArray = articles.filter((article) => {
                return article.href === location;
            });

            console.log(filterArray);
            setFilterArticle(filterArray[0]);
            setArticleCover(filterArray[0].cover);
            setArticleTitle(filterArray[0].title);
            setArticleBody(filterArray[0].body);
            setArticleHref(filterArray[0].href);
        });


    }, []);




    return (
        <>
            <Header />
            <main className="main">
                <BreadCrumb
                    links={[{ id: 1, title: 'خانه', to: '',className:'' },
                    { id: 2, title: 'مقالات', to: 'weblog',className:'' },
                     {id: 3, title: `${articleTitle}`, to: `${articleHref.slice(1)}`,className:'header__link--active' }

                    ]}
                />



                 <img src={articleCover} className='blog__img' />
                <h1 className='blog__title'>
                    {articleTitle}
                </h1>
                <p className='blog__desc'>
                    {articleBody}
                </p>    
            </main>

            <FooterSection />
        </>
    )
}
