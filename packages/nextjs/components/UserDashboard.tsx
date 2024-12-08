/* eslint-disable prettier/prettier */
/*"use client";

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
"use client";

import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { uploadImageToPinata } from "~~/services/web3/pinataService"; // Importa el servicio de Pinata

const UserDashboard = ({ userAddress }: { userAddress: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speciesName, setSpeciesName] = useState("");
  const [region, setRegion] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Hook para llamar a `submitPlant` en el contrato
  const { writeContractAsync: submitPlant, isMining } = useScaffoldWriteContract("NativePlantTokens");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!speciesName || !region || !photoFile) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      setIsUploading(true);
      const photoURL = await uploadImageToPinata(photoFile); // Sube la imagen a Pinata
      setIsUploading(false);

      await submitPlant({
        functionName: "submitPlant",
        args: [speciesName, region, photoURL],
      });

      alert("Planta presentada exitosamente en el contrato.");
      setSpeciesName("");
      setRegion("");
      setPhotoFile(null);
      setIsModalOpen(false);
    } catch (error) {
      setIsUploading(false);
      console.error("Error al presentar la planta:", error);
      alert("Error al presentar la planta.");
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
                <label htmlFor="photoFile" className="block text-sm font-medium text-gray-700">
                  Foto
                </label>
                <input
                  type="file"
                  id="photoFile"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-green-700 file:text-white hover:file:bg-green-900"
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
                  disabled={isMining || isUploading}
                >
                  {isMining || isUploading ? "Presentando..." : "Presentar"}
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


