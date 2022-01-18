import React from "react";
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInvision } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleRight, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 ">
                        <div className="wrapper-col">
                            <a href="#">
                                <img style={{ height: "100%", objectFit: "cover", width: "100%", padding: "0px 100px 20px 0px" }} src={require("../../assets/images/logo2.png")} />
                            </a>
                            <p className={styles["roboto-400"]}>Được thành lập vào 01.2019, CÔNG TY TNHH CÔNG NGHỆ GIA ĐÌNH (FTECH CO., LTD) đã xây dựng thành công một đội ngũ kỹ sư Al/Phần mềm tuyệt vời. Chúng tôi đang tìm cách phát triển quan hệ đối tác chiến lược với các công ty khởi nghiệp trong các lĩnh vực mà Al thực sự có thể tạo ra đột phá.</p>
                            <div className={styles["wrap-social-icon"]}>
                                <FontAwesomeIcon icon={faFacebook} style={{ height: 30, width: 30, color: "#3955bc" }}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faInvision} style={{ height: 30, width: 30, color: "#1da1f2", marginLeft: 8 }}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="wrapper-col">
                            <h3 className={styles["dosis-700"] + " " + styles["underlined"]} style={{ lineHeight: "30px", fontSize: "25px", color: "#fff" }}>Sản phẩm</h3>
                            <ul style={{ marginLeft: -30 }}>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        FSchool</a>
                                </li>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        Gamecity</a>
                                </li>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        FCake</a>
                                </li>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        TIMI</a>
                                </li>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        Spago</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="wrapper-col">
                            <h3 className={styles["dosis-700"] + " " + styles["underlined"]} style={{ lineHeight: "30px", fontSize: "25px", color: "#fff" }}>Danh mục</h3>
                            <ul style={{ marginLeft: -30 }}>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        Trang chủ</a>
                                </li>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        Về chúng tôi</a>
                                </li>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        Sản phẩm</a>
                                </li>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        Môi trường làm việc</a>
                                </li>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        Tin tức</a>
                                </li>
                                <li className={styles["wrap-li"]}>
                                    <a href="#" className={styles["roboto-400"] + " " + styles["wrap-a"]} >
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className={styles["wrap-icon"]} ></FontAwesomeIcon>
                                        Đối tác</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="wrapper-col">
                            <h3 className={styles["dosis-700"] + " " + styles["underlined"]} style={{ lineHeight: "30px", fontSize: "25px", color: "#fff" }}>Thông tin</h3>
                            <ul style={{ marginLeft: -30 }}>
                                <li className={styles["address"]}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ top: 2, left: 0, fontSize: 20, color: "#d9d6d6" }}></FontAwesomeIcon>
                                    <div style={{ marginLeft: 15, marginTop: -8 }}>
                                        <span className={styles["roboto-400"]} style={{ color: "#d9d6d6", display: "block" }}>Địa chỉ</span>
                                        <span className={styles["roboto-400"]} style={{ color: "#d9d6d6", display: "block" }}>- Chi nhánh Hà Nội: Tầng 5, số 434 Trần Khát Chân, Phố Huế, Hai Bà Trưng, Hà Nội, Việt Nam</span>
                                        <span className={styles["roboto-400"]} style={{ color: "#d9d6d6", display: "block" }}>- Chi nhánh Đà Nẵng: Tầng 11, Thành Lợi 2, số 3 Lê Đình Lý, Vĩnh Trung, Thanh Khê, Đà Nẵng</span>
                                        <span className={styles["roboto-400"]} style={{ color: "#d9d6d6", display: "block" }}>- Chi nhánh HCM: Tầng 6, Toà nhà eTown 2, 364 đường Cộng Hòa, Phường 13 Quận Tân Bình</span>
                                    </div>
                                </li>
                                <li className={styles["address"]}>
                                    <FontAwesomeIcon icon={faPhoneAlt} style={{ top: 2, left: 0, fontSize: 20, color: "#d9d6d6" }}></FontAwesomeIcon>
                                    <div style={{ marginLeft: 15, marginTop: -8 }}>
                                        <span className={styles["roboto-400"]} style={{ color: "#d9d6d6", display: "block" }}>Điện thoại</span>
                                        <a href="#" className={styles["roboto-400"]} style={{ color: "#d9d6d6", display: "block" }}>1900636019</a>
                                    </div>
                                </li>
                                <li className={styles["address"]}>
                                    <FontAwesomeIcon icon={faEnvelope} style={{ top: 2, left: 0, fontSize: 20, color: "#d9d6d6" }}></FontAwesomeIcon>
                                    <div style={{ marginLeft: 15, marginTop: -8 }}>
                                        <span className={styles["roboto-400"]} style={{ color: "#d9d6d6", display: "block" }}>Email</span>
                                        <a href="#" className={styles["roboto-400"]} style={{ color: "#d9d6d6", display: "block" }}>info@ftech.ai</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;