import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header position-fixed">
            <nav className="header-nav">
                <div className="max-width">
                    <a href="#" className="header-brand">Ha's Notion</a>
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
                            <a href="#recruitment" className="menu-item-link active">Tuyển dụng</a>
                        </li>
                        <li className="menu-item">
                            <a href="#news" className="menu-item-link active">Tin tức</a>
                        </li>
                        <li className="menu-item">
                            <a href="#blog" className="menu-item-link active">Blog</a>
                        </li>
                        <li className="menu-item">
                            <a href="#contact" className="menu-item-link active">Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Header