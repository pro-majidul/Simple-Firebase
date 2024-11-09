import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/Firebase.init";
import { useState } from "react";

const Login = () => {

    const provider = new GoogleAuthProvider();
    const [users, setUsers] = useState(null)

    const handelGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                setUsers(result.user)
            })
            .catch(error => {
                console.log('error', error);
                setUsers(null)
            })
    }
    const handelSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUsers(null)
            })
            .catch(error => console.log(error))
    }



    return (
        <div>
           {
            users ?  
            <button onClick={handelSignOut}>Sign Out</button> :<button onClick={handelGoogleSignIn}>Login with Google</button>
           }

            {
                users && <div>
                    <h3> UserName : {users.displayName}</h3>
                    <p>Email : {users.email}</p>
                    <img src={users.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;