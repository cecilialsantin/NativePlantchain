/* eslint-disable prettier/prettier */
// no dirige al ownerdashboard cuando se conecta el owner
/*
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
      console.log("Connected address:", connectedAddress);
    console.log("Owner address:", ownerAddress);
      setIsOwner(connectedAddress.toLowerCase() === ownerAddress.toLowerCase());
    }
  }, [isConnected, connectedAddress, ownerAddress]);

  if (!isConnected) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Native ~ PlanTokens</h1>
        <h4 className="text-1xl font-bold mb-4">by NativePlantchain ~ EcoRoots</h4>
        <p className="text-lg mb-4">Conecta tu wallet para continuar...</p>
      
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

export default Home;*/

/* eslint-disable prettier/prettier */

"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import OwnerDashboard from "~~/components/OwnerDashboard";
import UserDashboard from "~~/components/UserDashboard";

const Home = () => {
  const { address: connectedAddress, isConnected } = useAccount();
  
  // Usar `null` para diferenciar entre "estado de carga" y "saber si es owner o no"
  const [isOwner, setIsOwner] = useState<boolean | null>(null);

  // Usar el hook scaffold para obtener el propietario del contrato
  const { data: ownerAddress, isLoading: isOwnerLoading } = useScaffoldReadContract({
    contractName: "NativePlantTokens", // Nombre del contrato en deployedContracts.ts
    functionName: "owner", // Nombre de la función en el ABI del contrato
  });

  /**
   * 🕒 1. Detectar si el usuario conectado es el propietario del contrato.
   * - Se asegura de que la lógica no se ejecute mientras `isOwnerLoading` sea true.
   * - Se verifica si `connectedAddress` y `ownerAddress` están listas.
   */
  useEffect(() => {
    if (!isOwnerLoading && isConnected && connectedAddress && ownerAddress) {
      console.log("Connected address:", connectedAddress);
      console.log("Owner address:", ownerAddress);
      // Usar toLowerCase para evitar problemas de mayúsculas/minúsculas
      const isOwnerCheck = connectedAddress.toLowerCase() === ownerAddress.toLowerCase();
      setIsOwner(isOwnerCheck);
    }
  }, [isConnected, connectedAddress, ownerAddress, isOwnerLoading]);

  /**
   * 🕒 2. Estado de carga inicial
   * - Mientras no se haya detectado si la cuenta es owner o no, mostramos "Cargando..."
   */
  if (!isConnected) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Native ~ PlanTokens</h1>
        <h4 className="text-1xl font-bold mb-4">by NativePlantchain ~ EcoRoots</h4>
        <p className="text-lg mb-4">Conecta tu wallet para continuar...</p>
      </div>
    );
  }

  if (isOwnerLoading || isOwner === null) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Cargando...</h1>
      </div>
    );
  }

  /**
   * 🕒 3. Mostrar el Dashboard correcto
   * - Si la cuenta conectada es la del owner, se muestra el OwnerDashboard.
   * - Si no es el owner, se muestra el UserDashboard.
   */
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

