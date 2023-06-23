import React from 'react';
import "./Cart.scss";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     title: "Long Sleeves T-shirts",
  //     desc: "Long Sleeves T-shirts",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      
  //     title: "Coat",
  //     desc: "Coat",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];
const products=useSelector((state)=> state.cart.products);
const dispatch=useDispatch();
const totalPrice=()=>{
  let total=0;
  products.forEach((item)=>(total+=item.quantity*item.price));
  return total.toFixed(2);
};
const t=totalPrice();
  return (
    <div className='carticon'>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x {item.price}</div>
          </div>
          <DeleteIcon className="delete"
          onClick={()=>dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${t}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset"
      onClick={()=>dispatch(resetCart())}
      >Reset Cart</span>
    </div>
  );
};

export default Cart;
