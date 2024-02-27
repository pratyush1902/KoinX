import React from 'react'
import { MdInfo } from "react-icons/md";
import CardSlider from './ScrollCard';
import cardsData from './Sildercarddata';
 

export default function Sentiment() {
   
  return (
    <div className='sentiment'>
        <h1 className="sentiment_headig">
            Sentiment
        </h1>
        <h3 className="key_events">
            Key Events <MdInfo id='infoicon' />
        </h3>

        <div className="slider">
            <CardSlider cards={cardsData}/>
        </div>
        
        <h3 className="Analysis">
        Analyst Estimates <MdInfo />
        </h3>
        <div className="Analyst_contaner">
            <div className="left_analyst">
                <h4>76%</h4>
            </div>
            <div className="right_analyst">
                <div className="buy estimate">
                    <h5>Buy</h5>
                    <hr className='buy_line' />
                    <h6>76%</h6>
                </div>
                <div className="hold estimate">
                    <h5>Hold</h5>
                    <hr className='hold_line' />
                    <h6>8%</h6>
                </div>
                <div className="sell estimate">
                    <h5>Sell</h5>
                    <hr className='sell_line' />
                    <h6>16%</h6>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}
