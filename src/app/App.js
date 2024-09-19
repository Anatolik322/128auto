import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPixel from 'react-facebook-pixel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPage from '../components/ProductPage/ProductPage';

const Home = lazy(() => import('../routes/Home'));
const Header = lazy(() => import('../components/Header/Header'));
const Footer = lazy(() => import('../components/Footer/Footer'));
const CategoryView = lazy(() => import('../routes/CategoryView'));
const Cart = lazy(() => import('../components/Cart/Cart'));
const OrderForm = lazy(() => import('../components/Order/Order'));
const ThankYou = lazy(() => import('../components/Thanks/Thanks'));
const Delivery = lazy(() => import("../components/Delivery/Delivery"));
const AboutUs = lazy(() => import("../components/AboutUs/AboutUs"));
const Faq = lazy(() => import("../components/FAQ/Faq"));

function App() {

  useEffect(() => {
    ReactPixel.init('ВАШ_FB_PIXEL_ID');
    ReactPixel.pageView();
  }, []);

  return (
    <div>
      <ToastContainer />

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/category/:id" element={<CategoryView />} />
            <Route path="/item/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/thanks" element={<ThankYou />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/qestions" element={<Faq />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
