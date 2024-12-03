import React from "react"
import { Card } from "./Card.jsx"

export const CardList = () => {
    return (
        <div className="row gap-4 justify-content-center px-5">
            <Card 
                imageUrl={"https://randomuser.me/api/portraits/men/58.jpg"} 
                imageAlt={"Clarence Nichols"} 
                title={"Clarence Nichols"}
                text={"Hey, this is my profile"}
                buttonUrl={"https://www.instagram.com"}
                buttonText={"Go to my insta"}
            />
            <Card 
                imageUrl={"https://randomuser.me/api/portraits/men/20.jpg"} 
                imageAlt={"Gabe Robinson"} 
                title={"Gabe Robinson"}
                text={"Using this site to spam my web page"}
                buttonUrl={"https://getbootstrap.com"}
                buttonText={"Go to my web page"}
            />
            <Card 
                imageUrl={"https://randomuser.me/api/portraits/women/85.jpg"} 
                imageAlt={"Jamie Collins"} 
                title={"Jamie Collins"}
                text={"Hey, check this out"}
                buttonUrl={"https://facebook.com"}
                buttonText={"You won't believe it"}/>
            <Card 
                imageUrl={"https://randomuser.me/api/portraits/women/84.jpg"} 
                imageAlt={"Beth Little"} 
                title={"Beth Little"}
                text={"I made this, go take a look"}
                buttonUrl={"https://x.com"}
                buttonText={"This is amazing"}
            />
        </div>
    )
}