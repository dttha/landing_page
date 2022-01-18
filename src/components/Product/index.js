import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faAward, faCheck, faChessQueen, faDiceFour, faGamepad } from '@fortawesome/free-solid-svg-icons'

const Product = () => {
    return (
        <div className={styles.product} id="product">
            <div className="container">
                <div data-aos="fade-up" className={styles["title-container"]}>
                    <div className={styles["title"] + " " + styles["roboto-400"]}>Sản phẩm</div>
                    <h2 className={styles["p"] + " " + styles["dosis-700"]}>Khách hàng luôn lựa chọn các sản phẩm hàng đầu của chúng tôi</h2>
                    <p className={styles["desc"] + " " + styles["roboto-400"]}>Cốt lõi của một doanh nghiệp thành công là các sản phẩm được yêu thích và tin dùng bởi người dùng. Chúng tôi luôn đầu tư vào việc xây dựng các sản phẩm mang tính đột phá và trải nghiệm tốt nhất cho khách hàng. Đội ngũ của Ftech đã xây dựng các hệ sinh thái về Ecommerce, Edutech, Virtual Assistant... và các sản phẩm dịch vụ hữu ích mang tới tiện ích tối đa cho doanh nghiệp và khách hàng.</p>
                </div>
                <div data-aos="fade-up" className={styles["wrapper"]}>
                    <div className="row align-items-center">
                        <div className={styles["category-product"]}>
                            <ul className={styles["wrapper-ul"]}>
                                <li className={styles["wrapper-li"] + " " + styles["box-shadow"]} style={{ display: "flex" }}>
                                    <div className={styles["wrapper-li-transition"]}></div>
                                    <FontAwesomeIcon className={styles["wrapper-li-icon"]} icon={faAward} style={{ fontSize: 25, color: "#1dd3f8", width: 40, height: 40 }}></FontAwesomeIcon>
                                    <h3 className={styles["name"] + " " + styles["dosis-700"]} style={{ marginLeft: 15 }}>FSchool</h3>
                                </li>
                                <li className={styles["wrapper-li"] + " " + styles["box-shadow"]} style={{ display: "flex" }}>
                                    <FontAwesomeIcon className={styles["wrapper-li-icon"]} icon={faGamepad} style={{ fontSize: 25, color: "#1dd3f8", width: 40, height: 40 }}></FontAwesomeIcon>
                                    <h3 className={styles["name"] + " " + styles["dosis-700"]} style={{ marginLeft: 15 }}>Gamecity</h3>
                                </li>
                                <li className={styles["wrapper-li"] + " " + styles["box-shadow"]} style={{ display: "flex" }}>
                                    <FontAwesomeIcon className={styles["wrapper-li-icon"]} icon={faChessQueen} style={{ fontSize: 25, color: "#1dd3f8", width: 40, height: 40 }}></FontAwesomeIcon>
                                    <h3 className={styles["name"] + " " + styles["dosis-700"]} style={{ marginLeft: 15 }}>FCake</h3>
                                </li>
                                <li className={styles["wrapper-li"] + " " + styles["box-shadow"]} style={{ display: "flex" }}>
                                    <FontAwesomeIcon className={styles["wrapper-li-icon"]} icon={faDiceFour} style={{ fontSize: 25, color: "#1dd3f8", width: 40, height: 40 }}></FontAwesomeIcon>
                                    <h3 className={styles["name"] + " " + styles["dosis-700"]} style={{ marginLeft: 15 }}>TIMI</h3>
                                </li>
                            </ul>
                        </div>
                        <div className={styles["more-product"]}>
                            <div className="row align-items-center">
                                <h3 className={styles["name"] + " " + styles["dosis-700"]} >Kiến tạo thế hệ ưu tú</h3>
                                <p className={styles["desc"] + " " + styles["roboto-400"]}>Chúng tôi tin rằng không có học sinh kém, chỉ có học sinh chưa có phương pháp học tập đúng đắn.</p>
                                <p className={styles["desc"] + " " + styles["roboto-400"]}>Hệ sinh thái FSchool phong phú hỗ trợ các học sinh tốt nhất bằng việc ứng dụng công nghệ AI vào học tập</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul style={{ marginTop: 15 }}>
                                            <li className={styles["box-shadow"]} style={{ display: "flex", padding: "16px 50px 12px 38px", marginBottom: 15 }}>
                                                <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15, color: "#1dd3f8", width: 15, height: 15, marginTop: 6 }}></FontAwesomeIcon>
                                                <h3 className={styles["dosis-600"]} style={{ marginLeft: 6 }}>Adaptive learning</h3>
                                            </li>
                                            <li className={styles["box-shadow"]} style={{ display: "flex", padding: "16px 50px 12px 38px", marginBottom: 15 }}>
                                                <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15, color: "#1dd3f8", width: 15, height: 15, marginTop: 6 }}></FontAwesomeIcon>
                                                <h3 className={styles["dosis-600"]} style={{ marginLeft: 6 }}>Trợ lý ảo</h3>
                                            </li>
                                            <li className={styles["box-shadow"]} style={{ display: "flex", padding: "16px 50px 12px 38px", marginBottom: 15 }}>
                                                <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15, color: "#1dd3f8", width: 15, height: 15, marginTop: 6 }}></FontAwesomeIcon>
                                                <h3 className={styles["dosis-600"]} style={{ marginLeft: 6 }}>Gamification</h3>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul style={{ marginTop: 15 }}>
                                            <li className={styles["box-shadow"]} style={{ display: "flex", padding: "16px 50px 12px 38px", marginBottom: 15 }}>
                                                <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15, color: "#1dd3f8", width: 15, height: 15, marginTop: 6 }}></FontAwesomeIcon>
                                                <h3 className={styles["dosis-600"]} style={{ marginLeft: 6 }}>Tiện ích</h3>
                                            </li>
                                            <li className={styles["box-shadow"]} style={{ display: "flex", padding: "16px 50px 12px 38px", marginBottom: 15 }}>
                                                <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15, color: "#1dd3f8", width: 15, height: 15, marginTop: 6 }}></FontAwesomeIcon>
                                                <h3 className={styles["dosis-600"]} style={{ marginLeft: 6 }}>Lưu trữ</h3>
                                            </li>
                                            <li className={styles["box-shadow"]} style={{ display: "flex", padding: "16px 50px 12px 38px", marginBottom: 15 }}>
                                                <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15, color: "#1dd3f8", width: 15, height: 15, marginTop: 6 }}></FontAwesomeIcon>
                                                <h3 className={styles["dosis-600"]} style={{ marginLeft: 6 }}>Thống kê</h3>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a className={styles["button"] + " " + styles["roboto-600"]} href="#">Xem thêm</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles["image-product"]}>
                            <img src={require("../../assets/images/product1.png")} style={{ height: "100%", width: "100%" }}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;