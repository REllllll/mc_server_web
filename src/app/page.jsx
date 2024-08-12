"use client"
import styles from './page.module.css';
import React from 'react';

export default function Home() {

  // 设置背景轮播图
  const bgList = [
    "/bgs/1.png",
    "/bgs/2.png",
    "/bgs/3.png",
    "/bgs/4.png",
    "/bgs/5.png",
    "/bgs/6.png",
    "/bgs/7.png",
    "/bgs/8.png"];
  const [bgIndex, setBgIndex] = React.useState(0);

  // 创建一个容器让图片提前加载
  const bgs = bgList.map((bg, index) => {
    return <img key={index} src={bg} style={{ display: "none" }} />
  });
  const preloadContainer = <div>
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
    <h1>加载中...</h1>
  </div>
  const [bgContainer,setbgContainer] = React.useState(container);
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
    <main>
      {preloadContainer}
      <div className="container" style={{ height: '100vh' }}>
        <div className="row align-items-center" style={{ height: '100vh' }}>
          <div className="col">
            <div className={`card ${styles.fadeIn} ${styles.slideIn} ${styles.fade}`}>
              <div className="card-body">
                <h5 className="card-title">Sytles 服务器mod下载</h5>
                <p className="card-text">只适用于mc1.20.6 forge版本</p>
                <a className="btn btn-primary" href="/mods/sytles-server-mods.zip">下载</a>

              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${styles.fadeIn} ${styles.slideIn} ${styles.fade}`} style={{ animationDelay: "0.5s" }}>
              <div className="card-body">
                <h5 className="card-title">PCL官方下载地址</h5>
                <a className="card-text" href="https://ltcat.lanzouv.com/b0aj6gsid">https://ltcat.lanzouv.com/b0aj6gsid</a>
                <p className="card-text">提取码:pcl2</p>
              </div>
            </div>
            <div className={`card ${styles.fadeIn} ${styles.slideIn} ${styles.fade}`} style={{ animationDelay: "1s", marginTop:"20px" }}>
              <div className="card-body">
                <h5 className="card-title">HMCL官方下载地址</h5>
                <a className="card-text" href="https://hmcl.huangyuhui.net/download/">https://hmcl.huangyuhui.net/download/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {bgContainer}
      </div>
    </main>


  );
}
