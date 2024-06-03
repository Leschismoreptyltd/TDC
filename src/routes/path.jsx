import { lazy } from "react";
import pathConstants from "./pathConstants.jsx";

const Home = lazy(() => import("../components/views/Home.jsx"));
const AboutUs = lazy(() => import("../components/views/AboutUs.jsx"));
const DivaSection = lazy(() => import("../components/views/DivaSection.jsx"));
const JoinTDC = lazy(() => import("../components/views/JoinTDC.jsx"));
const ConatactUs = lazy(() => import("../components/views/ContactUs.jsx"));

//const LoginSIgnup = React.lazy(() => import("../components/cards/LoginSignup"));

const routes = [

    {path: pathConstants.HOME, element: <Home/>},
    {path: pathConstants.ABOUTUS, element: <AboutUs/>},
    {path: pathConstants.DIVASECTION, element: <DivaSection/>},
    {path: pathConstants.JOINTDC, element: <JoinTDC/>},
    {path: pathConstants.CONTACTUS, element: <ConatactUs/>}
    
    //{path: pathConstants.LOGINSIGNUP, element: <LoginSignup/>},

]

export default routes