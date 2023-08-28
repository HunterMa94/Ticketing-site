import React from 'react'

export default function Location() {
    return (
        <div className='location_wrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0431480374127!2d144.95186541790872!3d-37.809943847021785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d49e9ed019d%3A0xf04567605318580!2sFlagstaff%20Gardens!5e0!3m2!1sen!2sau!4v1690983540486!5m2!1sen!2sau"
                width="100%"
                height="500"
                title="map"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <div className='location_tag'>
                <div>
                    Location
                </div>
            </div>
        </div>
    )
}
