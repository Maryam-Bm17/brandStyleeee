import React,{useState,useEffect} from 'react';
import Header from '../../components/Header/Header';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import FooterSection from '../../components/FooterSection/FooterSection';
import WeblogSection from '../../components/WeblogSection/WeblogSection';
import WeblogBox from '../../components/WeblogBox/WeblogBox';

import './Weblog.css';

export default function Weblog() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:3000/weblogs`).then((res) => res.json()).then((articles) => {
          setArticles(articles);
      });
  }, []);
  return (
    <>
     
     <Header />
      <main className='main'>
        <BreadCrumb links={
          [{ id: 1, title: 'خانه', to: '' , className:''},
          { id: 2, title: 'مقالات', to: 'weblog' , className:'header__link--active'},
          ]
        } />
        <section className="weblog">
                <div className="container">
                   
                    <div className="weblog__wrapper">
                        <div className="row margin-right">
                            {articles.map((article, index) => (
                                <WeblogBox {...article} key={index} />

                            ))}
                            
                        </div>
                    </div>
                </div>
            </section>
      </main>
      <FooterSection />
    
    </>
  )
}
