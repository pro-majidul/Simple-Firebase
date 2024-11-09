import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/Firebase.init";
import { useState } from "react";

const Login = () => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const [users, setUsers] = useState(null)

    const handelGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
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

    const handelGithubSignIn = () =>{
        signInWithPopup(auth , githubProvider)
        .then((result) => {
            console.log(result);
            setUsers(result.user)
        })
        .catch(error =>{
            setUsers(null);
            console.log(error);
        })
    }



    return (
        <div>
           {
            users ?  
            <button onClick={handelSignOut}>Sign Out</button> :<>
            
            <button onClick={handelGoogleSignIn}>Login with Google</button>
            <button onClick={handelGithubSignIn}>Login with Github</button>
            </>
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