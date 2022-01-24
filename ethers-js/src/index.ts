import { Signer, providers } from "ethers";
import abi from "../../addresses.json";
import { AxieContract } from "./contracts/AxieContract";
import { AXSWETHLPContract } from "./contracts/AXSWETHLPContract";
import { ClockAuctionContract } from "./contracts/ClockAuctionContract";
import { AxieContract__factory } from "./contracts/factories/AxieContract__factory";
import { AXSWETHLPContract__factory } from "./contracts/factories/AXSWETHLPContract__factory";
import { ClockAuctionContract__factory } from "./contracts/factories/ClockAuctionContract__factory";
import { ItemContract__factory } from "./contracts/factories/ItemContract__factory";
import { KatanaRouter__factory } from "./contracts/factories/KatanaRouter__factory";
import { LandContract__factory } from "./contracts/factories/LandContract__factory";
import { OfferAuctionContract__factory } from "./contracts/factories/OfferAuctionContract__factory";
import { RoninAXSContract__factory } from "./contracts/factories/RoninAXSContract__factory";
import { RoninRewardDistributor__factory } from "./contracts/factories/RoninRewardDistributor__factory";
import { RoninSLPContract__factory } from "./contracts/factories/RoninSLPContract__factory";
import { RoninWETHContract__factory } from "./contracts/factories/RoninWETHContract__factory";
import { SidechainGatewayContract__factory } from "./contracts/factories/SidechainGatewayContract__factory";
import { SLPWETHLPContract__factory } from "./contracts/factories/SLPWETHLPContract__factory";
import { StakingManager__factory } from "./contracts/factories/StakingManager__factory";
import { USDCWETHLPContract__factory } from "./contracts/factories/USDCWETHLPContract__factory";
import { WrappedRONContract__factory } from "./contracts/factories/WrappedRONContract__factory";
import { ItemContract } from "./contracts/ItemContract";
import { KatanaRouter } from "./contracts/KatanaRouter";
import { LandContract } from "./contracts/LandContract";
import { OfferAuctionContract } from "./contracts/OfferAuctionContract";
import { RoninAXSContract } from "./contracts/RoninAXSContract";
import { RoninRewardDistributor } from "./contracts/RoninRewardDistributor";
import { RoninSLPContract } from "./contracts/RoninSLPContract";
import { RoninWETHContract } from "./contracts/RoninWETHContract";
import { SidechainGatewayContract } from "./contracts/SidechainGatewayContract";
import { SLPWETHLPContract } from "./contracts/SLPWETHLPContract";
import { StakingManager } from "./contracts/StakingManager";
import { USDCWETHLPContract } from "./contracts/USDCWETHLPContract";
import { WrappedRONContract } from "./contracts/WrappedRONContract";

type Contracts = {
  axieContract: AxieContract;
  slpContract: RoninSLPContract;
  axsWethLPContract: AXSWETHLPContract;
  clockAuctionContract: ClockAuctionContract;
  itemContract: ItemContract;
  katanaRouterContract: KatanaRouter;
  landContract: LandContract;
  offerAuctionContract: OfferAuctionContract;
  roninAXSContract: RoninAXSContract;
  roninRewardDistributorContract: RoninRewardDistributor;
  roninWETHContract: RoninWETHContract;
  sidechainGatewayContract: SidechainGatewayContract;
  slpWETHLPContract: SLPWETHLPContract;
  stakingManager: StakingManager;
  USDCWETHLPContract: USDCWETHLPContract;
  wrappedRONContract: WrappedRONContract;
};

export function getTaxi(
  signerOrProvider: Signer | providers.Provider = new providers.JsonRpcProvider(
    {
      url: "https://api.roninchain.com/rpc",
      headers: {
        "user-agent": "Axie.Taxi Library",
      },
    },
    2020
  )
): Contracts {
  return {
    axieContract: AxieContract__factory.connect(abi.axie, signerOrProvider),
    slpContract: RoninSLPContract__factory.connect(abi.slp, signerOrProvider),
    axsWethLPContract: AXSWETHLPContract__factory.connect(
      abi.axsWethLP,
      signerOrProvider
    ),
    clockAuctionContract: ClockAuctionContract__factory.connect(
      abi.clock,
      signerOrProvider
    ),
    itemContract: ItemContract__factory.connect(abi.item, signerOrProvider),
    katanaRouterContract: KatanaRouter__factory.connect(
      abi.katana,
      signerOrProvider
    ),
    landContract: LandContract__factory.connect(abi.land, signerOrProvider),
    offerAuctionContract: OfferAuctionContract__factory.connect(
      abi.offer,
      signerOrProvider
    ),
    roninAXSContract: RoninAXSContract__factory.connect(
      abi.roninAXS,
      signerOrProvider
    ),
    roninRewardDistributorContract: RoninRewardDistributor__factory.connect(
      abi.roninRewards,
      signerOrProvider
    ),
    roninWETHContract: RoninWETHContract__factory.connect(
      abi.roninWETH,
      signerOrProvider
    ),
    sidechainGatewayContract: SidechainGatewayContract__factory.connect(
      abi.sidechain,
      signerOrProvider
    ),
    slpWETHLPContract: SLPWETHLPContract__factory.connect(
      abi.slpWETHLP,
      signerOrProvider
    ),
    stakingManager: StakingManager__factory.connect(
      abi.stakingManager,
      signerOrProvider
    ),
    USDCWETHLPContract: USDCWETHLPContract__factory.connect(
      abi.usdcWETHLP,
      signerOrProvider
    ),
    wrappedRONContract: WrappedRONContract__factory.connect(
      abi.wrappedRON,
      signerOrProvider
    ),
  };
}
