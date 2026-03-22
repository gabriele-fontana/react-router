import { Link } from "react-router-dom"
import AppNavbar from "../components/AppNavbar"

export default function Homepage() {



    return(
        <>
            <AppNavbar></AppNavbar>
            <header className="py-5 mb-5 border-bottom" id='heroSection'>
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            <div className="my-5 text-center">
                                <h1 className="display-3 fw-bold text-dark mb-2">Benvenuti nel nostro Store</h1>
                                <p className="lead text-muted mb-4">
                                    Scopri la nostra selezione esclusiva di prodotti pensati per te.
                                    Qualità garantita e spedizione rapida.
                                </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                    <Link to="/products" className="btn btn-primary btn-lg px-4 me-sm-3 fw-bold">
                                        Start Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )



}