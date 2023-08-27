import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import FAQ from "../../pages/FAQ/FAQ";
import About from "../../pages/About/About";
import Signup from "../../pages/Signup/Signup";

const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route index element = {<Home/>}/>      
                <Route path="/login" element = {<Login/>}/>   
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Router;