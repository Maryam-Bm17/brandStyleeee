import React, { useEffect, useState } from 'react'
import './CategoriesSection.css';
import CategoryBox from '../CategoryBox/CategoryBox';
import HeaderSection from '../HeaderSection/HeaderSection';

export default function CategoriesSection() {

const [productsHighlights,setProductsHighlights] = useState([]);

useEffect(()=>{
fetch(`http://localhost:3000/productsHighlights`).then((res)=>res.json()).then((products)=>{
    console.log(products);
    setProductsHighlights(products);
})
},[]);

    return (
        <>
            <section className="categories">
                <div className="container">
                    <div className="row margin-right">

                        <HeaderSection title="برترین محصولات" href="shop"/>
                    </div>
                    <div className="categories__wrapper">
                        <div className="row margin-right">
                              {productsHighlights.map((product,index)=>(
                                <CategoryBox {...product} key={index}/>
                              ))}
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
