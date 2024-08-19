import styles from './navBar.module.css';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
            <div className="container">
                <Link href="/" className="navbar-brand" style={{ fontFamily: 'Minecraft',marginBottom:'6px' }}>Sytles MC Server</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href='/'>
                                首页
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/download">
                                下载
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/tutorial">
                                皮肤站教程
                            </Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <a className="btn btn-success" href='http://sytles.cn/mcSkins' target='_blank'>
                            皮肤站入口
                        </a>
                    </form>
                </div>
            </div>
        </nav>
    )
}