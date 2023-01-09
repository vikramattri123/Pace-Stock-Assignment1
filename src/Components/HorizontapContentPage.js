import React from 'react';
import { NavLink } from 'react-router-dom';

const HorizontapContentPage = ({content,title,DateArticle,ArticleImage,flextype}) => {

    console.log("hdhs",content);
    let DateofArticle = '';
    const TodayDate = new Date(DateArticle);
    const getMonth = TodayDate.toLocaleString('en-us',{month:'long'});
    console.log('date',TodayDate);
     DateofArticle = ` ${getMonth} ${TodayDate.getDate()} , ${TodayDate.getFullYear()}`;
     console.log(DateofArticle);
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',gap:'0px'}}>
    <NavLink to="" style={{textDecoration:'none',color:'black'}}>
     <div style={{display:'flex',width:'600px',flexDirection:"row",gap:'30px'}}>

        <img src={ArticleImage} width="200px" height="80px"/>
        <div style={{width:'300px',height:'75px',justifyContent:'flex-start',margin:'0px',padding:'0px'}}>
            <p style={{fontSize:'11px',marginTop:'3px'}}>{DateofArticle}</p>
            <p style={{fontSize:'12px',fontWeight:'bold'}}>{title}</p>
        </div>
         
    </div>
    </NavLink>
    <hr style={{borderWidth:'0',width:'500px',height:'2px',color:'#d3d3d3',backgroundColor:'#d3d3d3'}}></hr>
    </div>
    </>
  )
}

export default HorizontapContentPage