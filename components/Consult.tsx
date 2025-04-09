import React, { FormEvent, InputHTMLAttributes, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Email() {
  const form = useRef<HTMLFormElement>(null!);
  interface form {
    user_name?: string;
    from_email?: string;
    message?: string;
  }

  let errorMessage = useRef<form>({});

  let dataForm = useRef<form>({});

  const [errorState, setErrorState] = useState<form>({});

  const verification: () => void = () => {
    const msgText = {
      user: "Escriba su nombre",
      email: "Escriba su correo",
      message: "Escriba su mensaje",
    };
    errorMessage.current = {};
    //Se verifica por cada campo
    if (!dataForm.current.user_name)
      errorMessage.current = {
        ...errorMessage.current,
        user_name: msgText.user,
      };
    if (!dataForm.current.from_email)
      errorMessage.current = {
        ...errorMessage.current,
        from_email: msgText.email,
      };
    if (!dataForm.current.message)
      errorMessage.current = {
        ...errorMessage.current,
        message: msgText.message,
      };
  };

  const validation = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name: string = e.currentTarget.getAttribute("name") || "";
    const value: string = e.currentTarget.value;
    dataForm.current = {
      ...dataForm.current,
      [name]: value,
    };
    verification();
    setErrorState(errorMessage.current);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    verification();
    const isError: boolean = !Object.keys(errorMessage.current).length;
    setErrorState(errorMessage.current);
    if (isError) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_KEY,
          },
        )
        .then(
          () => {
            alert("Mensaje enviado");
          },
          (error) => {
            alert("Algo salio mal" + "\n" + error);
          },
        );
    }
  };

  return (
    <>
      <h1 className="text-teal-600 mb-4 text-2xl font-bold text-center mt-12">
        HAGA SU CONSULTA
      </h1>
      <form
        onSubmit={sendEmail}
        className="flex flex-col bg-teal-600 p-6 rounded-lg shadow-xl  max-w-[640px] mx-auto"
        ref={form}
      >
        <label>Nombre</label>
        <input
          onChange={validation}
          type="text"
          name="user_name"
          className="h-8 rounded-lg bg-teal-200 text-teal-900 p-2 "
        />
        <p className="italic text-sm text-teal-100">{errorState?.user_name}</p>
        <label className="mt-4">Email</label>
        <input
          onChange={validation}
          type="email"
          name="from_email"
          className="h-8 rounded-lg bg-teal-200 text-teal-900 p-2"
        />
        <p className="italic text-sm text-teal-100">{errorState?.from_email}</p>
        <label className="mt-4">Mensaje</label>
        <textarea
          onChange={validation}
          name="message"
          className="h-20 rounded-lg bg-teal-200  text-teal-900 p-2"
        />
        <p className="italic text-sm text-teal-100">{errorState?.message}</p>

        <button
          type="submit"
          className="bg-teal-800 px-6 py-2.5 cursor w-max h-max font-bold rounded-lg mt-4"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
