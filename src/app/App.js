import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItemsProvider from '../Context/CartItemsProvider';
import WishItemsProvider from '../Context/WishItemsProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../routes/Home'));
const Header = lazy(() => import('../components/Header/Header'));
const Footer = lazy(() => import('../components/Footer/Footer'));
const CategoryView = lazy(() => import('../routes/CategoryView'));
const Cart = lazy(() => import('../components/Cart/Cart'));
const OrderForm = lazy(() => import('../components/Order/Order'));
const ThankYou = lazy(() => import('../components/Thanks/Thanks'));

function App() {
  return (
    <CartItemsProvider>
      <ToastContainer />
      <WishItemsProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/category/:id" element={<CategoryView />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<OrderForm />} />
              <Route path="/thanks" element={<ThankYou />} />
            </Routes>
            <Footer />
          </Suspense>
        </Router>
      </WishItemsProvider>
    </CartItemsProvider>
  );
}

export default App;
