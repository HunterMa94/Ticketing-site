import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SideDrawer from "./SideDrawer"

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false)

    //toggleDrawer function is used to open drawer
    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    }

    /* The handleScroll function is used to handle the scroll event 
    and control the visibility of the Header based on the scroll position. */
    const handleScroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY > 0) {
            setHeaderShow(true);
        } else {
            setHeaderShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])



    return (
        <AppBar
            position="fixed"
            style={{
                /* 
                The backgroundColor style is conditionally set based on the value of the headerShow state.
                If headerShow is true, the background color will be "#2f2f2f", indicating an opaque background color.
                If headerShow is false, the background color will be "transparent", indicating a transparent background. 
                */
                backgroundColor: headerShow ? "#2f2f2f" : "transparent",
                boxShadow: "none",
                padding: "10px 0px"
            }}
        >
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">The venue</div>
                    <div className="header_logo_title">Musical Event</div>
                </div>

                {/* top right nav button */}
                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={() => toggleDrawer(true)}
                >
                    <MenuIcon />

                </IconButton>

                {/* drawer container */}
                <SideDrawer
                    open={drawerOpen}
                    onClose={(value) => toggleDrawer(value)}  // onClose is used to close drawer
                />
            </Toolbar>
        </AppBar>
    )
}

export default Header;