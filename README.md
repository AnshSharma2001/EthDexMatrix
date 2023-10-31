# EthDexMatrix

EthDexMatrix is a platform that facilitates the sending of cryptocurrency across the world. It offers a user-friendly interface to interact with the Ethereum blockchain, ensuring security, reliability, and efficiency.

## Features

- **Welcome Interface**: A welcoming interface that provides users with the ability to send Ethereum to any address. It also displays the current account's Ethereum address in a visually appealing card format. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/client/src/components/Welcome.jsx)

- **Navbar**: A responsive navigation bar that adjusts based on the viewport size. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/client/src/components/Navbar.jsx)

- **Footer**: A footer component that displays essential links and contact information. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/client/src/components/Footer.jsx)

- **Services**: Highlights the core services offered by EthDexMatrix, such as security guarantees, best exchange rates, and fast transactions. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/client/src/components/Services.jsx)

- **Transactions**: Displays the latest transactions made by the user. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/client/src/components/Transactions.jsx)

- **Loader**: A simple loading animation for better user experience during asynchronous operations. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/client/src/components/Loader.jsx)

- **Smart Contract**: The repository includes a smart contract named `Transactions`, which is presumably responsible for handling the Ethereum transactions. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/smart_contract/contracts/Transactions.sol)

- **Deployment Script**: A script to deploy the `Transactions` smart contract to the Ethereum network. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/smart_contract/scripts/deploy.js)

## Setup and Installation

1. Clone the repository.
2. Navigate to the client directory and install the required dependencies using `npm install`.
3. Start the client application using `npm start`.
4. For deploying the smart contract, navigate to the `smart_contract` directory and run the deployment script.

### Transaction Context

The `TransactionsContext` provides a context for managing Ethereum transactions within the application. It offers functionalities such as:

- Checking if the user's wallet is connected.
- Fetching all transactions.
- Sending Ethereum transactions.
- Connecting to a wallet.

The context also manages the state for the current account, form data for sending transactions, and a list of all transactions. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/client/src/context/TransactionsContext.jsx)

### Dummy Data

The repository contains dummy data, which seems to be used for testing or demonstration purposes. This data includes Ethereum transaction details such as sender and receiver addresses, timestamps, and associated images. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/client/src/utils/dummyData.js)

### Smart Contract: Transactions

The `Transactions` smart contract is responsible for handling Ethereum transactions on the blockchain. It provides functionalities such as:

- Adding transactions to the blockchain.
- Fetching all transactions.
- Getting the count of all transactions.

The contract emits a `Transfer` event whenever a new transaction is added. [View Code](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/smart_contract/contracts/Transactions.sol)

### Transactions ABI (Application Binary Interface)

The repository contains the ABI for the `Transactions` smart contract. The ABI is a critical component for Ethereum smart contracts, as it allows for the encoding of function calls and the decoding of data returned from function calls. The ABI for the `Transactions` contract includes details about the contract's functions, events, and the parameters they accept or return.

- **Transfer Event**: This event is emitted whenever a new transaction is added. It includes details such as sender address, receiver address, amount transferred, associated message, timestamp, and a keyword.
  
- **addToBlockchain Function**: This function allows adding a new transaction to the blockchain. It accepts parameters like receiver address, amount, message, and keyword.
  
- **getAllTransactions Function**: This function fetches all the transactions. It returns an array of transaction details.
  
- **getTransactionCount Function**: This function returns the count of all transactions.

[View ABI](https://github.com/AnshSharma2001/EthDexMatrix/blob/master/client/src/utils/Transactions.json)
