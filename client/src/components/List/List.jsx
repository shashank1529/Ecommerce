import React from 'react'
import "./List.scss"
import Card from '../Card/Card';
import useFetch from '../hooks/useFetch';

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
  // &[filters][price][$lte]=${maxPrice}&sort=price:${sort}
  const List = ({ subCats, maxPrice, sort, catId }) => {
    // const { data, loading, error } = useFetch(
    //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    //     (item)=>`&[filters][sub_categories][id][$eq]=${item}`
    //     )}`
    //     );
    const filter=subCats.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`).join("")
    const {data,loading}=useFetch(`/products?populate=*&[filter][categories][id]=${catId}${filter}`);
  return (
    <div className='list'>
      {loading?"Loading"
      :data?.map((item)=>
      <Card item={item}key={item.id}/>
    )}
    </div>
  )
}

export default List