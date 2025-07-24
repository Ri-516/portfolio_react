

function Header() {
    return (
        <>
                <header className="py-3">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid px-0">
                                <a className="navbar-brand" href="#">
                                    <h3>My Portfolio</h3>
                                </a>
                               
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                              
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#hobbies">Hobbies</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#skills">Skills</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#resume">Resume</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
        </>
    )
}
export default Header