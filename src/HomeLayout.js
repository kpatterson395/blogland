import { NavLink, Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div className="home-layout">
            <nav>
                <header>
                    BlogLand
                </header>
                <div>
                    <NavLink className="navbar-link" to="/blogland">Home</NavLink>
                    <NavLink className="navbar-link" to="/about">About</NavLink>
                    <NavLink className="navbar-link" to="/form">New Blog</NavLink>
                </div>

            </nav>

            <main className="main-layout">
                <Outlet />
            </main>
        </div>
    );
}

export default HomeLayout;