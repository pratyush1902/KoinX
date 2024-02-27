import React from 'react'
import pic1 from '../Assets/e39cee97d83ba894aa0c105133924b9b.jpg'
import pic2 from '../Assets/5c577ca47c764bd8af01d840fe7ffccb.jpg'

export default function About() {
    return (
        <div className='About'>
            <div className="about_bitcoin">
                <h1>About Bitcoin</h1>
                <h3>What is Bitcoin?</h3>
                <p>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>

                <hr />

            </div>
            <div className="about_misi">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  </p>
                <p>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
                <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
                <hr />
            </div>

            <div className="holding_crypto">
                <h1>Already Holding Bitcoin?</h1>

                <div className="holding_card">
                    <div className="card1">
                        <img src={pic1} alt="img" height='120px' width='120px' />
                        <div className="card_details">
                            <h6>Calculate your Profits</h6>
                            <button>Check Now</button>
                        </div>

                    </div>
                    <div className="card2 card1">
                        <img src={pic2} alt="img" height='120px' width='120px'/>
                        <div className="card_details">
                            <h6>Calculate your tax liability</h6>
                            <button>Check Now</button>
                        </div>

                    </div>

                </div>
                    <hr className='about_hr' />

                    <p className='bottem_text'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
            </div>

        </div>
    )
}
