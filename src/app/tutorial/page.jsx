import styles from './page.module.css';

export default function Tutorial() {

    return (

        <div className="container" style={{ flexGrow: '1', overflow:'auto' }}>
            <div className="row align-items-center" style={{ height: '100%' }}>
                <div className="col">
                    <div className={`card ${styles.fadeIn} ${styles.slideIn} ${styles.fade}`} style={{marginTop:'100px'}}>
                        <div className="card-body">
                            <h2 className="card-title">皮肤站教程</h2>
                            <h5>创建角色</h5>
                            <p>点击个人中心后点击菜单栏的角色管理</p>
                            <img src="/tutorial/3.png" alt="" style={{ maxWidth: '100%' }} />
                            <p>添加新角色<span style={{color:'red'}}>（与你离线登录的ID相同以保证用户数据保留）</span></p>
                            <h5>上传皮肤</h5>
                            <p>注册登录后，点击个人中心后点击菜单栏的我的衣柜</p>
                            <img src="/tutorial/1.png" alt="" style={{ maxWidth: '100%' }} />
                            <p>点击上传材质</p>
                            <img src="/tutorial/2.png" alt="" style={{ maxWidth: '100%' }} />
                            <p>选择皮肤文件上传即可</p>
                            <img src="/tutorial/4.png" alt="" style={{ maxWidth: '100%' }} />
                            <p>选择需要使用的皮肤后点击使用，选择需要应用的角色即可</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}
