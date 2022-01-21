import React, { useEffect } from 'react';
import './Header.css';
import image from '../../assets/images/logo2.png'

const Header = () => {
    useEffect(() => {
        const header = document.getElementById("nav")
        window.addEventListener("scroll", (e) => {
            console.log(window.scrollY)
            header.style.background = `rgba(4, 6, 60,${window.scrollY / 500})`
        })
        const btnMenu = document.getElementById("btn-menu")
        const menu = document.getElementById("menu")
        btnMenu.addEventListener("click", () => {
            menu.classList.toggle("show-menu")
        })
    }, [])
    return (
        <div className="header position-fixed" >
            <nav className="header-nav" id="nav">
                <div className="max-width">
                    <a href="#" className="nav-brand">
                        <img style={{ height: "auto", width: "200px", paddingTop: 8 }} src={image} />
                    </a>
                    <button id="btn-menu" style={{ background: "transparent", border: 'none', color: "#fff", fontSize: 30 }}>
                        <i class="fas fa-bars"></i>
                    </button>
                    <ul className="menu" id="menu">
                        <li className="menu-item">
                            <a href="#home" className="menu-item-link active">Trang chủ</a>
                        </li>
                        <li className="menu-item">
                            <a href="#about" className="menu-item-link active">Về chúng tôi</a>
                        </li>
                        <li className="menu-item">
                            <a href="#product" className="menu-item-link active">Sản phẩm</a>
                        </li>
                        <li className="menu-item">
                            <a href="#environment" className="menu-item-link active">Môi trường làm việc</a>
                        </li>
                        <li className="menu-item">
                            <a href="#news" className="menu-item-link active">Tin tức</a>
                        </li>
                        <li className="menu-item">
                            <a href="#partner" className="menu-item-link active">Đối tác</a>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Header