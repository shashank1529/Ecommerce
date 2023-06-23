import React, { useEffect, useState } from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card';
import axios from "axios";
import useFetch from '../hooks/useFetch';
const FeaturedProducts = ({type}) => {
  // const data=[
  //   {
  //     id:1,
  //     img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     title:"Long Sleeves T-shirts",
  //     isNew:true,
  //     oldPrice:19,
  //     price:12,
  // },
  //   {
  //     id:2,
  //     img:"https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     img2:"https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     title:"Coat",
  //     isNew:true,
  //     oldPrice:19,
  //     price:12,
  // },
  //   {
  //     id:3,
  //    img:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //    img2:"https://images.pexels.com/photos/991679/pexels-photo-991679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     title:"Skirts",
  //     isNew:false,
  //     oldPrice:19,
  //     price:12,
  // },
  //   {
  //     id:4,
  //     img:"https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     img2:"https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     title:"Hats",
  //    isNew:false,
  //     oldPrice:19,
  //     price:12,
  // },

  // ];


  //   useEffect(()=>
  //   {
    //     const fetchData=async()=>{
//       try{
  //         // process.env.REACT_APP_API_URL
  //         const res=await axios.get(process.env.REACT_APP_API_URL+`/products?populate=*&[filters][type][$eq]=${type}`,{
    //          headers:{
      //           Authorization:"bearer"+process.env.REACT_APP_API_TOKEN
      //         }
      
      //         });
      //         console.log(res);
      //        setData(res.data.data)
//       } catch(err){
  //         console.log(err);
  //       }
  //       };
  
  // fetchData();
  //   },[]);
  //   console.log(data);
  
  const{data,loading,error}=useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quos ab delectus ex minus sit molestiae nostrum quaerat? Laborum, vero dolorem autem debitis eum maiores. Eum sit magnam atque architecto!</p>
      </div>
      <div className="bottom">
        { error
        ?"Something went wrong"
        :loading
        ?"loading.."
        :data && data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts