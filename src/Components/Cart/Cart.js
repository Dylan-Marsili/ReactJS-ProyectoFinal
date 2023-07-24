import {useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"


const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return(
            <div>
                <h1 className="title is-3">No hay items en el carrito</h1>
                <Link to="/" clasname="Option">Productos</Link>
            </div>
        )
    }
    return(
        <div className='Container2'>
            {
                cart.map(products => <CartItem key={products.id} products={products} />)
            }
            <div className='container-total'>
                <p className='Total'>
                    Total: {total()}
                </p>
                <div className='ButtonD'>
                    
                    <div className='containerCheckout'>

                    <Link to='/checkout' className='c'> Finalizar Compra </Link>

                    </div>
                    <div className='containerCa'>
                    <button className='ca' onClick={() => clearCart()}> Vaciar carrito </button>

                    </div>

                    

            
                </div>
                
            </div>
            

        </div>
    )
}
export default Cart;