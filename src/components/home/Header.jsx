import React, { useState } from "react";
import { useFetch } from "../../useFetch";

function Header() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Estado para controlar la visibilidad de los datos
  const [showData, setShowData] = useState(false);

  // Maneja el clic del botón
  const handleButtonClick = () => {
    setShowData(!showData); // Alterna entre mostrar y ocultar los datos
  };

  return (
    <div className="bg-olive-green h-screen">
      <h1 className="text-gray-300 text-4xl pt-32 pb-16 text-center">
        Consumo API de datos publica JSONPlaceholder
      </h1>
      <div className="text-gray-300 text-center rounded-md">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          onClick={handleButtonClick}
        >
          {showData ? "Ocultar Datos" : "Mostrar Datos"}
        </button>
        {showData && ( // Solo muestra los datos si showData es true
          <ul className="mt-4">
            {error && <li> Error: {error}</li>}
            {loading && <li>Cargando...</li>}
            {data?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
