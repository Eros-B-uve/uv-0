import React from 'react';
import { Link } from "react-router";
import { useNavigate } from 'react-router-dom';


const Inicio = () => {
  const navigate = useNavigate();
  const list = [
    {
      nombre: "Instiuto Tecnologico Superior del Mante",
      clima: "42°",
      temp: "38°",
      uv: "Indice UV",
      nivel: "Muy Alto",
      imagen: "../Images/tec.jpg",
      link: "/datos"
    },
    {
      nombre: "Instiuto Tecnologico Superior del Mante",
      clima: "42°",
      temp: "38°",
      uv: "Indice UV",
      nivel: "Muy Alto",
      imagen: "../Images/tec.jpg",
      link: ""
    },
    {
      nombre: "Instiuto Tecnologico Superior del Mante",
      clima: "42°",
      temp: "38°",
      uv: "Indice UV",
      nivel: "Muy Alto",
      imagen: "../Images/tec.jpg",
      link: ""
    }
  ];


  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-yellow-300 to-orange-600">

        <h1 className="text-8xl font-bold text-black mb-4">
          UV-0
        </h1>

        <p className="text-3xl text-black italic mb-6">
          El sol no avisa, nosotros sí.
        </p>


        <p className="text-lg text-black text-center max-w-lg px-3 mb-10 ">
          Protege tu piel todos los días. Conoce los niveles de radiación UV en tiempo real y toma decisiones inteligentes para tu salud.
        </p>

        <p className='text-lag text-white'>-</p>
        <button
          onClick={() => navigate('/list')}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition">
          Conocer niveles UV ahora
        </button>
        <p className='text-lag text-orange-400'>.</p>

        <div
          className="flex flex-col justify-center items-center h-96 w-5/6  p-4 bg-gradient-to-b bg-white rounded-lg shadow-lg mb-10">
          <p className='text-lg text-black max-w-lg px-3'>Lugares con mayor indice de rayos ultra violeta</p>
          <p className='text-lag text-white'>-</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-lg w-full">
            {list.map((inisio, index) => (
              <Link key={index} to={inisio.link} className="flex flex-col items-center rounded-lg shadow-lg p-3 hover:scale-105 transition w-full border-[#616ca4] bg-white">
                <img src={inisio.imagen} alt={inisio.nombre} className="w-full h-48 object-cover rounded-lg" />

                <div style={{ fontWeight: '1500' }}>
                  <h3 className="text-[#000000] font-bond mt-2 text-center">{inisio.nombre}</h3>
                </div>
                <p>
                  <span style={{ color: 'red', fontWeight: 'bold' }}>{inisio.clima}</span>
                  <span style={{ color: 'black' }}> / {inisio.temp}</span>
                </p>
                <p style={{ fontWeight: 'bold' }} className="text-black text-sm text-center">{inisio.uv}</p>
                <p style={{ fontWeight: 'bold' }} className="text-red-500 text-sm text-center">{inisio.nivel}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>

    </>
  )
}

export default Inicio
