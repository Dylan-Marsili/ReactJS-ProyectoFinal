import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import {CartContext} from "../../context/CartContext"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }
    return (
        <div className="columns is-flex is-justify-content-center">
            <div className="card column is-3">
                <div className="card-image">
                    <picture className="image is-4by3">
                        <img src={img} alt={name}/>
                    </picture>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{name}</p>
                        </div>
                    </div>

                    <div className="content">
                        Precio: ${price}
                        <br/>
                        Descripción: {description}
                        <br/>
                        Categoria: {category}
                        <br/>
                        Stock disponible: {stock}
                        <br/>
                        <br/>
                    </div>
                </div>
                <footer className="ItemFooter">
                    {
                        quantityAdded > 0 ?(
                            <Link to="/cart" className="Option">Terminar la compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                        )
                    }
                </footer>
            </div>
        </div>

    )
}

export default ItemDetail;