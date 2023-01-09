import React from 'react';
import { NavLink } from 'react-router-dom';

const ContentPage = ({content,title,DateArticle,ArticleImage,DivHeight,DivWidth,ImageWidth,ImageHeight}) => {
    
    
    console.log(ArticleImage);
  return (
  
    <div style={{display:'flex',height:DivHeight,width:DivWidth,flexDirection:'column'}}>
          <NavLink to="" style={{textDecoration:'none',color:'black'}}>
        <img src={ArticleImage} width={ImageWidth} height={ImageHeight} loading="lazy"/>
        <div style={{gap:'10px',marginTop:'4px',display:'flex',flexDirection:'column'}}>
            <p style={{fontSize:'11px',color:'#242124',border:'none',outline:'none',borderBottom:'none'}}>{DateArticle}</p>
            
            <h4 style={{fontSize:'14px',fontWeight:'bold',color:'black'}}>{title}</h4>
            <p style={{fontSize:'12px',color:'#fffff'}}>{content}</p>
        
        </div>
        </NavLink>

    </div>
 
  )
}

export default ContentPage