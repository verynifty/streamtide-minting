import Head from 'next/head'

import { default as React, useState, useEffect, Suspense } from 'react';

import Image from 'next/image'

import { getAccount } from '@wagmi/core';
import { useAccount } from 'wagmi';
import { useNetwork, useSwitchNetwork } from 'wagmi'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import Moment from 'react-moment';
import toast from 'react-hot-toast';

import AddressDisplay from 'components/render/addressDisplay';
import DisplayVariable from 'components/render/displayVariable';
import BlockNumber from 'components/render/blockNumber';
import SendTransaction from 'components/render/sendTransaction';
import Balance from 'components/render/balance';
import TokenBalance from 'components/render/tokenBalance';
import TokenAmount from 'components/render/tokenAmount';
import TokenName from 'components/render/tokenName';

import ContractRead from 'components/render/contractRead';
import ContractWrite from 'components/render/contractWrite';
import Events from 'components/render/events';
import WatchEvents from 'components/render/watchEvents';

import Uniswap from 'components/render/uniswap';
import APICall from 'components/render/apiCall';

import PleaseConnect from 'components/render/pleaseConnect';


const Page = (props) => {

  const NFT_ADDRESS = "0xF493283Ca3AAf02aCd22B84991C4D56F23C4eE8c";
  const { address, isConnecting, isDisconnected } = useAccount()

  const [userAddress, setUserAddress] = React.useState(address);
  const [isCorrectChain, setIsCorrectChain] = React.useState(true);

  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()

  useEffect(() => {
    async function load() {
      setIsCorrectChain(!(chain != null && chain.id != chains[0].id));
      try {
        const account = await getAccount();
        setUserAddress(account.address);
      } catch (error) {
        console.error("There is an error loading the app", error);
      }
    }
    load();
  }, [address, chain]);

  function checkChain() {
    if (!isCorrectChain) {
      return <dialog id="approval_modal" className="modal modal-open">
        <form method="dialog" className="modal-box text-neutral">
          <h3 className="text-lg font-bold">Connect your wallet to {chains[0].name}</h3>
          <button onClick={() => switchNetwork(chains[0].id)} className="btn my-4">Click this to connect to {chains[0].name}</button>
        </form>
      </dialog>
    }
  }

  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@3.1.1/dist/full.css" rel="stylesheet" type="text/css" />
      </Head>
      <Header />

      <Suspense>
        {checkChain()}
      </Suspense>

      <div class="w-full text-white">
        <section class="relative w-full  ">
          <div class="grid grid-cols-3">
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 688 578"
                fill="none"
                class="h-full w-full"
                preserveAspectRatio="none"
              >
                <path d="M457.778 0H6.10352e-05V578H688L457.778 0Z" fill="#F6FF00" />
              </svg>
              <div class="absolute left-0 bottom-0 max-h-full">
                <Image
                  src="/header_left.png"
                  width={0}
                  height={0}
                  sizes="90vw"
                  style={{ width: 'auto', height: '100%' }}
                />
              </div>
            </div>
            <div class="items-center text-center justify-center pt-8 pb-8">
              <h1 class="text-6xl text-white font-bold mt-5">
                EMBARK ON YOUR JOURNEY
              </h1>
              <h2 class="text-4xl">TTRPG INSPIRED COLLABORATIVE STORY TELLING</h2>
              <p class="text-5xl drop-shadow-lg mt-5">
                Aqua Prime: The Economic Escape Odyssey
              </p>
              <p class="text-base mt-2">
                Welcome to Aqua Prime, where your role-playing adventure transcends
                the game itself. Here, you're not just playing a character; you're
                part of an economic escape room, unraveling the mysteries of a virtual
                fiat economy on the brink of collapse. As you journey through this
                digital realm:
              </p>
              <label htmlFor="minting_modal" class="btn btn-wide btn-primary mt-10">
                MINT NOW
              </label>
            </div>
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 687 578"
                fill="none"
                class="h-full w-full"
                preserveAspectRatio="none"
              >
                <path d="M229.887 0H687V578H0L229.887 0Z" fill="#F6FF00" />
              </svg>
              <div class="absolute right-0 bottom-0 max-h-full">
                <Image
                  src="/header_right.png"
                  width={0}
                  height={0}
                  sizes="90vw"
                  style={{ width: 'auto', height: '80%' }}
                />
              </div>
             
            </div>
          </div>
        </section>
      </div>
      <section class="bg-neutral w-full py-12">
        <div class="container mx-auto">
          <div class=" grid gap-6 px-4 md:px-6 grid-cols-3 lg:gap-12">
            <div class="relative text-center">
              <p>
                Discord is the Moonstone Maverick in Aqua Prime, an airship for casual
                gameplay. Here, players earn virtual sand dollars and ease into the
                crypto economy at their own pace. 🚀💰🌌🎮
              </p>
              <button class="absolute bottom-0 left-0 w-full btn btn-primary">
                Follow on discord
              </button>
            </div>
            <div class="text-center">
              <p>
                On Twitch, Aqua Prime's world map displays the Moonstone Maverick,
                powered by moonstones earned by factions on Discord. This shows
                real-time progress and the collective impact of player actions in the
                game's broader narrative. 🌍🚀🎮🌌
              </p>
              <button class="w-full btn btn-primary mt-5">Follow on twitch</button>
            </div>
            <div class="relative text-center">
              <p>
                Twitter for Aqua Prime is the digital lore book and news source,
                constantly updating players with the latest stories and developments
                in the game's universe. 📜🌐🐦🎮
              </p>
              <button class="absolute bottom-0 left-0 w-full btn btn-primary">
                Follow on Twitter
              </button>
            </div>{" "}
          </div>
        </div>
      </section>
      <section class="w-full py-12">
        <div class=" grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
          <div class="text-left">© 2024 AQUA PRIME</div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="71"
              viewBox="0 0 75 71"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 32.8354V5.06078L5.17247 0H69.8275L75 5.06078V65.7895L69.8275 70.8503H5.17247L0 65.7895V43.0756H2.52543V50.6665H10.3448V60.7287L12.9311 63.259H62.069L64.6551 60.7287V12.6518L62.069 10.1266H12.931L10.3448 12.6518V32.8354H0ZM0 40.4859H43.9654V40.4795H0V40.4859ZM5.17247 48.0769H10.3449V48.0705H5.17247V48.0769Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.2756 55.7311V53.2055H46.5518V55.7311H49.1381V63.3086H43.9653V58.2578H25.8619V63.3086H20.6895V55.7311H23.2756Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.8621 35.4252V32.8947H28.4478V30.3645H36.2063V32.8947H38.7926V35.4252H46.5511V37.955H49.1374V45.5466H46.5517V48.0771H5.17247V43.0162H43.9654V40.4865H0V35.4252H25.8621Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.8631 22.9426L24.712 19.1772L27.2777 21.6875L23.4293 25.4528L27.2777 29.2182L24.712 31.7283L20.8631 27.9631L17.0151 31.7283L14.4495 29.2182L18.298 25.4528L14.4495 21.6875L17.0151 19.1772L20.8631 22.9426ZM43.892 22.9426L47.741 19.1772L50.3065 21.6875L46.4582 25.4528L50.3065 29.2182L47.741 31.7283L43.8925 27.9631L40.0442 31.7283L37.4785 29.2182L41.3269 25.4528L37.4785 21.6875L40.0442 19.1772L43.892 22.9426Z"
                fill="white"
              />
            </svg>{" "}
          </div>
          <div class="text-right">DISCORD TWITCH TWITTER</div>
        </div>
      </section>
      <input type="checkbox" id="minting_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-primary text-black text-center">
          <h3 className="text-3xl font-bold">MINT ARI !</h3>
          <div className="">
            <ContractWrite
            address={NFT_ADDRESS}
            args={[1]}
            abi={[
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_quantity",
                    "type": "uint256",
                    "steps": true
                  }
                ],
                "name": "mint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              }
            ]}
            onCalculateValue={function(args) {
              return args[0] * 10000000000000000;
            }} />
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="minting_modal">
          Close
        </label>
      </div>
      <Footer />

    </>
  )
}

export default Page;