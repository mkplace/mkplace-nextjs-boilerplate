import { Image, Text } from "@mkplace/ui";

export default function () {
    return (
        <footer className="flex pb-4 flex-col text-xs px-20 text-white items-center w-full bg-black">

            <Image tailwindClass="w-40 h-auto my-20 relative" src="{logo}" alt="logo" />

            <div className="flex w-full justify-between">
                <div className="flex flex-col">
                    <Text tailwindClass="font-bold mb-2" label="SOBRE A MKPLACE" />
                    <a className="my-2" href="#">Sobre a House of Gamers</a>
                    <a className="my-2" href="#">Política do site</a>
                    <a className="my-2" href="#">Política de privacidade</a>
                    <a className="my-2" href="#">Troca e devoluções</a>
                </div>

                <div className="flex flex-col">
                    <Text tailwindClass="font-bold mb-2" label="CONTATO" />
                    <a className="my-2" href="#">Sobre a House of Gamers</a>
                    <a className="my-2" href="#">Política do site</a>
                    <a className="my-2" href="#">Política de privacidade</a>
                    <a className="my-2" href="#">Troca e devoluções</a>
                </div>

                <div className="flex flex-col">
                    <Text tailwindClass="font-bold mb-2" label="SOBRE A MKPLACE" />
                    <a className="my-2" href="#">Sobre a House of Gamers</a>
                    <a className="my-2" href="#">Política do site</a>
                    <a className="my-2" href="#">Política de privacidade</a>
                    <a className="my-2" href="#">Troca e devoluções</a>
                </div>

                <div className="flex flex-col">
                    <Text tailwindClass="font-bold mb-2" label="SOBRE A MKPLACE" />
                    <a className="my-2" href="#">Sobre a House of Gamers</a>
                    <a className="my-2" href="#">Política do site</a>
                    <a className="my-2" href="#">Política de privacidade</a>
                    <a className="my-2" href="#">Troca e devoluções</a>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <Text tailwindClass="font-bold mb-4" label="SOBRE A MKPLACE" />
                        <div className="flex justify-between">
                            <img className="mr-2 text-xs" src="{facebook}" alt="facebook" />
                            <img className="mx-2" src="{twitter}" alt="twitter" />
                            <img className="mx-2" src="{insta}" alt="insta" />
                            <img className="ml-2" src="{youtube}" alt="youtube" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-8">
                        <Text tailwindClass="font-bold mb-4" label="SOBRE A MKPLACE" />
                        <img className="mr-2" src="{payments}" alt="payments" />
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between items-center mt-16">
                <Text
                    tailwindClass="w-2/4"
                    label="Gamers, Inc. e qualquer logotipo associado são marcas comerciais, marcas de serviço e/ou marcas registradas da HOUSE OF GAMERS."
                />
                <div>
                    <a className="mr-2" href="#">Termos de uso</a>
                    <a className="mx-2" href="#">Política de entrega</a>
                    <a className="ml-2" href="#">Atendimento</a>
                </div>
            </div>
        </footer>
    )
}