import React from 'react'
import { Link } from "react-router";


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
        nombre: "Plaza Principal El Mante",
        clima: "42°",
        temp: "38°",
        uv: "Indice UV",
        nivel: "Muy Alto",
        imagen: "../Images/plaza_centro.jpg",
        link: "/Climate"
    },
    {
        nombre: "Parque Alameda",
        clima: "42°",
        temp: "38°",
        uv: "Indice UV",
        nivel: "Muy ALTO",
        imagen: "../Images/alameda.jpg",
        link: "/Climate"
    },
    {
        nombre: "Parque Canoas",
        clima: "42°",
        temp: "38°",
        uv: "Indice UV",
        nivel: "Muy ALTO",
        imagen: "../Images/canoas.jpg",
        link: "/Climate"
    },
    {
        nombre: "Estadio Zaragoza",
        clima: "42°",
        temp: "38°",
        uv: "Indice UV",
        nivel: "Muy ALTO",
        imagen: "../Images/estadio_zaragoza.jpg",
        link: "/Climate"
    },
    {
        nombre: "Tamul Linares",
        clima: "42°",
        temp: "38°",
        uv: "Indice UV",
        nivel: "Muy Alto",
        imagen: "../Images/tamul_linares.jpg",
        link: "/Climate"
    },
    {
        nombre: "Plaza Aaron",
        clima: "42°",
        temp: "38°",
        uv: "Indice UV",
        nivel: "Muy Alto",
        imagen: "../Images/plaza_aron.jpg",
        link: "/Climate"
    },
    {
        nombre: "Campo Santa Monica",
        clima: "42°",
        temp: "38°",
        uv: "Indice UV",
        nivel: "Muy Alto",
        imagen: "../Images/santa_monica.jpg",
        link: "/Climate"
    },
    {
        nombre: "Plaza General Pedro J.Mendez",
        clima: "42°",
        temp: "38°",
        uv: "Indice UV",
        nivel: "Muy Alto",
        imagen: "../Images/plaza_general.jpg",
        link: "/Climate"
    }
];


const List = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-yellow-300 to-orange-600 ">
            <h2 className="text-blue-800 text-2xl md:text-3xl font-bold mb-5 text-center">Zonas de tu Ciudad:</h2>

            {/* Contenedor de tarjetas con diseño responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-lg w-full mb-10">
                {list.map((lista, index) => (
                    <Link key={index} to={lista.link} className="flex flex-col items-center rounded-lg shadow-lg p-3 hover:scale-105 transition w-full border-[#616ca4] bg-white dark:bg-white relative z-10">
                        <img src={lista.imagen} alt={lista.nombre} className="w-full h-48 object-cover rounded-lg" />
                        <div style={{ fontWeight: '1500' }}>
                            <h3 className="text-[#000000] font-bond mt-2 text-center">{lista.nombre}</h3>
                        </div>
                        <p>
                            <span style={{ color: 'red', fontWeight: 'bold' }}>{lista.clima}</span>
                            <span style={{ color: 'black' }}> / {lista.temp}</span>
                        </p>
                        <p style={{ fontWeight: 'bold' }} className="text-black text-sm text-center">{lista.uv}</p>
                        <p style={{ fontWeight: 'bold' }} className="text-red-500 text-sm text-center">{lista.nivel}</p>
                    </Link>
                ))}
            </div>

            {/* Botón de "Mostrar Más" centrado y responsivo */}
            {/*<Link to="/list" className="mt-5 px-6 py-3 bg-[#0a00c5] text-white font-bold rounded-lg hover:bg-[#36791c] transition text-center w-full sm:w-auto">
                Mostrar Más
            </Link>*/}
        </div>
    )
}

export default List
