import Index from './pages/Index/Index';
import Login from './pages/Login/Login';
import Shop from './pages/Shop/Shop';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Product from './pages/Product/Product';
import WishList from './pages/WishList/WishList';
import Weblog from './pages/Weblog/Weblog';
import Blog from './pages/Blog/Blog';


const routes = [
    { path: '/', element: <Index /> },
    { path: '/shop/women/:categoryName', element: <Shop /> },
    { path: '/shop/men/:categoryName', element: <Shop /> },
    { path: '/shop', element: <Shop /> },

    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/cart', element: <Cart /> },
    { path: '/contactUs', element: <ContactUs /> },
    { path: '/AboutUs', element: <AboutUs /> },
    { path: '/Product/:ProductName', element: <Product /> },
    { path: '/WishList', element: <WishList /> },
    { path: '/weblog', element: <Weblog /> },
    { path: '/blog/:blogTitle', element: <Blog /> }
]


export default routes;