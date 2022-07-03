import React from 'react'
import css from "./Header.module.css"
import { Link } from "react-router-dom"


import SearchBar from '../SearchBar'

const Header = () => {
  return (
    <div className={css.Header}>
        <nav className={css.nav_bar}>
            <ul className={css.nav_bar_left}>
                <li>
                    <a href='https://facebook.com' target="_blank" rel='noopener noreferrer'>
                        <i class= "fa-brands fa-facebook"></i>
                        <span>Facebook</span>
                    </a>
                </li>
                <li>
                    <a href='https://youtube.com' target="_blank" rel='noopener noreferrer'>
                        <i class="fa-brands fa-youtube"></i>
                        <span>YouTube</span>
                    </a>
                </li>
                <li>
                    <a href='https://tiktok.com' target="_blank" rel='noopener noreferrer'>
                        <i class="fa-brands fa-tiktok"></i>
                        <span>Tiktok</span>
                    </a>
                </li>
            </ul>
            <ul className={css.nav_bar_right}>
                <li>
                    <i class="fa fa-light fa-globe"></i>
                    <span>Thông báo</span>
                </li>
                <li>
                        <i class="fa-regular fa-circle-question"></i>
                        <span>Hỗ trợ</span>
                </li>
                <li>
                    <Link to ="/login">
                    <i class="fa-regular fa-circle-user"></i>
                    <span>Tài khoản</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className={css.Header_bar}>
            <div className={css.Logo}>
                <Link to = "/">
                    <img src={require("../../IMG/Logo.png")} alt ="logo"></img>
                </Link>
            </div>
            <div className={css.Search_Bar}>
                <SearchBar/>
            </div>
        </div>
    </div>
  )
}

export default Header;