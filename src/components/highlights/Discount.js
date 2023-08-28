import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal"

import MyButton from "../utils/Button";

const Discount = () => {
    const end = 30;
    const [start, setStart] = useState(0);

    // Function to increment the discount percentage until it reaches the end value (30%).
    const percentage = () => {
        if (start < end) {
            setStart(preCount => preCount + 1)
        }
    }

    // useEffect hook to continuously update the discount percentage.
    useEffect(() => {
        if (start > 0 && start < end) {
            // Use setTimeout to increment the discount percentage with a delay of 30ms.
            setTimeout(() => {
                setStart(preCount => preCount + 1)
            }, 30)
        }
    }, [start])

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={(inView) => {
                        if (inView) {
                            percentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase ticket before 15th Sep</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        <MyButton
                            text="Purchase tickets"
                            link="http://google.com"
                            size="small"
                            style={{
                                background: "#ffa800",
                                color: "#ffffff"
                            }}
                            iconTicket={true}

                        />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Discount;