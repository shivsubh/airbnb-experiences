import React from "react";

export default function Card(props) {
    console.log(props.openSpots);
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText="ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src="../images/star.png" alt="star" className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price} / person</span></p>
        </div>
    )
}