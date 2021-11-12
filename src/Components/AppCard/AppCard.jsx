import React from "react";

import './AppCard.css'

const AppCard = (props) => {
    return (
        <div className={`${props.className || ''} app-card`}>
            <h3 className="app-card__title">{props.title}</h3>
            <p className="app-card__description">{props.description}</p>
            <div className="app-card__btn">
                <button className="btn btn--menu">View</button>
                <button className="btn btn--menu">Change color</button>
                <button className="btn btn--menu">Edit</button>
            </div>
        </div>
    )
}

export default AppCard