import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {db} from '../../config/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    
    
    const {itemId} = useParams()

    useEffect(() => {
        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
        .then((response) =>{
            setProduct(
                {...response.data(), id: response.id}
            );

            
        })
       

      
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer;