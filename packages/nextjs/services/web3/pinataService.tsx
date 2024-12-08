import PinataClient from "@pinata/sdk";

const pinata = new PinataClient({
  pinataApiKey: process.env.PINATA_API_KEY,
  pinataSecretApiKey: process.env.PINATA_SECRET_KEY,
});

/**
 * Sube una imagen a Pinata y devuelve la URL del archivo en el gateway de IPFS.
 * @param file - Archivo a subir
 * @returns {Promise<string>} - URL del archivo en IPFS
 */
export const uploadImageToPinata = async (file: File): Promise<string> => {
  try {
    const response = await pinata.pinFileToIPFS(file, {
      pinataMetadata: { name: file.name },
    });
    return `https://gateway.pinata.cloud/ipfs/${response.IpfsHash}`;
  } catch (error) {
    console.error("Error al subir la imagen a Pinata:", error);
    throw new Error("Error al subir la imagen");
  }
};
