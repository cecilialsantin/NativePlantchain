"use client";

interface OwnerDashboardProps {
  ownerAddress: string;
}

const OwnerDashboard: React.FC<OwnerDashboardProps> = ({ ownerAddress }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-2">Dashboard del Propietario</h2>
      <p className="mb-4">Gestiona las plantas enviadas y los tokens registrados.</p>
      <p className="text-lg">
        Dirección del propietario: <span className="font-bold text-green-500">{ownerAddress}</span>
      </p>
      {/* Aquí puedes agregar funcionalidades específicas para el propietario */}
    </div>
  );
};

export default OwnerDashboard;
