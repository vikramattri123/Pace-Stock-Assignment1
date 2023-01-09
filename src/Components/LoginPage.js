import React, { useState } from 'react'
import { FcGoogle} from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { TbArrowRight } from "react-icons/tb";
import { AuthAction } from '../Redux/Authentication';
import Image from '../Images/Login_Page.jpg';
import { json } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const LoginPage = () => {

  const [statusType ,setstatusType] = useState(true); 

  const [Token,getToken] = useState('Token');

  const [Email,setEmail] = useState();

  const [Password,setPassword] = useState();

  const dispatch = useDispatch();

   const SubmitHandler = (e) =>
   {
    e.preventDefault();
    
     let url = '';

      console.log(Email);
      console.log(Password);
     const ProfileInfo = {
      email:Email,
      password:Password,
      returnSecureToken:true
     }
      if(statusType)
      {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6S61UwWj-6VHbI8NdoSxApyvyuMungx0';
      }
      else
      {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6S61UwWj-6VHbI8NdoSxApyvyuMungx0';
      }

     fetch(url,{
      method:'POST',
      body:JSON.stringify(ProfileInfo),
      headers:{
        'Content-Type' : 'application/json'
      }
     }).then((res) => {
      if(res.ok)
      {
       return res.json();
      }
      else{
        return res.json().then((data)=>
        {
           throw new Error('Email Already Exist');
        })
      }
     }).then((data) =>
     {
      console.log(data);
        dispatch(AuthAction.Login(data.idToken));
     }).catch((e)=>
     {
      alert(e);
     })
   }

   const check =  statusType ? 'Sign Up'  : 'Sign in';

  return (
    <>
    <div style={{width:'340px',backgroundColor:'#663399',border:'1px solid black',padding:'30px',borderRadius:'10px',backgroundColor:'white'}}>
    <div style={{backgroundImage:`url(${Image})`,marginTop:'-30px',width:'100%',height:'200px',backgroundSize:'cover'}}>

</div>
    <form>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px',marginTop:'0px'}}>
   

     <h4>Welcome to Bardeen</h4>
     <h6 style={{fontSize:'11px',color:'#363636'}}>let's login to launch your automations</h6>
    <div class="col">
      <input type="text" class="form-control" placeholder="Email"  onChange={ (e) => setEmail(e.target.value)}/>
    </div>
    <div class="col">
      <input type="password" class="form-control" placeholder="Password" onChange={ (e) => setPassword(e.target.value)}/>
    </div>
   
  </div>
  <div style={{display:'flex',flexDirection:'row',fontSize:'13px !important',marginTop:'15px',justifyContent:'space-between'}}>
       {!statusType && <h5 style={{fontSize:'13px',color:'#663399'}} onClick={ () => setstatusType(true)}>Create Account</h5>}
       {statusType &&  <h5 style={{fontSize:'13px',color:'#663399'}} onClick={ () => setstatusType(false)}>Already have a Account</h5>}
        <h5 style={{fontSize:'13px',color:'#663399'}}>Forget Password ?</h5>
    </div>
    <input type="button" value={check} class="btn btn-primary btn-sm btn-block" style={{backgroundColor:'#663399',padding:'10px',borderRadius:'8px',borderColor:'#663399'}} onClick={SubmitHandler} ></input>
    <div style={{borderRadius:'6px',border:'1px solid black',display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'15px',padding:'10px'}}>
    <FcGoogle style={{}}/>
    <h6 style={{fontSize:'14px',marginLeft:'-80px'}}>{check} with Google</h6>
    <TbArrowRight/>
    </div>
    <div style={{borderRadius:'6px',border:'1px solid black',display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'5px',padding:'10px'}}>
    <BsGithub style={{}}/>
    <h6 style={{fontSize:'14px',marginLeft:'-80px'}}>{check} with Github</h6>
    <TbArrowRight/>
    </div>
</form>
    </div>
    </>
  )
}

export default LoginPage