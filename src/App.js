import NavBar from "./Components/NavBar/NavBar";
import Itemlistcontainer from "./Components/ItemListContainer.js/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./Pages/Signup";    
import Cart from "./Components/Cart/Cart"
import { CartProvider } from "./context/CartContext"
import Checkout from "./Components/Checkout/Checkout"
import "./App.css";
import "bulma/css/bulma.css"


function App () {


    return(
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path = "/" element={<Itemlistcontainer></Itemlistcontainer>}></Route>
                        <Route path = "/signup" element ={<Signup/>}></Route>
                        <Route path="/category/:categoryId" element={<Itemlistcontainer></Itemlistcontainer>}></Route>  
                        <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
            

        </div>
    )
}

export default App;
