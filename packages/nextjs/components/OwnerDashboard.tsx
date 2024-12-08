"use client";

import { useState } from "react";
import { useScaffoldEventHistory, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface OwnerDashboardProps {
  ownerAddress: string;
}

const OwnerDashboard: React.FC<OwnerDashboardProps> = ({ ownerAddress }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  // Captura todos los eventos `PlantSubmitted`
  const { data: submittedPlantEvents, isLoading: isLoadingEvents } = useScaffoldEventHistory({
    contractName: "NativePlantTokens",
    eventName: "PlantSubmitted",
    fromBlock: BigInt(0),
    enabled: true, // Activa la escucha de eventos
  });

  // Hook para registrar una planta
  const { writeContractAsync: registerPlant, isMining: isRegisteringToken } =
    useScaffoldWriteContract("NativePlantTokens");

  const handleRegister = async (submissionId: string) => {
    try {
      setIsRegistering(true);
      await registerPlant({
        functionName: "registerPlant",
        args: [BigInt(submissionId)],
      });
      alert(`Planta con ID ${submissionId} registrada exitosamente.`);
    } catch (error: any) {
      console.error("Error al registrar la planta:", error.message || error);
      alert(error.reason || "Hubo un error al registrar la planta.");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-2">Dashboard del Propietario</h2>
      <p className="mb-4">Gestiona las plantas enviadas y los tokens registrados.</p>
      <p className="text-lg mb-4">
        Dirección del propietario: <span className="font-bold text-green-500">{ownerAddress}</span>
      </p>
      <div>
        <h3 className="text-xl font-bold mb-4">Eventos de Plantas Presentadas:</h3>
        {isLoadingEvents ? (
          <p className="text-gray-500">Cargando eventos...</p>
        ) : submittedPlantEvents && submittedPlantEvents.length > 0 ? (
          <ul className="list-disc list-inside">
            {submittedPlantEvents.flat().map((event, index) => (
              <li key={index} className="mb-4">
                <div>
                  <strong>ID:</strong> {event.args.submissionId?.toString() || "N/A"} <br />
                  <strong>Especie:</strong> {event.args.speciesName || "N/A"} <br />
                  <strong>Región:</strong> {event.args.region || "N/A"} <br />
                  <strong>Usuario:</strong> {event.args.user || "N/A"} <br />
                  <strong>Fecha:</strong>{" "}
                  {event.args.timestamp ? new Date(Number(event.args.timestamp) * 1000).toLocaleString() : "N/A"} <br />
                  <button
                    className="mt-2 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-900"
                    onClick={() => handleRegister(event.args.submissionId?.toString() || "0")}
                    disabled={isRegistering || isRegisteringToken}
                  >
                    {isRegistering ? "Registrando..." : "Registrar Planta"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No hay eventos de plantas presentadas aún.</p>
        )}
      </div>
    </div>
  );
};

export default OwnerDashboard;
