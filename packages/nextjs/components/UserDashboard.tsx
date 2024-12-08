/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";

const UserDashboard = ({ userAddress }: { userAddress: string }) => {
  const ecoRegions = [
    {
      name: "Pampeana",
      species: [
        { name: "Calden", img: "/images/calden.jpg" },
        { name: "Algarrobo", img: "/images/algarrobo.jpg" },
        { name: "Chañar", img: "/images/chanar.jpg" },
      ],
    },
    {
      name: "Delta e Islas del Paraná",
      species: [
        { name: "Sauce", img: "/images/sauce.jpg" },
        { name: "Ceibo", img: "/images/ceibo.jpg" },
        { name: "Aliso de río", img: "/images/alisoderio.jpg" },
        { name: "Coronillo", img: "/images/coronillo.jpg" },
      ],
    },
    {
      name: "Espinal",
      species: [
        { name: "Algarrobo negro", img: "/images/algarrobo_negro.jpg" },
        { name: "Algarrobo blanco", img: "/images/algarrobo_blanco.jpg" },
        { name: "Chañar", img: "/images/chanar.jpg" },
        { name: "Tala", img: "/images/tala.jpg" },
        { name: "Palmera caranday", img: "/images/palmera_caranday.jpg" },
        { name: "Espinillo", img: "/images/espinillo.jpg" },
        { name: "Quebracho blanco", img: "/images/quebracho_blanco.jpg" },
        { name: "Tusca", img: "/images/tusca.jpg" },
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
          Especies a plantar según tu eco-región. Podrás reclamar <strong>NativePlanTokens</strong> una vez que plantes y envíes los datos de alguna de estas especies.
        </p>
      </div>
      <div className="mt-6 w-full max-w-5xl">
        {ecoRegions.map(region => (
          <div key={region.name} className="mb-8">
            <h2 className="text-xl font-bold mb-4">{region.name}</h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-100">Imagen</th>
                  <th className="border border-gray-300 p-2 bg-gray-100">Especie</th>
                </tr>
              </thead>
              <tbody>
                {region.species.map(species => (
                  <tr key={species.name}>
                    <td className="border border-gray-300 p-2 text-center">
                      <div className="relative w-20 h-20 mx-auto">
                        <Image
                          src={species.img}
                          alt={species.name}
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>
                    </td>
                    <td className="border border-gray-300 p-2 text-center">{species.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;

