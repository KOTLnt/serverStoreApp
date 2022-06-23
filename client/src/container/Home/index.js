import React from 'react';
import css from "./home.module.css";
import { Carousel } from "antd";



const Home = () => {
  return (
    <div className={css.Home}>
      <div className={css.Top}>
        <div className={css.Main_Banner}>
          <Carousel 
            className={css.Carousel_Banner}
            autoplay>
              <div className={css.Banner_1}/>
              <div className={css.Banner_2}/>
              <div className={css.Banner_3}/>
              <div className={css.Banner_4}/>
          </Carousel>
        </div>
        <div className={css.Category}>
          <div className={css.Category_menu}>
            <p>Category</p>
          </div>
          <ul className='item'>
            <li>bàn làm việc</li>
            <li>Phòng khách</li>
            <li>Phòng ngủ</li>
            <li>cửa hàng</li>
            <li>Quà tặng</li>
          </ul>
        </div>
      </div>
      
      <div className='Product_Container'>
      </div>
    </div>
  )
}

export default Home;