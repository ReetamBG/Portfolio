function Navbar() {
    return (
        <nav className="navbar navbar-expand-md fixed-top"
            style={{
                background: "rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
            }}
        >
            <div className="container-fluid px-4 px-md-5">
                {/* Brand */}
                <a className="navbar-brand text-white fw-bold fs-4" href="#">Portfolio</a>

                {/* Toggler Button */}
                <button
                    data-bs-theme="dark"
                    className="navbar-toggler border-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ outline: "none", boxShadow: "none" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Items */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-3" style={{ fontSize: "1.1rem" }}>
                        <li className="nav-item"><a className="nav-link text-secondary" href="#hero">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-secondary" href="#about-me">About Me</a></li>
                        <li className="nav-item"><a className="nav-link text-secondary" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link text-secondary" href="#">Contact</a></li>
                        <li className="nav-item">
                            {/* <a className="nav-link text-white" href="#">
                              <svg className="bi" width="24" height="24" fill="white"><use xlinkHref="#cart"></use></svg>
                          </a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
