import React from 'react'
import { Fade } from "react-awesome-reveal"

export default function Footer() {
    return (
        <footer className='bck_red'>
            {/* Footer component, used to display the footer content of the website */}
            <Fade triggerOnce delay={500}>
                <div className='font_righteous footer_logo_venue'>The venue</div>
                <div className='footer_copyright'>
                    The venue 2023 all rights reserved
                </div>
            </Fade>
        </footer>
    )
}
