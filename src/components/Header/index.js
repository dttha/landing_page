import React from 'react';
import './Header.css';
import image from '../../assets/images/logo2.png'

const Header = () => {
    return (
        <div className="header position-fixed">
            <nav className="header-nav">
                <div className="max-width">
                    <a href="#" className="nav-brand">
                        <img style={{ height: "auto", width: "200px", paddingTop: 8 }} src={image} />
                    </a>
                    <ul className="menu">
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