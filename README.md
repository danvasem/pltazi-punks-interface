# pltazi-punks-interface

Platzi Punks User Interface made with React.js

Install dependencies:

- yarn add react-router-dom
- yarn add @web3-react/core web3-react
- yarn add web3
- yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6 @chakra-ui/icons
- yarn add @web3-react/injected-connector

There is a known issue using Web3 when the app was created using Creat-react-app, follow the instructions detailed in:
https://github.com/ChainSafe/web3.js#troubleshooting-and-known-issues

Para subir un archivo a IPFS utilizando los servicios gratuitos de Infura
curl "https://ipfs.infura.io:5001/api/v0/add?pin=true&cid-version=1" -X POST -H "Content-Type: multipart/form-data" -F file="Never stop learning"

Para subir el proyecto a IPFS con toda la estructura de carpetas, revisar el script "deploy.sh"
sh ./deploy.sh
