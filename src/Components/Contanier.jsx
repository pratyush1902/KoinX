import React, { useEffect, useState } from 'react'
import bitcoin from '../Assets/bitcoin-btc-logo.png'
import { FaCaretUp } from "react-icons/fa";
 

import Sentiment from './Sentiment'
import About from './About'
import axios from 'axios'
 
import GetingStart from './GetingStart'
import HorizantalList from './HorizantalList'
 import Chart from './Chart'

export default function Contanier() {
const[price,getPrice]=useState('')
useEffect(()=>{
    const getData= async()=>{
        try{
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: { ids: 'bitcoin', vs_currencies: 'inr,usd', include_24hr_change: true }
        });
        getPrice(response.data.bitcoin)
        }catch(error){
            console.log(error);
        }
    }
    getData();
},[])

    return (
        <div className='main_cointaner'>
            <div className="crypto_name">
                <h4>Cryptocurrencies <span id='symbol'> &gt; &gt;</span> <span id='crypto_name'>Bitcoin</span> </h4>
            </div>

            <div className="contaner">
                <div className="crypto_graph_contaner">
                    <div className="crypto_head">
                        <img src={bitcoin} alt="" height='30px' width='30px' className="crypto_logo" />
                        <h4 className="bitcoin_name">Bitcoin</h4>
                        <h6 className='cryto_code'>BTC</h6>
                        <div className="crypto_rank">
                            <h6>Rank #1</h6>
                        </div>
                    </div>
                    {price && 
                        <div   className="crypto_info">
                        <div className="crypto_price">
                            <h1 className="price_dollar">${price.usd}</h1>
                            <div className="price_inr"> &#8377;  {price.inr}</div>
                        </div>
                        <div className="crypto_trend">
                            <div className="crypto_growth">
                                <h6><FaCaretUp />{Math.trunc(price.usd_24h_change)}%</h6>
                            </div>
                            <div className="growth_time">
                                <h6>(24H)</h6>
                            </div>

                        </div>
                    </div>
                    }
                  
                 <Chart/>
                </div>

                <GetingStart/>



            </div>

            
           <HorizantalList/>
            <Sentiment/>
            <About/>
        </div>
    )
}
