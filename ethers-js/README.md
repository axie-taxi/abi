# Axie Infinity ABIs

Here are the ABIs that power [axie.taxi](https://axie.taxi), the only secure method of auto-claiming and paying scholars for your guild.

## About this repo

Included are the following contract ABIs for Axie Infinity:

- Axie Contract
- AXS WETH LP Contract
- AXS WETH LP Staking Pool Contract
- Clock Auction Contract
- Item Contract
- Katana Router
- Land Contract
- Offer Auction Contract
- Ronin AXS Contract
- Ronin Reward Distributor
- Ronin SLP Contract
- Ronin WETH Contract
- Sidechain Gateway Contract
- SLP WETH LP Contract
- SLP WETH LP Staking Pool Contract
- Staking Manager Contract
- USD WETH LP Contract
- Wrapped RON Contract

Also included are ethers typescript bindings generated via `typechain`.

## Including it in your project

```
npm i @axie-taxi/abi
```

In your javascript:

```
import { getTaxi } from "@axie-taxi/ethers-contracts";

const contracts = getTaxi(signer);
```

## How to build

For ethers

```
cd ethers-js
npm install
```

## Contributing

Contributors are welcome! If you have a new ABI to add, please open a pull request.
