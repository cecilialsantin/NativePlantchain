import { useEffect, useState } from "react";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { useIsMounted } from "usehooks-ts";
import { usePublicClient } from "wagmi";
import { Contract, ContractCodeStatus, ContractName, contracts } from "~~/utils/scaffold-eth/contract";

export const useDeployedContractInfo = <TContractName extends ContractName>(contractName: TContractName) => {
  const isMounted = useIsMounted();
  const { targetNetwork } = useTargetNetwork();
  const deployedContract = contracts?.[targetNetwork.id]?.[contractName as ContractName] as Contract<TContractName>;
  const [status, setStatus] = useState<ContractCodeStatus>(ContractCodeStatus.LOADING);
  const publicClient = usePublicClient({ chainId: targetNetwork.id });


  useEffect(() => {
    console.log("Target Network:", targetNetwork);
    console.log("deployedContract:", deployedContract)
  }, [targetNetwork]);

  useEffect(() => {
    const checkContractDeployment = async () => {
      try {
        if (!isMounted() || !publicClient) return;

        if (!deployedContract) {
          setStatus(ContractCodeStatus.NOT_FOUND);
          return;
        }

        const code = await publicClient.getCode({
          address: deployedContract.address,
        });

        console.log("Código del contrato (getCode):", code);

        if (code === "0x") {
          setStatus(ContractCodeStatus.NOT_FOUND);
          return;
        }

        setStatus(ContractCodeStatus.DEPLOYED);
      } catch (e) {
        console.error("Error en getCode:", e);
        setStatus(ContractCodeStatus.NOT_FOUND);
      }
    };

    checkContractDeployment();
  }, [isMounted, contractName, deployedContract, publicClient]);

  return {
    data: status === ContractCodeStatus.DEPLOYED ? deployedContract : undefined,
    isLoading: status === ContractCodeStatus.LOADING,
  };
};
