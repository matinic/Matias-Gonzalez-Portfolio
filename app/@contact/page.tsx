import Image from "next/image";
import github from "@/public/herramientas/github.webp";
import Link from "next/link";
import linkedin from "@/public/contacto/linkedin.png";
import discord from "@/public/contacto/discord.png";
import gmail from "@/public/contacto/gmail.svg";

export default function(){
    return(
        <>
        <h1
            className="text-teal-600 mb-4 text-2xl font-bold text-center mt-12"
            id="contacto"
        >
            CONTACTO
        </h1>

      <div>
        <Link href="https://github.com/matinic" target="_blank">
          <Image src={ github } alt="github" className="h-12 w-auto"></Image>
        </Link>

        <Link
          href="https://www.linkedin.com/in/matias-gonzalez-91816b272/"
          target="_blank"
        >
          <Image src={ linkedin } alt="linkedin" className="h-12 w-auto"></Image>
        </Link>

        <Link
          href="https://www.discordapp.com/users/753898305024426015"
          target="_blank"
        >
          <Image src={discord} alt="discord" className="h-12 w-auto"></Image>
        </Link>

        <Link href="mailto:matiasxzca3000@gmail.com" target="_blank">
          <Image src={gmail} alt="discord" className="h-10 w-auto"></Image>
        </Link>
      </div>
        </>
    );
}
