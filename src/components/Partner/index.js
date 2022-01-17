import React from "react";
import styles from "./styles.module.css"

const Partner = () => {
    return (
        <div className={styles.partner}>
            <div className="container">
                <div className={styles["title-container"]}>
                    <div className={styles["title"] + " " + styles["roboto-400"]}>Đối tác</div>
                    <h2 className={styles["p"] + " " + styles["dosis-700"]}>Mạng lưới đối tác của chúng tôi</h2>
                    <p className={styles["desc"] + " " + styles["roboto-400"]}>Các khách hàng luôn coi chúng tôi là đối tác cao cấp, FTECH luôn có được sự tin tưởng của hơn 50 khách hàng trên các lĩnh vực kinh doanh đa dạng (Giáo dục, E-Commerce, ESport, B2B, B2C..). Với FTECH, khách hàng luôn là gia đình của chúng tôi.</p>
                </div>
                <div className={styles["brand-list"]}>
                    <div className={styles["single-brand"]}>
                        <a href="#">
                            <img style={{ height: "auto", objectFit: "cover", width: "100%" }} src={require("../../assets/images/vtvlive.jpg")} />
                        </a>
                    </div>
                    <div className={styles["single-brand"]}>
                        <a href="#">
                            <img style={{ height: "auto", objectFit: "cover", width: "100%" }} src={require("../../assets/images/viettel.jpg")} />
                        </a>
                    </div>
                    <div className={styles["single-brand"]}>
                        <a href="#">
                            <img style={{ height: "auto", objectFit: "cover", width: "100%" }} src={require("../../assets/images/edutimes.jpg")} />
                        </a>
                    </div>
                    <div className={styles["single-brand"]}>
                        <a href="#">
                            <img style={{ height: "auto", objectFit: "cover", width: "100%" }} src={require("../../assets/images/kcloset.jpg")} />
                        </a>
                    </div>
                    <div className={styles["single-brand"]}>
                        <a href="#">
                            <img style={{ height: "auto", objectFit: "cover", width: "100%" }} src={require("../../assets/images/mobifone.jpg")} />
                        </a>
                    </div>
                    <div className={styles["single-brand"]}>
                        <a href="#">
                            <img style={{ height: "auto", objectFit: "cover", width: "100%" }} src={require("../../assets/images/spago.jpg")} />
                        </a>
                    </div>
                    <div className={styles["single-brand"]}>
                        <a href="#">
                            <img style={{ height: "auto", objectFit: "cover", width: "100%" }} src={require("../../assets/images/vinaphone.jpg")} />
                        </a>
                    </div>
                    <div className={styles["single-brand"]}>
                        <a href="#">
                            <img style={{ height: "auto", objectFit: "cover", width: "100%" }} src={require("../../assets/images/viresa.jpg")} />
                        </a>
                    </div>
                </div>
                <div className={styles["title-container"]}>
                    <h2 className={styles["p"] + " " + styles["dosis-700"]}>Chứng Chỉ</h2>
                    <div className={styles["certificate"]}>
                        <img style={{ height: "120px", objectFit: "cover", width: "120px", marginTop: "25px" }} src={require("../../assets/images/certificate.png")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner;