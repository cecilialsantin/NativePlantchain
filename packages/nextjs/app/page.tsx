/* eslint-disable prettier/prettier */
"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import OwnerDashboard from "~~/components/OwnerDashboard";
import UserDashboard from "~~/components/UserDashboard";

const Home = () => {
  const { address: connectedAddress, isConnected } = useAccount();
  const [isOwner, setIsOwner] = useState(false);

  // Usar el hook scaffold para obtener el propietario del contrato
  const { data: ownerAddress, isLoading: isOwnerLoading } = useScaffoldReadContract({
    contractName: "NativePlantTokens", // Nombre del contrato en deployedContracts.ts
    functionName: "owner", // Nombre de la función en el ABI del contrato
  });

  // Detectar si el usuario conectado es el propietario del contrato
  useEffect(() => {
    if (isConnected && connectedAddress && ownerAddress) {
      setIsOwner(connectedAddress.toLowerCase() === ownerAddress.toLowerCase());
    }
  }, [isConnected, connectedAddress, ownerAddress]);

  if (!isConnected) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Native ~ PlanTokens</h1>
        <p className="text-lg mb-4">Conecta tu wallet para continuar.</p>
        {/* El botón de conexión lo maneja RainbowKit */}
      </div>
    );
  }

  if (isOwnerLoading) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center flex-grow pt-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Native ~ PlanTokens</h1>
      {isOwner ? (
        <OwnerDashboard ownerAddress={ownerAddress || ""} />
      ) : (
        <UserDashboard userAddress={connectedAddress || ""} />
      )}
    </div>
  );
};

export default Home;
