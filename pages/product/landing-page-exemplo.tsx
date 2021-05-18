import React from "react";

import DefaultLayout from "../../components/DefaultLayout";

import { useCheckout } from "@mkplace/react";

const LandingPageExemplo = () => {

    const checkout = useCheckout()

    return (
        <DefaultLayout>
            <h1 style={{}}>Paginia de produto especial</h1>
            <button onClick={() => checkout.setOpen(true)}>open checkout</button>
        </DefaultLayout >
    )
}

export default LandingPageExemplo;