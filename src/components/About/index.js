import styles from './styles.module.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faCog, faCompactDisc, faCube, faHandPeace } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div className={styles.about} id="about">
            <div className="container">
                <div className={styles["title-container"]}>
                    <div className={styles["title"] + " " + styles["roboto-400"]}>Về chúng tôi</div>
                    <h2 className={styles["p"] + " " + styles["dosis-700"]}>FTECH là doanh nghiệp công nghệ thông tin, ứng dụng trí thông minh nhân tạo hàng đầu Việt Nam.</h2>
                </div>
                <div className="wrapper-row">
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
                        <div className={styles["box"] + " " + styles["box1"]}>
                            <div className={`${styles["single-offer"]} d-flex`} style={{ height: "95%" }}>
                                <FontAwesomeIcon icon={faHandPeace} style={{ fontSize: 25, color: "#76b8f5", width: 40, height: 40 }} />
                                <div className={styles["wrapper-content"]}>
                                    <h3 className={styles["name"] + " " + styles["dosis-700"]}>T – Trust</h3>
                                    <p className={styles["desc"] + " " + styles["roboto-400"]}>Chúng tôi tin tưởng vào con đường mình đã chọn, vào tầm nhìn và sứ mệnh của công ty.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["box"] + " " + styles["box1"]}>
                            <div className={`${styles["single-offer"]} d-flex`} style={{ height: "95%" }}>
                                <FontAwesomeIcon icon={faCompactDisc} style={{ fontSize: 25, color: "#1ccdca", width: 40, height: 40 }} />
                                <div className={styles["wrapper-content"]}>
                                    <h3 className={styles["name"] + " " + styles["dosis-700"]}>E – Embrace challenges</h3>
                                    <p className={styles["desc"] + " " + styles["roboto-400"]}>Là một công ty công nghệ trẻ và tiên phong, chúng tôi luôn sẵn sàng đón nhận và chinh phục mọi thách thức.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["box"] + " " + styles["box1"]}>
                            <div className={`${styles["single-offer"]} d-flex`} style={{ height: "95%" }}>
                                <FontAwesomeIcon icon={faCog} style={{ fontSize: 25, color: "#f9ca54", width: 40, height: 40 }} />
                                <div className={styles["wrapper-content"]}>
                                    <h3 className={styles["name"] + " " + styles["dosis-700"]}>C – Contribution</h3>
                                    <p className={styles["desc"] + " " + styles["roboto-400"]}>Chúng tôi cam kết đóng góp, cống hiến tuổi trẻ và tri thức của mình vì một tương lai tốt đẹp hơn cho tất cả mọi người.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["box"] + " " + styles["box1"]}>
                            <div className={`${styles["single-offer"]} d-flex`} style={{ height: "95%" }}>
                                <FontAwesomeIcon icon={faCube} style={{ fontSize: 25, color: "#ff896b", width: 40, height: 40 }} />
                                <div className={styles["wrapper-content"]}>
                                    <h3 className={styles["name"] + " " + styles["dosis-700"]}>H – Honesty</h3>
                                    <p className={styles["desc"] + " " + styles["roboto-400"]}>Ở FTECH, chúng tôi coi trong sự trung thực, vì chúng tôi tin rằng sự trung thực là khởi đầu cần thiết cho mọi mối quan hệ tốt đẹp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;