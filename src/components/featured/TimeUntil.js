import React, { useState, useEffect, useCallback } from 'react'
import { Slide } from "react-awesome-reveal"


export default function TimeUntil() {
    const [time, setTime] = useState({
        days: "0",
        hours: "0",
        minutes: "0",
        second: "0",
    });

    /**
    * Function that renders a countdown item.
    * @param {string} time - The time value to display.
    * @param {string} value - The tag or label associated with the time value.
    * @returns {JSX.Element} - The JSX element representing the countdown item.
    */
    const renderItem = (time, value) => (

        <div className='countdown_item'>
            <div className='countdown_time' >
                {time}
            </div >
            <div className='countdown_tag'>
                {value}
            </div>
        </div>
    )

    const getDateUntill = useCallback((deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        // console.log(time);
        if (time < 0) {
            console.log("date passed");
        } else {
            const second = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / 1000 / 60 / 60) % 24);
            const days = Math.floor((time / 1000 / 60 / 60 / 24));
            setTime({
                days,
                hours,
                minutes,
                second
            })
        }

    }, [])

    useEffect(() => {
        const timer = setInterval(() => getDateUntill("Nov,03,2023,13:00:00"), 1000)

        return () => { clearInterval(timer) }
    }, [getDateUntill])

    return (
        <Slide triggerOnce left delay={50}>
            <div className='countdown_wrapper'>
                <div className='countdown_top'>
                    Event starts in
                </div>
                <div className='countdown_bottom'>
                    {renderItem(time.days, "Days")}
                    {renderItem(time.hours, "Hours")}
                    {renderItem(time.minutes, "Min")}
                    {renderItem(time.second, "Sec")}
                </div>
            </div>
        </Slide>
    )
}
