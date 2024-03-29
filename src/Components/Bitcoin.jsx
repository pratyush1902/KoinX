import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bitcoin from '../Assets/bitcoin-btc-logo.png'
import { FaCaretUp } from "react-icons/fa";

export default function Bitcoin() {
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
    <div>
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
                  
      
    </div>
  )
}
