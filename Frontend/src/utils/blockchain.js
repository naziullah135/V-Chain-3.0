import Web3 from "web3";

class Blockchain {
    getContractId() {
        return '0xE353f970b8612056B379C84FD8224357540bC3BD';
    }

    getContractAbi() {
        return [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "int256",
                        "name": "createdAt",
                        "type": "int256"
                    }
                ],
                "name": "PostCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    }
                ],
                "name": "PostUpdated",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "internalType": "int256",
                        "name": "created_at",
                        "type": "int256"
                    }
                ],
                "name": "createAuthor",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function",
                "payable": true
            },
            {
                "inputs": [],
                "name": "getAuthorProfile",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "internalType": "int256",
                        "name": "created_at",
                        "type": "int256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    }
                ],
                "name": "updateAuthor",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function",
                "payable": true
            },
            {
                "inputs": [],
                "name": "isAuthorRegistered",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [],
                "name": "isOwner",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "details",
                        "type": "string"
                    },
                    {
                        "internalType": "int256",
                        "name": "created_at",
                        "type": "int256"
                    }
                ],
                "name": "createPost",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function",
                "payable": true
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    }
                ],
                "name": "getPost",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "author",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "details",
                        "type": "string"
                    },
                    {
                        "internalType": "int256",
                        "name": "created_at",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "updated_at",
                        "type": "int256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "details",
                        "type": "string"
                    },
                    {
                        "internalType": "int256",
                        "name": "updated_at",
                        "type": "int256"
                    }
                ],
                "name": "updatePost",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function",
                "payable": true
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transfer",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function",
                "payable": true
            }
        ]
    }

    getWeb3Client() {
        return new Web3(window.ethereum);
    }

    getContract(c) {
        return new c.eth.Contract(this.getContractAbi(), this.getContractId());
    }

    getAppUrl() {
        return 'http://localhost:9090/v1/';
    }
}

const blockchainClient = new Blockchain();
export default blockchainClient;