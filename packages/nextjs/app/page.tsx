/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import UserDashboard from "~~/components/UserDashboard";
import OwnerDashboard from "~~/components/OwnerDashboard";

const Home = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const [isOwner, setIsOwner] = useState(false);
  const ownerAddress = "0xOwnerAddress"; // Cambia esto por la dirección real del propietario

  const handleLogin = () => {
    if (address === ownerAddress) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-4xl font-bold mb-4">NativePlantchain</h1>
        <p className="text-lg mb-4">Conecta tu wallet para continuar.</p>
        <button
          onClick={handleLogin}
          className="btn btn-primary"
        >
          Conectar Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <h1 className="text-4xl font-bold mb-4">NativePlantchain</h1>
      <p>
        Conectado como: <strong>{address}</strong>{" "}
        <button onClick={() => disconnect()} className="btn btn-error btn-sm">
          Desconectar
        </button>
      </p>
      {isOwner ? <OwnerDashboard /> : <UserDashboard userAddress={address || ""} />}
    </div>
  );
};

export default Home;
