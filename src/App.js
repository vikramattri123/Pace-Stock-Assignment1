import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DataStorageAction } from './Redux/DataStorage';
import LoginPage from './Components/LoginPage';

function App() {
 
  const AccessStatus =  useSelector((val) => val.AuthStore.TokenStatus);

  useEffect(() =>
  {
   console.log("current" + AccessStatus);
  },[AccessStatus])




  return (
    <>
    <div style={{padding:'70px',height:'100wh',display:'flex',justifyContent:'center',alignContent:'center'}}>
    {!AccessStatus && <LoginPage/>}  
    {AccessStatus && <Home/> }
     </div>
     </>
  );
}

export default App;
