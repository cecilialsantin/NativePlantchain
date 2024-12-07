"use client";

const UserDashboard = ({ userAddress }: { userAddress: string }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Dashboard del Usuario</h2>
      <p>Bienvenido, {userAddress}</p>
      {/* Aquí agrega las funcionalidades de submit y reclamar tokens */}
    </div>
  );
};

export default UserDashboard;
