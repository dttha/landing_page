import React from "react";
import styles from "./styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const News = () => {
    return (
        <div className={styles.news}>
            <div className="container">
                <div className={styles["title-container"]}>
                    <div className={styles["title"] + " " + styles["roboto-400"]}>Tin tức</div>
                    <h2 className={styles["p"] + " " + styles["dosis-700"]}>Tin gần đây</h2>
                    <p className={styles["desc"] + " " + styles["roboto-400"]}>Tin tức mới nhất từ chúng tôi</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 ">
                        <div className={styles["single-news"]}>
                            <div className={styles["image-news"]} style={{ marginBottom: 10 }}>
                                <a href="#">
                                    <img src={require("../../assets/images/new1.jfif")} style={{ height: "236px", objectFit: "cover", width: "100%" }}></img>
                                </a>
                                <div className={styles["date"]}>
                                    <span>13:49 05/01/2022</span>
                                </div>
                            </div>
                            <div className={styles["content-news"]}>
                                <a className={styles["name"] + " " + styles["dosis-700"]} href="#">Nền tảng trực tuyến FBang ra mắt - “Cơn địa chấn" cho nền thể thao điện tử và giải trí</a>
                                <p style={{ marginTop: 15 }} className={styles["desc"] + " " + styles["roboto-400"]}>FBang ứng dụng livestream kết hợp giải trí đa dạng chính thức ra mắt vào 19/12/2021, với sứ mệnh đ...</p>
                                <a className={styles["roboto-600"] + " " + styles["read-more"]} href="#">Đọc thêm
                                    <FontAwesomeIcon className={styles["wrapper-icon"]} icon={faPlus} ></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className={styles["single-news"]}>
                            <div className={styles["image-news"]} style={{ marginBottom: 10 }}>
                                <a href="#">
                                    <img src={require("../../assets/images/new2.jfif")} style={{ height: "236px", objectFit: "cover", width: "100%" }}></img>
                                </a>
                                <div className={styles["date"]}>
                                    <span>16:53 31/12/2021</span>
                                </div>
                            </div>
                            <div className={styles["content-news"]}>
                                <a className={styles["name"] + " " + styles["dosis-700"]} href="#">Thiện nguyện vùng cao</a>
                                <p style={{ marginTop: 15 }} className={styles["desc"] + " " + styles["roboto-400"]}>Một chút niềm vui nhân ngày cuối năm 2021, tiếp tục cuộc hành trình mang nụ cười đi xa của FTECH (11...</p>
                                <a className={styles["roboto-600"] + " " + styles["read-more"]} href="#">Đọc thêm
                                    <FontAwesomeIcon className={styles["wrapper-icon"]} icon={faPlus} ></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className={styles["single-news"]}>
                            <div className={styles["image-news"]} style={{ marginBottom: 10 }}>
                                <a href="#">
                                    <img src={require("../../assets/images/new1.jfif")} style={{ height: "236px", objectFit: "cover", width: "100%" }}></img>
                                </a>
                                <div className={styles["date"]}>
                                    <span>16:32 29/12/2021</span>
                                </div>
                            </div>
                            <div className={styles["content-news"]}>
                                <a className={styles["name"] + " " + styles["dosis-700"]} href="#">MERRY CHRISTMAS 2021</a>
                                <p style={{ marginTop: 15 }} className={styles["desc"] + " " + styles["roboto-400"]}>"We wish you a Merry Christmas We wish you a Merry Christmas and a Happy New Year" ![Copy of HNT9...</p>
                                <a className={styles["roboto-600"] + " " + styles["read-more"]} href="#">Đọc thêm
                                    <FontAwesomeIcon className={styles["wrapper-icon"]} icon={faPlus} ></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;