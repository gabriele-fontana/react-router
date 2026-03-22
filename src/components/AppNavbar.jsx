


export default function AppNavbar() {



    return(
        <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">E-COMMERCE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/"><i className="bi bi-house-fill"></i> Home</a>
                            <a className="nav-link active" aria-current="page" href="/Products"><i className="bi bi-cart-fill"></i> Products</a>
                            <a className="nav-link active" aria-current="page" href="/AboutUs"><i className="bi bi-person-fill"></i> About Us</a>

                                
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )



}