import {useState} from "react";


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <div className="columns is-flex is-justify-content-center">
                <button className="column is-3" onClick={decrement}>-</button>
                <h4 className="column is-2"><p className="title is-3">{quantity}</p></h4>
                <button className=" column is-3" onClick={increment}>+</button>
                
            </div>
            <div>
                <button className="button is-fullwidth" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>

        </div>
    )
}

export default ItemCount;