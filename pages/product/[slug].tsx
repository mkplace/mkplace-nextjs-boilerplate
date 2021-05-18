import React from "react";

import DefaultLayout from "../../components/DefaultLayout";

import { useCheckout } from "@mkplace/react";

const ProductPageDefault = () => {

    const checkout = useCheckout()

    return (
        <DefaultLayout>
            <div style={{}}>Paginia de produto padrão</div>
            <button onClick={() => checkout.setOpen(true)}>open checkout</button>
        </DefaultLayout >
    )
}

export default ProductPageDefault;