
import React from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faAllergies, faEye } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    return (
        <div>
            <div className={styles.home}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.context}>
                                <div className={styles["titleContent"]}>Chạm vào tương lai</div>
                                <p className={styles["textContent"]}>FTECH là một công ty công nghệ đầu tư nghiên cứu chuyên sâu về lĩnh vực AI, trí tuệ nhân tạo, là một lĩnh vực của tương lai.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["container-features"] + " " + styles["mt-70"]}>
                <div className={styles["features"]}>
                    <div className={styles["row"]}>
                        <div className={styles["sub-features"] + " " + styles["sub-features-1"]}>
                            <div className={styles["single-features"]} style={{ height: "95%" }}>
                                <FontAwesomeIcon icon={faEye} style={{ color: '#1dd3f8', fontSize: 50, padding: 10, border: "1px solid #1dd3f8", borderRadius: "50%" }} />
                                <h3 className={styles["dosis-700"] + " " + "mt-3"}>Tầm nhìn</h3>
                                <p className={styles["roboto-400"]}>Trở thành doanh nghiệp công nghệ, ứng dụng trí thông minh nhân tạo hàng đầu Việt Nam</p>
                            </div>
                        </div>
                        <div className={styles["sub-features"] + " " + styles["sub-features-2"]}>
                            <div className={styles["single-features"]} style={{ height: "95%" }}>
                                <FontAwesomeIcon icon={faAdjust} style={{ color: '#1dd3f8', fontSize: 50, padding: 10, border: "1px solid #1dd3f8", borderRadius: "50%" }} />
                                <i className="ti-eye"></i>
                                <h3 className={styles["dosis-700"] + " " + "mt-3"}>Sứ mệnh</h3>
                                <p className={styles["roboto-400"]}>Kiến tạo hệ sinh thái công nghệ, trợ lý ảo cho gia đình Việt</p>
                            </div>
                        </div>
                        <div className={styles["sub-features"] + " " + styles["sub-features-3"] + " " + styles["sub-features-offset-3"]}>
                            <div className={styles["single-features"]} style={{ height: "95%" }}>
                                <FontAwesomeIcon icon={faAllergies} style={{ color: '#1dd3f8', fontSize: 50, padding: 10, border: "1px solid #1dd3f8", borderRadius: "50%" }} />
                                <h3 className={styles["dosis-700"] + " " + "mt-3"}>Giá trị cốt lõi</h3>
                                <p className={styles["roboto-400"]}>Văn hóa Gia đình - Tin tưởng - Chinh phục thách thức - Cống hiến - Trung thực</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home