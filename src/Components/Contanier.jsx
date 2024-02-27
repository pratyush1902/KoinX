import React from 'react'

 

import Sentiment from './Sentiment'
import About from './About'

 
import GetingStart from './GetingStart'
import HorizantalList from './HorizantalList'
 import Chart from './Chart'
import Bitcoin from './Bitcoin'
 

export default function Contanier() {
 

    return (
        <div className='main_cointaner'>
            <div className="crypto_name">
                <h4>Cryptocurrencies <span id='symbol'> &gt; &gt;</span> <span id='crypto_name'>Bitcoin</span> </h4>
            </div>

            <div className="contaner">
                <div className="crypto_graph_contaner">
                    <Bitcoin/>
                    
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
