import {Link} from "react-router-dom";

export default function SlideBar() {

    const clickHandler = () => {
        document.getElementById('sidebar').classList.toggle('active')
    }


    return (
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/images/logo/logo.png" alt="Logo" srcSet=""/>
                            </Link>
                        </div>
                        <div className="toggler">
                            <a href="#" className="sidebar-hide d-xl-none d-block" onClick={clickHandler}><i
                                className="bi bi-x bi-middle"/></a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">Меню</li>
                        {/*className="sidebar-item active"*/}
                        <li className='sidebar-item'>
                            <Link className='sidebar-link' to="/">
                                <i className="bi bi-grid-fill"/>
                                <span>Головна</span>
                            </Link>

                        </li>

                        <li className="sidebar-item">
                            <Link to="/users" className='sidebar-link'>
                                <i className="bi bi-file-earmark-spreadsheet-fill"/>
                                <span>Користувачі</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link to="/groups" className='sidebar-link'>
                                <i className="bi bi-people-fill"/>
                                <span>Групи</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link to="/kanban" className='sidebar-link'>
                                <i className="bi bi-people-fill"/>
                                <span>Канбан</span>
                            </Link>
                        </li>

                    </ul>
                </div>
                <button className="sidebar-toggler btn x"><i data-feather="x"/></button>
            </div>
        </div>
    )
}