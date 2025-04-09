import Link from "next/link"
import Image  from "next"
export default function(){
    return(
        <>
            <h1
        className="text-teal-600 mb-4 text-2xl font-bold text-center mt-12"
        id="proyectos"
      >
        PROYECTOS
      </h1>
      <div className="grid sm:grid-cols-2 gap-4 w-full max-w-[768px] mx-auto">
        {/**Comienzo de los proyectos */}
        <div className="bg-teal-600 p-4 rounded-xl mb-4 shadow-xl text-teal-100">
          {/*Comienzo 1er proyecto */}
          <h1 className="text-center my-2 text-2xl">Mighty Monkey</h1>
          <div className="h-56 bg-red-500 rounded-lg bg-proyecto1 bg-cover bg-center"></div>
          <p className="text-sm my-2 italic">
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
            <Link
              href="https://github.com/ddrosado/MightyMonkeyPF"
              target="_blank"
              className=" my-4 bg-teal-700 flex rounded-lg justify-center items-center"
            >
              {/* <Image src={github} alt="github" className="h-6 w-auto"></Image> */}
              <h1 className="ml-1">Repositorio</h1>
            </Link>
            <Link
              href="https://mighty-monkey-pf.vercel.app/home"
              target="_blank"
              className="my-4 bg-teal-700 flex rounded-lg justify-center items-center"
            >
              <h1 className="my-4">Visitar</h1>
            </Link>
          </div>
        </div>
        {/*Fin 1er proyecto1*/}
        <div
          id="proyectos"
          className="bg-teal-600 p-4 rounded-xl mb-4 shadow-xl text-teal-100"
        >
          {/* Comienzo 2do proyecto */}
          <h1 className="text-center my-2 text-2xl">Pokemon App</h1>
          <div className="h-56 bg-red-500 rounded-lg bg-pokemon bg-cover bg-center"></div>
          <p className="text-sm my-2 italic">
            Aplicacion para buscar y crear Pokemons
          </p>
          <div className="h-12 flex justify-around py-2 my-2">
            <div className="w-8 h-8 bg-contain bg-javascript"></div>
            <div className="w-8 h-8 bg-contain bg-react"></div>
            <div className="w-8 h-8 bg-contain bg-sequelize"></div>
            <div className="w-8 h-8 bg-contain bg-postgresql"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="https://github.com/matinic/PokemonApp-front"
              target="_blank"
              className=" my-4 bg-teal-700 flex rounded-lg justify-center items-center"
            >
             
              <h1 className="ml-1">Repositorio</h1>
            </Link>
            <Link
              href="https://pi-pokemon-main-opal.vercel.app/home"
              target="_blank"
              className=" my-4 bg-teal-700 flex rounded-lg justify-center items-center"
            >
              <h1 className="my-4">Visitar</h1>
            </Link>
          </div>
        </div>
        {/*Fin 1er proyecto Pokemon*/}
      </div>
      {/*Fin de los proyectos*/}


        </>
    );
}
