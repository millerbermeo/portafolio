import Navbar from "./components/Navbar"
import Tecnologias from "./components/Tecnologias"
import Card from "./components/Card"
import { Github, Text } from "@react-symbols/icons"
import FormContact from "./components/FormContact"
import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS
import Aos from 'aos'; // Importa la librería AOS
import { useEffect } from "react";
import Float from "./components/Float"




function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <section className="w-full flex sm:flex-col lg:flex-row items-center gap:10 flex-wrap ">
        <div className="md:w-[50%] sm:h-0 md:h-screen pt-40">
          <div className="pl-10 mb-5">
            <div data-aos="fade-right"
              data-aos-duration="1500" className="pb-10">Hello Welcome</div>

            <div data-aos="fade-up"
              data-aos-duration="1500" className="font-bold text-slate-800 text-5xl mb-10">
              I'm Miller Efren <br></br>
              Full Stack Developer
            </div>
            <div data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200" className="font-bold text-white mt-6 flex gap-2 ">
              <a className="border bg-red-400 p-2 pl-3 pr-3 rounded-md">Hire Me</a>
              <a className="text-black border-b-2 mt-2">See Portflio</a>
            </div>

            <div data-aos="fade-left"
              data-aos-duration="1500" className="mt-14 sm:lg-0 lg:pl-14 pr-8">
              <p className="sm:text-md sm:text-center lg:text-left">Soy un desarrollador de software con habilidades sólidas en HTML, CSS, JavaScript, React, PHP, Laravel y MySQL. He participado en diversos proyectos colaborativos, aportando mis conocimientos y destrezas. Mi enfoque se centra en la creación de soluciones interactivas y funcionales.</p>
            </div>
            <div className="flex gap-3 mt-6">
              <span>Follow me:</span>
              <a target="_blank" href="https://www.linkedin.com/in/miller-rivera/"><img src="in.png" className="w-9" alt="" /></a>
              <a target="_blank" href="https://github.com/millerbermeo"><Github className="w-8" /></a>
              <Text className="w-8" />
            </div>
          </div>
        </div>
        <div className="sm:w-[100%] md:w-[50%] sm:h-0 lg:h-screen sm:pt-10 lg:pt-24 flex justify-center flex-col items-center">

          <img src="modelo.jpg" className="max-w-[450px] w-full h-auto border rounded-[50%]" alt="" />
          <span className="mt-2 font-bold flex justify-center items-center"> Descargar CV </span>
<Float/>
        </div>
      </section>
      <article className="w-full flex justify-center items-start sm:mt-10 lg:mt-32 pt-10 gap-8 flex-wrap">
        <Tecnologias />
        <img data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1300" src="324shots_so.png" className="w-[420px] shadow-md" alt="" />

      </article>

      <div className="w-full mt-28  pl-32 pr-28">
        <h2 className="text-center text-slate-800 text-4xl font-bold mb-10">Trabajos Destacados</h2>
        <div className="w-full place-content-center grid gap-8 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card img="tiendamascota.jpg" title="Tienda De Mascotas" text="Software integral para la gestión eficiente de una tienda de mascotas." />
          <Card img="segundo.gif" title="Gestion de documentos" text="Plataforma avanzada para la gestión electrónica de documentos y gestion de informacion." />
          <Card img="dashboard.png" title="Dashboard" text="Panel de control intuitivo que visualiza datos clave y métricas relevantes." />
          <Card img="ropa.png" title="Tienda de Ropa" text="Plataforma de comercio electrónico venta de ropa y accesorios con carrito de compras." />
        </div>
      </div>

      <section className="w-full grid place-content-center mt-10 mb-20">
        <h2 className="text-2xl font-bold text-center text-slate-600 mb-20">Mis habilidades como programador</h2>
        <div className="w-full lg:flex gap-5 justify-center">
          <div className="w-[50%] flex flex-col gap-5">
            <div data-aos="fade-right"
              data-aos-duration="1200" className="w-96 bg-red-400 text-white rounded-md p-2"><p><span className="font-bold">Resolución de Problemas:</span> Capacidad para analizar problemas complejos y desarrollar soluciones efectivas y eficientes.</p></div>
            <div data-aos="fade-right"
              data-aos-duration="1200" className="w-96 sm:mt-0 lg:mt-[100px] bg-red-400 text-white rounded-md p-2"><p><span className="font-bold">Control de Versiones:</span> Experiencia en el uso de sistemas de control de versiones como Git para colaborar y rastrear cambios en el código.</p></div>
            <div data-aos="fade-right"
              data-aos-duration="1200" className="w-96 sm:mt-0 lg:mt-[100px] bg-red-400 text-white rounded-md p-2"><p><span className="font-bold">Trabajo en Equipo:</span> Capacidad para colaborar con otros desarrolladores, diseñadores y profesionales para lograr objetivos comunes.</p></div>
          </div>


          <div className="hidden lg:block w-2 h-[100%] bg-slate-600 rounded-md"></div>
          <div className="w-[50%] flex flex-col gap-5 mt-5">
            <div data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1300" className="w-96 sm:mt-0 lg:mt-[100px] bg-red-400 text-white rounded-md p-2"><p><span className="font-bold">Lógica y Algoritmos:</span> Comprender y aplicar algoritmos eficientes y estructuras de datos para resolver problemas y optimizar el rendimiento.</p></div>
            <div data-aos="fade-left"
              data-aos-duration="1200" className="w-96 sm:mt-0 lg:mt-[100px] bg-red-400 text-white rounded-md p-2"><p><span className="font-bold">Aprendizaje Continuo:</span> La programación es un campo en constante evolución. La disposición a aprender nuevas tecnologías y enfoques es esencial.</p></div>
            <div data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1300" className="w-96 sm:mt-0 lg:mt-[100px] bg-red-400 text-white rounded-md p-2"><p><span className="font-bold">Pruebas y Depuración:</span> Habilidad para probar y depurar código de manera efectiva para garantizar su funcionamiento correcto.</p></div>
          </div>
        </div>
      </section>

      <article id="contacto" className="mt-32">
        <FormContact />
      </article>


    </>
  )
}

export default Home