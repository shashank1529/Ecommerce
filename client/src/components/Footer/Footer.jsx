import React from 'react'
import"./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Accesories</span>
        <span>New Arrival</span>
      </div>
<div className="item">
  <h1>Links</h1>
  <span>FAQ</span>
  <span>Pages</span>
  <span>Stores</span>
  <span>Compare</span>
  <span>Cookies</span>
</div>
<div className="item">
  <h1>About</h1>
  <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis amet laudantium, aperiam cum nihil molestias voluptates praesentium sed voluptate quia fuga eligendi sunt dolorum atque odit accusamus veritatis. Id, voluptas?</span>
</div>
<div className="item">
  <h1>Contact</h1>
  <span>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis amet laudantium, aperiam cum nihil molestias voluptates praesentium sed voluptate quia fuga eligendi sunt dolorum atque odit accusamus veritatis. Id, voluptas?

  </span>
</div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Shop.com </span>
          <span className="copyright">
          &#169; Copyright 2023. All rights reserved
          </span>
        </div>
        <div className="right">
          <img src={process.env.PUBLIC_URL + '/img/payment.png'} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer