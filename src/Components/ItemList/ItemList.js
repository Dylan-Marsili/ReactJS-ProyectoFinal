import Item from "../Item/Item";



const ItemList = ({products}) => {
    return(
        <div className="columns is-flex is-justify-content-center pt-5">
           {products.map(prod => <Item key={prod.id} {...prod} />)}
        
            
        </div>
    )
}

export default ItemList;