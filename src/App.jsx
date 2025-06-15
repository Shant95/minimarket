import './App.css';
import Home from './pages/Home/home';
import { Routes, Route } from 'react-router';
import Milk from './pages/Milk/milk';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import ChatMenu from './components/ChatMenu/chatMenu';
import AuthModal from './components/AuthModal/AuthModal';
import HelpButton from './components/HelpButton/helpbutton';
import ProductModal from './components/ProductModal/ProductModal';
import Meat from './pages/Meat/meat';
import Fruits from './pages/Fruits/fruits';
import SearchModal from './components/SearchModal/SearchModal';


function App() {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [openSearchModal,setOpenSearchModal]=useState(false);

  const handleOpenAuthModal = () => {
    setOpenAuthModal(true);
  }

  const handleCloseAuthModal = () => {
    setOpenAuthModal(false);
  }

  const handleOpenCart = () => {
    setOpenCart(true);
    setShowChat(false)
  }

  const handleCloseCart = () => {
    setOpenCart(false);
  }

  const handleOpenMenu = () => {
    setOpenMenu(true);
  }

  const handleCloseMenu = () => {
    setOpenMenu(false);
  }
  const handleOpenChat = () => {
    setShowChat(true);
  }
  const handleCloseChat = () => {
    setShowChat(false);
  }

  const handleOpenProductModal = (product) => {
    setSelectedProduct(product)
    setOpenProductModal(true);
  }

  const handleCloseProductModal = () => {
    setOpenProductModal(false);
    setSelectedProduct(null);
  }
  const handleOpenSearchModal = () =>{
    setOpenSearchModal(true);
  }

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  

  const handleClearCart = () => {
    setCartItems([]);
  }

  const handleUpdateCart = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  }
  const handleCloseSearchModal = () =>{
    setOpenSearchModal(false);
  }

  return (
    <div className="App">
      <Header onOpenAuthModal={handleOpenAuthModal} onOpenCart={handleOpenCart} onOpenMenu={handleOpenMenu} cartItems={cartItems} onOpenSearch={handleOpenSearchModal}/>
      <HelpButton onShowHelp={handleOpenChat} />
     <div className="Container">
      <Routes>
        <Route path='/' element={<Home onMoreClick={handleOpenProductModal} onAddToCart={handleAddToCart}/>} />
        <Route path='/home' element={<Home onMoreClick={handleOpenProductModal} onAddToCart={handleAddToCart}/>} />
        <Route path='/milk-products-and-eggs' element={<Milk onMoreClick={handleOpenProductModal} onAddToCart={handleAddToCart} />} />
        <Route path='/meat-products' element={<Meat onMoreClick={handleOpenProductModal} onAddToCart={handleAddToCart}/>}/>
        <Route path='/vegatables-and-fruits' element={<Fruits onMoreClick={handleOpenProductModal} onAddToCart={handleAddToCart}/>}/>
      </Routes>
      </div>

      <Footer />

      {openAuthModal && <AuthModal onClose={handleCloseAuthModal} />}
      {openMenu && <Menu onClose={handleCloseMenu} />}
      {showChat ? <ChatMenu onClick={handleCloseChat} /> : null}
      {openCart && <Cart onClose={handleCloseCart} cartItems={cartItems} onClearCart={handleClearCart} handleUpdateCart={handleUpdateCart} />}
      {openProductModal && selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseProductModal} onAddToCart={() => handleAddToCart(selectedProduct)} />}
        {openSearchModal && <SearchModal onMoreClick={handleOpenProductModal} onAddToCart={handleAddToCart} onClose={handleCloseSearchModal} />}
    </div>
  );
}

export default App;