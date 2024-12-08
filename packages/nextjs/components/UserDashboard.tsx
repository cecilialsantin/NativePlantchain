/* eslint-disable prettier/prettier */
/*
"use client";

import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const UserDashboard = ({ userAddress }: { userAddress: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speciesName, setSpeciesName] = useState("");
  const [region, setRegion] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  // Hook para llamar a `submitPlant` en el contrato
  const { writeContractAsync: submitPlant, isMining } = useScaffoldWriteContract("NativePlantTokens");

const handleSubmit = async () => {
    if (!speciesName || !region || !photoURL) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    try {
      await submitPlant({
        functionName: "submitPlant", // Agrega el nombre de la función
        args: [speciesName, region, photoURL],
      });
      alert("Planta registrada exitosamente en el contrato.");
      setSpeciesName("");
      setRegion("");
      setPhotoURL("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al registrar la planta:", error);
      alert("Error al registrar la planta.");
    }
  };

  const ecoRegions = [
    {
      name: "Pampeana",
      species: ["Calden", "Algarrobo", "Chañar"],
    },
    {
      name: "Delta e Islas del Paraná",
      species: ["Sauce", "Ceibo", "Aliso de río", "Coronillo"],
    },
    {
      name: "Espinal",
      species: [
        "Algarrobo negro",
        "Algarrobo blanco",
        "Chañar",
        "Tala",
        "Palmera caranday",
        "Espinillo",
        "Quebracho blanco",
        "Tusca",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Plantadores</h1>
      <p className="mb-4">
        Dirección conectada: <strong>{userAddress}</strong>
      </p>
      <div className="text-center bg-green-100 p-4 rounded-md shadow-md w-full max-w-3xl">
        <p className="text-lg font-semibold text-green-800">
          Especies a plantar según tu eco-región. Podrás reclamar <strong>NativePlanTokens</strong> una vez que plantes alguna de las especies listadas y envíes los datos.
        </p>
      </div>
      <div className="mt-4 w-full max-w-3xl text-center">
        <a
          href="https://www.ambiente.gba.gob.ar/pdfs/002_Catalogo_Nativas_ABRIL2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-green-900 hover:text-pink-800 font-semibold no-underline bg-green-200 px-4 py-2 rounded-md shadow-md hover:bg-pink-300"
        >
          <FaLeaf /> Ver guía de especies nativas de la eco-región
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {ecoRegions.map(region => (
          <div
            key={region.name}
            className="bg-green-50 bg-opacity-70 p-3 rounded-md shadow-sm text-center"
          >
            <h2 className="text-lg font-semibold mb-1 text-green-800">
              {region.name}
            </h2>
            <div className="text-sm text-gray-800 leading-tight">
              {region.species.map(species => (
                <p key={species} className="mb-1">
                  {species}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-6 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
        onClick={() => setIsModalOpen(true)}
      >
        Presentar Plantación
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Presentar Plantación</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="speciesName" className="block text-sm font-medium text-gray-700">
                  Nombre de la especie
                </label>
                <input
                  type="text"
                  id="speciesName"
                  value={speciesName}
                  onChange={e => setSpeciesName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Región
                </label>
                <input
                  type="text"
                  id="region"
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                  URL de la foto
                </label>
                <input
                  type="text"
                  id="photoURL"
                  value={photoURL}
                  onChange={e => setPhotoURL(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
                  disabled={isMining}
                >
                  {isMining ? "Presentando..." : "Presentar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;*/


//Dashboard con pinata

/* eslint-disable prettier/prettier */

/*"use client";

import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
//import { uploadImageToPinata } from "~~/services/web3/pinataService";

const UserDashboard = ({ userAddress }: { userAddress: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speciesName, setSpeciesName] = useState("");
  const [region, setRegion] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Hook para llamar a `submitPlant` en el contrato
  const { writeContractAsync: submitPlant, isMining } = useScaffoldWriteContract("NativePlantTokens");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!speciesName || !region) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    try {
      // Usar una URL fija para la prueba
      const fixedPhotoURL = "1";
  
      console.log("Calling submitPlant with args:", [speciesName, region, fixedPhotoURL]);
      const tx = await submitPlant({
        functionName: "submitPlant",
        args: [speciesName, region, fixedPhotoURL],
      });
      console.log("Transaction hash:", tx);
      alert("Planta registrada exitosamente en el contrato.");
      setSpeciesName("");
      setRegion("");
      setPhoto(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al presentar la planta:", error);
      alert("Error al presentar la planta. Por favor, inténtalo nuevamente.");
    }
  };
  
  

  const ecoRegions = [
    {
      name: "Pampeana",
      species: ["Calden", "Algarrobo", "Chañar"],
    },
    {
      name: "Delta e Islas del Paraná",
      species: ["Sauce", "Ceibo", "Aliso de río", "Coronillo"],
    },
    {
      name: "Espinal",
      species: [
        "Algarrobo negro",
        "Algarrobo blanco",
        "Chañar",
        "Tala",
        "Palmera caranday",
        "Espinillo",
        "Quebracho blanco",
        "Tusca",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Plantadores</h1>
      <p className="mb-4">
        Dirección conectada: <strong>{userAddress}</strong>
      </p>
      <div className="text-center bg-green-100 p-4 rounded-md shadow-md w-full max-w-3xl">
        <p className="text-lg font-semibold text-green-800">
          Especies a plantar según tu eco-región. Podrás reclamar <strong>NativePlanTokens</strong> una vez que plantes alguna de las especies listadas y envíes los datos.
        </p>
      </div>
      <div className="mt-4 w-full max-w-3xl text-center">
        <a
          href="https://www.ambiente.gba.gob.ar/pdfs/002_Catalogo_Nativas_ABRIL2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-green-900 hover:text-pink-800 font-semibold no-underline bg-green-200 px-4 py-2 rounded-md shadow-md hover:bg-pink-300"
        >
          <FaLeaf /> Ver guía de especies nativas de la eco-región
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {ecoRegions.map(region => (
          <div
            key={region.name}
            className="bg-green-50 bg-opacity-70 p-3 rounded-md shadow-sm text-center"
          >
            <h2 className="text-lg font-semibold mb-1 text-green-800">
              {region.name}
            </h2>
            <div className="text-sm text-gray-800 leading-tight">
              {region.species.map(species => (
                <p key={species} className="mb-1">
                  {species}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-6 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
        onClick={() => setIsModalOpen(true)}
      >
        Presentar Plantación
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Presentar Plantación</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="speciesName" className="block text-sm font-medium text-gray-700">
                  Nombre de la especie
                </label>
                <input
                  type="text"
                  id="speciesName"
                  value={speciesName}
                  onChange={e => setSpeciesName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Región
                </label>
                <input
                  type="text"
                  id="region"
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                  Foto de la planta
                </label>
                <input
                  type="file"
                  id="photo"
                  onChange={e => setPhoto(e.target.files ? e.target.files[0] : null)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
                  disabled={isUploading || isMining}
                >
                  {isUploading ? "Subiendo..." : isMining ? "Presentando..." : "Presentar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;*/
/*
"use client";

import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const UserDashboard = ({ userAddress }: { userAddress: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speciesName, setSpeciesName] = useState("");
  const [region, setRegion] = useState("");
  const [isMining, setIsMining] = useState(false);

  // Hook para llamar a `submitPlant` en el contrato
  const { writeContractAsync: submitPlant } = useScaffoldWriteContract("NativePlantTokens");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!speciesName || !region) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      setIsMining(true);
      // Usar una URL fija para la foto
      const fixedPhotoURL = "https://example.com/photo.jpg";

      console.log("Llamando a submitPlant con:", [speciesName, region, fixedPhotoURL]);
      const tx = await submitPlant({
        functionName: "submitPlant",
        args: [speciesName, region, fixedPhotoURL],
      });
      console.log("Transaction hash:", tx);
      alert("Planta registrada exitosamente en el contrato.");
      setSpeciesName("");
      setRegion("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al presentar la planta:", error);
      alert("Error al presentar la planta. Por favor, inténtalo nuevamente.");
    } finally {
      setIsMining(false);
    }
  };

  const ecoRegions = [
    {
      name: "Pampeana",
      species: ["Calden", "Algarrobo", "Chañar"],
    },
    {
      name: "Delta e Islas del Paraná",
      species: ["Sauce", "Ceibo", "Aliso de río", "Coronillo"],
    },
    {
      name: "Espinal",
      species: [
        "Algarrobo negro",
        "Algarrobo blanco",
        "Chañar",
        "Tala",
        "Palmera caranday",
        "Espinillo",
        "Quebracho blanco",
        "Tusca",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Plantadores</h1>
      <p className="mb-4">
        Dirección conectada: <strong>{userAddress}</strong>
      </p>
      <div className="text-center bg-green-100 p-4 rounded-md shadow-md w-full max-w-3xl">
        <p className="text-lg font-semibold text-green-800">
          Especies a plantar según tu eco-región. Podrás reclamar <strong>NativePlanTokens</strong> una vez que plantes alguna de las especies listadas y envíes los datos.
        </p>
      </div>
      <div className="mt-4 w-full max-w-3xl text-center">
        <a
          href="https://www.ambiente.gba.gob.ar/pdfs/002_Catalogo_Nativas_ABRIL2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-green-900 hover:text-pink-800 font-semibold no-underline bg-green-200 px-4 py-2 rounded-md shadow-md hover:bg-pink-300"
        >
          <FaLeaf /> Ver guía de especies nativas de la eco-región
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {ecoRegions.map((region) => (
          <div
            key={region.name}
            className="bg-green-50 bg-opacity-70 p-3 rounded-md shadow-sm text-center"
          >
            <h2 className="text-lg font-semibold mb-1 text-green-800">{region.name}</h2>
            <div className="text-sm text-gray-800 leading-tight">
              {region.species.map((species) => (
                <p key={species} className="mb-1">
                  {species}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-6 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
        onClick={() => setIsModalOpen(true)}
      >
        Presentar Plantación
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Presentar Plantación</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="speciesName" className="block text-sm font-medium text-gray-700">
                  Nombre de la especie
                </label>
                <input
                  type="text"
                  id="speciesName"
                  value={speciesName}
                  onChange={(e) => setSpeciesName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Región
                </label>
                <input
                  type="text"
                  id="region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
                  disabled={isMining}
                >
                  {isMining ? "Presentando..." : "Presentar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;*/

//Sin eventos

/* eslint-disable prettier/prettier */
/*"use client";

import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const UserDashboard = ({ userAddress }: { userAddress: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speciesName, setSpeciesName] = useState("");
  const [region, setRegion] = useState("");
  const [photoURL, setPhotoURL] = useState("1"); // Default placeholder
  const [isMining, setIsMining] = useState(false);

  // Hook para llamar a `submitPlant` en el contrato
  const { writeContractAsync: submitPlant } = useScaffoldWriteContract("NativePlantTokens");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!speciesName || !region || !photoURL) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      setIsMining(true);
      // Llamar a la función del contrato
      await submitPlant({
        functionName: "submitPlant",
        args: [speciesName, region, photoURL],
      });

      alert("Planta registrada exitosamente en el contrato.");
      setSpeciesName("");
      setRegion("");
      setPhotoURL("1");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al presentar la planta:", error);
      alert("Error al presentar la planta. Por favor, inténtalo nuevamente.");
    } finally {
      setIsMining(false);
    }
  };

  const ecoRegions = [
    {
      name: "Pampeana",
      species: ["Calden", "Algarrobo", "Chañar"],
    },
    {
      name: "Delta e Islas del Paraná",
      species: ["Sauce", "Ceibo", "Aliso de río", "Coronillo"],
    },
    {
      name: "Espinal",
      species: [
        "Algarrobo negro",
        "Algarrobo blanco",
        "Chañar",
        "Tala",
        "Palmera caranday",
        "Espinillo",
        "Quebracho blanco",
        "Tusca",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Plantadores</h1>
      <p className="mb-4">
        Dirección conectada: <strong>{userAddress}</strong>
      </p>
      <div className="text-center bg-green-100 p-4 rounded-md shadow-md w-full max-w-3xl">
        <p className="text-lg font-semibold text-green-800">
          Especies a plantar según tu eco-región. Podrás reclamar <strong>NativePlanTokens</strong> una vez que plantes alguna de las especies listadas y envíes los datos.
        </p>
      </div>
      <div className="mt-4 w-full max-w-3xl text-center">
        <a
          href="https://www.ambiente.gba.gob.ar/pdfs/002_Catalogo_Nativas_ABRIL2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-green-900 hover:text-pink-800 font-semibold no-underline bg-green-200 px-4 py-2 rounded-md shadow-md hover:bg-pink-300"
        >
          <FaLeaf /> Ver guía de especies nativas de la eco-región
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {ecoRegions.map((region) => (
          <div
            key={region.name}
            className="bg-green-50 bg-opacity-70 p-3 rounded-md shadow-sm text-center"
          >
            <h2 className="text-lg font-semibold mb-1 text-green-800">{region.name}</h2>
            <div className="text-sm text-gray-800 leading-tight">
              {region.species.map((species) => (
                <p key={species} className="mb-1">
                  {species}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-6 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
        onClick={() => setIsModalOpen(true)}
      >
        Presentar Plantación
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Presentar Plantación</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="speciesName" className="block text-sm font-medium text-gray-700">
                  Nombre de la especie
                </label>
                <input
                  type="text"
                  id="speciesName"
                  value={speciesName}
                  onChange={(e) => setSpeciesName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Región
                </label>
                <input
                  type="text"
                  id="region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                  URL de la foto
                </label>
                <input
                  type="text"
                  id="photoURL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
                  disabled={isMining}
                >
                  {isMining ? "Presentando..." : "Presentar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;*/ 

/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useScaffoldWriteContract, useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const UserDashboard = ({ userAddress }: { userAddress: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speciesName, setSpeciesName] = useState("");
  const [region, setRegion] = useState("");
  const [photoURL, setPhotoURL] = useState("1"); // Default placeholder
  const [isMining, setIsMining] = useState(false);
  const [tokenId, setTokenId] = useState(""); // State for tokenId to claim

  // Hook para llamar a `submitPlant` en el contrato
  const { writeContractAsync: submitPlant } = useScaffoldWriteContract("NativePlantTokens");
  const { writeContractAsync: claimToken } = useScaffoldWriteContract("NativePlantTokens");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!speciesName || !region || !photoURL) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      setIsMining(true);
      await submitPlant({
        functionName: "submitPlant",
        args: [speciesName, region, photoURL],
      });

      alert("Planta registrada exitosamente en el contrato.");
      setSpeciesName("");
      setRegion("");
      setPhotoURL("1");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al presentar la planta:", error);
      alert("Error al presentar la planta. Por favor, inténtalo nuevamente.");
    } finally {
      setIsMining(false);
    }
  };

  const handleClaim = async () => {
    if (!tokenId) {
      alert("Por favor ingresa un Token ID válido.");
      return;
    }
  
    try {
      setIsMining(true);
      await claimToken({
        functionName: "claimToken",
        args: [BigInt(tokenId)], // Convierte tokenId a BigInt
      });
  
      alert("Token reclamado exitosamente.");
      setTokenId("");
    } catch (error: any) {
      console.error("Error al reclamar el token:", error);
  
      // Inspecciona el mensaje o detalles disponibles en el objeto de error
      const errorMessage = error?.data?.message || error?.message || "Error desconocido";
      if (errorMessage.includes("You don't own this token")) {
        alert("Este token aún no te pertenece. Asegúrate de que el propietario haya registrado la planta.");
      } else if (errorMessage.includes("Token already claimed")) {
        alert("Este token ya ha sido reclamado.");
      } else {
        alert(`Error al reclamar el token: ${errorMessage}`);
      }
    } finally {
      setIsMining(false);
    }
  };
  

  // Captura los eventos `PlantSubmitted`
  const { data: submittedPlantEvents, isLoading: isLoadingEvents } = useScaffoldEventHistory({
    contractName: "NativePlantTokens",
    eventName: "PlantSubmitted",
    fromBlock: BigInt(0),
    enabled: !!userAddress, // Activa solo si hay una dirección de usuario
  });
  
  // Filtrar eventos por el usuario conectado
  const userSubmittedEvents = submittedPlantEvents?.flat().filter(event => event.args?.user === userAddress) || [];


  const ecoRegions = [
    {
      name: "Pampeana",
      species: ["Calden", "Algarrobo", "Chañar"],
    },
    {
      name: "Delta e Islas del Paraná",
      species: ["Sauce", "Ceibo", "Aliso de río", "Coronillo"],
    },
    {
      name: "Espinal",
      species: [
        "Algarrobo negro",
        "Algarrobo blanco",
        "Chañar",
        "Tala",
        "Palmera caranday",
        "Espinillo",
        "Quebracho blanco",
        "Tusca",
      ],
    },
  ];

  

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Plantadores</h1>
      <p className="mb-4">
        Dirección conectada: <strong>{userAddress}</strong>
      </p>
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
        {/* Columna izquierda */}
        <div className="lg:w-1/2">
          <div className="text-center bg-green-100 p-4 rounded-md shadow-md w-full">
            <p className="text-lg font-semibold text-green-800">
              Especies a plantar según tu eco-región. Podrás reclamar <strong>NativePlanTokens</strong> una vez que plantes alguna de las especies listadas y envíes los datos.
            </p>
          </div>
          <div className="mt-4 w-full text-center">
            <a
              href="https://www.ambiente.gba.gob.ar/pdfs/002_Catalogo_Nativas_ABRIL2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-green-900 hover:text-pink-800 font-semibold no-underline bg-green-200 px-4 py-2 rounded-md shadow-md hover:bg-pink-300"
            >
              <FaLeaf /> Ver guía de especies nativas de la eco-región
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {ecoRegions.map((region) => (
              <div key={region.name} className="bg-green-50 bg-opacity-70 p-3 rounded-md shadow-sm text-center">
                <h2 className="text-lg font-semibold mb-1 text-green-800">{region.name}</h2>
                <div className="text-sm text-gray-800 leading-tight">
                  {region.species.map((species) => (
                    <p key={species} className="mb-1">{species}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha */}
        <div className="lg:w-1/2 bg-pink-100 bg-opacity-80 p-6 rounded-lg shadow-lg">
          <button
            className="mb-4 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
            onClick={() => setIsModalOpen(true)}
          >
            Presentar Plantación
          </button>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-8">
            <h2 className="text-lg font-bold mb-4">Tus plantas presentadas:</h2>
            {isLoadingEvents ? (
              <p>Cargando eventos...</p>
            ) : userSubmittedEvents.length > 0 ? (
              <ul className="list-disc list-inside bg-green-50 p-4 rounded-md shadow-md">
                {userSubmittedEvents.map((event, index) => (
                  <li key={index} className="text-gray-800">
                    <strong>ID:</strong> {event.args.submissionId?.toString() || "N/A"}, <strong>Especie:</strong> {event.args.speciesName || "N/A"}, <strong>Región:</strong> {event.args.region || "N/A"}, <strong>Timestamp:</strong> {event.args.timestamp ? new Date(Number(event.args.timestamp) * 1000).toLocaleString() : "N/A"}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No has presentado ninguna planta aún.</p>
            )}
          </div>

{/*
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6">
          <h2 className="text-lg font-bold mb-4">Tus Tokens</h2>
      {isLoading ? (
        <p>Cargando...</p>
      ) : userTokens.length > 0 ? (
        <ul>
          {userTokens.map((tokenId) => (
            <li key={tokenId}>Token ID: {tokenId}</li>
          ))}
        </ul>
      ) : (
        <p>No tienes tokens registrados.</p>
      )}
      <button
        onClick={handleFetchTokens}
        className="mt-4 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
      >
        Actualizar Tokens
      </button>
          </div>*/}


          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6">
              <h2 className="text-lg font-bold mb-4 text-green-700">Reclamar Token:</h2>
              <div className="mb-4">
                <label htmlFor="tokenId" className="block text-sm font-medium text-gray-700">
                  Token ID
                </label>
                <input
                  type="text"
                  id="tokenId"
                  value={tokenId}
                  onChange={(e) => setTokenId(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
                  placeholder="Ingresa el ID del token"
                />
              </div>
              <button
                onClick={handleClaim}
                className={`w-full px-4 py-2 text-white rounded-md ${
                  isMining ? "bg-gray-400 cursor-not-allowed" : "bg-green-700 hover:bg-green-900"
                }`}
                disabled={isMining}
              >
                {isMining ? "Reclamando..." : "Reclamar Token"}
              </button>
            </div>

        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Presentar Plantación</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="speciesName" className="block text-sm font-medium text-gray-700">
                  Nombre de la especie
                </label>
                <input
                  type="text"
                  id="speciesName"
                  value={speciesName}
                  onChange={(e) => setSpeciesName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Región
                </label>
                <input
                  type="text"
                  id="region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                  URL de la foto
                </label>
                <input
                  type="text"
                  id="photoURL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
                  disabled={isMining}
                >
                  {isMining ? "Presentando..." : "Presentar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
