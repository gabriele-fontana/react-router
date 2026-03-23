
import Navbar from '/AppNavbarNavbar';


const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                {children}
            </main>
            
        </div>
    );
};

export default Layout;
