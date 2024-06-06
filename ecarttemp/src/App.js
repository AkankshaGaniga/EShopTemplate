
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/navbar"; 
import SearchResults from "./Results";
import { Cart } from "./pages/cart/cart"; 
import { ShopContextProvider } from "./context/shop-context"; 
import { Contact } from "./pages/contact"; 
import { Shop } from "./pages/shop/shop";



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchResults />} />

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
