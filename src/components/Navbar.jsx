import { Link } from "react-router-dom";
import logo from "../../logo/logo.svg"

const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">MERN-LOGO</a> */}
                {/* <svg width="100" height="100" xmlnsXlink="."> 
                    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
                </svg> */}
                <img src={logo} alt="mysvg" width={60} height={50} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link  className="nav-link mybtn" to="/">Create Post</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mybtn" to="/read">All Post</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>;
};

export default Navbar;
