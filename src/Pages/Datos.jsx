import React from 'react';
import { Link } from 'react-router-dom';

import Mapa from '../assets/images/mapa-tec.png';
import Clima from '../assets/images/clima-tec.png';
import Pronosticos from '../assets/images/pronostico.png';
import Grafica from '../assets/images/grafica.png';

function Main() {
    return (
      <main className="flex-1 p-4">
        <div className='flex items-center justify-center mb-10'>
          <div className='w-80'>
            <img src={Mapa} alt="" className=''/>
          </div>
          <img src={Clima} alt="" className='w-96 ml-24'/>
        </div>
        <div className='flex flex-col    items-center justify-center mb-10 '>
        <img src={Pronosticos} alt="" className='h-72'/>
        </div>
        <div className='flex items-center justify-center mb-10'>
        <img src={Grafica} alt="" className='h-72'/>
        </div>
      </main>

    );
  }
  
  export default Main;