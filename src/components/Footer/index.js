import React from "react";
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInvision } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 ">
                        <div className="wrapper-col">
                            <a href="#">
                                <img style={{ height: "100%", objectFit: "cover", width: "100%", padding: "0px 0px 10px 0px" }} src={require("../../assets/images/logo2.png")} />
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
                            <h3 className={styles["dosis-700"]} style={{ lineHeight: "30px", fontSize: "25px", color: "#fff" }}>Sản phẩm</h3>
                            <ul>
                                <li>
                                    <a href="#" className={styles["roboto-400"]} style={{ color: "#d9d6d6" }}>
                                        <i></i>
                                        FSchool</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">

                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="wrapper-col">
                            <h3></h3>
                            <ul>
                                <li>
                                    <i></i>
                                    <span className={styles["roboto-400"]} style={{ color: "#d9d6d6", display: "block" }}>Địa chỉ</span>
                                    <span className={styles["dosis-600"]} style={{ lineHeight: "29px", fontSize: "16px", color: "#d9d6d6" }}>- Chi nhánh Hà Nội: Tầng 5, số 434 Trần Khát Chân, Phố Huế, Hai Bà Trưng, Hà Nội, Việt Nam</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;