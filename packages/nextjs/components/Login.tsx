import { useAccount, useDisconnect } from "wagmi";

const Login = ({ ownerAddress, onLogin }: { ownerAddress: string; onLogin: (isOwner: boolean) => void }) => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const regions = ["Region 1", "Region 2", "Region 3"];

  return (
    <div>
      <h1>Native Plant Tokens</h1>
      {!isConnected ? (
        <p>Connect your wallet to continue.</p>
      ) : (
        <div>
          <p>
            Connected as: <strong>{address}</strong>
          </p>
          {address === ownerAddress ? <p>You are logged in as the owner</p> : <p>You are logged in as a user.</p>}
          <button onClick={() => onLogin(address === ownerAddress)}>Continue</button>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      )}
      <div>
        <h2>Regions</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {regions.map((region, index) => (
            <div key={index} className="card">
              <h3>{region}</h3>
              <p>Plant trees in this region to tokenize them!</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
