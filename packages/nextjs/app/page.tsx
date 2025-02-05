/* eslint-disable prettier/prettier */
/*
"use client";

import { FaLeaf } from "react-icons/fa"; // Importar el ícono de hoja de FontAwesome
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useTargetNetwork } from "~~/hooks/scaffold-eth";
import OwnerDashboard from "~~/components/OwnerDashboard";
import UserDashboard from "~~/components/UserDashboard";


const Home = () => {
  const { address: userAddress, isConnected } = useAccount();
  const [isOwner, setIsOwner] = useState(false);
  const { targetNetwork } = useTargetNetwork();

  // Detectar si el usuario conectado es el propietario del contrato
  const { data: ownerAddress, isLoading: isOwnerLoading, error } = useScaffoldReadContract({
    contractName: "NativePlantTokens",
    functionName: "owner",
  });

  
  useEffect(() => {
    console.log("isConnected:", isConnected);
    console.log("connectedAddress:", userAddress);
    console.log("ownerAddress:", ownerAddress);
    console.log("isOwnerLoading:", isOwnerLoading);
    console.log("Target Network:", targetNetwork);
 
    if (!isOwnerLoading && isConnected && userAddress && ownerAddress) {
      setIsOwner(userAddress.toLowerCase() === ownerAddress.toLowerCase());
    } else {
      setIsOwner(false);
    }
  }, [userAddress, ownerAddress, isOwnerLoading, isConnected, error, targetNetwork]);

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
        <UserDashboard userAddress={userAddress || ""} />
      )}
    </div>
  );
};

export default Home;*/

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

"use client";

import { FaLeaf } from "react-icons/fa"; // Importar el ícono de hoja de FontAwesome
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldEventHistory, useTargetNetwork } from "~~/hooks/scaffold-eth";
import OwnerDashboard from "~~/components/OwnerDashboard";
import UserDashboard from "~~/components/UserDashboard";

const Home = () => {
  const { address: userAddress, isConnected } = useAccount();
  const [isOwner, setIsOwner] = useState(false);
  const [ownerAddress, setOwnerAddress] = useState<string | null>(null);
  const { targetNetwork } = useTargetNetwork();

  // Capturar el evento OwnershipTransferred desde el bloque 0 hasta el último bloque
  const { data: eventHistory = [], isLoading: isEventLoading, error: eventError } = useScaffoldEventHistory({
    contractName: 'NativePlantTokens',
    eventName: 'OwnershipTransferred',
    fromBlock: BigInt(0), // Desde el bloque 0 (despliegue)
  });

  // Efecto para extraer el owner inicial desde el primer evento OwnershipTransferred
  useEffect(() => {
    if (!isEventLoading && eventHistory.length > 0) {
      const firstEvent = eventHistory[0]; // Tomamos el PRIMER evento OwnershipTransferred
      setOwnerAddress(firstEvent.args.newOwner || null);
      console.log('Owner obtenido desde el evento OwnershipTransferred:', firstEvent.args.newOwner);
    } else if (!isEventLoading && eventHistory.length === 0) {
      console.warn("No se encontraron eventos de OwnershipTransferred");
    }
  }, [eventHistory, isEventLoading]);

  // Efecto para verificar si el usuario conectado es el owner
  useEffect(() => {
    console.log("isConnected:", isConnected);
    console.log("connectedAddress:", userAddress);
    console.log("ownerAddress:", ownerAddress);
    console.log("isEventLoading:", isEventLoading);
    console.log("Target Network:", targetNetwork);
 
    if (!isEventLoading && isConnected && userAddress && ownerAddress) {
      setIsOwner(userAddress.toLowerCase() === ownerAddress.toLowerCase());
    } else {
      setIsOwner(false);
    }
  }, [userAddress, ownerAddress, isEventLoading, isConnected, eventError, targetNetwork]);

  if (!isConnected) {
    return (
      <div className="flex items-center flex-col flex-grow pt-20">
      <h1 className="text-4xl font-bold mb-4">Native ~ PlanTokens</h1>
      <h3 className="text-1xl font-bold mb-4 flex items-center">
        by NativePlantchain ~ <span className="ml-2"><FaLeaf /></span>
      </h3>
      <p className="text-lg mb-4">Conecta tu wallet para continuar...</p>
    </div>
    );
  }

  if (isEventLoading) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center flex-grow pt-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Native ~ PlanTokens</h1>
      <h3 className="text-1xl font-bold mb-4">by NativePlantchain ~ <span><FaLeaf/></span></h3>
      
      {isOwner ? (
        <OwnerDashboard ownerAddress={ownerAddress || ""} />
      ) : (
        <UserDashboard userAddress={userAddress || ""} />
      )}
    </div>
  );
};

export default Home;
