import React from "react";

import Header from "./Header/Header";

import Footer from "./Footer/Footer";

import { useCheckout } from "@mkplace/react";

const DefaultLayout: React.FC = ({ children }) => {

    const checkout = useCheckout()

    return (
        <div style={{
            fontFamily: "'Ubuntu', sans-serif",
            // width: `${checkout.isOpen ? '95%' : '100%'}`, margin: 'auto' 
        }}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default DefaultLayout;