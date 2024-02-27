import React from 'react'
import Trending from './Trending'
import pic from '../Assets/picture.png'
import { FaArrowRightLong } from "react-icons/fa6";

export default function GetingStart() {
  return (
    <div className="crypto_right_section">
                    <div className="get_startded">
                        <h1>Get Started with KoinX for FREE</h1>

                        <p>With our range of features that you can equip for free,
                            KoinX allows you to be more educated and aware of your tax reports.</p>
                        <img src={pic} alt="" height='150px' width='200px' />

                        <button>Get Started for FREE <FaArrowRightLong id='arrow_icon' /> </button>
                       


                    </div>
                    <Trending/>
                </div>
  )
}
