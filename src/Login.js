import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
function Login() {
    const [{},dispatch] = useStateValue();
   function signIn(){
    auth.signInWithPopup(provider)
    .then((result)=>{
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
        })
    })
    .catch((err)=>alert(err.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.gadgets360cdn.com/large/whatsapp_1569662156405.jpg" alt="" />
                <div className="login__text">
                <h1>sign in with whatsapp</h1>
                </div>
                <Button
                onClick={signIn}
                 variant="contained" >signIn with google</Button>
            </div>

        </div>
    )
}

export default Login
