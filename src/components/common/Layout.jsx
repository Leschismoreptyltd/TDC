import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LogoBanner from "./LogoBanner";
import { Suspense } from "react";

const Layout = () => {

    return(
        <div className="px-5 bg-gradient-to-b from-purple-600 via-purple-300 to-transparent w-full h-full">
        
        <Header/>

        <main>

            <Suspense fallback = {<div>Loading...</div>}>

                <Outlet/>

            </Suspense>

        </main>

        <Footer/>

        </div>
    )
}

export default Layout;
