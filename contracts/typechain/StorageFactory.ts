/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Storage } from "./Storage";

export class StorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Storage> {
    return super.deploy(overrides || {}) as Promise<Storage>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Storage {
    return super.attach(address) as Storage;
  }
  connect(signer: Signer): StorageFactory {
    return super.connect(signer) as StorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Storage {
    return new Contract(address, _abi, signerOrProvider) as Storage;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "authFacts",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes22",
        name: "",
        type: "bytes22",
      },
    ],
    name: "balancesToWithdraw",
    outputs: [
      {
        internalType: "uint128",
        name: "balanceToWithdraw",
        type: "uint128",
      },
      {
        internalType: "uint8",
        name: "gasReserveValue",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "blocks_DEPRECATED",
    outputs: [
      {
        internalType: "uint32",
        name: "committedAtBlock",
        type: "uint32",
      },
      {
        internalType: "uint64",
        name: "priorityOperations",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "chunks",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "withdrawalsDataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "exited",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exodusMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "firstPendingWithdrawalIndex_DEPRECATED",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "firstPriorityRequestId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_tokenId",
        type: "uint16",
      },
    ],
    name: "getBalanceToWithdraw",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "contract Governance",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfPendingWithdrawals_DEPRECATED",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "pendingWithdrawals_DEPRECATED",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "tokenId",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "priorityRequests",
    outputs: [
      {
        internalType: "enum Operations.OpType",
        name: "opType",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "pubData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "expirationBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "storedBlockHashes",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBlocksCommitted",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBlocksVerified",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCommittedPriorityRequests",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalOpenPriorityRequests",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradePreparationActivationTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradePreparationActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "verifiedCommitmentHashes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract Verifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610864806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80637e9ca9b1116100b8578063c57b22be1161007c578063c57b22be1461026b578063c8e3992b14610273578063fa0eb1c614610298578063fa6b53c3146102ab578063faf4d8cb146102cb578063ffeec237146102d357610137565b80637e9ca9b1146102205780638ae20dc914610228578063922e14921461024857806395d6ff19146102505780639ba0d1461461025857610137565b80633761804d116100ff5780633761804d146101ac5780633c6461a9146101cd5780635aa6e675146101ee57806367708dae146101f65780637d490798146101fe57610137565b8063264c09121461013c5780632b7ac3f31461015a5780632b8c062a1461016f5780632d24006c1461018257806334f6bb1c14610197575b600080fd5b6101446102db565b6040516101519190610703565b60405180910390f35b6101626102e4565b6040516101519190610717565b61014461017d3660046106a3565b6102f3565b61018a610313565b60405161015191906107c8565b61019f610326565b6040516101519190610819565b6101bf6101ba366004610689565b61033d565b6040516101519291906106e6565b6101e06101db36600461063f565b610365565b6040516101519291906107ac565b61016261038c565b61019f61039b565b61021161020c3660046106be565b6103ab565b6040516101519392919061072b565b61018a61045f565b61023b610236366004610616565b610473565b604051610151919061070e565b610144610490565b61018a610499565b61023b610266366004610689565b6104a5565b61019f6104b7565b610286610281366004610689565b6104ce565b604051610151969594939291906107d9565b6101446102a6366004610671565b610519565b6102be6102b93660046105e4565b61052e565b6040516101519190610798565b61018a61056c565b61023b61057f565b60095460ff1681565b6002546001600160a01b031681565b600860209081526000928352604080842090915290825290205460ff1681565b600654600160401b900463ffffffff1681565b600c54600160801b900467ffffffffffffffff1681565b6005602052600090815260409020546001600160a01b03811690600160a01b900461ffff1682565b6004602052600090815260409020546001600160801b03811690600160801b900460ff1682565b6003546001600160a01b031681565b600c5467ffffffffffffffff1681565b600b602090815260009182526040918290208054600180830180548651600261010094831615949094026000190190911692909204601f810186900486028301860190965285825260ff90921694929390929083018282801561044f5780601f106104245761010080835404028352916020019161044f565b820191906000526020600020905b81548152906001019060200180831161043257829003601f168201915b5050505050908060020154905083565b600654640100000000900463ffffffff1681565b600a60209081526000928352604080842090915290825290205481565b60005460ff1681565b60065463ffffffff1681565b600d6020526000908152604090205481565b600c54600160401b900467ffffffffffffffff1681565b600760205260009081526040902080546001820154600283015460039093015463ffffffff8084169467ffffffffffffffff64010000000086041694600160601b9004909116929186565b600e6020526000908152604090205460ff1681565b60006004600061053e8585610585565b69ffffffffffffffffffff191681526020810191909152604001600020546001600160801b03169392505050565b600654600160601b900463ffffffff1681565b60015481565b60a01b61ffff60a01b166001600160a01b03919091161760501b90565b80356001600160a01b03811681146105b957600080fd5b919050565b803561ffff811681146105b957600080fd5b803563ffffffff811681146105b957600080fd5b600080604083850312156105f6578182fd5b6105ff836105a2565b915061060d602084016105be565b90509250929050565b60008060408385031215610628578182fd5b610631836105a2565b915061060d602084016105d0565b600060208284031215610650578081fd5b813569ffffffffffffffffffff198116811461066a578182fd5b9392505050565b600060208284031215610682578081fd5b5035919050565b60006020828403121561069a578081fd5b61066a826105d0565b600080604083850312156106b5578182fd5b6105ff836105d0565b6000602082840312156106cf578081fd5b813567ffffffffffffffff8116811461066a578182fd5b6001600160a01b0392909216825261ffff16602082015260400190565b901515815260200190565b90815260200190565b6001600160a01b0391909116815260200190565b6000600a851061073757fe5b84825260206060818401528451806060850152825b818110156107685786810183015185820160800152820161074c565b818111156107795783608083870101525b5060408401949094525050601f91909101601f19160160800192915050565b6001600160801b0391909116815260200190565b6001600160801b0392909216825260ff16602082015260400190565b63ffffffff91909116815260200190565b63ffffffff968716815267ffffffffffffffff9590951660208601529290941660408401526060830152608082019290925260a081019190915260c00190565b67ffffffffffffffff9190911681526020019056fea2646970667358221220df43b469197b16bbb901cdc149850e901e51c2a2f37f04f12bb9d8026c149c8264736f6c63430007030033";