"use client"
import Image from "next/image"
import hamburguer from "@/public/align-justify-svgrepo-com.svg"
import close from "@/public/close-svgrepo-com.svg"
import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import download from "@/public/download.svg"


export default function Navbar(){

    const menuButtons: Array<Array<string>> = [['Descargar CV','descargarcv'],['Sobre Mi','sobremi'],['Conocimientos','conocimientos'],['Proyectos','proyectos'],['Contacto','contacto']]
    const [icon,setIcon] = useState<boolean>(false)
    
    const clickCheckbox = (e:React.MouseEvent<HTMLElement>)=>{
      const input: HTMLElement | null = document.getElementById("showmenu")
      input?.click()
      setIcon(false)
      const id:string = e.currentTarget.innerHTML.replace(" ","").toLowerCase()
      const elementToScrollTo:HTMLElement | null = document.getElementById(id)
      const scroll:number | undefined = elementToScrollTo ? elementToScrollTo.offsetTop - 56 : undefined
      window.scroll({
        top: scroll,
        behavior: "smooth"
      })
    }

    return (
      <div className="z-50">
        <input type="checkbox" className="peer hidden" defaultChecked={icon} id="showmenu"/>
        <div className="
            h-12
            transition-all
            peer-checked:h-1/2
            w-full
            fixed
            bg-teal-700/50
            backdrop-blur
            grid grid-cols-2
            overflow-hidden
            sm:h-12
          ">
              <label htmlFor="showmenu">
                <Image
                  src={icon ? close : hamburguer}
                  alt="Menu"
                  className="w-12 p-2 hover:scale-125 transition-transform sm:hidden"
                  onClick={()=>{setIcon(!icon)}}
                ></Image>
              </label>
     
             
              <ul className="
                  w-full
                  col-span-2
                  transition-all
                  peer-checked:bg-red-200
                  sm:visible
                  sm:translate-y-0
                  sm:h-14
                  sm:mt-0
                  sm:bg-transparent
                  sm:flex
                  sm:items-center
                ">
                { 
                    menuButtons.map(
                        (button,index) =>
                          <Link href={`#${button[1]}`} scroll={false} key={index}>
                            <li
                              onClick={clickCheckbox}
                              key={index}
                              className="
                                  flex
                                  justify-center
                                  py-2
                                  text-white
                                  font-bold
                                  text-sm
                                  border-white
                                  sm:border-b-0
                                  sm:px-4
                                  scroll-smooth
                                "
                              >
                              {button[0].toUpperCase()}
                            </li>
                          </Link>                          
                        )
                }
              </ul>
          </div>
        
      </div>

    )
  }
  