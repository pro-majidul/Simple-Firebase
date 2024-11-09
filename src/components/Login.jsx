import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/Firebase.init";

const Login = () => {

    const provider = new GoogleAuthProvider();
    
    const handelGoogleSignIn = () =>{
        signInWithPopup(auth , provider)
        .then((result)=>{
            console.log(result);
        })
        .catch(error =>{
            console.log('error' , error);
        })
    }

    return (
        <div>
            <button onClick={handelGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;