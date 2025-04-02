import { useState } from 'react';
import { Link } from 'react-router-dom';

function EmailSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('¡Ups! Necesitamos tu correo.');
      return;
    }
    setMessage(`¡Genial! ${email} está listo para el clima.`);
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] bg-gray-100">
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-yellow-300 via-orange-200 to-pink-300 rounded-xl shadow-lg transform hover:scale-105 transition mb-10">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-3 drop-shadow-md">
        ¡Enlaza tu correo!
      </h2>
      <p className="text-gray-700 text-lg font-medium mb-5 italic">
        En caso de querer recibir notificaciones sobre el estado del clima y los rayos UV en ciertas áreas, ¡ingresa tu correo!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          className="p-3 bg-white text-gray-800 rounded-lg border-2 border-yellow-400 focus:outline-none focus:ring-4 focus:ring-pink-500 shadow-inner"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all hover:shadow-xl"
        >
          ¡Regístrame!
        retroalimentación tras enviaralo
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center font-semibold ${
            message.includes('Genial') ? 'text-green-700' : 'text-red-600'
          } bg-white bg-opacity-80 p-2 rounded-lg`}
        >
          {message}
        </p>
      )}
      <Link to="/" className="text-gray-800 text-sm mt-4 block text-center hover:underline">
          Volver al inicio
        </Link>
    </div>
    </div>
  );
}

export default EmailSignup;