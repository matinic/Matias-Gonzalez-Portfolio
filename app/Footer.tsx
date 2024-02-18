import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import github from "@/public/herramientas/github.webp"

export default function Footer() {
  return (
    <div className="h-24 bg-teal-700 p-4 w-full">
        <h1 className="text-center">
           © Matias Gonzalez 2024
        </h1>
        <Link className='flex bg-teal-800 justify-center' href="">
          <Image src={github} alt="github" className='h-6 w-auto mr-2'></Image>
          <p className="text-center">Repositorio del Porfolio</p>
        </Link>


    </div>
  )
}
