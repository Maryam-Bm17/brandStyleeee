import React, { useEffect, useState } from 'react';
import './Index.css';
import Header from '../../components/Header/Header';
import HomeSection from '../../components/HomeSection/HomeSection';
import UpdateSection from '../../components/UpdateSection/UpdateSection';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import PopulateSection from '../../components/PopulateSection/PopulateSection';
import TrendingSection from '../../components/TrendingSection/TrendingSection';
import CollectionBag from '../../components/CollectionBag/CollectionBag';
import SendSection from '../../components/SendSection/SendSection';
import WeblogSection from '../../components/WeblogSection/WeblogSection';
import FooterSection from '../../components/FooterSection/FooterSection';

export default function Index() {

  const [products, setProducts] = useState([]);
const [populateProduct,setPopulateProduct] = useState([]);
const [bestSellerProduct,setBestSellerProduct]=useState([]);
  useEffect(() => {
    getAllProducts();
  },[]);

  function getAllProducts() {
    fetch(`http://localhost:3000/products`).then(res => res.json())
    .then(products=>{
      setProducts(products);
      setPopulateProduct(products.filter((product)=>{
        return product.popularity > 90
      }));
      let productsSort = (products.sort((a,b) => a.sale - b.sale)).slice(-6);
      console.log(productsSort);
      setBestSellerProduct(productsSort);
    });
  }



  return (
    
    <>
      <Header />
      <main className='main'>
        <HomeSection />
        <UpdateSection />
        <CategoriesSection />
        
         <PopulateSection populateProducts={populateProduct}/>
        <CollectionBag />
        <TrendingSection bestSellerProducts={bestSellerProduct}/>
        <SendSection />
        <WeblogSection />

      </main>
      <FooterSection />
    </>


  )
}
