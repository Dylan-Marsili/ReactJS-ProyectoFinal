import { Link } from "react-router-dom";


const Item = ({id, name, img, price, stock, category}) => {
    return(
        <div className="card column is-3">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={img} alt={name}/>
                </figure>
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
                    Stock disponible: {stock}
                    <br/>
                    <br/>
                    <Link to = {`/item/${id}`} className="Option">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;