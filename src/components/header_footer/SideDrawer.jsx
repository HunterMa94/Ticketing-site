import React from "react";
import { scroller } from 'react-scroll'

import { Drawer, List, ListItem } from "@mui/material";


const SideDrawer = (props) => {
    const links = [
        { where: "featured", value: "To top" },
        { where: "venuenfo", value: "Venue IFO" },
        { where: "highlights", value: "Highlights" },
        { where: "pricing", value: "Pricing" },
        { where: "location", value: "Location" },
    ]

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        })
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"  // Drawer with anchor="right" to slide in from the right side of the page.
            open={props.open}  //open drawer
            onClose={() => props.onClose(false)}  //close drawer
        >
            <List component="nav">
                {
                    // Render a list of links based on the provided 'links' array.
                    links.map(item => (
                        <ListItem button onClick={() => scrollToElement(item.where)} key={item.where}>
                            {item.value}
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    )
}

export default SideDrawer;