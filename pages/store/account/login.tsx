import HomePage from "../.."

import React, { useLayoutEffect } from "react";

import { useAccount } from "@mkplace/react";

const AccountLoginPage = () => {

    const account = useAccount()

    useLayoutEffect(() => account.setScreen("login"), [])

    return (
        <>
            <HomePage></HomePage>
        </>
    )
}

export default AccountLoginPage;