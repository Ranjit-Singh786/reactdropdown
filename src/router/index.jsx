import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
export default function AppRoutes() {


    // Routes for Components
    const routes = [
        {
            name: "Home",
            path: "/",
            Component: Home,
        },
    

    ];



    // ROUTES MAPING
    const Routing = routes.map(({ name, path, Component }, i) => (
        <Route key={i} path={path} element={<Component />} />
    )
    );

    return (
        <div className="">
            <Routes>
                {Routing}
            </Routes>
        </div>
    );
};