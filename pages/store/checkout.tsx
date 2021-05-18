import HomePage from ".."

import React, { useLayoutEffect } from "react";

import { useCheckout } from "@mkplace/react";

const CheckoutPage = () => {

    const checkout = useCheckout()

    useLayoutEffect(() => checkout.setOpen(true), [])

    return (
        <>
            <HomePage></HomePage>
        </>
    )
}

export default CheckoutPage;