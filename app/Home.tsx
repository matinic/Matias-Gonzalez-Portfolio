"use client"
import Image from "next/image"
// import perfil from "@/public/perfil.png"
import css from "@/public/front/css.png"
import html from "@/public/front/html.png"
import javascript from "@/public/front/javascript.png"
import next from "@/public/front/next.png"
import react from "@/public/front/react.png"
import redux from "@/public/front/redux.png"
import tailwind from "@/public/front/tailwind.png"
import reactquery from "@/public/front/reactquery.svg"
import reactnative from "@/public/front/reactnative.png"
import node from "@/public/back/node.webp"
import express from "@/public/back/express.webp"
import postgresql from "@/public/back/postgresql.webp"
import sequelize from "@/public/back/sequelize.webp"
import sql from "@/public/back/sql.webp"
import firebase from "@/public/back/firebase.webp"
// import git from "@/public/herramientas/git.webp"
import github from "@/public/herramientas/github.webp"
// import jest from "@/public/herramientas/jest.webp"
// import restapi from "@/public/herramientas/restapi.webp"
// import scrum from "@/public/herramientas/scrum.webp"
import proyecto1 from "@/public/proyecto1.webp"
import pokemon from "@/public/pokemon.jpg"
import certificate from "@/public/certificate_64.png"
import Link from "next/link"
import Email from "@/app/Email"
import linkedin from "@/public/contacto/linkedin.png"
import discord from "@/public/contacto/discord.png"
import gmail from "@/public/contacto/gmail.svg"


// import CV from "@/public/Matias_Gonzalez_CV.pdf"

export default function Home(){
    return(
        <div className="bg-teal-200 pt-12 px-6 pb-16">
                
                <h1 className="text-teal-600 text-5xl font-extrabold mt-8 text-center">MATIAS GONZALEZ</h1>
                <h1 className="text-teal-600 italic text-2xl text-center">FULLSTACK DEVELOPER</h1>
               
                    <button id="descargarcv" className="bg-teal-600 text-teal-100 mt-4 mb-8 flex items-center cursor-pointer rounded-lg transition-all hover:text-teal-500 shadow-xl border-2 border-teal-100 mx-auto">
                        <a href="Matias_Gonzalez_CV.pdf" download="Matias_Gonzalez_CV.pdf" className="m-2 rounded-lg">
                            DESCARGAR CV
                        </a>
                    </button>

                <div className="bg-teal-600 p-4 rounded-xl mb-8 shadow-xl">
                    <h1 className="mb-2 text-lg  font-bold text-center text-teal-100" id="sobremi">Sobre mí</h1>
                    <p className="text-center text-teal-100">
                      Soy un profesional dedicado al ámbito web con conocimientos tanto para backend y frontend, apasionado por transformar los problemas en soluciones y lo complejo en accesible.
                    </p>
                </div>
                <h1 className="text-teal-600 mb-4 text-2xl font-bold text-center" id="conocimientos">CONOCIMIENTOS</h1>

                        <div className="bg-teal-600 p-6 rounded-xl mb-4 shadow-xl">
                            <h1 className="mb-4 text-center italic font-bold pb-2 text-teal-100">Front-End</h1>
                            <div className="grid grid-cols-3 gap-4 items-center justify-center">
                                <Image className="h-14 w-auto m-auto " src={javascript} alt="css" ></Image>
                                <Image className="h-14 w-auto m-auto " src={html} alt="html"></Image>
                                <Image className="h-14 w-auto m-auto " src={css} alt="css"></Image>
                                <Image className="h-14 w-auto m-auto " src={react} alt="react" ></Image>
                                <Image className="h-14 w-auto m-auto " src={reactnative} alt="reactnative"></Image>
                                <Image className="h-14 w-auto m-auto " src={redux} alt="redux"></Image>
                                <Image className="h-14 w-auto m-auto " src={next} alt="next"></Image>
                                <Image className="h-14 w-auto m-auto " src={tailwind} alt="tailwind"></Image>
                                <Image className="h-14 w-auto m-auto " src={reactquery} alt="html"></Image>
                            </div>
                        </div>
                        <div className="bg-teal-600 p-6 rounded-xl mb-4 shadow-xl">
                            <h1 className="mb-4 text-center italic font-bold pb-2 text-teal-100">Back-End</h1>
                            <div className="grid grid-cols-3 gap-4 items-center justify-center">
                                <Image className="h-14 w-auto m-auto " src={node} alt="node" ></Image>
                                <Image className="h-14 w-auto m-auto " src={express} alt="express"></Image>
                                <Image className="h-14 w-auto m-auto " src={postgresql} alt="postgresql"></Image>
                                <Image className="h-14 w-auto m-auto " src={sequelize} alt="sequelize"></Image>
                                <Image className="h-14 w-auto m-auto " src={sql} alt="sql" ></Image>
                                <Image className="h-14 w-auto m-auto " src={firebase} alt="firebase"></Image>
                            </div>
                        </div>
                        <div className="bg-teal-600 p-2 rounded-xl mb-8 flex items-center justify-around shadow-xl">
                            <h1 className="text-teal-100 text-center italic font-bold">ENGLISH LEVEL C1</h1>
                            <Image src={certificate} alt="certificate" className="h-[120px] w-auto"></Image>
                        </div>
                 
                        <h1 className="text-teal-600 mb-4 text-2xl font-bold text-center" id="proyectos">PROYECTOS</h1>

                        <div className="bg-teal-600 p-4 rounded-xl mb-4 shadow-xl text-teal-100">
                            <h1 className="text-center my-2 text-2xl">Mighty Monkey</h1>
                            <Image src={proyecto1} alt="proyecto1" className="rounded-lg cursor"></Image>
                            <p className="text-sm my-2 italic" >
                                Plataforma de gestión de club deportivo
                            </p>
                            <div className="h-12 flex justify-around py-2 my-2">
                                <Image className="w-auto" src={javascript} alt="javascript"></Image>
                                <Image className="w-auto" src={next} alt="next"></Image>
                                <Image className="w-auto" src={react} alt="react"></Image>
                                <Image className="w-auto" src={tailwind} alt="tailwind"></Image>
                                <Image className="w-auto" src={postgresql} alt="postgresql"></Image>
                                <Image className="w-auto" src={sequelize} alt="sequelize"></Image>
                                <Image className="w-auto" src={firebase} alt="firebase"></Image>
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
                         </div>

                        <div id="proyectos" className="bg-teal-600 p-4 rounded-xl mb-4 shadow-xl text-teal-100">
                            <h1 className="text-center my-2 text-2xl">Pokemon App</h1>
                            <Image src={pokemon} alt="proyecto1" className="rounded-lg cursor"></Image>
                            <p className="text-sm my-2 italic" >
                                Aplicacion para buscar y crear Pokemons
                            </p>
                            <div className="h-12 flex justify-around py-2 my-2">
                                <Image className="w-auto" src={javascript} alt="javascript"></Image>
                                <Image className="w-auto" src={react} alt="react"></Image>
                                <Image className="w-auto" src={sequelize} alt="sequelize"></Image>
                                <Image className="w-auto" src={postgresql} alt="postgresql"></Image>
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
                         </div>

                        

                        <h1 className="text-teal-600 mb-4 text-2xl font-bold text-center mt-8" id="contacto">CONTACTO</h1>

                        <div className="flex bg-teal-600 mb-4 rounded-lg p-4 justify-around items-center">
                          
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

                        </div>

                        <Email></Email>

                        

        </div>
    )
}