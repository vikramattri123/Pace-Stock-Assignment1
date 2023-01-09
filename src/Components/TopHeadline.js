import React from 'react'
import { useSelector } from 'react-redux';
import { DataStorageAction } from '../Redux/DataStorage';
import ContentPage from './ContentPage';

const TopHeadline = () => {

   
    const top_headlines = useSelector((val) => val.DataStore.Top_Headlines);
    console.log("top_headlines",top_headlines);

  return (
    <>
    <div style={{display:'flex',flexDirection:'row',width:'1190px',marginTop:'20px',flexWrap:'wrap',gap:'100px',alignContent:'center',justifyContent:'flex-start'}}>
        {
            top_headlines.map((firstContent) =>   
            {
                let DateofArticle='';
                const TodayDate = new Date(firstContent.publishDate);
                const getMonth = TodayDate.toLocaleString('en-us',{month:'long'});
                console.log('date',TodayDate);
                 DateofArticle = ` ${getMonth} ${TodayDate.getDate()} , ${TodayDate.getFullYear()}`;
                 console.log(DateofArticle);
                return (
                    <>
                    <ContentPage content={firstContent.description} title={firstContent.title} DateArticle={DateofArticle} ArticleImage={firstContent.ImageUrl} ImageWidth="290px" ImageHeight="150px" DivWidth="300px"  DivHeight="300px"/>
                    </>
                )
            
            })
        }
        
    </div>
    </>
  )
}

export default TopHeadline