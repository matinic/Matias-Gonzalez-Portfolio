"use client"
import Image from "next/image"
// import git from "@/public/herramientas/git.webp"
import github from "@/public/herramientas/github.webp"
// import jest from "@/public/herramientas/jest.webp"
// import restapi from "@/public/herramientas/restapi.webp"
// import scrum from "@/public/herramientas/scrum.webp"
import certificate from "@/public/certificate_64.png"
import Link from "next/link"
import Email from "@/app/Email"
import linkedin from "@/public/contacto/linkedin.png"
import discord from "@/public/contacto/discord.png"
import gmail from "@/public/contacto/gmail.svg"

export default function Home(){

    return(
        <div className="bg-teal-200 pt-12 px-6 pb-16">

            <section className="flex flex-col items-center justify-center" id="sobremi"> {/*Comienzo sobre mi */}
                <h1 className="text-teal-600 text-5xl font-extrabold mt-8 text-center sm:text-[5rem] md:text-[9xl]">
                    MATIAS GONZALEZ
                </h1>
                <h1 className="text-teal-600 italic text-2xl text-center sm:text-4xl md:text-5xl">FULLSTACK DEVELOPER</h1>
               
                    <button id="descargarcv" className="bg-teal-600 text-teal-100 mt-4 mb-8 flex items-center cursor-pointer rounded-lg transition-all hover:text-teal-500 shadow-xl border-2 border-teal-100 mx-auto">
                        <a href="Matias_Gonzalez_CV.pdf" download="Matias_Gonzalez_CV.pdf" className="m-2 rounded-lg">
                            DESCARGAR CV
                        </a>
                    </button>

                <div className="bg-teal-600 p-4 rounded-xl mb-8 shadow-xl  w-full max-w-[768px] mx-auto">
                    <p className="text-center text-teal-100">
                      Soy un profesional dedicado al ámbito web con conocimientos tanto para backend y frontend, apasionado por transformar los problemas en soluciones y lo complejo en accesible.
                    </p>
                </div>
            </section>{/**Fin sobremi*/}
            <section className="flex flex-col items-center justify-center">{/**Cominezo proyectos + titulo*/}
                <h1 className="text-teal-600 mb-4 text-2xl font-bold text-center mt-12" id="conocimientos">CONOCIMIENTOS</h1>
                    <div className="grid sm:grid-cols-2 sm:gap-x-4 w-full max-w-[768px] mx-auto ">{/**Comienzo de contenedor de conocimientos */}
                        <div className="bg-teal-600 p-6 rounded-xl mb-4 shadow-xl ">
                            <h1 className="mb-4 text-center italic font-bold pb-2 text-teal-100">Front-End</h1>
                            <div className="grid grid-cols-3 gap-4 items-center justify-center">
                                <div className="icon bg-javascript"></div>
                                <div className="icon bg-html"></div>
                                <div className="icon bg-css"></div>
                                <div className="icon bg-react"></div>
                                <div className="icon bg-reactnative"></div>
                                <div className="icon bg-redux"></div>
                                <div className="icon bg-next"></div>
                                <div className="icon bg-tailwind"></div>
                                <div className="icon bg-reactquery"></div>
                            </div>
                        </div>
                        <div className="bg-teal-600 p-6 rounded-xl mb-4 shadow-xl">
                            <h1 className="mb-4 text-center italic font-bold pb-2 text-teal-100">Back-End</h1>
                            <div className="grid grid-cols-3 gap-4 items-center justify-center">
                                <div className="icon bg-node"></div>
                                <div className="icon bg-express"></div>
                                <div className="icon bg-postgresql"></div>
                                <div className="icon bg-sequelize"></div>
                                <div className="icon bg-sql"></div>
                                <div className="icon bg-firebase"></div>
                            </div>
                        </div>
                        <div className="bg-teal-600 p-2 rounded-xl mb-8 flex items-center justify-around shadow-xl">
                            <h1 className="text-teal-100 text-center italic font-bold">ENGLISH LEVEL C1</h1>
                            <Image src={certificate} alt="certificate" className="h-[120px] w-auto"></Image>
                        </div>
                    </div>{/**Fin de contenedor de conocimientos */}
                </section>{/**Fin proyectos + titulo*/}
                    <h1 className="text-teal-600 mb-4 text-2xl font-bold text-center mt-12" id="proyectos">PROYECTOS</h1>
                    <div className="grid sm:grid-cols-2 gap-4 w-full max-w-[768px] mx-auto">{/**Comienzo de los proyectos */}
                        <div className="bg-teal-600 p-4 rounded-xl mb-4 shadow-xl text-teal-100">{/*Comienzo 1er proyecto */}
                            <h1 className="text-center my-2 text-2xl">Mighty Monkey</h1>
                            <div className="h-56 bg-red-500 rounded-lg bg-proyecto1 bg-cover bg-center"></div>
                            <p className="text-sm my-2 italic" >
                                Plataforma de gestión de club deportivo
                            </p>
                            <div className="h-12 flex justify-around py-2 my-2">
                                <div className="w-8 h-8 bg-contain bg-javascript"></div>
                                <div className="w-8 h-8 bg-contain bg-next"></div>
                                <div className="w-8 h-8 bg-contain bg-react"></div>
                                <div className="w-8 h-8 bg-contain bg-tailwind"></div>
                                <div className="w-8 h-8 bg-contain bg-postgresql"></div>
                                <div className="w-8 h-8 bg-contain bg-sequelize"></div>
                                <div className="w-8 h-8 bg-contain bg-firebase"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Link href='https://github.com/ddrosado/MightyMonkeyPF' target="_blank" className=" my-4 bg-teal-700 flex rounded-lg justify-center items-center">
                                    <Image src={github} alt="github" className="h-6 w-auto"></Image>
                                    <h1 className="ml-1">Repositorio</h1>
                                </Link>
                                <Link href='https://mighty-monkey-pf.vercel.app/home' target="_blank" className="my-4 bg-teal-700 flex rounded-lg justify-center items-center">
                                    <h1 className="my-4">Visitar</h1>
                                </Link>
                            </div>
                         </div>{/*Fin 1er proyecto1*/}
                        <div id="proyectos" className="bg-teal-600 p-4 rounded-xl mb-4 shadow-xl text-teal-100">{/* Comienzo 2do proyecto */}
                            <h1 className="text-center my-2 text-2xl">Pokemon App</h1>
                            <div className="h-56 bg-red-500 rounded-lg bg-pokemon bg-cover bg-center"></div>
                            <p className="text-sm my-2 italic" >
                                Aplicacion para buscar y crear Pokemons
                            </p>
                            <div className="h-12 flex justify-around py-2 my-2">
                                <div className="w-8 h-8 bg-contain bg-javascript"></div>
                                <div className="w-8 h-8 bg-contain bg-react"></div>
                                <div className="w-8 h-8 bg-contain bg-sequelize"></div>
                                <div className="w-8 h-8 bg-contain bg-postgresql"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Link href='https://github.com/matinic/PokemonApp-front' target="_blank" className=" my-4 bg-teal-700 flex rounded-lg justify-center items-center">
                                    <Image src={github} alt="github" className="h-6 w-auto"></Image>
                                    <h1 className="ml-1">Repositorio</h1>
                                </Link>
                                <Link href='https://pi-pokemon-main-opal.vercel.app/home' target="_blank" className=" my-4 bg-teal-700 flex rounded-lg justify-center items-center">
                                    <h1 className="my-4">Visitar</h1>
                                </Link>
                            </div>
                         </div>{/*Fin 1er proyecto Pokemon*/}
                    </div>{/*Fin de los proyectos*/}
            

    
                    
                    <h1 className="text-teal-600 mb-4 text-2xl font-bold text-center mt-12" id="contacto">CONTACTO</h1>

                    <div className="flex bg-teal-600 mb-4 rounded-lg p-4 justify-around items-center w-full max-w-[640px] mx-auto ">
                        
                        <Link href="https://github.com/matinic" target="_blank">
                            <Image src={github} alt="github" className="h-12 w-auto"></Image>
                        </Link>
        
                        <Link href="https://www.linkedin.com/in/matias-gonzalez-91816b272/" target="_blank">
                            <Image src={linkedin} alt="linkedin"  className="h-12 w-auto"></Image>
                        </Link>

                        <Link href="https://www.discordapp.com/users/753898305024426015" target="_blank">
                            <Image src={discord} alt="discord"  className="h-12 w-auto"></Image>
                        </Link>

                        <Link href="mailto:matiasxzca3000@gmail.com" target="_blank">
                            <Image src={gmail} alt="discord"  className="h-10 w-auto"></Image>
                        </Link>

                    </div>{/**Fin links de contacto */}

                    <Email></Email>

        {/**Fin del componente */}
        </div>
    )
}