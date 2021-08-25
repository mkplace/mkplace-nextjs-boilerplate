import React from "react";

import Head from 'next/head'

import DefaultLayout from "../components/DefaultLayout";

import { Card, Image, Text, useCard, Currency, Tag, Price, Button } from "@mkplace/ui"

const TesteCard = () => {
    const ImageCard = () => {
        const cardContex = useCard();

        return (
            <>
                <Image
                    src="http://lorempixel.com/320/400/nightlife"
                    backSrc="http://lorempixel.com/320/400/sports"
                    tailwindClass="group relative"
                >
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        tailwindClass={`
              absolute left-1/2 -translate-x-1/2 w-fullyrar bottom-0 transform transition duration-300 bg-red-500 py-1 px-2
              ${cardContex.isHover ? 'opacity-1 -translate-y-7' : 'opacity-0 translate-y-0'}
            `}
                    >
                        Testando Botao
                    </Button>
                </Image>
            </>
        )
    }

    return (
        <Card
            url={'https://tailwindcss.com/'}
            target='_blank'
            tailwindClass="flex flex-col w-max text-sm"
        >
            <Card tailwindClass="flex border relative w-full">
                <ImageCard />
            </Card>
            <Tag
                label="PRODUCT TAG"
                tailwindClass="bg-yellow-300 text-xs py-1 px-2 my-3"
            />
            <div className="flex flex-row w-full items-center justify-between">
                <Text label="Camisetas" tailwindClass="uppercase text-xs" />
                <Price
                    tailwindClass="font-semibold"
                    currency={Currency.BRL}
                    value={290}
                />
            </div>
            <Text label="Oficial Jersey 2021 - Black" tailwindClass="text-sm mt-0.5 font-semibold" />
            <Text label="Bolinhas aqui" tailwindClass="text-sm mt-5" />
        </Card>
    )
}



const HomePage = () => {
    return (
        <DefaultLayout>
            <Head>
                <title>House of gamers - Início</title>
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <Text label="Produtos em destaque" tailwindClass="text-2xl mb-4" />
                <div className="flex gap-2 mb-4">
                    <div><TesteCard /></div>
                    <div><TesteCard /></div>
                    <div><TesteCard /></div>
                    <div><TesteCard /></div>
                </div>
            </div>
        </DefaultLayout >
    )
}

export default HomePage;