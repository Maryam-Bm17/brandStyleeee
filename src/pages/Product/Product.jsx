import React, { useState, useEffect } from 'react';
import './Product.css';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/FooterSection/FooterSection';
import TrendingSection from '../../components/TrendingSection/TrendingSection';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import ProductWrapper from '../../components/ProductWrapper/ProductWrapper';
import Comment from '../../components/Comment/Comment';
import { useLocation } from 'react-router-dom';

export default function Product() {

   const [products, setProducts] = useState([]);
  const [locationUrl, setLocationUrl] = useState("");
   const [mainProduct, setMainProduct] = useState({});
  // const [productImages, setProductImages] = useState([]);
  // const [mainImages, setMainImages] = useState([]);
  const [bestSellerProduct, setBestSellerProduct] = useState([]);

  const location = useLocation().pathname.slice(9);


  useEffect(() => {

    setLocationUrl(location);

    async function getAllProducts() {
      const data = await fetch(`http://localhost:3000/products`).then(res => res.json())
        .then( products => {
          setProducts(products);
          
          let productsSort = (products.sort((a, b) => a.sale - b.sale)).slice(-6);
          setBestSellerProduct(productsSort);
          // getMainImages(primeProduct);
        });
      return data;
    }

    async function getMainProduct() {
      console.log(location);
      const data = await fetch(`http://localhost:3000/products?url=${location}`).then(res => res.json())
        .then( product => {
          setMainProduct(product[0]);
          
       
        });
      return data;
    }

    getAllProducts();
    getMainProduct();

  }, [locationUrl]);




  // const getMainImages = async (primeProduct) => {
  //   await fetch(`http://localhost:3000/productsImage`).then(res => res.json())
  //     .then(productImages => {
  //       console.log(productImages);
  //       setProductImages(productImages);
  //       console.log(primeProduct.id);
  //       let mainImageProduct = productImages.filter(img => Number(img.productId) === Number(primeProduct.id));
  //       setMainImages(mainImageProduct);
  //     });
  // }



  return (
    <>
      <Header />
      <main className="main">

        <ProductWrapper props={mainProduct}/>


        <Comment />
        <TrendingSection bestSellerProducts={bestSellerProduct} />

      </main>

      <FooterSection />
    </>
  )
}
