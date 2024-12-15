/* eslint-disable prettier/prettier */
/*
"use client";

import { FaLeaf } from "react-icons/fa"; // Importar el ícono de hoja de FontAwesome
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import OwnerDashboard from "~~/components/OwnerDashboard";
import UserDashboard from "~~/components/UserDashboard";

const Home = () => {
  const { address: connectedAddress, isConnected } = useAccount();
  const [isOwner, setIsOwner] = useState(false);

  // Detectar si el usuario conectado es el propietario del contrato
  const { data: ownerAddress, isLoading: isOwnerLoading, error } = useScaffoldReadContract({
    contractName: "NativePlantTokens",
    functionName: "owner",
  });
  
  useEffect(() => {
    console.log("isConnected:", isConnected);
    console.log("connectedAddress:", connectedAddress);
    console.log("ownerAddress:", ownerAddress);
    console.log("isOwnerLoading:", isOwnerLoading);
    console.log("Error:", error); // Imprime cualquier error que ocurra
    if (isConnected && connectedAddress && ownerAddress) {
      setIsOwner(connectedAddress.toLowerCase() === ownerAddress.toLowerCase());
    } else {
      setIsOwner(false);
    }
  }, [isConnected, connectedAddress, ownerAddress, isOwnerLoading, error]);

  if (!isConnected) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Native ~ PlanTokens</h1>
       <h3 className="text-1xl font-bold mb-4">by NativePlantchain ~ <span><FaLeaf/></span></h3>
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
import { useContractRead } from "wagmi";
import OwnerDashboard from "~~/components/OwnerDashboard";
import UserDashboard from "~~/components/UserDashboard";

const Home = () => {
  const { address: connectedAddress, isConnected } = useAccount();
  const [isOwner, setIsOwner] = useState(false);

  // Prueba temporal usando useContractRead
  const { data: ownerAddress, isLoading, error } = useContractRead({
    address: "0xe2a45bBDda2902eA330e45467a1b3030747d0afc", // Dirección del contrato
    abi: [
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          { "internalType": "address", "name": "", "type": "address" }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    functionName: "owner",
  });

  console.log("Owner Address:", ownerAddress);
  console.log("Error:", error);

  useEffect(() => {
    if (isConnected && connectedAddress && ownerAddress) {
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

  if (isLoading) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Cargando...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Error al obtener el owner</h1>
        <p>{error.message}</p>
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
