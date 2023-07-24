import { useState, useEffect } from "react";
import {db } from "../../config/firebase"
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where} from "firebase/firestore"
import { Form, useParams } from "react-router-dom";

const Itemlistcontainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef= categoryId
            ? query(collection(db,"items"), where("category", "==", categoryId))
            : collection(db,"items")
        getDocs(collectionRef)
            .then(response =>{
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return{id:doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    },[categoryId])

    return(
        <div>

            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )

}

export default Itemlistcontainer;