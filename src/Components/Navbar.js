import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from'../Css/Navbar.module.css';
import Image from '../Images/background-image.jpg';
import { CiLogout, CiTwitter } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";
import { AuthAction } from '../Redux/Authentication';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
  const dispatch = useDispatch();
  const status = useSelector((val) => val.AuthStore.TokenStatus);

  
  return (
    <>
    <div className={styles.navbars}>
    <nav class="navbar navbar-expand-lg navbar-light">
  <Link class="navbar-brand" to="">D</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="" >LEARN <span class="sr-only">(current)</span></Link>
      </li>
      <li >
        <Link class="nav-link" to="" >BLOG</Link>
      </li>
      <li >
        <Link class="nav-link" to="">BOOKMARKS</Link>
      </li>
    </ul>
    <span class="navbar-text">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to=""  title='Twitter'><CiTwitter/> <span class="sr-only">(current)</span></Link>
      </li>
      <li >
        <Link class="nav-link" to=""  title='Instagram'><AiFillInstagram/></Link>
      </li>
      <li >
        <Link class="nav-link" to="" title='twitch'><BsTwitch/></Link>
      </li>
      <li >
        <Link class="nav-link" to="" style={{color:'black'}} title='logout' onClick={ () => dispatch(AuthAction.Logout()) }><CiLogout/></Link>
      </li>
    </ul>
    </span>
  </div>
</nav>
</div>
    </>
  )
}

export default Navbar