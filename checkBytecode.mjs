import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

async function checkBytecode() {
  try {
    const code = await publicClient.getCode({
      address: '0xe2a45bBDda2902eA330e45467a1b3030747d0afc',
    });

    console.log("Código del contrato (bytecode):", code);
  } catch (error) {
    console.error("Error al obtener el bytecode:", error);
  }
}

checkBytecode();
