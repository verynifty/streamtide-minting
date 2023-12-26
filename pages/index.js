import Head from 'next/head'


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

import ERC20ABI from 'ABIS/ERC20.json';


export default function Home() {
  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Header />
        Hello this is your FastDapp app. Paste your dapp code here.
      <Footer />

    </>
  )
}
