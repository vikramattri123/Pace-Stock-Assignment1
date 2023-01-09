import React, { useMemo, useState } from 'react';

import { useSelector , useDispatch } from 'react-redux';
import ContentPage from './ContentPage'
import HorizontapContentPage from './HorizontapContentPage';

const FeaturedArticle = () => {

    const data = useSelector((val) => val.DataStore.Featured_Article.slice(0,4));
   console.log("upcoming",data);
    
    let DateofArticle = '';

    const firstContent = data[0];
    console.log("this is first",firstContent);
    const fetchdate= useMemo(()=>
       {
        return firstContent.publishDate;
       },[data])
   
   console.log(fetchdate);
    const TodayDate = new Date(fetchdate)
    const getMonth = TodayDate.toLocaleString('en-us',{month:'long'});
    console.log('date',TodayDate);
     DateofArticle = ` ${getMonth} ${TodayDate.getDate()} , ${TodayDate.getFullYear()}`;
     console.log(DateofArticle);

  return (
    <div style={{display:'flex',flexDirection:'row',gap:'50px'}}>
        <div style={{display:'flex',width:'500px',marginTop:'0px !important',flexDirection:'column',height:'400px'}}>
          {firstContent  &&   <ContentPage content={firstContent.description} title={firstContent.title} DateArticle={DateofArticle} ArticleImage={firstContent.ImageUrl} ImageWidth="500px" ImageHeight="220px" DivWidth="500px"   DivHeight="400px"/>}
        </div>
        <div style={{display:'flex',width:'500px',flexDirection:'column',height:'400px',gap:'16px'}}>
         {data.map((Content,datas=1) => 
         {
             if(datas>0)
              {
            //  console.log(Content);
            //      <div>
              return <HorizontapContentPage content={Content.content} title={Content.title} DateArticle={Content.publishDate} ArticleImage={Content.ImageUrl}></HorizontapContentPage>
                // </div>
              }
         })}
        </div>
    </div>
  )
}

export default FeaturedArticle