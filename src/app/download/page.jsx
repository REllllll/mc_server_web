import styles from './download.module.css';

export default function Download() {

  return (

    <div className="container" style={{ flexGrow: '1' }}>
      <div className="row align-items-center" style={{ height: '100%' }}>
        <div className="col">
          <div className={`card ${styles.fadeIn} ${styles.slideIn} ${styles.fade}`}>
            <div className="card-body">
              <h5 className="card-title">Sytles 服务器mod下载</h5>
              <p className="card-text">只适用于mc1.16.5 forge版本</p>
              <a className="btn btn-primary" href="/mods/sytles-server-mods.zip">下载</a>
            </div>
          </div>
          <div className={`card ${styles.fadeIn} ${styles.slideIn} ${styles.fade}`} style={{ animationDelay: "0.5s", marginTop: "20px" }}>
            <div className="card-body">
              <h5 className="card-title">Java 8 下载</h5>
              <a className="btn btn-primary" href="https://javadl.oracle.com/webapps/download/AutoDL?BundleId=250129_d8aa705069af427f9b83e66b34f5e380">下载</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card ${styles.fadeIn} ${styles.slideIn} ${styles.fade}`} style={{ animationDelay: "1s" }}>
            <div className="card-body">
              <h5 className="card-title">PCL官方下载地址</h5>
              <a className="card-text" href="https://ltcat.lanzouv.com/b0aj6gsid">https://ltcat.lanzouv.com/b0aj6gsid</a>
              <p className="card-text">提取码:pcl2</p>
            </div>
          </div>
          <div className={`card ${styles.fadeIn} ${styles.slideIn} ${styles.fade}`} style={{ animationDelay: "1.5s", marginTop: "20px" }}>
            <div className="card-body">
              <h5 className="card-title">HMCL官方下载地址</h5>
              <a className="card-text" href="https://hmcl.huangyuhui.net/download/">https://hmcl.huangyuhui.net/download/</a>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
