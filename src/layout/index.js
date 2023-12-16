import React from "react";
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import Work from "../components/work";
import Pricing from '../components/Pricing'
import Footer from "./Footer";
import Costing from "../components/Costing";
import Section from "../components/HybridProgram";


const Layout = ({ children }) => {
    return (
        <React.Fragment>
            {children}
            <Pricing />
            <AboutUs />
            <Features />
            <Work />
            <Section />
            <Costing />
            <Footer />
        </React.Fragment>
    )
}

export default Layout;