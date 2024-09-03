import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Index from './pages/Index/Index';
import Product from './pages/Product/Product';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import AuthContext from './Context/authContext';
import { useRoutes } from 'react-router-dom';
import routes from './routes'


export default function App() {

  const [isLogedIn, setIsLogedIn] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userInfos, setUserInfos] = useState(null);


  const router = useRoutes(routes);

  const login = useCallback((userInfos,userId)=>{
    setUserId(userId);
    setUserInfos(userInfos);
    setIsLogedIn(true);
    localStorage.setItem('user', JSON.stringify({ userId }));
  },[]);

  const logout = useCallback(()=>{
    setUserId(null);
    setUserInfos(null);
    localStorage.removeItem('user');
  },[]);


  useEffect(()=>{
    const localStorageData = JSON.parse(localStorage.getItem('user'));
    console.log(localStorageData);
    if(localStorageData){
     fetch(`http://localhost:3000/users/${localStorageData.userId}`).then((res)=>res.json())
     .then((result)=>{
      console.log(result);
       setIsLogedIn(true);
       setUserInfos(result);
     })
     
    }
 },[login,userId]);

  return (
    <>

      <AuthContext.Provider
        value={
          {
            isLogedIn,
            userId,
            userInfos,
            login,
            logout
          }
        }>
        {router}
      </AuthContext.Provider>

    </>
  );
}