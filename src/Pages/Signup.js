import { useState } from "react"
import { auth, googleProvider} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

function Signup(){

    const [ newUserEmail, setNewUserEmail ] = useState("")
    const [ newUserPass, setNewUserPass ] = useState("")

    
    const logOut = async () => {
        await signOut(auth)
    }
    const onSubmitUser = async () =>{
        await createUserWithEmailAndPassword(auth, newUserEmail, newUserPass)
    }
    const signInWithGoogle = async() =>{
        await signInWithPopup(auth, googleProvider)
    }

    return (
        <div className="is-flex is-justify-content-center is-flex-direction-column">
            <span>usuario:{auth?.currentUser?.email}</span>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email"  placeholder="Email" onChange={(e) => setNewUserEmail(e.target.value)}/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Contraseña" onChange={(e) => setNewUserPass(e.target.value)}/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button className="button is-success" onClick={()=>onSubmitUser()}>
                        Sign Up
                    </button>
                    <button className="button is-success pl-3" onClick={()=>signInWithGoogle()}>
                        Log in with google
                    </button>
                    <button className="button is-success pl-3" onClick={()=>logOut()}>
                        Log out
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Signup