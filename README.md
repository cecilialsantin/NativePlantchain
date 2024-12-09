
# NativePlantchain

El traslado de plantas fuera de su hábitat natural constituyen la segunda causa de extinción a nivel mundial, ya que luego de establecerse invaden el nuevo ambiente. Este problema se presenta a la largo de todo el territorio argentino, inclusive en áreas protegidas.

NativePlantchain es un proyecto que incentiva a las personas a plantar especies nativas en sus ecorregiones, promoviendo que la sociedad cuide y proteja las especies de la flora de la Provincia de Buenos Aires: Pampeana, el Espinal, y Deltas e Islas del Paraná. También se favorece la conservación de las especies nativas, muchas de las cuales están en riesgo en sus hábitats naturales.

Los usuarios reciben tokens únicos (NFTs ERC-721) como recompensa al registrar y verificar pruebas de plantación de especies nativas correspondientes a su ecorregión. Cada token representa la especie plantada, la ubicación y su conexión con la ecorregión correspondiente.

Gracias a la tecnología de blockchain, esta aplicación se ejecuta en modo autónomo, se eliminan intermediarios y el código es inmutable.

Arquitectura del Proyecto

1.	Frontend:
ScaffoldEth -  UI de React. Permite a los usuarios registrarse, cargar ubicaciones y fotos de las plantas. Muestra información sobre las plantas nativas y las recompensas disponibles.

2.	Backend:
Un contrato inteligente en Solidity que gestiona: Las ecorregiones y sus especies nativas / La emisión de tokens ERC-721 (un NFT por planta registrada) / Validación básica (ubicación y especie).

3.	Smart Contracts:

ERC-721: Representa cada planta registrada con un token único. Al registrar una planta, se asigna un NFT al usuario que prueba la plantación.

El token puede incluir metadatos como:
    	Nombre de la especie.
    	Ubicación (ecorregión).
    	Fecha de plantación.
    	Foto de la planta.

El usuario puede reclamar sus tokens una vez asignados.

4.	Datos de Referencia:

Especies nativas por ecorregión. Coordenadas de las ecorregiones para validar la ubicación.

