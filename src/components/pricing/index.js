import React from 'react'
import MyButton from '../utils/Button'
import { Zoom } from "react-awesome-reveal"

export default function Pricing() {
    const priceState = {
        prices: [100, 150, 200],
        position: ["Balcony", "Medium", "Star"],
        desc: [
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ],
        linkTo: ["#", "##", "###"],
        delay: [500, 0, 500]
    }

    const showBoxes = () => {
        return priceState.prices.map((item, index) => (
            <Zoom key={index} className="pricing_item" delay={priceState.delay[index]} triggerOnce>
                <div className='pricing_inner_wrapper'>
                    <div className='pricing_title'>
                        <span>${priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className='pricing_description'>
                        {priceState.desc[index]}
                    </div>
                    <div className='pricing_buttons'>
                        <MyButton
                            text="Purchase"
                            size="small"
                            style={{
                                background: "#999",
                                color: '#ffffff'
                            }}
                            link={priceState.linkTo[index]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    }
    return (
        <div className='bck_black'>
            <div className='center_wrapper pricing_section'>
                <h2>Pricing</h2>
                <div className='pricing_wrapper'>
                    {showBoxes()}
                </div>
            </div>
        </div>
    )
}
