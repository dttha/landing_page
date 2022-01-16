import styles from './styles.module.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div className={styles.about}>
            <div className="container">
                <div className={styles["title-container"]}>
                    <div className={styles["title"] + " " + styles["roboto-400"]}>Về chúng tôi</div>
                    <h2 className={styles["p"] + " " + styles["dosis-700"]}>FTECH là doanh nghiệp công nghệ thông tin, ứng dụng trí thông minh nhân tạo hàng đầu Việt Nam.</h2>
                </div>
                <div className="row">
                    <div className={styles["box"] + " " + styles["box1"]}>
                        <div className={`${styles["single-offer"]} d-flex`} style={{ height: "95%" }}>
                            <FontAwesomeIcon icon={faAtom} style={{ fontSize: 25, color: "#9898f0", width: 40, height: 40 }} />
                            <div className={styles["wrapper-content"]}>
                                <h3 className={styles["name"] + " " + styles["dosis-700"]}>F - Family</h3>
                                <p className={styles["desc"] + " " + styles["roboto-400"]}>Là một gia đình, chúng tôi tôn trọng cấp trên, yêu thương và bao dung với cấp dưới, hỗ trợ nhau vượt qua mọi khó khăn và cùng nhau sẻ chia mọi thành quả.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;