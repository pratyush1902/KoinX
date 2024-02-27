import React from 'react'

export default function HorizantalList() {
  return (
    <div className="horizantal_list">
                <ul>
                    <li>Overview</li>
                    <li>Fundamentals</li>
                    <li>News Insights</li>
                    <li id='selected_list'>Sentiment</li>
                    <li>Team</li>
                    <li>Technicals</li>
                    <li>Tokenomics</li>
                </ul>
                <hr className='list_line'/>
            </div>
  )
}
