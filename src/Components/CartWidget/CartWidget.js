import cart from "./assets/cart.svg";
import {Link} from "react-router-dom"
import {useContext} from "react"
import {CartContext} from "../../context/CartContext"
import "./CartWidget.css";


function CartWidget(){
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to="/cart" className="carrito" style={{display: totalQuantity > 0 ? "block" : "none"}}>
            <img src={cart} alt="cart-widget"/>
            {totalQuantity}
        </Link>
        

    )
}

export default CartWidget;