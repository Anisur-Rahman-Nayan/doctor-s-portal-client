import React, { useContext, useState } from 'react';
// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
// import "firebase/auth";
import 'firebase/compat/auth';

import logo from './../../images/Group 140.png'
//import './Login.css'
import google from '../../images/google-logo.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './FireBase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [newUser, setNewUser] = useState(false)

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    var history = useHistory();
    var location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user , setUser] = useState({
        isSignIn: false,
        name:"",
        email:"",
        password:"",
        photo:"",
        error:"",
        success: false
    })

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn =()=>{

    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        
    const {displayName, photoURL , email} = result.user;

    const signInUser={
        isSignIn: true,
        name: displayName,
        email:email,
        photo: photoURL
    }
    setUser(signInUser);
    setLoggedInUser(signInUser)
    history.replace(from);
  
    }).catch((error) => {
   
    var errorMessage = error.message;

  });
      
}
    const handleSignOut =()=>{
        firebase.auth().signOut().then(() => {
                const signOutUser={
                    isSignIn: false,
                    name:"",
                    email:"",
                    photo:""
                }
                setUser(signOutUser)
          }).catch((error) => {
            
          });
    }


    const handleBlur=(e)=>{
        let isFormValid;

        if(e.target.name==="name"){
            isFormValid = e.target.value;
        }
        if(e.target.name==="email"){
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if(e.target.name==="password"){
            const isPassLength = e.target.value.length > 6
            const isPassContainOneNum = /\d{1}/.test(e.target.value)
            
            isFormValid = (isPassLength && isPassContainOneNum)
        }

        if(isFormValid){
            const newUserInfo ={...user}
             newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
      
    }

    const handleSubmit=(e)=>{
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
             .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error =""
                newUserInfo.success = true;
                setUser(newUserInfo)
                updateUserInfo(user.name)
  })
  .catch((error) => {
      const newUserInfo ={...user}
      newUserInfo.error = error.message
      newUserInfo.success = false;
        setUser(newUserInfo)
    // ..
  });
}

    if(!newUser && user.email && user.password){

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
    
        const newUserInfo ={...user}
        newUserInfo.error="";
        newUserInfo.success = true;
        setUser(newUserInfo)
        setLoggedInUser(newUserInfo)
        history.replace(from);

  })
  .catch((error) => {

    const newUserInfo ={...user}
    newUserInfo.error=error.message;
    newUserInfo.success = false;
    setUser(newUserInfo)
  });

    }
        e.preventDefault();
    }


const updateUserInfo=(name)=>{

const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name ,
 
}).then(() => {
  // Update successful

}).catch((error) => {
  // An error occurred

});  

    }

    return (
       <div className="row  ">

  
                   <div className="col-md-7 text-center" >
                   <img style={{height:"500px",marginTop:"70px"}} src={logo} alt="" />


                   </div>
              
                    <div style={{marginTop:'150px',marginRight:"100px",padding:"0px 0px"}} className="col-md-4 text-left">

     {
         user.isSignIn && <div>
             <p>Welcome Back! {user.name}</p>
             <p>Email : {user.email}</p>
             <img src={user.photo} alt="" />
         </div>
     }


 <h1>LOGIN</h1>



<form onSubmit={handleSubmit}>

{
    newUser && <input type="text" onBlur={handleBlur} name="name" id="" placeholder="  Your Name" required />   
}
 <br />
 <br />
<input type="text" onBlur={handleBlur} name="email" id="" placeholder="  Your Email" required />
 <br />
 <br />
 <input type="password"  onBlur={handleBlur} name="password" id=""  placeholder="  Your password" required/>
 <br />
 <br />
 <input className="btn-brand" type="submit" value={newUser ?  'Register' : 'Log In'} />
<br />
<b></b>


     <p style={{color:"red"}}>{user.error}</p>
         {
     user.success && <p style={{color:"green"}}>User {newUser ? ' Created': 'Logged In'} Successfully</p>
         }
    <br />
<input  type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser" id="" />
                        <label htmlFor="newUser">Create an account </label>
<br />
<br />

    </form>
            <div className="google">
                      {
                    user.isSignIn ?  <button className="btn-brand" onClick={handleSignOut}  >Google sign Out</button> : <span> Or login With  <button  onClick={handleSignIn}> <img src={google} style={{height:"25px"}} alt="" /> </button> </span>
                    }
            </div>

        </div>
                         



               
    

       </div>
    );
};

export default Login;