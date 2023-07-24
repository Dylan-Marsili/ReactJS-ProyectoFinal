import { db } from '../config/firebase'
import { getDocs, collection, addDoc, doc, deleteDoc} from "firebase/firestore"
import { useState, useEffect } from "react"

function Signup(){

    const itemCollectionRef = collection(db, "items")

    const [ newItemNombre, setNewItemNombre ] = useState("")
    const [ newItemPrecio, setNewItemPrecio ] = useState(0)
    const [ newItemStock, setNewItemStock ] = useState(0)
    const [ newItemDescription, setNewItemDescription ] = useState("")
    const [ newItemImg, setNewItemImg ] = useState("")
    const [ newItemCategory, setNewItemCategory ] = useState("")


    const [itemList, setItemList] = useState([])

    const getItemsList = async () => {
        const data = await getDocs(itemCollectionRef)
        const dataf = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

        setItemList(dataf)
    }

    useEffect(() => {
        getItemsList()
    }, [])

    const onSubmitItem = async () =>{
        await addDoc(itemCollectionRef, {name:newItemNombre, stock:newItemStock, price:newItemPrecio, description:newItemDescription, img:newItemImg, category:newItemCategory})
        getItemsList()
    }
    const deleteItem = async(id) =>{
        const itemDoc = doc(db, "items", id)
        await deleteDoc(itemDoc)
        getItemsList()
    }

    return (
        <div>
            <h2>Nuevo Item</h2>
            <input placeholder="Nombre" onChange={(e) => setNewItemNombre(e.target.value)}/>
            <input placeholder="Descripcion" onChange={(e) => setNewItemDescription(e.target.value)}/>
            <input placeholder="Imagen" onChange={(e) => setNewItemImg(e.target.value)}/>
            <input placeholder="Categoria" onChange={(e) => setNewItemCategory(e.target.value)}/>
            <input placeholder="Precio" type="number" onChange={(e) => setNewItemPrecio(Number(e.target.value))}/>
            <input placeholder="Stock" type="number" onChange={(e) => setNewItemStock(Number(e.target.value))}/>
            <button onClick={onSubmitItem}>Enviar</button>
            <div>
                {itemList.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.stock}</p>
                        <button onClick={()=>deleteItem(item.id)}></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Signup