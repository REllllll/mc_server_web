"use client"
import React from "react";
import styles from "./bg.module.css";

export default function BgPic() {
    // 设置背景轮播图
    const bgList = [
        "/bgs/1.webp",
        "/bgs/2.webp",
        "/bgs/4.webp",
        "/bgs/5.webp",
        "/bgs/6.webp",
        "/bgs/7.webp",
        "/bgs/8.webp"];
    const [bgIndex, setBgIndex] = React.useState(0);

    // 创建一个容器让图片提前加载
    const bgs = bgList.map((bg, index) => {
        return <img key={index} src={bg} style={{ display: "none" }} />
    });
    const preloadContainer = <div style={{ display: "none" }}>
        {bgs}
    </div>

    const [loadStatus, setloadStatus] = React.useState(false);
    React.useEffect(() => {
        setloadStatus(true);
    }, []);

    // 设置轮播淡出淡入效果
    const container = <div>
        <img src={bgList[bgIndex]} className={styles.bg} />
        <img src={bgList[(bgIndex + 1) % bgList.length]} className={`${styles.bg} ${styles.fadeIn}`} />
    </div>
    const loadingContainer = <div>
        <h1 className={styles.loadingText}>加载背景图中...</h1>
    </div>
    const [bgContainer, setbgContainer] = React.useState(loadingContainer);
    React.useEffect(() => {
        if (loadStatus) {
            setbgContainer(container);
        } else {
            setbgContainer(loadingContainer);
        }
    }, [loadStatus]);
    React.useEffect(() => {
        const interval_bgIndex = setInterval(() => {
            setBgIndex((bgIndex + 1) % bgList.length);
            const container = <div>
                <img src={bgList[bgIndex]} className={styles.bg} />
                <img src={bgList[(bgIndex + 1) % bgList.length]} className={`${styles.bg} ${styles.fadeIn}`} />
            </div>
            setbgContainer(container);
            setTimeout(() => {
                setbgContainer(<img src={bgList[(bgIndex + 1) % bgList.length]} className={styles.bg} />);
            }, 1000);
        }, 5000);
        return () => clearInterval(interval_bgIndex);
    }
        , [bgIndex]);

    return (
        <div>
            {preloadContainer}
            {bgContainer}
        </div>
    )
}