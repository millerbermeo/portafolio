
import {Js, Tailwind, Sass, Node, PHP, Laravel, Database} from "@react-symbols/icons"

function Tecnologias() {
  return (
    <>
        <div className="flex justify-center items-center flex-col sm:pl-0 md:pl-32 text-2xl">
            <div className=""><p><span className="text-red-400">const </span>Cliente= [</p> 
    
                <div className="flex gap-2 items-center"><strong>Frotend:</strong> <img src="html-5.png" className="w-6" alt="" /> <img src="css-3.png" className="w-6"/> <Js className="w-9"/></div>
            <div className="flex gap-2 justify-center items-center">Tecnologias: <img src="reactt.png" className="w-6" alt="" /> <Tailwind className="w-9"/> <Sass className="w-9"/> <img src="boot.png" className="w-6" alt="" /></div>
                ]
            </div>

            <div className="ml-12"><p><span className="text-red-400">const</span> Servidor = [</p>
                <div className="flex gap-2 items-center"><strong>Backend:</strong> <PHP className="w-9"/> <Node className="w-9"/></div>
            <div className="flex gap-2 justify-center items-center">Framework:<Laravel className="w-9"/></div>
                ]
            </div>
            <p className="mt-2 flex gap-2 justify-center items-center">const Database = "MySQL" <Database className="w-9"/></p>
           
        </div>
    </>
  )
}

export default Tecnologias
