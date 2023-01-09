import React, { useEffect } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { DataStorageAction } from '../Redux/DataStorage';
import '../Css/Home.css';
import Navbar from './Navbar';
import FeaturedArticle from './FeaturedArticle';
import TopHeadline from './TopHeadline';

const Home = () => {
     const getdata = useSelector((val) => val.DataStore.Featured_Article);
    console.log("newdata",getdata);
    
  const dispatch  = useDispatch();

  useEffect(()=>
  {
      const FetchArticle = async() =>
      {
          const response = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-01-07&sortBy=popularity&apiKey=ee2b47c008b24b27b459478d3da2466e');
          const data =  await response.json();
          console.log("upcoming",data.articles);
          const NewsData = data.articles;
          for(const key in NewsData)
          {
            dispatch(DataStorageAction.Add_Feature_Article({
              id:Math.random(),
              author:NewsData[key].author,
              title:NewsData[key].title,
              content:NewsData[key].content,
              description:NewsData[key].description,
              url:NewsData[key].url,
              ImageUrl:NewsData[key].urlToImage,
              publishDate:NewsData[key].publishedAt
            }))
          }
      } 
   

      const TopArticle = async() =>
      {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ee2b47c008b24b27b459478d3da2466e');
          const data =  await response.json();
          console.log("upcoming",data.articles);
          const NewsData = data.articles;
          for(const key in NewsData)
          {
            dispatch(DataStorageAction.Add_Top_Headlines({
              id:Math.random(),
              author:NewsData[key].author,
              title:NewsData[key].title,
              content:NewsData[key].content,
              description:NewsData[key].description,
              url:NewsData[key].url,
              ImageUrl:NewsData[key].urlToImage,
              publishDate:NewsData[key].publishedAt
            }))
          }
      }
      TopArticle();
      FetchArticle();
  },[]);

  return (
    <>
    <div style={{display:'flex',flexDirection:'column'}} >
    {getdata.length > 0 && <Navbar/> }
    <hr style={{borderWidth:'0',height:'2px',width:'100%',color:'black',backgroundColor:'black'}}></hr>
    <h4 style={{fontWeight:'bold'}}>Featured Article</h4>
  {getdata.length > 0 && <FeaturedArticle/>}
  <hr style={{borderWidth:'0',height:'2px',width:'100%',color:'black',backgroundColor:'black'}}></hr>
  <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',width:'1100px'}}>
  {getdata.length > 0 && <TopHeadline/>}
  </div>
  </div>
    </>
  )
}

export default Home