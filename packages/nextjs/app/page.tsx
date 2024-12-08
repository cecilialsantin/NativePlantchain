/* eslint-disable prettier/prettier */
"use client";

import { useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import UserDashboard from "~~/components/UserDashboard";
import OwnerDashboard from "~~/components/OwnerDashboard";

const Home = () => {
  const { address, isConnected } = useAccount();

  
  const { disconnect } = useDisconnect();

  const [isOwner, setIsOwner] = useState(false);
  const ownerAddress = "0xOwnerAddress"; // Cambia esto por la dirección real del propietario

  // Detectar si el usuario conectado es el propietario
  useEffect(() => {
    if (isConnected && address) {
      setIsOwner(address === ownerAddress);
    }
  }, [isConnected, address]);

  if (!isConnected) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Native ~ PlanTokens</h1>
        <p className="text-lg mb-4">Conecta tu wallet para continuar.</p>
      
        {/* El botón de conexión lo maneja RainbowKit */}
      </div>
    );
  }

  // Mostrar dashboard correspondiente
  return (
    <div className="flex flex-col items-center flex-grow pt-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Native ~ PlanTokens</h1>
      <p>
        Conectado como: <strong>{address}</strong>{" "}
        <button onClick={() => disconnect()} className="btn btn-error btn-sm ml-2">
          Desconectar
        </button>
      </p>
      {isOwner ? (
        <OwnerDashboard />
      ) : (
        <UserDashboard userAddress={address || ""} />
      )}
    </div>    
  );
};

export default Home;
