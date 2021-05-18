import HomePage from "../.."

import React, { useLayoutEffect } from "react";

import { useAccount } from "@mkplace/react";

const AccountSignupPage = () => {

    const account = useAccount()

    useLayoutEffect(() => account.setScreen("signup"), [])

    return (
        <>
            <HomePage></HomePage>
        </>
    )
}

export default AccountSignupPage;