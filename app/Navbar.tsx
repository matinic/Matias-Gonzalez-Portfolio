"use client"
import * as React from "react"
import Link from "next/link"

export default function Navbar(){

    const menuButtons: Array<Array<string>> = [['Descargar CV','descargarcv'],['Sobre Mi','sobremi'],['Conocimientos','conocimientos'],['Proyectos','proyectos'],['Contacto','contacto']]

    const input = React.useRef<HTMLInputElement>(null)

    const navOptions = (event:React.MouseEvent<HTMLElement>)=>{
      const {key} = event.currentTarget.dataset
      if(key){
        const elementToScrollTo = document.getElementById(key) 
        const scroll = elementToScrollTo ? elementToScrollTo.offsetTop - 56 : undefined
        window.scroll({
          top: scroll,
          behavior: "smooth"
        })
      } 
    }
    React.useEffect(()=>{
      window.addEventListener('resize', (e:Event)=>{
        const target = e.target as Window
        if(target.innerWidth > 640 && input.current?.checked === true) {
          input.current.click()
        }
      })
    },[])
  

    return (
      <div className="z-50" >
        <input type="checkbox" className="peer hidden" id="showmenu" ref={input}/>
        <label className="w-12 h-12 bg-menu-open fixed bg-[length:2.5rem_2.5rem] bg-no-repeat bg-center z-40  peer-checked:bg-menu-close sm:hidden" htmlFor="showmenu">
        </label>
        <div className="h-12 transition-all peer-checked:h-1/2 w-full fixed bg-teal-700/50 backdrop-blur overflow-hidden sm:h-12">
              <div className="grid h-full">
                <div className="h-12 sm:hidden"></div>
                <ul className="transition-all sm:visible sm:translate-y-0 sm:h-14 sm:mt-0 sm:bg-transparent sm:flex sm:items-center ">
                  { 
                    menuButtons.map(
                      (button,index) =>
                        <Link href={`#${button[1]}`} scroll={false} key={index} replace>
                          <li
                            className="flex justify-center py-2 text-white font-bold text-base sm:px-4 scroll-smooth whitespace-nowrap"
                            onClick={navOptions}
                            data-key={button[1]}
                          >
                            <p className="">{button[0].toUpperCase()}</p>
                          </li>
                        </Link>                          
                    )
                  }
                </ul>
              </div>
          </div>
        
      </div>

    )
  }
  