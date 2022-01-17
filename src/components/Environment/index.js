import React from "react";
import styles from './styles.module.css'


const Environment = () => {
    return (
        <div className={styles.environment}>
            <div className="container">
                <div className={styles["title-container"]}>
                    <div className={styles["title"] + " " + styles["roboto-400"]}>Không gian văn phòng</div>
                    <h2 className={styles["p"] + " " + styles["dosis-700"]}>Môi trường làm việc trẻ trung, năng động.</h2>
                    <p className={styles["desc"] + " " + styles["roboto-400"]}>Môi trường làm việc trẻ trung, năng động là những gì chúng tôi hướng tới.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 ">
                        <div className={styles["wrapper-card"]}>
                            <img src={require("../../assets/images/e1.jpg")} style={{ height: "262px", objectFit: "cover", width: "100%" }}></img>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 ">
                        <div className={styles["wrapper-card"]}>
                            <img src={require("../../assets/images/e2.jpg")} style={{ height: "262px", objectFit: "cover", width: "100%" }}></img>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 ">
                        <div className={styles["wrapper-card"]}>
                            <img src={require("../../assets/images/e3.jpg")} style={{ height: "262px", objectFit: "cover", width: "100%" }}></img>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 ">
                        <div className={styles["wrapper-card"]}>
                            <img src={require("../../assets/images/e4.jpg")} style={{ height: "262px", objectFit: "cover", width: "100%" }}></img>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 ">
                        <div className={styles["wrapper-card"]}>
                            <img src={require("../../assets/images/e5.jpg")} style={{ height: "262px", objectFit: "cover", width: "100%" }}></img>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 ">
                        <div className={styles["wrapper-card"]}>
                            <img src={require("../../assets/images/e6.jpg")} style={{ height: "262px", objectFit: "cover", width: "100%" }}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Environment;